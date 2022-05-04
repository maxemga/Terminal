import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup';
import { useHttp } from '../hooks/useHttp';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';


const PaymentBlock: any = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column ;
  font-family: 'consolas';
`

const Title: any = styled.p`
  font-size: 50px;
`

const Wrapper: any = styled.div`
  margin: 0 auto;
  max-width: 70%:
`


const FormBlock: any = styled.form`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  border-radius: 10px;
  padding: 50px; 
  transition: 0.6s;
  margin-top: 30px;
`
const Input: any = styled.input`
  margin-top: 10px;
  outline: none;
  height: 60px;
  width: 100%;
  border: 1px solid #C4CFD6;
  border-radius: 5px;
  padding: 0 10px;
  padding-top: 30px;
  box-sizing:border-box;   
  font-size: 17px;

  &:focus{
      border: 2px solid #1DA1F2;       
  }

  &:focus + label{
      color:  #1DA1F2;       
  }

  &:focus + label, &:not(:placeholder-shown) + label {
      font-size: 15px;
      transform: translateY(-100%);
      transition: .1s; 
  }


  &::placeholder {
      color: transparent;
  }  
`

const FormInputsFile: any = styled.div`
    position: relative;
    background-color: #1BBC9B;
    border-radius: 10px;
    height: 60px;
    margin-top: 20px;
`

const InputFile: any = styled.input`
    opacity: 0;
    z-index: 2;
    cursor: pointer;
    height: 100%;
    width: 100%;
`
const LabelFile: any = styled.label`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    color: white;

`

const InputError: any = styled.input`
  margin-top: 10px;
  outline: none;
  height: 60px;
  width: 100%;
  border: 1px solid #E0245E;
  border-radius: 5px;
  padding: 0 10px;
  padding-top: 30px;
  box-sizing:border-box;   
  font-size: 17px;

  &:focus{
      border: 2px solid #E0245E;       
  }

  &:focus + label{
      color:  #E0245E;       
  }

  &:focus + label, &:not(:placeholder-shown) + label {
      font-size: 15px;
      transform: translateY(-100%);
      transition: .1s; 
  }


  &::placeholder {
      color: transparent;
  }  
`

const Label: any = styled.label`
  
`

const FormInputs: any = styled.div`

position: relative;

label {
  position: absolute;
  transform: translateY(-50%);
  left: 10px;
  top: 50%;
  color: rgb(91, 112, 131);
  font-size: 17px;
  font-weight: 400;  
  transition: .1s;
}
span {
  color: rgb(27, 149, 224);
  cursor: pointer;
  &:hover {
      text-decoration: underline;
  }
} 
`
const Buttons: any = styled.div`
  display: flex;
  column-gap: 5px;
  margin-top: 20px;
`

const Button: any = styled.button`
  width: 50%;
  padding: 0 20px;
  outline: none;
  background-color: white;
  border: 2px solid #1DA1F2;
  border-radius: 30px;
  color: #1DA1F2;
  font-weight: bold;
  font-size: 17px;
  cursor: pointer;
  font-family: Arial;

  &:hover {
    opacity: 0.7;
  }
`
const ButtonSubmit: any = styled.button`
  width: 50%;
  padding: 20px; 
  outline: none;
  background-color: #1DA1F2;
  border: 2px solid #1DA1F2;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  font-size: 17px;
  cursor: pointer;
  font-family: Arial;

  &:hover {
    opacity: 0.7;
  }
`

const ButtonSubmitError: any = styled.button`
  width: 50%;
  padding: 20px; 
  outline: none;
  background-color: #1DA1F2;
  border: 2px solid #1DA1F2;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  font-size: 17px;
  cursor: pointer;
  font-family: Arial;
  opacity: 0.5;
`

const Span: any = styled.span`
  color: #E0245E;
`

const A: any = styled.a`
  text-decoration: none;
  color: #1DA1F2;
`

const Window: any = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  animation: shadow 3s;
  @keyframes shadow {
    from {opacity: 0.0;}
    to {opacity: 0.8;}
    }
`



const OperatorsPaymentPage: React.FC = () => {
  const router: any = useRouter();
  const { request } = useHttp();

  const validationSchema = yup.object().shape({
      title: yup.string().min(3, 'Длина названия должна быть минимум 3 символа').max(15, 'Длина названия должна быть максимум 15 символов').required('Пожалуйста, введите название оператора'),

  })

  const Add = async(values: any) => {
     const data: any = await request('/api/add', 'POST', values)
  }

  return (
    <PaymentBlock>
       <Wrapper>
          <Formik initialValues={{ 
              title: ``,
              }}
                  onSubmit={(values) => console.log(values)}
                  validationSchema={validationSchema}>
                  {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                  <>
                      <Title>Добавить оператора</Title>
                      <FormBlock>
                          <FormInputs>
                              {errors.title ? <InputError type='string' name='title' value={values.title} onChange={handleChange}></InputError> : <Input type='string' name='title' value={values.title} onChange={handleChange}></Input>}
                              <Label>Название</Label>
                          </FormInputs>

                          {errors.title && <Span>{errors.title}</Span>}

                      </FormBlock>
                      <Buttons>
                        <Button><A href="/OperatorCardsPage">Назад</A></Button>

                        {!isValid || !dirty ? <ButtonSubmitError disabled={!isValid || !dirty } >Оплатить</ButtonSubmitError> : <ButtonSubmit type="submit" disabled={!isValid || !dirty } onClick={() => Add(values)} >Оплатить</ButtonSubmit>}
                        
                      </Buttons>
                  </>
                  )}
          </Formik>
       </Wrapper>
    </PaymentBlock>
  );
}

export default OperatorsPaymentPage;
