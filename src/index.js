import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import state, { observer, addPost, updateNewTextPost, sendMessage, updateNewTextMessage } from './components/redux/state';
import './index.css';
import App from './App';



export let renderReactTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App 
      state={state} 
      addPost={addPost} 
      updateNewTextPost={updateNewTextPost}
      sendMessage = {sendMessage}
      updateNewTextMessage = {updateNewTextMessage} />
    </React.StrictMode>,
  document.getElementById('root')
);
};

renderReactTree();
observer(renderReactTree)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



