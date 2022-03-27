import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Hi what happens" },
  { id: 3, message: "everything cool" },
];

let dialogsData = [
  { id: 1, name: "Dima" },
  { id: 2, name: "Slavik" },
  { id: 3, name: "Anastasiia" },
  { id: 4, name: "Valerii" },
];

let postsData = [
  { id: 1, post: "My first post", likeCount: 15 },
  { id: 2, post: "Hy, how are you", likeCount: 6 },
];
ReactDOM.render(

  
  <React.StrictMode>
    <App messages={messagesData} dialogs={dialogsData} posts={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



