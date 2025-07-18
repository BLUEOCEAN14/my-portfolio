import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MovieRow from "./components/MovieRow";
import Footer from "./components/Footer";
import { GlobalStyles } from "./styles/GlobalStyles";

const AppContainer = styled.div`
  background: linear-gradient(135deg, #0f1419 0%, #1a2332 50%, #2d3748 100%);
  min-height: 100vh;
  color: white;
`;

const MainContent = styled.main`
  padding-top: 70px;
`;

function App() {
  const movieCategories = [
    {
      title: "인기 콘텐츠",
      movies: [
        {
          id: 1,
          title: "블루 오션",
          image:
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=450&fit=crop",
          rating: 4.8,
        },
        {
          id: 2,
          title: "심해의 비밀",
          image:
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=450&fit=crop",
          rating: 4.6,
        },
        {
          id: 3,
          title: "바다의 전설",
          image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=450&fit=crop",
          rating: 4.9,
        },
        {
          id: 4,
          title: "푸른 깊이",
          image:
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=450&fit=crop",
          rating: 4.7,
        },
        {
          id: 5,
          title: "해양 탐험",
          image:
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=450&fit=crop",
          rating: 4.5,
        },
      ],
    },
    {
      title: "액션 & 어드벤처",
      movies: [
        {
          id: 6,
          title: "블루 스톰",
          image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=450&fit=crop",
          rating: 4.4,
        },
        {
          id: 7,
          title: "심해 전투",
          image:
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=450&fit=crop",
          rating: 4.3,
        },
        {
          id: 8,
          title: "바다의 용사",
          image:
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=450&fit=crop",
          rating: 4.6,
        },
        {
          id: 9,
          title: "푸른 전쟁",
          image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=450&fit=crop",
          rating: 4.2,
        },
        {
          id: 10,
          title: "해양 특공대",
          image:
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=450&fit=crop",
          rating: 4.5,
        },
      ],
    },
    {
      title: "드라마 & 로맨스",
      movies: [
        {
          id: 11,
          title: "블루 로맨스",
          image:
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=450&fit=crop",
          rating: 4.7,
        },
        {
          id: 12,
          title: "심해의 사랑",
          image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=450&fit=crop",
          rating: 4.8,
        },
        {
          id: 13,
          title: "바다의 약속",
          image:
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=450&fit=crop",
          rating: 4.6,
        },
        {
          id: 14,
          title: "푸른 기억",
          image:
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=450&fit=crop",
          rating: 4.9,
        },
        {
          id: 15,
          title: "해양의 꿈",
          image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=450&fit=crop",
          rating: 4.4,
        },
      ],
    },
  ];

  return (
    <Router>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContent>
          <Hero />
          {movieCategories.map((category, index) => (
            <MovieRow
              key={index}
              title={category.title}
              movies={category.movies}
            />
          ))}
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
