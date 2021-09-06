import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  margin-top: 60px;
  margin-bottom: 60px;
`;

export const StatisticsTitle = styled.h2`
  display: flex;
  padding: 10px;
  justify-content: center;
`;

export const StatList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  justify-content: center;
  padding-inline-start: 0px;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid grey;
  width: 60px;
  height: 60px;
`;

export const StatListItemLabel = styled.span`
  padding: 4px;
  color: #07050d;
`;
export const StatListItemPercentage = styled.span`
  paddind: 4px;
  color: #34ebde;
`;
