# Nooks

Collection of sexy React Hooks ready to install with NPM

## Each hook has its own pacakge

| Hook            | Description                                               | Documentation                                                                     | NPM Page                                                           |
| --------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| useTitle        | Update your document's title.                             | [Documentation](https://github.com/nomadcoders/nooks/tree/master/useTitle)        | [NPM Page](https://www.npmjs.com/package/@nooks/use-title)         |
| useConfirmation | Prompt a confirmation before executing a function.        | [Documentation](https://github.com/nomadcoders/nooks/tree/master/useConfirm)      | [NPM Page](https://www.npmjs.com/package/@nooks/use-confirm)       |
| useHover        | Detect a hover on any React Element.                      | [Documentation](https://github.com/nomadcoders/nooks/tree/master/useHover)        | [NPM Page](https://www.npmjs.com/package/@nooks/use-hover)         |
| useBeforeLeave  | Execute a function when the mouse leaves the document.    | [Documentation](https://github.com/nomadcoders/nooks/tree/master/useBeforeLeave)  | [NPM Page](https://www.npmjs.com/package/@nooks/use-before-leave)  |
| useNetwork      | Listen when the user goes online or offline.              | [Documentation](https://github.com/nomadcoders/nooks/tree/master/useNetwork)      | [NPM Page](https://www.npmjs.com/package/@nooks/use-network)       |
| useScroll       | Get X/Y coordinates of current position of the scroll.    | [Documentation](https://github.com/nomadcoders/nooks/tree/master/useScroll)       | [NPM Page](https://www.npmjs.com/package/@nooks/use-scroll)        |
| usePreventLeave | Prompt the user for confirmation before leaving the page. | [Documentation](https://github.com/nomadcoders/nooks/tree/master/usePreventLeave) | [NPM Page](https://www.npmjs.com/package/@nooks/use-prevent-leave) |
| useFadeIn       | Fade in any element.                                      | [Documentation](https://github.com/nomadcoders/nooks/tree/master/useFadeIn)       | [NPM Page](https://www.npmjs.com/package/@nooks/use-fade-in)       |
| useFullscreen   | Make any element go Fullscreen                            | [Documentation](https://github.com/nomadcoders/nooks/tree/master/useFullScreen)   | [NPM Page](https://www.npmjs.com/package/@nooks/use-fullscreen)    |

# React Hooks
> https://ko.reactjs.org/docs/hooks-intro.html



<strong>→</strong> functional component에서 state를 가질 수 있게 해줌
<strong>→</strong> lass component, didmount, render등이 필요x
<strong>→</strong> handling input, Fetching 문제
<strong>→</strong> usePreventLeave와 useConfirm은 useEffect와 useState를 사용하지 않음

-. const [item] = useState(1)
    : const item = useState(1)[0]

import React, { useState } from "react";
-. useState()는 value와 이를 변경하는 방법을 반환(Array형태로)
-. usetState()가 React state매니지먼트의 밑으로 들어가 훅을 땡기는 역할..

```jsx
//기존 class사용
class qudtls extends React.Component{
  state = {item : 1}

  render(){
      const {item} = this.state
      return (
        <div className="App">
          <h1>Hello {item}</h1>
          <button onClick={this.increamentItem}>increament</button>
          <button onClick={this.decreamentItem}>decreament</button>
        </div>
      )
    }
  increamentItem = () => {
    this.setState(state => {
      return (
        {item: state.item +1}
      )
    })
  }
  decreamentItem = () => {
    this.setState(state => {
      return (
        {item: state.item -1}
      )
    })
  }
}
```

```jsx 
//hooks사용
const App = () => {
  const [item, setItem] = useState(1);
  const increamentItem = () => setItem(item + 1);
  const decreamentItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <button onClick={increamentItem}>increament</button>
      <button onClick={decreamentItem}>decreament</button>
    </div>
  );
};
```
-. https://www.techiediaries.com/react-spread-operator-props-setstate/
	■ value={name.value} onChange.{name.onChange} 은
	{...name} 과 같은 의미다.

## React Hooks useEffect

-. 많은 use를 가짐
-. componentWillUnMount, componentDidMount, componentWillUpdate와 비슷

useEffect는 componentDidmount의 역할도 함
-. useEffect는 2개의 인자를 받는데 첫번째는 function으로써의 (effect)
-. 두번째 인자는 dependency(deps)
  → 만약 deps가 있다면 effect는 (deps)리스트에 있는 값일 때만 값이 변하도록 활성화

```jsx
const App = () => {
  const sayHello = () => console.log("Hello");
  const [number, setNumber] = useState(0);
  const [anumber, setAnumber] = useState(0);
  useEffect(sayHello, [number]);  //initialize된 후 선언해야 동작
//모두 적용시키지 않고싶다면 [number] → [] 로 변경

  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(anumber + 1)}>{anumber}</button>
    </div>
  );
};
```

