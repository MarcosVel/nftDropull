import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import InputSearch from '../../components/InputSearch';
import api from '../../services/api';
import * as C from './styles';
import WithoutImage from '../../assets/imgindis.png';

export default function Collections() {
  const dispatch = useDispatch();
  const [ assets, setAssets ] = useState([]);
  const [ searchingUser, setSearchingUser ] = useState(false);

  const history = useHistory();

  useEffect(() => {
    async function loadApi() {
      const response = await api.get('/assets', {
        params: {
          limit: 21,
          order_direction: 'desc',
        }
      });

      setAssets(response.data.assets);
    }

    loadApi()
  }, []);

  function handleDetails(asset) {
    dispatch({
      type: 'GET_DETAILS',
      asset
    });

    history.push('/details');
  }

  async function handleSearchUser(text) {
    try {
      api.get('/assets', {
        params: {
          owner: text,
        }
      })
        .then(response => {
          setAssets(response.data.assets);
          setSearchingUser(true);
        })
        .catch(error => {
          alert('Endereço inválido, tente por exemplo: 0x8676f92151771425c5a506a60105ee1a8e877456')
        })
    } catch (err) {
      alert('Erro ao buscar usuário, tente novamente.')
    }
  }

  function handleResetInput() {
    api.get('/assets', {
      params: {
        limit: 21,
        order_direction: 'desc',
      }
    })
      .then(response => {
        setAssets(response.data.assets);
        setSearchingUser(false);
      })
  }

  return (
    <C.Container>
      <InputSearch onEnter={ handleSearchUser } onReset={ handleResetInput } />
      {/* SESSÃO DE PERFIL DO USUÁRIO */ }
      {
        /**
         * EXEMPLO DE ENDEREÇOS DE CARTEIRAS PARA PESQUISAR 
         * 0xfb95674aa3ed785f218a443281481d5b74c2cc8a
         * 0x8676f92151771425c5a506a60105ee1a8e877456
         * 0xb54cc5a8190ccb0be025373f876ef778a79a6ddc
         */
        searchingUser === true &&
        <>
          { assets[ 0 ]?.owner?.user?.username != null ?
            <C.ContainerCollectionPerfil>
              <C.ContainerUserPerfil>
                <C.CreatorImg src={ assets[ 0 ]?.owner?.profile_img_url } alt={ assets[ 0 ]?.owner?.user?.username } />
                <C.UserNamePerfil>
                  <C.Label fontSize={ 14 }>Nome:</C.Label>
                  <C.CreatorName fontSize={ 18 }>{ assets[ 0 ]?.owner?.user?.username }</C.CreatorName>
                </C.UserNamePerfil>
              </C.ContainerUserPerfil>
              <C.Label fontSize={ 24 }>Coleção do usuário:</C.Label>
            </C.ContainerCollectionPerfil>
            :
            <C.ContainerUserPerfil>
              <C.Label fontSize={ 26 }>Usuário não encontrado</C.Label>
            </C.ContainerUserPerfil>
          }
        </>
      }

      {/* NFTs / COLEÇÕES DE NFTs DO USUÁRIO PESQUISADO */ }
      <C.ContainerNfts>
        { assets.map(asset => (
          <C.Card key={ asset.id } onClick={ () => handleDetails(asset) }>
            <C.Image src={ asset.image_url != null ? asset.image_url : WithoutImage } alt={ asset.name } />
            <C.NftInfo>
              <C.CreatorImg src={ asset.creator?.profile_img_url } alt={ asset.creator?.user?.username } />
              <C.ArtCreator>
                <C.ArtName title={ asset.name != null ? asset.name : 'Nome não disponível' }>{ asset.name != null ? asset.name : '*SemNome*' }</C.ArtName>
                <C.CreatorName fontSize={ 14 } title={ asset.creator?.user?.username != null ? asset.creator?.user?.username : 'O usuário esqueceu do nome 😂' }>
                  { asset.creator?.user?.username != null ? asset.creator?.user?.username : '👻' }
                </C.CreatorName>
              </C.ArtCreator>
            </C.NftInfo>
          </C.Card>
        )) }
      </C.ContainerNfts>
    </C.Container>
  )
}
