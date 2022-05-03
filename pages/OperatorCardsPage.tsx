import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import OperatorCard from './components/OperatorCard'
import { useHttp }  from './../hooks/useHttp';

const OperatorsBlock: any = styled.div`
  display: flex;
  column-gap: 50px;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

const Wrapper: any = styled.div`
  margin: 0 auto;
  max-width: 90%:
`
const A: any = styled.a`
  text-decoration: none;
  color: black;
`

const OperatorCardsPage: React.FC = () => {
  const [operators, setOperators] = useState<any[]>();
  const [val, setVal] = useState<number>(0);

  const { request } = useHttp()

  const Responce = async () => {
    const data: any = await request('/api/render');
    setOperators(data);
  }

  useEffect(() => {
    Responce();
  }, [])

  return (
    <OperatorsBlock>
     
      {operators && operators.map(element => (
        <A href='/OperatorsPaymentPage'><OperatorCard nameImage={element.image} title={element.title}></OperatorCard></A>
      ))}
       
    </OperatorsBlock>
    
  );
}

export default OperatorCardsPage;
