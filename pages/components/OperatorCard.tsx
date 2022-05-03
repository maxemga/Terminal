import React, { useEffect } from 'react';
import styled from 'styled-components';


const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  border-radius: 10px;
  padding: 50px; 
  transition: 0.6s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.6) 0px 18px 100px -10px;
    padding: 60px; 
    transition: 0.6s;
  }
`

const Icon = styled.img`
  width: 300px;
  height: 300px;
`

const Title = styled.p`
  margin-top: 40px;
  font-size: 25px;
  text-align: center;
`
 
interface OperatorCard {
  title: string,
  nameImage: string
}


const OperatorCard: React.FC<OperatorCard> = (props: any) => {

  useEffect(() => {
    console.log(props.title)
  }, [])
  return (

      <Card>
        <Icon src ={`/images/operators/${props.nameImage}`} alt="" /> 
        <Title>{props.title}</Title>
      </Card>
    
  );
}

export default OperatorCard;


// "/images/operators/`"

// /images/operators/mts.png