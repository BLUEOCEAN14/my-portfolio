# EJ Portfolio

4년간의 개발 경험을 바탕으로 만든 개인 포트폴리오 웹사이트입니다.

## 🚀 주요 기능

### 🌙 테마 시스템

- **라이트/다크/시스템** 테마 지원
- 사용자 설정 저장 (localStorage)
- 시스템 테마 자동 감지

### 📧 문의 시스템

- **서버 API** 우선 연동
- **Google Sheets** 폴백 시스템
- 실시간 폼 검증

### 🛠 기술 스택

#### Frontend

- React 18 + TypeScript
- Styled Components
- Framer Motion
- React Router DOM

#### Backend (선택사항)

- Express.js
- CORS, Helmet, Rate Limiting
- 인메모리 저장소 (MongoDB 연동 가능)

#### 배포

- Vercel/Netlify (Frontend)
- Railway/Render (Backend)

## 📦 설치 및 실행

### Frontend

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm start

# 빌드
npm run build
```

### Backend (선택사항)

```bash
cd server

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 실행
npm start
```

## ⚙️ 환경 설정

### Frontend (.env)

```env
REACT_APP_API_URL=http://localhost:5000/api
```

### Backend (.env)

```env
PORT=5000
FRONTEND_URL=http://localhost:3000
```

## 🔧 Google Sheets 연동

1. **Google Apps Script 생성**

   - Google Apps Script에서 새 프로젝트 생성
   - `server/google-apps-script.js` 코드 복사
   - 배포 → 웹 앱으로 배포

2. **URL 설정**
   - `src/utils/googleSheets.ts`에서 `GOOGLE_SCRIPT_URL` 업데이트

## 📁 프로젝트 구조

```
my-portfolio/
├── src/
│   ├── components/          # 재사용 컴포넌트
│   ├── contexts/           # React Context
│   ├── pages/              # 페이지 컴포넌트
│   ├── utils/              # 유틸리티 함수
│   └── types/              # TypeScript 타입 정의
├── server/                 # Express 서버 (선택사항)
└── public/                 # 정적 파일
```

## 🎨 커스터마이징

### 테마 색상 변경

`src/App.tsx`의 `theme` 객체에서 색상 수정:

```typescript
const theme = {
  colors: {
    primary: "#00d4ff",
    secondary: "#ff6b6b",
    // ... 기타 색상
  },
};
```

### 프로젝트 정보 수정

각 페이지 컴포넌트에서 내용 수정:

- `src/pages/HomePage.tsx` - 메인 정보
- `src/pages/AboutPage.tsx` - 경력 및 기술 스택
- `src/pages/ProjectsPage.tsx` - 프로젝트 목록
- `src/pages/ContactPage.tsx` - 연락처 정보

## 🚀 배포

### Frontend (Vercel)

1. GitHub에 코드 푸시
2. Vercel에서 프로젝트 연결
3. 자동 배포 완료

### Backend (Railway)

1. `server` 폴더를 별도 레포지토리로 분리
2. Railway에서 프로젝트 연결
3. 환경 변수 설정
4. 배포 완료

## 📝 API 문서

### 문의 폼

```
POST /api/contact
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

### 게시판

```
GET /api/posts?page=1&limit=10
POST /api/posts
GET /api/posts/:id
```

## 🤝 기여

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

MIT License - 자유롭게 사용하세요!

## 📞 연락처

- Email: contact@ej.dev
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
