import styled from '@emotion/styled';

export const Header = styled.h2`
  text-transform: uppercase;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`;

export const List = styled.ul`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 64px;
  padding: 0;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 8px 8px 20px -6px rgba(212, 175, 55, 0.6);
  margin-bottom: 8p;
`;
export const Chip = styled.span`
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: ${props => {
    switch (props.status) {
      case 'Online':
        return '#4caf50';
      case 'Offline':
        return '#f44336';
      default:
        return '#f44336';
    }
  }};
`;
export const Avatar = styled.img`
  margin: 0px 10px;
  border: 2px solid #e7a61a;
  border-radius: 50%;
`;
export const Name = styled.p`
  font-weight: 700;
  margin-left: 8px;
`;
