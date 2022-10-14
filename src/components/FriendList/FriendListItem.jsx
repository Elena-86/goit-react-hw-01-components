import PropTypes from 'prop-types';
import {
  FriendListItemContainer,
  FriendListItemStatus,
  FriendListItemAvatar,
  FriendListItemName,
} from './FriendListItem.styled';

export function FriendListItem({ friend: { name, avatar, isOnline } }) {
  return (
    <FriendListItemContainer>
      <FriendListItemStatus isOnline={isOnline}>●</FriendListItemStatus>

      <FriendListItemAvatar className="avatar" src={avatar} alt="" width="48" />
      <FriendListItemName>{name}</FriendListItemName>
    </FriendListItemContainer>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
