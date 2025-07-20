import React, { useState } from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight, Play, Plus, Star } from "lucide-react";

interface Movie {
  id: number;
  title: string;
  image: string;
  rating: number;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

const RowContainer = styled.div`
  margin: 2rem 0;
  padding: 0 4%;

  @media (max-width: 768px) {
    margin: 1.5rem 0;
    padding: 0 3%;
  }

  @media (max-width: 480px) {
    margin: 1rem 0;
    padding: 0 2%;
  }
`;

const RowTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #e2e8f0;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
  }
`;

const RowContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const MovieList = styled.div<{ slideOffset: number }>`
  display: flex;
  gap: 0.5rem;
  transition: transform 0.3s ease;
  transform: translateX(${(props) => props.slideOffset}px);
`;

const MovieCard = styled.div<{ isHovered: boolean }>`
  position: relative;
  min-width: 200px;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${(props) => (props.isHovered ? "scale(1.08) translateY(-10px)" : "scale(1)")};
  z-index: ${(props) => (props.isHovered ? 10 : 1)};
  box-shadow: ${(props) => 
    props.isHovered 
      ? "0 20px 40px rgba(0, 0, 0, 0.4)" 
      : "0 4px 12px rgba(0, 0, 0, 0.2)"
  };

  &:hover {
    transform: scale(1.08) translateY(-10px);
    z-index: 10;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    min-width: 150px;
    height: 225px;
  }

  @media (max-width: 480px) {
    min-width: 120px;
    height: 180px;
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
  
  &.error {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.8rem;
    text-align: center;
    padding: 1rem;
  }
`;

const MovieOverlay = styled.div<{ isHovered: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
  opacity: ${(props) => (props.isHovered ? 1 : 0)};
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
`;

const MovieTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
`;

const MovieRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #fbbf24;
  font-size: 0.9rem;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const ActionButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  transition: all 0.3s ease;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: scale(1.15);
    border-color: rgba(255, 255, 255, 0.4);
  }

  &.play {
    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
    border-color: rgba(255, 107, 107, 0.3);

    &:hover {
      background: linear-gradient(135deg, #ee5a24 0%, #ff6b6b 100%);
      transform: scale(1.15);
      border-color: rgba(255, 107, 107, 0.5);
    }
  }
`;

const NavigationButton = styled.button<{ direction: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${(props) => props.direction}: -20px;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(15, 20, 25, 0.8);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 5;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(59, 130, 246, 0.8);
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;

    &:hover {
      background: rgba(15, 20, 25, 0.8);
      transform: translateY(-50%) scale(1);
    }
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    ${(props) => props.direction}: -15px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    ${(props) => props.direction}: -10px;
  }
`;

const MovieRow: React.FC<MovieRowProps> = ({ title, movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredMovie, setHoveredMovie] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const moviesPerView = 6;
  const maxIndex = Math.max(0, movies.length - moviesPerView);

  const slideOffset = -currentIndex * (200 + 8); // 200px width + 8px gap

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleImageError = (movieId: number) => {
    setImageErrors(prev => new Set(prev).add(movieId));
  };

  return (
    <RowContainer>
      <RowTitle>{title}</RowTitle>
      <RowContent>
        <NavigationButton
          direction="left"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <ChevronLeft size={20} />
        </NavigationButton>

        <MovieList slideOffset={slideOffset}>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              isHovered={hoveredMovie === movie.id}
              onMouseEnter={() => setHoveredMovie(movie.id)}
              onMouseLeave={() => setHoveredMovie(null)}
            >
              <MovieImage 
                src={movie.image} 
                alt={movie.title}
                onError={() => handleImageError(movie.id)}
                className={imageErrors.has(movie.id) ? 'error' : ''}
              />
              {imageErrors.has(movie.id) && (
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'white',
                  fontSize: '0.8rem',
                  textAlign: 'center',
                  zIndex: 1
                }}>
                  {movie.title}
                </div>
              )}
              <MovieOverlay isHovered={hoveredMovie === movie.id}>
                <MovieTitle>{movie.title}</MovieTitle>
                <MovieRating>
                  <Star size={14} fill="#fbbf24" />
                  {movie.rating}
                </MovieRating>
                <ActionButtons>
                  <ActionButton className="play">
                    <Play size={16} fill="white" />
                  </ActionButton>
                  <ActionButton>
                    <Plus size={16} />
                  </ActionButton>
                </ActionButtons>
              </MovieOverlay>
            </MovieCard>
          ))}
        </MovieList>

        <NavigationButton
          direction="right"
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
        >
          <ChevronRight size={20} />
        </NavigationButton>
      </RowContent>
    </RowContainer>
  );
};

export default MovieRow;
