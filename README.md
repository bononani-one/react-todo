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

## 개발 시작하기

### 처음 clone 할 때

```bash
git clone https://github.com/bononani-one/react-todo.git
cd react-todo
npm install
npm run dev
```

### 다른 컴퓨터에서 작업 중인 브랜치 이어받기

```bash
git fetch                 # 원격에 새로 생긴 브랜치 정보 받아오기
git switch <브랜치 이름>    # 그 브랜치로 이동
npm install               # 새로 추가된 라이브러리 설치
```

- `git pull`만 하면 지금 있는 브랜치만 업데이트되므로, 브랜치 이동(`git switch`)이 꼭 필요합니다.
- 브랜치 이름이 기억나지 않으면 `git branch -a`로 원격 브랜치 목록을 확인할 수 있습니다.

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
