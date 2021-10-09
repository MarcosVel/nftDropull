import { useEffect, useState } from 'react'
import * as C from './styles'
import api from '../../services/api';

export default function Collections() {
  const [ assets, setAssets ] = useState([]);

  useEffect(() => {
    async function loadApi() {
      const response = await api.get('/assets', {
        params: {
          // offset: 100,
          limit: 20,
          order_direction: 'desc',
        }
      });
      setAssets(response.data.assets);

      console.log(response.data.assets);
    }

    loadApi()
  }, [])

  return (
    <C.Container>
      { assets.map(asset => (
        <C.Card key={ asset.id }>
          <C.Image src={ asset.image_url } />
          <C.NftInfo>
            <C.CreatorImg src={ asset.creator?.profile_img_url }></C.CreatorImg>
            <C.ArtCreator>
              <C.ArtName title={ asset.name }>{ asset.name }</C.ArtName>
              <C.CreatorName title={ asset.creator?.user?.username }>{ asset.creator?.user?.username }</C.CreatorName>
            </C.ArtCreator>
          </C.NftInfo>
        </C.Card>
      )) }
    </C.Container>
  )
}
