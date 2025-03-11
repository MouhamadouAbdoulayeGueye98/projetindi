// 'use client';

// import styled from 'styled-components';
// import Image from 'next/image';
// import Nav from '../Nav/page';

// const Container = styled.div`
//   background: #f2f2f2;
//   min-height: 100vh;
//   font-family: Arial, sans-serif;
//   padding: 20px;
// `;

// const Filters = styled.div`
//   width: 20%;
//   padding: 20px;
// `;

// const ProductGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 20px;
// `;

// const ProductCard = styled.div`
//   background: #fff;
//   border-radius: 8px;
//   padding: 15px;
//   text-align: center;
// `;

// const ProductImage = styled(Image)`
//   border-radius: 8px;
//   width: 100%;
//   height: auto;
// `;

// const ProductTitle = styled.h3`
//   font-size: 16px;
//   margin: 10px 0 5px;
// `;

// const ProductPrice = styled.p`
//   font-weight: bold;
// `;

// export default function ProductsPage() {
//   return (
//     <Container>
//       <Nav />  {/* Ajout de la barre de navigation */}
//       <h1>PRODUCTS</h1>
//       <div style={{ display: 'flex' }}>
//         <Filters>
//           <h2>Filters</h2>
//           <p>Size: XS, S, M, L, XL, 2X</p>
//           <p>Availability: 450 available, 18 out of stock</p>
//         </Filters>

//         <ProductGrid>
//           <ProductCard>
//             <ProductImage src="/images/product1.jpg" width={300} height={400} alt="Product 1" />
//             <ProductTitle>Basic Slim Fit T-Shirt</ProductTitle>
//             <ProductPrice>$199</ProductPrice>
//           </ProductCard>

//           <ProductCard>
//             <ProductImage src="/images/product2.jpg" width={300} height={400} alt="Product 2" />
//             <ProductTitle>Basic Heavy Weight T-Shirt</ProductTitle>
//             <ProductPrice>$199</ProductPrice>
//           </ProductCard>

//           <ProductCard>
//             <ProductImage src="/images/product3.jpg" width={300} height={400} alt="Product 3" />
//             <ProductTitle>Full Sleeve Zipper</ProductTitle>
//             <ProductPrice>$199</ProductPrice>
//           </ProductCard>
//         </ProductGrid>
//       </div>
//     </Container>
//   );
// }
