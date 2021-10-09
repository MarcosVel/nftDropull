import * as C from './styles'
import { FiExternalLink, FiShare2 } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';

export default function Details() {
  const details = useSelector(state => state.detail);

  console.log('Detalhes: ', details);

  return (
    <>
      {
        details.map(detail => (
          <C.Container key={ detail.id }>
            <C.Image src={ detail.image_url } alt={ detail.name } />
            <C.NftInfo>
              <C.NameShare>
                <C.ArtName title={ detail.name }>{ detail.name }</C.ArtName>
                <C.ButtonsShare>
                  <C.EachButtonsShare
                    title='Abrir link externo'
                    href={ detail.external_link }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink size={ 22 } />
                  </C.EachButtonsShare>
                  <C.EachButtonsShare
                    title='Link permanente'
                    href={ detail.permalink }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiShare2 size={ 22 } />
                  </C.EachButtonsShare>
                </C.ButtonsShare>
              </C.NameShare>

              <C.ArtCreator>
                <C.CreatorImg src={ detail.creator?.profile_img_url } alt={ detail.creator?.user?.username } />
                <C.CreatedBy>Criado por&nbsp;
                  <C.CreatorName title={ detail.creator?.user?.username != null ? detail.creator?.user?.username : 'O usuário esqueceu do nome 😂' }>
                    { detail.creator?.user?.username != null ? detail.creator?.user?.username : '👻' }
                  </C.CreatorName>
                </C.CreatedBy>
              </C.ArtCreator>

              <C.DescriptionTitle>Descrição:</C.DescriptionTitle>
              <C.Description>{ detail.description != null ? detail.description : 'O criador deste NFT não adicionou uma descrição. 😢' }</C.Description>

              <C.CreatedBy>Data de criação:&nbsp;
                <C.CreatedDate>{ format(parseISO(detail.asset_contract?.created_date), 'dd/MM/yyyy') }</C.CreatedDate>
              </C.CreatedBy>
            </C.NftInfo>
          </C.Container>
        ))
      }
    </>
  )
}
