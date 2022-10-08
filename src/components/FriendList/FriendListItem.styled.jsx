import styled from '@emotion/styled';

export const FriendListItemContainer = styled.li`
  padding-left: 16px;
  padding-right: 16px;
  border: solid grey;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
}


`;

export const FriendListItemStatus = styled.span`
  padding: 10px;
  ${props => (props.isOnline ? `color: green;` : `color: red;`)}
`;

export const FriendListItemAvatar = styled.img`
  display: block;
  max-width: 100%;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 20px;
`;

export const FriendListItemName = styled.p`
  font-family: 'Courier New';
  font-size: 16px;
  line-height: 1.7;
  font-weight: 800px;
`;
