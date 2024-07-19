import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from './features/items/itemsSlice';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

function WelcomeModal({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Добро пожаловать на тестовое задание</h2>
        <p>Стэк, который использовался: React, Redux Toolkit, React Transition Group </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

function App() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const add = () => {
    const color = '#' + Math.floor(Math.random()*16777215).toString(16);
    dispatch(addItem(color));
  };

  const remove = () => {
    dispatch(removeItem());
  };

  return (
    <div className="App">
      {modalIsOpen && <WelcomeModal onClose={() => setModalIsOpen(false)} />}
      <div className="header">
        <button className="button" onClick={add}>Add</button>
        <button className="button" onClick={remove}>Remove</button>
      </div>
      <TransitionGroup className="list">
        {items.map((item, index) => (
          <CSSTransition key={index} timeout={500} classNames="item">
            <div className="item" style={{ backgroundColor: item }} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default App;
