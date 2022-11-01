import React from 'react'
import Board from './components/Board';
import Header from './components/Header';
import GlobalStyle from './styles/global';

import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <GlobalStyle />
      <Header />
      <Board />
    </ DndProvider>
  );
}

export default App;
