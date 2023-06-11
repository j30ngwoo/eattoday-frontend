import {useState} from 'react';
import styled from '@emotion/styled';
import FlickingComponent from "@egjs/react-flicking";

export default function Flicking(){
  const [panels, setPanels] = useState([0, 1, 2, 3, 4]);

  return (
  <Container>
    <FlickingComponent renderOnlyVisible={true}>
      {panels.map(index => <Panel key={index}>{index + 1}</Panel>)}
    </FlickingComponent>
  </Container>
  )
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 30rem;
  position: relative;
  width: 100%;
  will-change: transform;
  z-index: 1;
  background-color: gray;
`

const Panel = styled.div`
  width: 30rem;
  background-color: #f2a65e!important;
  color: #fff!important;

`

