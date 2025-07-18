import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Code,
  Smartphone,
  Brain,
  Zap,
  TrendingUp,
  Users,
  Award,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import SkillIcons from "../components/SkillIcons";

const HomeContainer = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background};
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 0 2rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(0, 212, 255, 0.1) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
  z-index: 1;
`;

const Greeting = styled(motion.div)`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Name = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: ${(props) => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
`;

const Title = styled(motion.h2)`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: 2rem;
  font-weight: 400;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const CTAButton = styled(motion.button)`
  background: ${(props) => props.theme.colors.gradient};
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 212, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(0, 212, 255, 0.4);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 4rem;
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

const StatsSection = styled.section`
  padding: 6rem 2rem;
  background: ${(props) => props.theme.colors.surface};
`;

const StatsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: ${(props) => props.theme.colors.background};
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 1rem;
`;

const HighlightsSection = styled.section`
  padding: 6rem 2rem;
`;

const HighlightsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 1rem;
  background: ${(props) => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 1.2rem;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const HighlightCard = styled(motion.div)`
  background: ${(props) => props.theme.colors.surface};
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

const HighlightIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: ${(props) => props.theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: white;
`;

const HighlightTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.text};
`;

const HighlightDescription = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 1.6;
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

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  opacity: 0.6;
`;

function HomePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const stats = [
    { number: "4+", label: "Years Experience", icon: Award },
    { number: "90%", label: "User Satisfaction", icon: Users },
    { number: "95%", label: "Interview Completion", icon: TrendingUp },
    { number: "40%", label: "Performance Improvement", icon: Zap },
  ];

  const highlights = [
    {
      icon: Brain,
      title: "AI Interview Platform",
      description:
        "LLM 기반 실시간 음성 인터뷰 시스템 구축. OpenAI GPT, Claude API 연동으로 자연스러운 AI 대화 구현.",
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Development",
      description:
        "React Native WebView 기반 하이브리드 앱 개발. Android Bridge API로 네이티브 앱과 WebView 간 양방향 통신.",
    },
    {
      icon: Code,
      title: "Modern Frontend Stack",
      description:
        "React 18, TypeScript, Zustand를 활용한 고성능 웹 애플리케이션 개발. 실시간 상태 관리 및 최적화.",
    },
  ];

  return (
    <HomeContainer ref={containerRef}>
      <HeroSection>
        <FloatingElements>
          {[...Array(20)].map((_, i) => (
            <FloatingElement
              key={i}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </FloatingElements>

        <HeroContent>
          <Greeting
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            안녕하세요, 저는
          </Greeting>

          <Name
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            EJ
          </Name>

          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AI 기반 프론트엔드 개발자
          </Title>

          <Description
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            4년간의 개발 경험을 바탕으로 프론트엔드부터 백엔드, 클라우드까지
            다양한 기술 스택으로 사용자 중심의 웹 애플리케이션을 개발하는
            개발자입니다.
          </Description>

          <CTAButton
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            프로젝트 보기 <ArrowRight size={20} />
          </CTAButton>

          <SocialLinks
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <SocialLink
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </SocialLink>
            <SocialLink
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </SocialLink>
            <SocialLink href="mailto:contact@ej.dev">
              <Mail size={20} />
            </SocialLink>
          </SocialLinks>
        </HeroContent>
      </HeroSection>

      <StatsSection>
        <StatsContainer>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            주요 성과
          </SectionTitle>

          <StatsGrid>
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <StatIcon>
                  <stat.icon size={24} />
                </StatIcon>
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>
        </StatsContainer>
      </StatsSection>

      <HighlightsSection>
        <HighlightsContainer>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            핵심 역량
          </SectionTitle>

          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            프론트엔드부터 백엔드, 클라우드까지 다양한 기술 스택으로 솔루션을
            제공합니다
          </SectionSubtitle>

          <HighlightsGrid>
            {highlights.map((highlight, index) => (
              <HighlightCard
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <HighlightIcon>
                  <highlight.icon size={24} />
                </HighlightIcon>
                <HighlightTitle>{highlight.title}</HighlightTitle>
                <HighlightDescription>
                  {highlight.description}
                </HighlightDescription>
              </HighlightCard>
            ))}
          </HighlightsGrid>
        </HighlightsContainer>
      </HighlightsSection>
    </HomeContainer>
  );
}

export default HomePage;
