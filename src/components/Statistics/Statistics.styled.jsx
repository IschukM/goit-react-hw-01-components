import styled from '@emotion/styled';

export const Card = styled.section`
  background-color: #00000;
  border-radius: 8px;
  width: 300px;
  box-shadow: 8px 8px 20px -6px rgba(212, 175, 55, 0.6);
  margin: auto;
  margin-bottom: 64px;
`;

export const Title = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  margin: 0;
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #777f8c};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
     
  
`;
export const StatItem = styled.li`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 16px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${props => props.color};
`;

export const Label = styled.span`
  text-align: center;
`;
export const Percentage = styled.span`
  font-weight: bold;
  text-align: center;
  line-height: 1.5;
  font-size: 16px;
`;
