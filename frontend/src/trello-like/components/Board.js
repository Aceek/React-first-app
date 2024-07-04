import React from'react';
import List from './List';
import Card from './Card';

const Board = () => {
  return (
    <div>
      <h1>Board</h1>
      <List>
        <Card />
        <Card />
        <Card />
      </List>
      <List>
        <Card />
        <Card />
        <Card />
      </List>
    </div>
  );
};

export default Board;