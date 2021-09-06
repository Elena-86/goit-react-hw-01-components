import PropTypes from 'prop-types';
import {
  FriendListItemContainer,
  FriendListItemStatus,
  FriendListItemAvatar,
  FriendListItemName,
} from './FriendListItem.styled';

export function FriendListItem(prop) {
  const friend = prop.friend;
  return (
    <FriendListItemContainer>
      <FriendListItemStatus isOnline={friend.isOnline}>●</FriendListItemStatus>

      <FriendListItemAvatar
        className="avatar"
        src={friend.avatar}
        alt=""
        width="48"
      />
      <FriendListItemName>{friend.name}</FriendListItemName>
    </FriendListItemContainer>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};
