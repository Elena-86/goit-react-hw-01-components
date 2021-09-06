import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  display: block;
`;

export const CardContainer = styled.div`
  display: block;
  height: 326px;
  width: 180px;
  margin: auto;
  border: solid grey;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AvatarImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  height: 200px;
  width: 150px;
`;

export const UserName = styled.p`
  font-weight: 700;
  font-family: 'Fira Sans';
  line-height: 1.7;
  color: #000000;
  margin: 2px;
  font-size: 18px;
`;
export const UserTag = styled.p`
  font-weight: 500;
  font-family: 'Fira Sans';
  line-height: 1.5;
  color: grey;
  margin: 2px;
  font-size: 15px;
`;
export const UserLocation = styled.p`
  font-weight: 500;
  font-family: 'Fira Sans';
  line-height: 1.5;
  color: grey;
  margin: 2px;
  font-size: 15px;
`;

export const Stats = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  justify-content: space-between;
  padding-inline-start: 0px;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
`;

export const StatsListElement = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid grey;
  width: 60px;
`;

export const Label = styled.span`
  ont-weight: 500;
  font-family: 'Fira Sans';
  line-height: 1.16;
  font-size: 12px;
  color: grey;
`;

export const Quantity = styled.span`
  ont-weight: 700;
  font-family: 'Fira Sans';
  line-height: 1.16;
  font-size: 14px;
  color: #000000;
`;
