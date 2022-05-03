import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import OperatorCard from './components/OperatorCard'
import { useHttp }  from './../hooks/useHttp';
import { useRouter } from 'next/router';
import Link from 'next/link';

const OperatorsBlock: any = styled.div`
  display: flex;
  column-gap: 50px;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: 'consolas';
  @media (max-width: 1400px) { 
   
    display: block;
  }
`

const A: any = styled.a`
  text-decoration: none;
  color: black;
`

const OperatorCardsPage: React.FC = () => {
  const [operators, setOperators] = useState<any[]>();
  const { request } = useHttp();
  
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
       <Link href="/OperatorsPaymentPage"><A><OperatorCard nameImage={element.image} title={element.title}></OperatorCard></A></Link>
      ))}

    </OperatorsBlock>
     
  );
}

export default OperatorCardsPage;
