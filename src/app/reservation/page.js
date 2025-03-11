"use client"; 

import React, { useState } from 'react';
import styled from 'styled-components';
// Assure-toi de mettre le bon chemin pour le composant Navbar
import Navbar from '../Nav/page';  // Importation du composant Navbar

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  margin-left: 3rem;
`;

const ProductContainer = styled.div`
  display: flex; 
  gap: 2rem;      
`;

const ProductCard = styled.div`
  padding: 1rem;
  width: 45%;
  position: relative;  
  display: flex;
  flex-direction: column;  
  justify-content: space-between;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;  
  align-items: center;
  gap: 0.5rem; 
`;

const QuantityControl = styled.div`
  display: flex;
  flex-direction: column;  
  gap: 0.5rem;  
  align-items: center;  
  position: absolute;  
  top: 50%;  
  right: -20px;  
  transform: translateY(-50%);  
`;

const ProductImage = styled.img`
  width: 100%;          
  height: 400px;        
  object-fit: cover;    
  margin-bottom: 1rem;
  position: relative;   
`;

const ProductText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  gap: 0.5rem; 
  text-align: center;  
`;

const Summary = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 1rem; 
`;

const Button = styled.button`
  width: 100%;
  background-color: ${props => (props.disabled ? '#ccc' : '#ccc')};
  color: #000;
  padding: 0.5rem;
  border: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const CheckboxLabel = styled.label`
  margin-bottom: 1rem; 
`;

const FavoriteIcon = styled.div`
  position: absolute;  
  top: 10px;
  right: 20px;        
  font-size: 2rem;    
  color: ${props => (props.favorited ? 'red' : 'gray')};  
  cursor: pointer;    
`;

const Title = styled.h1`
  font-size: 20px;
  margin-left: 6rem;
  color: #000;
  margin-top: 10rem;

`;

// Le composant "Button" est maintenant remplacé par un lien
const LinkButton = styled.a`
  width: 100%;
  display: inline-block;
  background-color: ${props => (props.disabled ? '#ccc' : '#4CAF50')};
  color: #fff;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export default function ShoppingBag() {
  // Définir un état pour la quantité de chaque produit
  const [quantities, setQuantities] = useState({
    fullSleeveZipper: 1,
    slimFitTShirt: 1
  });

  const [favorited, setFavorited] = useState({
    fullSleeveZipper: false,
    slimFitTShirt: false
  });

  // Fonction pour ajuster la quantité
  const handleQuantityChange = (product, operation) => {
    setQuantities(prevQuantities => {
      const newQuantity = operation === 'increase' 
        ? prevQuantities[product] + 1 
        : prevQuantities[product] > 1 
          ? prevQuantities[product] - 1 
          : 1;  
      return { ...prevQuantities, [product]: newQuantity };
    });
  };

  const handleFavoriteClick = (product) => {
    setFavorited(prev => ({
      ...prev,
      [product]: !prev[product]
    }));
  };

  const [isChecked, setIsChecked] = useState(false); 

  return (
    <div>
      {/* Ajout du Navbar en haut de la page */}
      <Navbar homePath="/" /> 

      <Title>Shopping Bag</Title> {/* Ajout du titre en haut */}
      <Container>
        <ProductContainer>

          <ProductCard>
            <ProductImage src="https://static.kiabi.be/images/t-shirt-imprime-manches-courtes-turquoise-brw06_9_hd1.jpg?width=800" alt="Full Sleeve Zipper" />
            <FavoriteIcon 
              favorited={favorited.fullSleeveZipper} 
              onClick={() => handleFavoriteClick('fullSleeveZipper')}
            >
              ♥
            </FavoriteIcon>
            <ProductText>
              <h3>Full Sleeve Zipper</h3>
              <p>$99</p>
            </ProductText>
            <ProductDetails>
              {/* Le texte est maintenant séparé de la zone de contrôle de quantité */}
            </ProductDetails>
            <QuantityControl>
              <Button onClick={() => handleQuantityChange('fullSleeveZipper', 'decrease')}>-</Button>
              <p>{quantities.fullSleeveZipper}</p>
              <Button onClick={() => handleQuantityChange('fullSleeveZipper', 'increase')}>+</Button>
            </QuantityControl>
          </ProductCard>

          <ProductCard>
            <ProductImage src="https://assets.maisoncashmere.com/media/catalog/product/c/o/cotton-100-men-s-tshirt-mcm044-xd-2.jpg" alt="Basic Slim Fit T-Shirt" />
            <FavoriteIcon 
              favorited={favorited.slimFitTShirt} 
              onClick={() => handleFavoriteClick('slimFitTShirt')}
            >
              ♥
            </FavoriteIcon>
            <ProductText>
              <h3>Basic Slim Fit T-Shirt</h3>
              <p>$99</p>
            </ProductText>
            <ProductDetails>
              {/* Le texte est maintenant séparé de la zone de contrôle de quantité */}
            </ProductDetails>
            <QuantityControl>
              <Button onClick={() => handleQuantityChange('slimFitTShirt', 'decrease')}>-</Button>
              <p>{quantities.slimFitTShirt}</p>
              <Button onClick={() => handleQuantityChange('slimFitTShirt', 'increase')}>+</Button>
            </QuantityControl>
          </ProductCard>
        </ProductContainer>

        <Summary>
          <h3>ORDER SUMMARY</h3>
          <p>Subtotal: ${99 * quantities.fullSleeveZipper + 99 * quantities.slimFitTShirt}</p>
          <p>Shipping: $10</p>
          <h3>Total: ${99 * quantities.fullSleeveZipper + 99 * quantities.slimFitTShirt + 10}</h3> {/* Total calculé */}
          
          <CheckboxLabel>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            I agree to the Terms and Conditions
          </CheckboxLabel>

          <LinkButton 
            href={isChecked ? "/payement" : "#"} // Remplacer "/next-page" par le lien vers ta page suivante
            disabled={!isChecked}
          >
            CONTINUE
          </LinkButton>
        </Summary>
      </Container>
    </div>
  );
}
