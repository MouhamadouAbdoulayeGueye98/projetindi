"use client"; 


import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa'; // Utilisation de l'icône de flèche de retour

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

const FormSection = styled.div`
  width: 60%;
  padding: 1rem;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
`;

const OrderSummary = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  width: 35%;
`;

const ProductItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const Button = styled.button`
  width: 30%;
  margin-top: 2rem;
  margin-left: 30rem;
  background-color: ${props => (props.disabled ? '#ccc' : '#ccc')};
  color: #000;
  padding: 0.5rem;
  border: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const TotalContainer = styled.div`
  margin-top: 7rem;
`;

const TotalItem = styled.p`
  font-weight: bold;
`;

const Total = styled.p`
  font-weight: bold;
  margin-top: 1rem;
`;

const Title = styled.h3`
  font-size: 1.7rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-left: 3rem;
  margin-bottom: 1rem;
  color: #000;
`;

const StepsContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-left: 3rem;
`;

const Step = styled.p`
  font-size: 1.2rem;
`;

const Stepp = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
`;

const BackButton = styled.button`
  top: 20px;
  left: 20px;
  color: #000;
  border: none;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  svg {
    font-size: 2rem;
  }
`;

export default function CheckoutPage() {
  const [isChecked, setIsChecked] = useState(false);

  // Fonction pour revenir à la page précédente
  const goBack = () => {
    window.history.back();
  };

  return (
    <div>
        {/* Bouton de retour à la page précédente */}
      <BackButton onClick={goBack}>
        <FaArrowLeft />
      </BackButton>
      <Title>CHECKOUT</Title>
      <StepsContainer>
        <Stepp>INFORMATION</Stepp>
        <Step>SHIPPING</Step>
        <Step>PAYMENT</Step>
      </StepsContainer>
      <Container>
        <FormSection>
          <h3>CONTACT INFO</h3>
          <Form>
            <Input type="email" placeholder="Email" />
            <Input type="tel" placeholder="Phone" />
          </Form>

          <h3>SHIPPING ADDRESS</h3>
          <Form>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Input type="text" placeholder="First Name" />
              <Input type="text" placeholder="Last Name" />
            </div>
            <Input type="text" placeholder="Country" />
            <Input type="text" placeholder="State / Region" />
            <Input type="text" placeholder="Address" />
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Input type="text" placeholder="City" />
              <Input type="text" placeholder="Postal Code" />
            </div>
          </Form>
          <Button>Shipping →</Button>
        </FormSection>

        <OrderSummary>
          <h3>YOUR ORDER</h3>
          <ProductItem>
            <ProductImage src="https://static.kiabi.be/images/t-shirt-imprime-manches-courtes-turquoise-brw06_9_hd1.jpg?width=800" alt="Basic Heavy T-Shirt" />
            <div>
              <p>Basic Heavy T-Shirt</p>
              <p>Black/L</p>
              <p>(1)</p>
              <p>$99</p>
            </div>
          </ProductItem>
          <ProductItem>
            <ProductImage src="https://assets.maisoncashmere.com/media/catalog/product/c/o/cotton-100-men-s-tshirt-mcm044-xd-2.jpg" alt="Basic Fit T-Shirt" />
            <div>
              <p>Basic Fit T-Shirt</p>
              <p>Black/L</p>
              <p>(1)</p>
              <p>$99</p>
            </div>
          </ProductItem>

          <TotalContainer>
            <TotalItem>Subtotal: $180.00</TotalItem>
            <TotalItem>Shipping: Calculated at next step</TotalItem>
            <Total>Total: $180.00</Total>
          </TotalContainer>
        </OrderSummary>
      </Container>
    </div>
  );
}
