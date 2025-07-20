# BBO World - React Portfolio Projects

이 저장소는 React와 TypeScript로 개발된 4개의 프로젝트를 포함하고 있습니다.

## 📁 프로젝트 목록

### 1. Find Carrot Game (포트: 3000)
- **설명**: React와 TypeScript로 개발한 당근 찾기 게임
- **기술**: React, TypeScript, Styled Components, Framer Motion
- **실행**: `cd find-carrot && npm start`

### 2. Netflix Clone (포트: 3001)
- **설명**: Netflix UI/UX를 참고한 영화 스트리밍 플랫폼 클론
- **기술**: React, TypeScript, Styled Components, Framer Motion
- **실행**: `cd netflix-clone && npm start`

### 3. Rabris (Tetris Clone) (포트: 3002)
- **설명**: 클래식 테트리스 게임을 React로 재구현
- **기술**: React, TypeScript, Custom Hooks, Game Logic
- **실행**: `cd rabris && npm start`

### 4. My Portfolio (포트: 3100)
- **설명**: 개인 포트폴리오 웹사이트 (다른 3개 프로젝트 링크 포함)
- **기술**: React, TypeScript, Styled Components, Framer Motion
- **실행**: `cd my-portfolio && npm start`

## 🚀 빠른 시작

### 모든 프로젝트 한 번에 실행

#### Windows (PowerShell/CMD)
```bash
./start-all-projects.bat
```

#### Git Bash
```bash
chmod +x start-all-projects.sh
./start-all-projects.sh
```

### 개별 프로젝트 실행

각 프로젝트 폴더에서:
```bash
npm install  # 의존성 설치 (처음 한 번만)
npm start    # 개발 서버 실행
```

## 🌐 접속 URL

모든 프로젝트가 실행되면 다음 URL로 접속할 수 있습니다:

- **Find Carrot Game**: http://localhost:3000
- **Netflix Clone**: http://localhost:3001
- **Rabris (Tetris)**: http://localhost:3002
- **My Portfolio**: http://localhost:3100

## 📱 My Portfolio에서 다른 프로젝트 확인

My Portfolio (http://localhost:3100)의 **Projects** 페이지에서 다른 3개 프로젝트를 확인할 수 있습니다:

1. **GitHub 링크**: 각 프로젝트의 소스 코드 확인
2. **라이브 데모**: 해당 프로젝트로 바로 이동
3. **자세히 보기**: 프로젝트 상세 정보 모달

## 🛠️ 기술 스택

- **Frontend**: React 19, TypeScript
- **Styling**: Styled Components
- **Animation**: Framer Motion
- **Routing**: React Router DOM
- **State Management**: Zustand (Portfolio)
- **Build Tool**: Create React App

## 📝 개발 환경 설정

1. Node.js 18+ 설치
2. 각 프로젝트 폴더에서 `npm install` 실행
3. `npm start`로 개발 서버 실행

## 🔧 포트 변경

각 프로젝트의 `package.json`에서 포트를 변경할 수 있습니다:

```json
{
  "scripts": {
    "start": "set PORT=원하는포트번호 && react-scripts start"
  }
}
```

## 📄 라이선스

MIT License 