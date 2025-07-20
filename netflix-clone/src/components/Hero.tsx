import React from "react";
import styled from "styled-components";
import { Play, Info, Star } from "lucide-react";

const HeroContainer = styled.section`
  position: relative;
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 70vh;
    min-height: 500px;
  }

  @media (max-width: 480px) {
    height: 60vh;
    min-height: 400px;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
      135deg,
      rgba(15, 20, 25, 0.8) 0%,
      rgba(26, 35, 50, 0.6) 50%,
      rgba(45, 55, 72, 0.4) 100%
    ),
    url("https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1920&h=1080&fit=crop&q=80")
      center/cover;
  z-index: -1;
  animation: zoomIn 20s ease-in-out infinite alternate;

  @keyframes zoomIn {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    rgba(15, 20, 25, 0.9) 0%,
    rgba(15, 20, 25, 0.7) 30%,
    rgba(15, 20, 25, 0.3) 60%,
    rgba(15, 20, 25, 0.1) 100%
  );
  z-index: -1;
`;

const HeroContent = styled.div`
  padding: 0 4%;
  max-width: 600px;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 3%;
    max-width: 500px;
  }

  @media (max-width: 480px) {
    padding: 0 2%;
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
  background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 50%, #45b7d1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
  animation: slideInUp 1s ease-out;

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #e2e8f0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: #cbd5e1;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fbbf24;
`;

const Year = styled.span`
  color: #94a3b8;
`;

const Duration = styled.span`
  color: #94a3b8;
`;

const Genre = styled.span`
  color: #94a3b8;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const PlayButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  color: white;
  padding: 15px 30px;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 700;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
  border: none;
  cursor: pointer;

  &:hover {
    background: linear-gradient(135deg, #ee5a24 0%, #ff6b6b 100%);
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 12px 35px rgba(255, 107, 107, 0.6);
  }

  &:active {
    transform: translateY(-1px) scale(1.02);
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 1rem;
  }
`;

const InfoButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
`;

const FloatingBubble = styled.div<{
  delay: number;
  duration: number;
  left: string;
}>`
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(59, 130, 246, 0.6);
  border-radius: 50%;
  animation: float ${(props) => props.duration}s linear infinite;
  animation-delay: ${(props) => props.delay}s;
  left: ${(props) => props.left};

  @keyframes float {
    0% {
      transform: translateY(100vh) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(-100px) scale(1);
      opacity: 0;
    }
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroBackground />
      <GradientOverlay />

      <FloatingElements>
        {[...Array(20)].map((_, i) => (
          <FloatingBubble
            key={i}
            delay={Math.random() * 10}
            duration={8 + Math.random() * 4}
            left={`${Math.random() * 100}%`}
          />
        ))}
      </FloatingElements>

      <HeroContent>
        <Title>블루 오션의 비밀</Title>
        <Description>
          깊은 바다 속에서 펼쳐지는 신비로운 모험. 인간이 아직 탐험하지 못한
          심해의 비밀을 밝혀내는 놀라운 여정을 경험하세요.
        </Description>

        <MetaInfo>
          <Rating>
            <Star size={16} fill="#fbbf24" />
            4.8
          </Rating>
          <Year>2024</Year>
          <Duration>2시간 15분</Duration>
          <Genre>어드벤처 • 드라마 • 판타지</Genre>
        </MetaInfo>

        <ButtonGroup>
          <PlayButton>
            <Play size={20} fill="white" />
            재생
          </PlayButton>
          <InfoButton>
            <Info size={20} />
            상세 정보
          </InfoButton>
        </ButtonGroup>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
