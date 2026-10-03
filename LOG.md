# 개발 기록

최신 기록이 위에 오도록 추가합니다.

---

## 2026-10-03

### 한 일

- 퍼블리싱 시안을 JSX로 옮김: `class` → `className`, `fill-rule` → `fillRule`, `clip-rule` → `clipRule`
- 공통 `Button` 컴포넌트 만듦 (`ComponentPropsWithRef<'button'>`)
- 수정/삭제 아이콘을 `SvgPencil`, `SvgClose` 컴포넌트로 분리
- git 저장소 만들고 첫 커밋
- README 정리, 개발 기록(LOG.md) 시작

### 배운 것

- **JSX 속성 이름**: `class` 대신 `className`, 하이픈이 들어간 속성은 camelCase로 (`fillRule`, `clipRule`)
- **VS Code 바꾸기**: `Ctrl+H`는 현재 파일, `Ctrl+Shift+H`는 전체 파일. 커서가 편집기 안에 있어야 현재 파일 바꾸기가 열림
- **class와 id**: class는 여러 요소에 같은 값을 줘도 되고, id는 페이지에 하나만
- **BEM**: `block__element--modifier` 형태 (`todo__item`, `todo__item--complete`)
- **시안의 같은 `li` 두 개**: 상태별(평소 / 수정 중) 예시일 뿐. React에서는 `map`과 조건부 클래스로 하나로 합침
- **`ComponentPropsWithRef<'태그'>`**: 태그의 모든 속성 타입을 포함해서 범용 컴포넌트에 좋음. 용도가 하나뿐인 단순한 컴포넌트는 필요한 props만 직접 쓰거나 `Pick`으로 골라오는 게 더 읽기 쉬움
- **git init**: 프로젝트마다 처음 한 번만
- **node_modules와 .gitignore**: `node_modules`(약 120MB)는 `.gitignore`로 커밋에서 빼고, `package.json`이 있으면 `npm install`로 다시 만들 수 있음. `.gitignore`는 Vite가 프로젝트 만들 때 넣어준 것이고, 커밋하기 전에 적어둬야 효과가 있음

### 다음에 할 일

- [ ] GitHub 저장소 만들고 push
- [ ] 할 일 추가 기능 (`useState`)
