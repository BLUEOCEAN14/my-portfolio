import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
          title: "인터스텔라",
          image:
            "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=450&fit=crop&q=80",
          rating: 4.8,
        },
        {
          id: 2,
          title: "듄",
          image:
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=300&h=450&fit=crop&q=80",
          rating: 4.6,
        },
        {
          id: 3,
          title: "블레이드 러너",
          image:
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=450&fit=crop&q=80",
          rating: 4.9,
        },
        {
          id: 4,
          title: "매드맥스",
          image:
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=450&fit=crop&q=80",
          rating: 4.7,
        },
        {
          id: 5,
          title: "레디 플레이어 원",
          image:
            "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=300&h=450&fit=crop&q=80",
          rating: 4.5,
        },
      ],
    },
    {
      title: "액션 & 어드벤처",
      movies: [
        {
          id: 6,
          title: "존 윅",
          image:
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=450&fit=crop&q=80",
          rating: 4.4,
        },
        {
          id: 7,
          title: "미션 임파서블",
          image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=450&fit=crop&q=80",
          rating: 4.3,
        },
        {
          id: 8,
          title: "배트맨",
          image:
            "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=300&h=450&fit=crop&q=80",
          rating: 4.6,
        },
        {
          id: 9,
          title: "스파이더맨",
          image:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop&q=80",
          rating: 4.2,
        },
        {
          id: 10,
          title: "어벤져스",
          image:
            "https://images.unsplash.com/photo-1574263867127-a8b6d6c3c3b3?w=300&h=450&fit=crop&q=80",
          rating: 4.5,
        },
      ],
    },
    {
      title: "드라마 & 로맨스",
      movies: [
        {
          id: 11,
          title: "라라랜드",
          image:
            "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=450&fit=crop&q=80",
          rating: 4.7,
        },
        {
          id: 12,
          title: "노트북",
          image:
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=450&fit=crop&q=80",
          rating: 4.8,
        },
        {
          id: 13,
          title: "타이타닉",
          image:
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=450&fit=crop&q=80",
          rating: 4.6,
        },
        {
          id: 14,
          title: "500일의 썸머",
          image:
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=300&h=450&fit=crop&q=80",
          rating: 4.9,
        },
        {
          id: 15,
          title: "이터널 선샤인",
          image:
            "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=300&h=450&fit=crop&q=80",
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
