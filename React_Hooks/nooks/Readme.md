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



<strong>???</strong> functional component?????? state??? ?????? ??? ?????? ??????
<strong>???</strong> lass component, didmount, render?????? ??????x
<strong>???</strong> handling input, Fetching ??????
<strong>???</strong> usePreventLeave??? useConfirm??? useEffect??? useState??? ???????????? ??????

-. const [item] = useState(1)
    : const item = useState(1)[0]

import React, { useState } from "react";
-. useState()??? value??? ?????? ???????????? ????????? ??????(Array?????????)
-. usetState()??? React state?????????????????? ????????? ????????? ?????? ????????? ??????..

```jsx
//?????? class??????
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
//hooks??????
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
	??? value={name.value} onChange.{name.onChange} ???
	{...name} ??? ?????? ?????????.

## React Hooks useEffect

-. ?????? use??? ??????
-. componentWillUnMount, componentDidMount, componentWillUpdate??? ??????

useEffect??? componentDidmount??? ????????? ???
-. useEffect??? 2?????? ????????? ????????? ???????????? function???????????? (effect)
-. ????????? ????????? dependency(deps)
  ??? ?????? deps??? ????????? effect??? (deps)???????????? ?????? ?????? ?????? ?????? ???????????? ?????????

```jsx
const App = () => {
  const sayHello = () => console.log("Hello");
  const [number, setNumber] = useState(0);
  const [anumber, setAnumber] = useState(0);
  useEffect(sayHello, [number]);  //initialize??? ??? ???????????? ??????
//?????? ??????????????? ??????????????? [number] ??? [] ??? ??????

  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(anumber + 1)}>{anumber}</button>
    </div>
  );
};
```

