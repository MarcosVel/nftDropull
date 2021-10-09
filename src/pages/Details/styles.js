import styled from "styled-components";
import { COLORS } from "../../colors";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 580px));
  justify-content: center;
  grid-gap: 30px;
`

export const Image = styled.img`
  width: 100%;
  max-width: 500px;
  max-height: 500px;
  object-fit: fill;
  margin: 0 auto;
`

export const NftInfo = styled.div`
  padding: 8px 32px;
`

export const NameShare = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const ArtName = styled.h2`
  color: ${ COLORS.white };
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ButtonsShare = styled.div`
  display: flex;
  flex-direction: row;
`

export const EachButtonsShare = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background-color: transparent;
  color: ${ COLORS.gray };
  border: 1px solid ${ COLORS.gray };
  border-radius: 3px;
  margin-left: 8px;
  transition: ease-in-out .2s;

  &:hover { 
    color: ${ COLORS.white };
    border-color: ${ COLORS.white };
  }
`

export const ArtCreator = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`

export const CreatorImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 8px;
`

export const CreatedBy = styled.p`
  color: ${ COLORS.gray };
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const CreatorName = styled.span`
  color: ${ COLORS.blue };
  font-size: inherit;
  font-weight: 500;
`

export const DescriptionTitle = styled.h4`
  margin-bottom: 8px;
`

export const Description = styled.p`
  margin-bottom: 32px;
`

export const CreatedDate = styled.span`
  color: ${ COLORS.white };
`