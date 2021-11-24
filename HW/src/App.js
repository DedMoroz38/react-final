import logo from './logo.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
// import { Counter } from './counter.js'


export const MessageList = () => {
  const [ListState, setListState] = useState([]);
  const [TextState, setTextState] = useState('');
  const [AuthorState, setAuthorState] = useState('');
  const [RobotReply, setRobotReply] = useState({});

  const textUpdate = (event) => {
    setTextState(event.target.value);
  }
  const authorUpdate = (event) => {
    setAuthorState(event.target.value);
  }

  const show = () => {
    const newList = [...ListState, { AuthorState, TextState }];
    setListState(newList);
    const RobotReply = { AuthorState: 'Robot', TextState: `Hi ${newList[newList.length - 1].AuthorState}!` };
    setRobotReply(RobotReply);
  }
  useEffect(() => {
    if (!Object.keys(RobotReply).length == 0) {
      setTimeout(() => {
        const newList = [...ListState, RobotReply];
        setListState(newList);
      }, 1500)
    }
  }, [RobotReply]);

  return (
    <div className='container'>
      <p className='heading'>Сообщение</p>
      <div className='comment_box'>
        <input type='text' placeholder='Имя' onChange={authorUpdate}></input>
        <textarea type='text' placeholder='Kоментарий...' onChange={textUpdate}></textarea>
        <button onClick={show}>Отправить</button>
      </div>
      {ListState.map((item) => (
        < div className='answer_box'>
          <p className='answer_box_name'>{item.AuthorState}</p>
          <p className='answer_box_comment'>{item.TextState}</p>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <MessageList />
    </div>
  )
}
