import PropTypes from 'prop-types';
import {
  List,
  FriendItem,
  Chip,
  Avatar,
  Name,
  Header,
} from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <>
      <Header>Friendlist</Header>
      <List>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendItem key={id}>
            <Chip status={isOnline ? 'Online' : 'Offline'}></Chip>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
          </FriendItem>
        ))}
      </List>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
