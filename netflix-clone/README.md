# Netflix Clone - Blue Ocean Theme

React + TypeScript로 구현한 Netflix 클론 프로젝트입니다. 핵심 색상을 blue 톤으로 설정하여 독특한 디자인을 구현했습니다.

## 🎨 주요 특징

- **Blue Ocean Theme**: Netflix의 전통적인 빨간색 대신 blue 톤을 사용한 독특한 디자인
- **반응형 디자인**: 모든 디바이스에서 최적화된 사용자 경험
- **Smooth Animations**: Framer Motion을 활용한 부드러운 애니메이션
- **Modern UI/UX**: Netflix의 UI/UX 패턴을 따르면서도 독창적인 요소 추가
- **TypeScript**: 타입 안정성을 보장하는 TypeScript 구현

## 🚀 기술 스택

- **Frontend**: React 18, TypeScript
- **Styling**: Styled Components
- **Icons**: Lucide React
- **Animations**: CSS Animations + Styled Components
- **Routing**: React Router DOM

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── Header.tsx          # 네비게이션 헤더
│   ├── Hero.tsx           # 메인 히어로 섹션
│   ├── MovieRow.tsx       # 영화 목록 행
│   └── Footer.tsx         # 푸터
├── styles/
│   └── GlobalStyles.ts    # 글로벌 스타일
└── App.tsx               # 메인 앱 컴포넌트
```

## 🎯 주요 기능

### 1. 헤더 (Header)

- 스크롤에 따른 배경 변화
- 반응형 네비게이션
- 검색 기능
- 알림 및 사용자 메뉴

### 2. 히어로 섹션 (Hero)

- 동적 배경 이미지
- 그라데이션 오버레이
- 플로팅 애니메이션 요소
- 재생 및 상세 정보 버튼

### 3. 영화 행 (MovieRow)

- 좌우 스와이프 네비게이션
- 호버 효과 및 확대 애니메이션
- 영화 정보 오버레이
- 재생 및 찜하기 버튼

### 4. 푸터 (Footer)

- 소셜 미디어 링크
- 카테고리별 링크
- 반응형 그리드 레이아웃

## 🎨 디자인 시스템

### 색상 팔레트

- **Primary Blue**: #3b82f6
- **Secondary Blue**: #60a5fa
- **Light Blue**: #93c5fd
- **Dark Background**: #0f1419
- **Medium Background**: #1a2332
- **Light Text**: #e2e8f0
- **Muted Text**: #94a3b8

### 애니메이션

- **Hover Effects**: 0.3s ease transitions
- **Scale Animations**: 호버 시 1.05배 확대
- **Floating Elements**: 무작위 플로팅 버블 애니메이션
- **Smooth Scrolling**: 부드러운 스크롤 효과

## 🚀 실행 방법

1. **의존성 설치**

   ```bash
   npm install
   ```

2. **개발 서버 실행**

   ```bash
   npm start
   ```

3. **브라우저에서 확인**
   ```
   http://localhost:3000
   ```

## 📱 반응형 지원

- **Desktop**: 1200px 이상
- **Tablet**: 768px - 1199px
- **Mobile**: 767px 이하

## 🎬 콘텐츠

프로젝트에서는 Unsplash의 고화질 바다/해양 이미지를 사용하여 blue ocean 테마에 맞는 콘텐츠를 구성했습니다:

- 블루 오션의 비밀
- 심해의 비밀
- 바다의 전설
- 푸른 깊이
- 해양 탐험

## 🔧 커스터마이징

### 색상 변경

`src/styles/GlobalStyles.ts`에서 색상 변수를 수정하여 테마를 변경할 수 있습니다.

### 콘텐츠 추가

`src/App.tsx`의 `movieCategories` 배열을 수정하여 새로운 영화 카테고리를 추가할 수 있습니다.

### 애니메이션 조정

각 컴포넌트의 styled-components에서 transition 시간과 효과를 조정할 수 있습니다.

## 📄 라이선스

이 프로젝트는 학습 목적으로 제작되었습니다. Netflix는 이 프로젝트와 관련이 없습니다.

## 🤝 기여

프로젝트 개선을 위한 제안이나 버그 리포트는 언제든 환영합니다!

---

**Netflix Clone - Blue Ocean Theme** 🐋✨
