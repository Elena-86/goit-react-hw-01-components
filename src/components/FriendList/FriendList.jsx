import PropTypes from 'prop-types';
import { FriendListContainer } from './FriendList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export function FriendList({ friends }) {
  return (
    <FriendListContainer>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </FriendListContainer>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
  ),
};
