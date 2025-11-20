# Golden Wellness (AS-Digt-HC-Dev-FE)

시니어 웰니스 관리를 돕기 위한 React (Vite) 기반의 웹 애플리케이션입니다. Firebase Studio 환경에서 개발되었으며, 시니어 사용자 친화적인 UI/UX와 가족 연결 기능을 제공합니다.

## 🌟 주요 기능

- **간편한 온보딩 (Onboarding Flow)**: 시니어 사용자를 위해 설계된 쉽고 빠른 단계별 설정 과정 (약 3분 소요).
- **일일 미션 카드 (Daily Mission Card)**: 매일 1~3개의 간단한 건강 미션을 제공하여 지속적인 건강 습관 형성을 유도합니다. 미션 완료 시 축하 효과(Confetti)로 긍정적인 피드백을 제공합니다.
- **건강 리포트 요약 (Health Report Summary)**: 혈압, 혈당, 걸음 수 등 주요 건강 데이터를 한 페이지로 요약하여 의료진과 공유하기 쉽게 제공합니다.
- **가족 연결 (Family Connection)**: 가족 구성원이 시니어의 건강 상태를 활동 피드로 확인하고 중요 알림을 받을 수 있어 서로 연결된 케어 경험을 제공합니다.

## 🛠 기술 스택

- **Build Tool**: [Vite](https://vitejs.dev/)
- **Framework**: [React](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
- **Backend / Database**: [Firebase](https://firebase.google.com/)
- **AI**: [Genkit](https://firebase.google.com/docs/genkit) (Google AI SDK)
- **UI Components**: Radix UI, Lucide React, Recharts
- **Forms**: React Hook Form, Zod

## 🚀 시작하기 (Getting Started)

로컬 개발 환경을 설정하고 프로젝트를 실행하는 방법입니다.

### 필수 조건 (Prerequisites)

- [Node.js](https://nodejs.org/) (v18 이상 권장)
- npm 또는 yarn, pnpm

### 설치 (Installation)

1. 프로젝트 클론 및 디렉토리 이동:
   ```bash
   git clone <repository-url>
   cd as-digt-hc-dev-fe
   ```

2. 의존성 패키지 설치:
   ```bash
   npm install
   # 또는
   yarn install
   ```

### 환경 변수 설정 (Environment Variables)

프로젝트 루트에 `.env` 파일을 생성하고 필요한 환경 변수를 설정해야 할 수 있습니다.
*참고: `package.json`에 `dotenv`가 포함되어 있습니다.*

### 실행 (Running the App)

**개발 서버 실행:**

이 프로젝트는 기본적으로 포트 **9002**를 사용하도록 설정되어 있습니다.

```bash
npm run dev
```

브라우저에서 [http://localhost:9002](http://localhost:9002)를 열어 확인하세요.

**Genkit (AI) 개발 도구 실행:**

Genkit 개발 UI를 실행하려면 다음 명령어를 사용합니다.

```bash
npm run genkit:dev
```

### 빌드 및 배포 (Build & Deploy)

프로덕션 빌드를 생성합니다:

```bash
npm run build
```

빌드된 애플리케이션을 미리보기(preview) 합니다:

```bash
npm run preview
```

## 📂 프로젝트 구조

```
src/
├── ai/              # Genkit AI 관련 로직
├── app/             # 페이지 컴포넌트 (기존 Next.js 구조 유지)
│   ├── (main)/      # 대시보드, 가족, 리포트 등 메인 기능 페이지
│   ├── onboarding/  # 온보딩 프로세스 페이지
│   └── ...
├── components/      # 재사용 가능한 UI 컴포넌트 (ui, icons 등)
├── hooks/           # 커스텀 React Hooks
├── lib/             # 유틸리티 함수 및 목업 데이터
├── App.tsx          # 메인 라우터 설정
├── main.tsx         # 앱 진입점
└── ...
```

## 🎨 디자인 가이드라인

- **Primary Color**: Teal (#20c997) - 신뢰와 안정감
- **Background**: Very Light Teal (#f0f9f5) - 편안한 대비
- **Accent**: Green (#90ee90) - 주요 상호작용 요소 강조
- **Font**: PT Sans - 가독성과 따뜻함

## 🌳 컴포넌트 트리 (Component Tree)

이 프로젝트의 주요 페이지 및 컴포넌트 구조입니다.

```mermaid
graph TD
    App[App (Router)] --> Home[Home Page]
    App --> Onboarding[Onboarding Layout]
    App --> Main[Main Layout <br/> Bottom Navigation]

    %% Landing Page
    Home --> Logo[Logo]
    Home --> StartBtn[Start Button]

    %% Onboarding Flow
    Onboarding --> Device[Device Page]
    Onboarding --> Profile[Profile Page]
    Onboarding --> Complete[Complete Page]

    %% Main Application
    Main --> Dashboard[Dashboard Page]
    Main --> Report[Report Page]
    Main --> Family[Family Page]

    %% Dashboard Detail
    Dashboard --> Header[Header]
    Dashboard --> Mission[Mission Card]
    Dashboard --> Confetti[Confetti]
```
