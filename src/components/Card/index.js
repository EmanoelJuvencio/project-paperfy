/* eslint-disable jsx-a11y/alt-text */
import React, { useRef } from "react"

import { useDrag, useDrop } from 'react-dnd';

import { Container, Label } from "./styles";

export default function Card({data}) {


  const ref = useRef();

  const [{ isDragging }, dragRef] = useDrag({
    item:{ id: data.id },
    type: 'CARD',
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item,monitor){
      console.log(item);
    }
  })


  dragRef(dropRef(ref))

  return (
    <Container isDragging={isDragging} ref={ref}>
      <header>
        {data.labels.map(label => <Label key={label} color={label} />)}
      </header>
      <p>
        {data.content}
      </p>
      
      {data.user && (<img src={data.user}/>) }      
    </Container>
  )
}