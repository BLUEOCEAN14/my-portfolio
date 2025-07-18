import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Search, Bell, User, Menu } from "lucide-react";

const HeaderContainer = styled.header<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0 4%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) =>
    props.scrolled
      ? "linear-gradient(180deg, rgba(15,20,25,0.95) 0%, rgba(15,20,25,0.8) 100%)"
      : "linear-gradient(180deg, rgba(15,20,25,0.7) 0%, transparent 100%)"};
  backdrop-filter: ${(props) => (props.scrolled ? "blur(10px)" : "none")};
  transition: all 0.3s ease;
  transform: ${(props) =>
    props.scrolled ? "translateY(0)" : "translateY(-10px)"};
  opacity: ${(props) => (props.scrolled ? 1 : 0.9)};

  @media (max-width: 768px) {
    padding: 0 2%;
    height: 60px;
  }

  @media (max-width: 480px) {
    padding: 0 1%;
    height: 55px;
  }
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #3b82f6;
  text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(59, 130, 246, 0.3),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    color: #60a5fa;
    text-shadow: 0 0 30px rgba(96, 165, 250, 0.7);
    transform: scale(1.05);
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #e2e8f0;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 8px 12px;
  border-radius: 6px;

  &:hover {
    color: #3b82f6;
    background: rgba(59, 130, 246, 0.1);
    transform: translateY(-2px);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #3b82f6, #60a5fa);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 80%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at center,
      rgba(59, 130, 246, 0.1) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 6px;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const IconButton = styled.button`
  color: #e2e8f0;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(
      circle,
      rgba(59, 130, 246, 0.2) 0%,
      transparent 70%
    );
    transition: all 0.3s ease;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }

  &:hover {
    color: #3b82f6;
    background: rgba(59, 130, 246, 0.1);
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.2);
  }

  &:hover::before {
    width: 100%;
    height: 100%;
  }

  &:active {
    transform: scale(0.95) rotate(0deg);
  }

  @media (max-width: 768px) {
    padding: 6px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }

  &.mobile-menu {
    display: none;

    @media (max-width: 768px) {
      display: flex;
    }
  }
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 8px 16px 8px 40px;
  color: white;
  font-size: 14px;
  width: 200px;
  transition: all 0.3s ease;
  position: relative;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
    transition: color 0.3s ease;
  }

  &:focus {
    outline: none;
    border-color: #3b82f6;
    background: rgba(255, 255, 255, 0.15);
    width: 250px;
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
    transform: scale(1.02);
  }

  &:focus::placeholder {
    color: rgba(59, 130, 246, 0.7);
  }

  &:hover {
    border-color: rgba(59, 130, 246, 0.5);
    background: rgba(255, 255, 255, 0.12);
  }

  @media (max-width: 768px) {
    width: 150px;
    font-size: 13px;
    padding: 6px 12px 6px 35px;
  }

  @media (max-width: 480px) {
    width: 120px;
    font-size: 12px;
    padding: 5px 10px 5px 30px;
  }

  @media (max-width: 480px) {
    &:focus {
      width: 140px;
    }
  }
`;

const SearchIcon = styled(Search)`
  position: absolute;
  left: 12px;
  color: rgba(255, 255, 255, 0.6);
  pointer-events: none;

  @media (max-width: 768px) {
    left: 10px;
    width: 16px;
    height: 16px;
  }

  @media (max-width: 480px) {
    left: 8px;
    width: 14px;
    height: 14px;
  }
`;

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
    };

    // 스크롤 이벤트에 throttle 적용
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  return (
    <HeaderContainer scrolled={scrolled}>
      <Logo>NETFLIX</Logo>

      <Nav>
        <NavLink href="#home">홈</NavLink>
        <NavLink href="#tv">TV 프로그램</NavLink>
        <NavLink href="#movies">영화</NavLink>
        <NavLink href="#new">신작</NavLink>
        <NavLink href="#mylist">내가 찜한 콘텐츠</NavLink>
      </Nav>

      <RightSection>
        <SearchContainer>
          <SearchIcon size={18} />
          <SearchInput placeholder="제목, 사람, 장르" />
        </SearchContainer>

        <IconButton>
          <Bell size={20} />
        </IconButton>

        <IconButton>
          <User size={20} />
        </IconButton>

        <IconButton className="mobile-menu">
          <Menu size={20} />
        </IconButton>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
