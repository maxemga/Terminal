import React  from 'react';
import styled from 'styled-components';

const Card = styled.div`
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  border-radius: 10px;
  padding: 50px; 
  transition: 0.6s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.6) 0px 18px 100px -10px;
    padding: 60px; 
    transition: 0.6s;
  }
  @media (max-width: 1400px) { 
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`

const Title = styled.p`
  font-size: 25px;
  text-align: center;
`
 
interface OperatorCard {
  title: string,
}


const OperatorCard: React.FC<OperatorCard> = (props: any) => {
  const Record = () => {
    localStorage.setItem('title', props.title);
  }

  return (

      <Card onClick={() => Record()}>
        <Title>{props.title}</Title>
      </Card>
    
  );
}

export default OperatorCard;