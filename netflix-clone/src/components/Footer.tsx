import React from "react";
import styled from "styled-components";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const FooterContainer = styled.footer`
  background: linear-gradient(180deg, #0f1419 0%, #1a2332 100%);
  padding: 3rem 4%;
  margin-top: 4rem;
  border-top: 1px solid rgba(59, 130, 246, 0.2);

  @media (max-width: 768px) {
    padding: 2rem 3%;
    margin-top: 3rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 2%;
    margin-top: 2rem;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #3b82f6;
  text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialButton = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
  transition: all 0.3s ease;
  border: 1px solid rgba(59, 130, 246, 0.2);

  &:hover {
    background: #3b82f6;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  }
`;

const FooterMain = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: #e2e8f0;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: #94a3b8;
    transition: color 0.3s ease;
    font-size: 0.9rem;

    &:hover {
      color: #3b82f6;
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #64748b;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    padding-top: 1.5rem;
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    padding-top: 1rem;
    font-size: 0.75rem;
  }
`;

const Copyright = styled.div`
  color: #64748b;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    color: #64748b;
    transition: color 0.3s ease;

    &:hover {
      color: #3b82f6;
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <Logo>NETFLIX</Logo>
          <SocialLinks>
            <SocialButton href="#" aria-label="Facebook">
              <Facebook size={20} />
            </SocialButton>
            <SocialButton href="#" aria-label="Twitter">
              <Twitter size={20} />
            </SocialButton>
            <SocialButton href="#" aria-label="Instagram">
              <Instagram size={20} />
            </SocialButton>
            <SocialButton href="#" aria-label="YouTube">
              <Youtube size={20} />
            </SocialButton>
          </SocialLinks>
        </FooterTop>

        <FooterMain>
          <FooterSection>
            <h3>콘텐츠</h3>
            <ul>
              <li>
                <a href="#">영화</a>
              </li>
              <li>
                <a href="#">TV 프로그램</a>
              </li>
              <li>
                <a href="#">다큐멘터리</a>
              </li>
              <li>
                <a href="#">애니메이션</a>
              </li>
              <li>
                <a href="#">독립 영화</a>
              </li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>장르</h3>
            <ul>
              <li>
                <a href="#">액션</a>
              </li>
              <li>
                <a href="#">드라마</a>
              </li>
              <li>
                <a href="#">코미디</a>
              </li>
              <li>
                <a href="#">로맨스</a>
              </li>
              <li>
                <a href="#">스릴러</a>
              </li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>지원</h3>
            <ul>
              <li>
                <a href="#">고객 센터</a>
              </li>
              <li>
                <a href="#">계정</a>
              </li>
              <li>
                <a href="#">미디어 센터</a>
              </li>
              <li>
                <a href="#">투자자 정보</a>
              </li>
              <li>
                <a href="#">채용 정보</a>
              </li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>법적 고지</h3>
            <ul>
              <li>
                <a href="#">이용약관</a>
              </li>
              <li>
                <a href="#">개인정보처리방침</a>
              </li>
              <li>
                <a href="#">쿠키 설정</a>
              </li>
              <li>
                <a href="#">회사 정보</a>
              </li>
              <li>
                <a href="#">문의하기</a>
              </li>
            </ul>
          </FooterSection>
        </FooterMain>

        <FooterBottom>
          <Copyright>
            © 2024 Netflix Clone. 이 사이트는 학습 목적으로 제작되었습니다.
          </Copyright>
          <FooterLinks>
            <a href="#">쿠키 설정</a>
            <a href="#">개인정보처리방침</a>
            <a href="#">이용약관</a>
          </FooterLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
