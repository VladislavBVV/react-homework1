import styled from 'styled-components';

export const UserProfile = styled.div`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  margin-bottom: ${({ theme }) => `${theme.spacing(10)}`};
  box-shadow: 14px 17px 29px -9px rgba(89, 86, 89, 1);
`;


export const Discription = styled.div`
padding: ${({ theme }) => `${theme.spacing(90)}`};
text-align: center`;

export const Stats = styled.div`
padding: ${({ theme }) => `${theme.spacing(90)}`};
list-style: none;
text-align: center`;
