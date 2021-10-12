import * as C from './styles'
import { useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import { FiExternalLink, FiShare2 } from "react-icons/fi";
import { FcExpand } from "react-icons/fc";

export default function Details() {
  const details = useSelector(state => state.detail);

  console.log('Detalhes: ', details);

  return (
    <>
      {
        details.map(detail => (
          <C.Container key={ detail.id }>
            <C.Image src={ detail.image_url } alt={ detail.name } />

            {/* NOME E BOTÕES EXTERNOS */ }
            <C.NftInfo>
              <C.NameShare>
                <C.ArtName title={ detail.name }>{ detail.name != null ? detail.name : '*Sem nome*' }</C.ArtName>
                <C.ButtonsShare>
                  <C.EachButtonsShare
                    title='Link externo'
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

              {/* EM POSSE DE */ }
              <C.Owner>
                <C.CreatorImg src={ detail.owner?.profile_img_url } alt={ detail.owner?.user?.username } />
                <C.CreatedBy>Em posse de&nbsp;
                  <C.CreatorName title={ detail.owner?.user?.username != null ? detail.owner?.user?.username : 'O usuário esqueceu do nome 😂' }>
                    { detail.owner?.user?.username != null ? detail.owner?.user?.username : '👻' }
                  </C.CreatorName>
                </C.CreatedBy>
              </C.Owner>

              <C.Label>Descrição:</C.Label>
              <C.Description>{ detail.description != null ? detail.description : 'O criador deste NFT não adicionou uma descrição. 😢' }</C.Description>

              <C.CreatedBy>Data de criação:&nbsp;
                <C.CreatedDate>{ format(parseISO(detail.asset_contract?.created_date), 'dd/MM/yyyy') }</C.CreatedDate>
              </C.CreatedBy>

              <C.AccordionStyled expanded>
                <C.AccordionSummaryStyled>
                  <C.Label>Criador</C.Label>
                </C.AccordionSummaryStyled>
                <C.AccordionDetailsStyled>
                  <C.Creator>
                    <C.CreatorImg src={ detail.creator?.profile_img_url } alt={ detail.creator?.user?.username } />
                    <C.CreatedBy>Criado por&nbsp;
                      <C.CreatorName title={ detail.creator?.user?.username != null ? detail.creator?.user?.username : 'O usuário esqueceu do nome 😂' }>
                        { detail.creator?.user?.username != null ? detail.creator?.user?.username : '👻' }
                      </C.CreatorName>
                    </C.CreatedBy>
                  </C.Creator>
                </C.AccordionDetailsStyled>
              </C.AccordionStyled>
              <C.AccordionStyled>
                <C.AccordionSummaryStyled
                  expandIcon={ <FcExpand /> }
                >
                  <C.Label>Detalhes</C.Label>
                </C.AccordionSummaryStyled>
                <C.AccordionDetailsStyled>
                  <C.List>
                    <C.RowList>
                      <C.DetailsLabel>Endereço de contrato</C.DetailsLabel>
                      <C.TextDetails title={ detail.asset_contract?.address }>{ detail.asset_contract?.address }</C.TextDetails>
                    </C.RowList>
                    <C.RowList>
                      <C.DetailsLabel>Token ID</C.DetailsLabel>
                      <C.TextDetails title={ detail.token_id }>{ detail.token_id }</C.TextDetails>
                    </C.RowList>
                    <C.RowList>
                      <C.DetailsLabel>Token Standard</C.DetailsLabel>
                      <C.TextDetails title={ detail.asset_contract?.schema_name }>{ detail.asset_contract?.schema_name }</C.TextDetails>
                    </C.RowList>
                  </C.List>
                </C.AccordionDetailsStyled>
              </C.AccordionStyled>

            </C.NftInfo>
          </C.Container>
        ))
      }
    </>
  )
}
