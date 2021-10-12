import { Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 580px));
  justify-content: center;
  grid-gap: 30px;
  margin-top: 32px;
`

export const Image = styled.img`
  width: 100%;
  max-width: 500px;
  max-height: 500px;
  object-fit: fill;
  margin: 0 auto;
  border-radius: 4px;
`

export const NftInfo = styled.div`
  padding: 8px 32px;

  @media (max-width: 560px) {
    padding: 8px 0;
  }
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

export const EachButtonsShare = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 33px;
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

export const Owner = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`

export const Creator = styled.div`
  display: flex;
  align-items: center;
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

export const Label = styled.h4`
  line-height: 0;
`

export const Description = styled.p`
  margin-top: 16px;
  margin-bottom: 32px;
`

export const CreatedDate = styled.span`
  color: ${ COLORS.white };
`

export const AccordionStyled = styled(Accordion)`
  border-radius: 4px !important;
  background-color: ${ COLORS.lightBlack } !important;
  margin-top: 24px !important;
`

export const AccordionSummaryStyled = styled(AccordionSummary)`
  color: ${ COLORS.white } !important;
  polygon { 
    fill: ${ COLORS.white } !important;
  }
`

export const AccordionDetailsStyled = styled(AccordionDetails)`
  padding: 16px !important;
  border-top: 1px solid ${ COLORS.gray } !important;
`

export const List = styled.ul``

export const RowList = styled.li`
  display: flex;
  justify-content: space-between;
`

export const DetailsLabel = styled.p`
  color: ${ COLORS.white } !important;
  margin-bottom: 8px;
`


export const TextDetails = styled.p`
  color: ${ COLORS.gray } !important;
  margin-bottom: 8px;
  max-width: 185px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: end;
`