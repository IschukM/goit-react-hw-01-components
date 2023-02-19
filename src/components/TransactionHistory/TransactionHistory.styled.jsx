import styled from '@emotion/styled';

export const Table = styled.table`
  width: 360px;
  border: 15px solid ${props => props.theme.colors.white};
  border-collapse: separate;
  border-radius: 4px;
  margin-bottom: 64px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 8px 8px 20px -6px rgba(212, 175, 55, 0.6);
`;

export const Tbody = styled.tbody`
  text-align: center;
`;

export const Thead = styled.thead`
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
`;

export const Tr = styled.tr`
  padding: 12px;
  border: 1px solid ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.purple};
  color: ${props => props.theme.colors.white}; ;
`;

export const Th = styled.th`
  font-weight: bold;
  padding: 12px;
  background: ${props => props.theme.colors.gold};
  border: 1px solid ${props => props.theme.colors.white};
`;
export const Td = styled.td`
  padding: 12px;
  border: 1px solid ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.purple};
  color: ${props => props.theme.colors.gold};
`;
