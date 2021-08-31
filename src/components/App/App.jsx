import user from '../../user.json';
import {Profile} from 'Components/Profile/Profile';
import { Container } from './App.styled';

export function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Container>
  );
};
