import { useEffect, useState } from 'react'
import * as C from './styles'
import api from '../../services/api';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import InputSearch from '../../components/InputSearch';

export default function Collections() {
  const dispatch = useDispatch();
  const [ assets, setAssets ] = useState([]);
  const [ searchingUser, setSearchUser ] = useState(false);

  const history = useHistory();

  useEffect(() => {
    async function loadApi() {
      const response = await api.get('/assets', {
        params: {
          limit: 20,
          order_direction: 'desc',
        }
      });

      setAssets(response.data.assets);

      console.log(response.data.assets);
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
    // console.log(text)

    try {
      api.get('/assets', {
        params: {
          owner: text,
        }
      })
        .then(response => {
          setAssets(response.data.assets);
          setSearchUser(true);
        })
    } catch (err) {
      alert('Erro ao buscar usuário, tente novamente.')
    }
  }

  function handleResetInput() {
    api.get('/assets', {
      params: {
        limit: 20,
        order_direction: 'desc',
      }
    })
      .then(response => {
        setAssets(response.data.assets);
        setSearchUser(false);
      })
  }

  return (
    <C.Container>
      <InputSearch onEnter={ handleSearchUser } onReset={ handleResetInput } />
      {
        searchingUser === true &&
        <C.CreatorName>
          Nome: { assets[ 0 ].owner?.user?.username }
        </C.CreatorName>
      }
      <C.ContainerNfts>
        { assets.map(asset => (
          <C.Card key={ asset.id } onClick={ () => handleDetails(asset) }>
            <C.Image src={ asset.image_url } />
            <C.NftInfo>
              <C.CreatorImg src={ asset.creator?.profile_img_url } alt={ asset.creator?.user?.username } />
              <C.ArtCreator>
                <C.ArtName title={ asset.name != null ? asset.name : 'Nome não disponível' }>{ asset.name != null ? asset.name : '*SemNome*' }</C.ArtName>
                <C.CreatorName title={ asset.creator?.user?.username != null ? asset.creator?.user?.username : 'O usuário esqueceu do nome 😂' }>
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
