import React, { useEffect, useCallback, useState, useRef } from "react";
import styled from "styled-components";
import { GameState, Cell } from "../App";

const BoardContainer = styled.div`
  display: inline-block;
  background: #c0c0c0;
  border: 3px solid;
  border-color: #808080 #ffffff #ffffff #808080;
  padding: 4px;
`;

const BoardGrid = styled.div<{ cols: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols}, 24px);
  gap: 0;
  background: #c0c0c0;
`;

const CellButton = styled.button<{
  isRevealed: boolean;
  isFlagged: boolean;
  isQuestioned: boolean;
  neighborCarrots: number;
  isCarrot: boolean;
  gameOver: boolean;
}>`
  width: 24px;
  height: 24px;
  border: 1px solid;
  border-color: ${(props) =>
    props.isRevealed ? "#808080" : "#ffffff #808080 #808080 #ffffff"};
  background: ${(props) => {
    if (props.isRevealed) {
      if (props.isCarrot) return "#ff6b35";
      return "#c0c0c0";
    }
    return "#c0c0c0";
  }};
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s ease;
  color: ${(props) => {
    if (!props.isRevealed) return "transparent";
    if (props.isCarrot) return "#000000";
    const colors = [
      "",
      "#0000ff",
      "#008200",
      "#ff0000",
      "#000084",
      "#840000",
      "#008284",
      "#840084",
      "#757575",
    ];
    return colors[props.neighborCarrots] || "#000000";
  }};

  &:active {
    ${(props) =>
      !props.isRevealed &&
      `
      border-color: #808080 #ffffff #ffffff #808080;
      transform: translateY(1px);
    `}
  }

  &:hover {
    ${(props) =>
      !props.isRevealed &&
      `
      background: #d0d0d0;
    `}
  }

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }
`;

const MobileControls = styled.div`
  display: none;
  margin-top: 10px;
  gap: 10px;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    display: flex;
  }
`;

const ControlButton = styled.button<{ isActive?: boolean }>`
  background: ${(props) => (props.isActive ? "#000080" : "#c0c0c0")};
  color: ${(props) => (props.isActive ? "#ffffff" : "#000000")};
  border: 2px solid;
  border-color: #808080 #ffffff #ffffff #808080;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.1s ease;

  &:active {
    border-color: #808080 #ffffff #ffffff #808080;
    transform: translateY(1px);
  }

  &:hover {
    background: ${(props) => (props.isActive ? "#000080" : "#d0d0d0")};
  }
`;

const LongPressIndicator = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px;
  border-radius: 8px;
  font-size: 16px;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 10px;
`;

interface GameBoardProps {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  difficulty: "beginner" | "intermediate" | "expert";
}

const DIFFICULTY_LEVELS = {
  beginner: { rows: 9, cols: 9, mines: 10 },
  intermediate: { rows: 16, cols: 16, mines: 40 },
  expert: { rows: 16, cols: 30, mines: 99 },
};

const GameBoard: React.FC<GameBoardProps> = ({
  gameState,
  setGameState,
  difficulty,
}) => {
  const { rows, cols } = DIFFICULTY_LEVELS[difficulty];
  const [controlMode, setControlMode] = useState<
    "normal" | "flag" | "question"
  >("normal");
  const [showLongPressIndicator, setShowLongPressIndicator] = useState(false);
  const longPressTimerRef = useRef<NodeJS.Timeout | null>(null);
  const longPressCellRef = useRef<{ row: number; col: number } | null>(null);

  // 당근 배치 함수
  const placeCarrots = useCallback(
    (firstRow: number, firstCol: number) => {
      const newBoard = [...gameState.board];
      const carrots = DIFFICULTY_LEVELS[difficulty].mines;
      let placedCarrots = 0;

      while (placedCarrots < carrots) {
        const row = Math.floor(Math.random() * rows);
        const col = Math.floor(Math.random() * cols);

        // 첫 번째 클릭한 셀과 그 주변에는 당근을 배치하지 않음
        if (
          !newBoard[row][col].isCarrot &&
          (Math.abs(row - firstRow) > 1 || Math.abs(col - firstCol) > 1)
        ) {
          newBoard[row][col].isCarrot = true;
          placedCarrots++;
        }
      }

      // 이웃 당근 수 계산
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (!newBoard[i][j].isCarrot) {
            let count = 0;
            for (let di = -1; di <= 1; di++) {
              for (let dj = -1; dj <= 1; dj++) {
                const ni = i + di;
                const nj = j + dj;
                if (
                  ni >= 0 &&
                  ni < rows &&
                  nj >= 0 &&
                  nj < cols &&
                  newBoard[ni][nj].isCarrot
                ) {
                  count++;
                }
              }
            }
            newBoard[i][j].neighborCarrots = count;
          }
        }
      }

      return newBoard;
    },
    [gameState.board, difficulty, rows, cols]
  );

  // 3x3 범위 확장 함수
  const expand3x3 = useCallback(
    (row: number, col: number) => {
      if (
        gameState.gameOver ||
        gameState.gameWon ||
        !gameState.board[row][col].isRevealed ||
        gameState.board[row][col].neighborCarrots === 0
      ) {
        return;
      }

      setGameState((prevState) => {
        const newBoard = [...prevState.board];
        let flagCount = 0;

        // 주변 3x3 범위의 깃발 수 확인
        for (let di = -1; di <= 1; di++) {
          for (let dj = -1; dj <= 1; dj++) {
            const ni = row + di;
            const nj = col + dj;
            if (
              ni >= 0 &&
              ni < rows &&
              nj >= 0 &&
              nj < cols &&
              newBoard[ni][nj].isFlagged
            ) {
              flagCount++;
            }
          }
        }

        // 깃발 수가 이웃 당근 수와 같으면 확장
        if (flagCount === newBoard[row][col].neighborCarrots) {
          for (let di = -1; di <= 1; di++) {
            for (let dj = -1; dj <= 1; dj++) {
              const ni = row + di;
              const nj = col + dj;
              if (
                ni >= 0 &&
                ni < rows &&
                nj >= 0 &&
                nj < cols &&
                !newBoard[ni][nj].isRevealed &&
                !newBoard[ni][nj].isFlagged
              ) {
                newBoard[ni][nj].isRevealed = true;

                // 당근을 클릭한 경우 게임 오버
                if (newBoard[ni][nj].isCarrot) {
                  for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < cols; j++) {
                      if (newBoard[i][j].isCarrot) {
                        newBoard[i][j].isRevealed = true;
                      }
                    }
                  }
                  return {
                    ...prevState,
                    board: newBoard,
                    gameOver: true,
                    endTime: Date.now(),
                  };
                }

                // 빈 셀인 경우 추가 확장
                if (newBoard[ni][nj].neighborCarrots === 0) {
                  const revealEmptyCells = (r: number, c: number) => {
                    for (let dr = -1; dr <= 1; dr++) {
                      for (let dc = -1; dc <= 1; dc++) {
                        const nr = r + dr;
                        const nc = c + dc;
                        if (
                          nr >= 0 &&
                          nr < rows &&
                          nc >= 0 &&
                          nc < cols &&
                          !newBoard[nr][nc].isRevealed &&
                          !newBoard[nr][nc].isFlagged
                        ) {
                          newBoard[nr][nc].isRevealed = true;
                          if (newBoard[nr][nc].neighborCarrots === 0) {
                            revealEmptyCells(nr, nc);
                          }
                        }
                      }
                    }
                  };
                  revealEmptyCells(ni, nj);
                }
              }
            }
          }
        }

        // 승리 조건 확인
        let revealedCount = 0;
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            if (newBoard[i][j].isRevealed && !newBoard[i][j].isCarrot) {
              revealedCount++;
            }
          }
        }

        const totalCells = rows * cols;
        const isWon =
          revealedCount === totalCells - DIFFICULTY_LEVELS[difficulty].mines;

        return {
          ...prevState,
          board: newBoard,
          gameWon: isWon,
          endTime: isWon ? Date.now() : prevState.endTime,
        };
      });
    },
    [gameState, setGameState, rows, cols, difficulty]
  );

  // 셀 클릭 처리
  const handleCellClick = useCallback(
    (row: number, col: number) => {
      if (
        gameState.gameOver ||
        gameState.gameWon ||
        gameState.board[row][col].isFlagged ||
        gameState.board[row][col].isQuestioned
      ) {
        return;
      }

      // 컨트롤 모드에 따른 처리
      if (controlMode === "flag") {
        handleFlagClick(row, col);
        return;
      } else if (controlMode === "question") {
        handleQuestionClick(row, col);
        return;
      }

      setGameState((prevState) => {
        const newBoard = [...prevState.board];
        const cell = newBoard[row][col];

        // 첫 번째 클릭인 경우 당근 배치
        if (!prevState.startTime) {
          const boardWithCarrots = placeCarrots(row, col);
          newBoard[row][col] = boardWithCarrots[row][col];
          cell.isRevealed = true;
        } else {
          cell.isRevealed = true;
        }

        // 당근을 클릭한 경우 게임 오버
        if (cell.isCarrot) {
          // 모든 당근 공개
          for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
              if (newBoard[i][j].isCarrot) {
                newBoard[i][j].isRevealed = true;
              }
            }
          }
          return {
            ...prevState,
            board: newBoard,
            gameOver: true,
            endTime: Date.now(),
          };
        }

        // 빈 셀인 경우 주변 셀들도 자동으로 공개
        if (cell.neighborCarrots === 0) {
          const revealEmptyCells = (r: number, c: number) => {
            for (let di = -1; di <= 1; di++) {
              for (let dj = -1; dj <= 1; dj++) {
                const ni = r + di;
                const nj = c + dj;
                if (
                  ni >= 0 &&
                  ni < rows &&
                  nj >= 0 &&
                  nj < cols &&
                  !newBoard[ni][nj].isRevealed &&
                  !newBoard[ni][nj].isFlagged
                ) {
                  newBoard[ni][nj].isRevealed = true;
                  if (newBoard[ni][nj].neighborCarrots === 0) {
                    revealEmptyCells(ni, nj);
                  }
                }
              }
            }
          };
          revealEmptyCells(row, col);
        }

        // 승리 조건 확인
        let revealedCount = 0;
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            if (newBoard[i][j].isRevealed && !newBoard[i][j].isCarrot) {
              revealedCount++;
            }
          }
        }

        const totalCells = rows * cols;
        const isWon =
          revealedCount === totalCells - DIFFICULTY_LEVELS[difficulty].mines;

        return {
          ...prevState,
          board: newBoard,
          gameWon: isWon,
          endTime: isWon ? Date.now() : prevState.endTime,
        };
      });
    },
    [gameState, setGameState, placeCarrots, rows, cols, difficulty, controlMode]
  );

  // 깃발 클릭 처리
  const handleFlagClick = useCallback(
    (row: number, col: number) => {
      if (
        gameState.gameOver ||
        gameState.gameWon ||
        gameState.board[row][col].isRevealed
      ) {
        return;
      }

      setGameState((prevState) => {
        const newBoard = [...prevState.board];
        const cell = newBoard[row][col];

        if (cell.isQuestioned) {
          cell.isQuestioned = false;
        }
        cell.isFlagged = !cell.isFlagged;

        return {
          ...prevState,
          board: newBoard,
          flagCount: prevState.flagCount + (cell.isFlagged ? 1 : -1),
        };
      });
    },
    [gameState, setGameState]
  );

  // 물음표 클릭 처리
  const handleQuestionClick = useCallback(
    (row: number, col: number) => {
      if (
        gameState.gameOver ||
        gameState.gameWon ||
        gameState.board[row][col].isRevealed
      ) {
        return;
      }

      setGameState((prevState) => {
        const newBoard = [...prevState.board];
        const cell = newBoard[row][col];

        if (cell.isFlagged) {
          cell.isFlagged = false;
          return {
            ...prevState,
            board: newBoard,
            flagCount: prevState.flagCount - 1,
          };
        }

        cell.isQuestioned = !cell.isQuestioned;
        return {
          ...prevState,
          board: newBoard,
        };
      });
    },
    [gameState, setGameState]
  );

  // 우클릭으로 깃발 설정
  const handleRightClick = useCallback(
    (e: React.MouseEvent, row: number, col: number) => {
      e.preventDefault();
      if (
        gameState.gameOver ||
        gameState.gameWon ||
        gameState.board[row][col].isRevealed
      ) {
        return;
      }

      setGameState((prevState) => {
        const newBoard = [...prevState.board];
        const cell = newBoard[row][col];

        if (cell.isQuestioned) {
          cell.isQuestioned = false;
        }
        cell.isFlagged = !cell.isFlagged;

        return {
          ...prevState,
          board: newBoard,
          flagCount: prevState.flagCount + (cell.isFlagged ? 1 : -1),
        };
      });
    },
    [gameState, setGameState]
  );

  // 길게 누르기 시작
  const handleMouseDown = useCallback(
    (row: number, col: number) => {
      if (
        gameState.gameOver ||
        gameState.gameWon ||
        !gameState.board[row][col].isRevealed ||
        gameState.board[row][col].neighborCarrots === 0
      ) {
        return;
      }

      longPressCellRef.current = { row, col };
      setShowLongPressIndicator(true);

      longPressTimerRef.current = setTimeout(() => {
        if (longPressCellRef.current) {
          expand3x3(longPressCellRef.current.row, longPressCellRef.current.col);
          setShowLongPressIndicator(false);
          longPressCellRef.current = null;
        }
      }, 1000);
    },
    [gameState, expand3x3]
  );

  // 길게 누르기 취소
  const handleMouseUp = useCallback(() => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
    setShowLongPressIndicator(false);
    longPressCellRef.current = null;
  }, []);

  // 게임 시작 시간 설정
  useEffect(() => {
    if (!gameState.startTime && !gameState.gameOver && !gameState.gameWon) {
      const hasRevealedCells = gameState.board.some((row) =>
        row.some((cell) => cell.isRevealed)
      );
      if (hasRevealedCells) {
        setGameState((prev) => ({ ...prev, startTime: Date.now() }));
      }
    }
  }, [
    gameState.board,
    gameState.startTime,
    gameState.gameOver,
    gameState.gameWon,
    setGameState,
  ]);

  const getCellContent = (cell: Cell) => {
    if (cell.isFlagged) return "🚩";
    if (cell.isQuestioned) return "❓";
    if (!cell.isRevealed) return "";
    if (cell.isCarrot) return "🥕";
    if (cell.neighborCarrots === 0) return "";
    return cell.neighborCarrots.toString();
  };

  return (
    <>
      <BoardContainer>
        <BoardGrid cols={cols}>
          {gameState.board.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <CellButton
                key={`${rowIndex}-${colIndex}`}
                isRevealed={cell.isRevealed}
                isFlagged={cell.isFlagged}
                isQuestioned={cell.isQuestioned}
                neighborCarrots={cell.neighborCarrots}
                isCarrot={cell.isCarrot}
                gameOver={gameState.gameOver}
                onClick={() => handleCellClick(rowIndex, colIndex)}
                onContextMenu={(e) => handleRightClick(e, rowIndex, colIndex)}
                onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={() => handleMouseDown(rowIndex, colIndex)}
                onTouchEnd={handleMouseUp}
              >
                {getCellContent(cell)}
              </CellButton>
            ))
          )}
        </BoardGrid>
      </BoardContainer>

      <MobileControls>
        <ControlButton
          isActive={controlMode === "normal"}
          onClick={() => setControlMode("normal")}
        >
          👆 일반
        </ControlButton>
        <ControlButton
          isActive={controlMode === "flag"}
          onClick={() => setControlMode("flag")}
        >
          🚩 깃발
        </ControlButton>
        <ControlButton
          isActive={controlMode === "question"}
          onClick={() => setControlMode("question")}
        >
          ❓ 물음표
        </ControlButton>
      </MobileControls>

      {showLongPressIndicator && (
        <LongPressIndicator>
          <span>⏱️</span>
          <span>길게 누르는 중... (3x3 확장)</span>
        </LongPressIndicator>
      )}
    </>
  );
};

export default GameBoard;
