import type { NextPage } from 'next'
import OperatorCardsPage from './OperatorCardsPage'
import OperatorsPaymentPage from './OperatorsPaymentPage'
import styled, { createGlobalStyle } from 'styled-components';


const Global: any = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      font-family: 'consolas';
  }
`


const Home: NextPage = () => {
  return (
    <>
      <Global/>
      <OperatorCardsPage/>
    </>
  )
}

export default Home
