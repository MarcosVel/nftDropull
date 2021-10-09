import { useEffect, useState } from 'react'
import api from '../../services/api';
import * as C from './styles'
import { FiExternalLink, FiShare2 } from "react-icons/fi";

export default function Details({ navigatePage }) {
  
  return (
    <C.Container>
      <C.Image src='https://lh3.googleusercontent.com/568Pd3tIsb3QrezgfmaQdf7Tedy1gqRgiAN6kArQ8Qc3Y0WWiGBberZu6wMMZd3RHU0rJhw-DPlqwq9ExvpgioUEgX1YFyPdvW902w' />
      <C.NftInfo>
        <C.NameShare>
          <C.ArtName>Nome do NFT Nome do NFT Nome do NFTNome do NFTNome do NFTNome do NFT</C.ArtName>
          <C.ButtonsShare>
            <C.EachButtonsShare title='Abrir link externo' >
              <FiExternalLink size={ 22 } />
            </C.EachButtonsShare>
            <C.EachButtonsShare title='Link permanente' >
              <FiShare2 size={ 22 } />
            </C.EachButtonsShare>
          </C.ButtonsShare>
        </C.NameShare>

        <C.ArtCreator>
          <C.CreatorImg src='https://storage.googleapis.com/opensea-static/opensea-profile/15.png'></C.CreatorImg>
          <C.CreatedBy>Criado por&nbsp;<C.CreatorName>(Nome usuário)</C.CreatorName></C.CreatedBy>
        </C.ArtCreator>

        <C.DescriptionTitle>Descrição:</C.DescriptionTitle>
        <C.Description>Hi, I'm Mr Chongo and thanks for being a part of the NFT family.</C.Description>

        <C.CreatedBy>Data de criação:&nbsp;<C.CreatedDate>(2021-09-12T13:49:33.275382)</C.CreatedDate></C.CreatedBy>
      </C.NftInfo>
    </C.Container>
  )
}
