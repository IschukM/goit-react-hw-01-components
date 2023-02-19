import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  margin: auto;
  margin-top: 64px;
  margin-bottom: 64px;
  max-width: 360px;
  border: 2px solid black;
  border-radius: 5px;
  position: relative;
  box-shadow: 8px 8px 20px -6px rgba(212, 175, 55, 0.6);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  background-color: gray;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const Avatar = styled.img`
  border: 3px solid coral;
  border-radius: 50%;
  width: 30%;
  margin-top: 16px;
`;

export const Name = styled.p`
  color: coral;
  text-align: center;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const Tag = styled.p`
  text-align: center;
  margin-bottom: 8px;
  color: wheat;
`;

export const Location = styled.p`
  text-align: center;
  margin-bottom: 8px;
  color: wheat;
`;

export const Stats = styled.ul`
  color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f0e68c;
  padding: 16px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const StatsItem = styled.li`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`;

export const Label = styled.span`
  font-weight: bold;
  text-align: center;
  line-height: 1.5;
  font-size: 16px;
`;
export const Quantity = styled.span`
  text-align: center;
  line-height: 1.5;
  font-size: 16px;
`;
