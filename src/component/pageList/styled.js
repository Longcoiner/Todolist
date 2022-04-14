import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px 20px;
  border: 2px solid #ddd;
`;

export const Filter = styled.div`
  width: ${(props) => props.$width && props.$width};
  display: flex;
  justify-content: space-between;
`;

export const Research = styled.input`
  width: ${(props) => props.$width && props.$width};
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
  width: ${(props) => props.$width && props.$width};
  background-color: #ccc;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: #686f7a;
  margin-top: 50px;
  padding-left: 10px;
  text-align: ${(props) => (props.align ? props.align : "left")};
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
  text-align: ${(props) => (props.align ? props.align : "left")};
  padding-left: 10px;
  border: 1px solid #ddd;
  &:hover {
    background-color: #ddd;
  }
`;
export const Tr=styled.tr``;


