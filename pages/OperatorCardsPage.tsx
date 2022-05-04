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

const CreateOperator: any = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #1DA1F2;
  border-radius: 10px;
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  height: 60px;
  weight: 300px;
  color: white;
  font-size: 20px;
  font-family: 'consolas';
`


const OperatorCardsPage: React.FC = () => {
  const [operators, setOperators] = useState<any[]>();
  const router: any = useRouter();
  const { request } = useHttp();
  
  const Responce = async () => {
    const data: any = await request('/api/render');
    setOperators(data);
  }

  useEffect(() => {
    Responce();
  }, [])
  

  return (
    <>
      <OperatorsBlock>
      
        {operators && operators.map(element => (
        <Link key={element.id} href="/OperatorsPaymentPage"><A key={element.id}><OperatorCard key={element.id} title={element.title}></OperatorCard></A></Link>
        ))}

      </OperatorsBlock>
      
      <CreateOperator onClick={() => router.push('/CreateOperator')}>Добавить оператора</CreateOperator> 
    </>
     
  );
}

export default OperatorCardsPage;
