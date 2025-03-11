'use client';

import styled from 'styled-components';
import Nav from './Nav/page';  // Assurez-vous que le chemin d'importation est correct

const Container = styled.div`
  background: #f2f2f2;
  min-height: 100vh;
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const SearchBar = styled.input`
  width: 300px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CollectionSection = styled.section`
  padding: 40px;
`;

const CollectionTitle = styled.h1`
  font-weight: bold;
  font-size: 36px;
`;

const CollectionSubtitle = styled.p`
  font-size: 18px;
`;

export default function Home() {
  return (
    <Container>
      <Header>
        <Nav />  {/* Barre de navigation réutilisable ici */}
      </Header>
      <CollectionSection>
        <SearchBar placeholder="Search" />

        <CollectionTitle>NEW COLLECTION</CollectionTitle>
        <CollectionSubtitle>Summer 2024</CollectionSubtitle>
      </CollectionSection>
    </Container>
  );
}
