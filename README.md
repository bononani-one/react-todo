# Todo List

React와 TypeScript를 공부하며 만드는 할 일 관리 앱입니다.

## 기술 스택

- React 19
- TypeScript
- Vite
- ESLint

## 기능

- [x] 화면 마크업 (HTML → JSX 변환)
- [ ] 할 일 추가
- [ ] 할 일 목록 표시 (없을 때 안내 문구)
- [ ] 완료 체크
- [ ] 할 일 수정
- [ ] 할 일 삭제

## 실행 방법

```bash
npm install
npm run dev
```

## 폴더 구조

```
src/
├── App.tsx                 # 메인 화면
├── main.tsx                # 앱 시작점
├── index.css               # 전체 스타일 (BEM 방식 클래스)
└── components/
    ├── html/
    │   └── Button.tsx      # 기본 button을 감싼 컴포넌트
    └── svg/
        ├── SvgPencil.tsx   # 수정 아이콘
        └── SvgClose.tsx    # 삭제 아이콘
```

## 개발 기록

날짜별 작업 내용과 배운 점은 [LOG.md](LOG.md)에 남깁니다.
