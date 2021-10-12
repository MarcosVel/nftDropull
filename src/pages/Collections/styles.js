import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`

export const ContainerCollectionPerfil = styled.div`
  margin-bottom: 16px;
`

export const ContainerUserPerfil = styled.div`
  display: flex;
  align-items: center;
  padding: 32px;
  background-color: ${ COLORS.lightBlack };
  border-radius: 10px;
  margin-bottom: 24px;
`

export const UserNamePerfil = styled.div`
  flex-direction: column;
  margin-left: 8px;
`

export const Label = styled.h5`
  color: ${ COLORS.white };
  font-size: ${ props => props.fontSize }px;
`

export const ContainerNfts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 70px;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${ COLORS.white };
  border-radius: 8px;
  transition: .3s ease-in-out;
  
  &:hover { 
    cursor: pointer;
    box-shadow: 0 5px 30px #393939;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 300px;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  object-fit: fill;
`

export const NftInfo = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
  height: auto;
`

export const CreatorImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 8px;
`

export const ArtCreator = styled.div`
  display: grid;
`

export const ArtName = styled.h3`
  color: ${ COLORS.black };
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const CreatorName = styled.p`
  color: ${ COLORS.blue };
  font-size: ${ props => props.fontSize }px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`