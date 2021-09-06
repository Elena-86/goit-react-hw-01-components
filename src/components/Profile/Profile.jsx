import defaultImage from '../../components/default.jpg';
import PropTypes from 'prop-types';
import {
  ProfileCard,
  CardContainer,
  Description,
  AvatarImage,
  UserName,
  UserTag,
  UserLocation,
  Stats,
  StatsListElement,
  Label,
  Quantity,
} from './Profile.styled';

export function Profile({ name, tag, location, avatar = defaultImage, stats }) {
  return (
    <ProfileCard>
      <CardContainer>
        <Description>
          <AvatarImage
            src={avatar}
            alt="Аватар пользователя"
            className="avatar"
          />
          <UserName>{name}</UserName>
          <UserTag>{tag}</UserTag>
          <UserLocation>{location}</UserLocation>
        </Description>

        <Stats>
          <StatsListElement>
            <Label>Followers</Label>
            <Quantity>{stats.followers}</Quantity>
          </StatsListElement>
          <StatsListElement>
            <Label>Views</Label>
            <Quantity>{stats.views}</Quantity>
          </StatsListElement>
          <StatsListElement>
            <Label>Likes</Label>
            <Quantity>{stats.likes}</Quantity>
          </StatsListElement>
        </Stats>
      </CardContainer>
    </ProfileCard>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
