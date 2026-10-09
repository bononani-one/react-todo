# 개발 기록

최신 기록이 위에 오도록 추가합니다.

---

## 2026-10-09

### 한 일

- 할 일 추가, 완료 토글, 삭제, 수정 기능 완성
- `App`에 상태와 함수를 두고 props로 `TodoEditor`, `TodoList`, `TodoListItem`에 전달
- 오타와 괄호 누락 같은 컴파일 오류 수정 (`fillter`, `toggleTodo{`, props 이름 `todo`/`todos`)

### 배운 것

- **상태 끌어올리기**: 여러 컴포넌트가 같이 쓰는 상태(`todos`)는 공통 부모(`App`)에 둠. 자식은 받은 함수를 호출만 함
- **배열 상태는 새 배열로 바꾸기**
  - 추가: `[...todos, 새것]`
  - 수정/토글: `todos.map((todo) => todo.id === id ? { ...todo, 바꿀값 } : todo)`
  - 삭제: `todos.filter((todo) => todo.id !== id)`
- **setState에 함수 넘기기**: `setTodos((todos) => ...)`처럼 쓰면 항상 최신 값을 기준으로 바꿈
- **props 이름은 보내는 쪽과 받는 쪽이 같아야 함**: `<TodoList todos={todos} />`로 보내면 받는 쪽도 `{ todos }`
- **수정 모드**: `isModify` 상태 하나로 체크박스와 입력칸 중 무엇을 보여줄지 전환 (조건부 렌더링 `{isModify && ...}`)

### 느낀 점

- 소스 따라 치기 바빠서 아직 머리에 안 남음. 다음 챕터 하다가 같은 패턴이 나오면 연결해보기
- 몇 챕터 뒤에 책 없이 고도화 해보기: 완료/미완료 필터, localStorage 저장, 남은 개수 표시

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
- **useRef**: Ref = Reference(참조). 두 가지 경우에 씀
  1. DOM 요소를 직접 건드릴 때: `inputRef.current?.focus()`로 입력칸에 커서 넣기
  2. 값을 기억은 하되 화면을 다시 그릴 필요가 없을 때: 다음 할 일의 id(`nextId.current += 1`)

  | | useState | useRef |
  |---|---|---|
  | 값을 기억하나요? | O | O |
  | 값을 바꾸면 화면을 다시 그리나요? | O | X |
  | 값 꺼내는 법 | `count` | `ref.current` |
  | 값 바꾸는 법 | `setCount(1)` | `ref.current = 1` |

  → 화면에 보여야 하는 값은 `useState`, 뒤에서 기억만 하면 되는 값이나 DOM 요소는 `useRef`
- **ComponentPropsWithRef의 WithRef**: `ref` 속성도 타입에 포함된다는 뜻. React 19부터는 `ref`를 일반 props처럼 넘길 수 있음 (React 18까지는 `forwardRef`가 필요했음)

### 다음에 할 일

- [x] GitHub 저장소 만들고 push
- [x] 할 일 추가 기능 (`useState`)
