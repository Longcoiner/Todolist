import React from 'react'
import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px 20px;
  border: 2px solid #ddd;
  margin-top:100px;
`;

interface IProps {
    $width?: string;
    align?: string
}

export const Filter = styled.div`
  width: ${(props: IProps) => props.$width && props.$width};
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: ${(props:IProps) => props.$width && props.$width};
  border: 1px solid #141414;
  padding: 10px 10px;
  outline: none;
  &::placeholder {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
  }
  &:hover {
    box-shadow: 0px 4px 8px 0px #33333340;
  }
  &:focus,
  &:active {
    box-shadow: none;
  }
`;
export const Button = styled.button`
  width: ${(props:IProps) => props.$width && props.$width};
  background-color: #ccc;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: #686f7a;
  margin-top: 50px;
  padding-left: 10px;
  text-align: ${(props: IProps) => (props.align ? props.align : "left")};
`;

export const Th = styled.th`
  font-size: 18px;
  color: #686f7a;
  font-weight: 700;
  opacity: 0.65;
  border-right: 1px solid #ccc;
  padding-left: 10px;
  border: 1px solid #ddd;
  &:hover {
    background-color: #ddd;
  }
`;
export const Td = styled.td`
  text-align: ${(props: IProps) => (props.align ? props.align : "left")};
  padding-left: 10px;
  border: 1px solid #ddd;
  &:hover {
    background-color: #ddd;
  }
`;
export const Tr=styled.tr``;


export const Select = styled.select`
width: 100%;
height:35px;
background: white;
color: gray;
font-size: 16px;
border:none;
     option {
       color: #686f7a;
       background: white;
       font-weight: small;
       display: flex;
       white-space: pre;
     }
`;
export const Daysection = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-around;
`;

export const Theday = styled.button`
  padding: 15px 15px;
  background-color: #ddd;
  border: none;
  font-size: 16px;
`;

export const Delete = styled.button`
  padding: 10px 10px;
  background-color: red;
  border: none;
  color:#fff;
  font-size: 16px;
`;

export const Edit = styled.button`
  padding: 10px 10px;
  background-color: #ccc;
  border: none;
  color:#fff;
  font-size: 16px;
`;