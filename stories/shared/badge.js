import styled from "styled-components";

export const Badge = styled.span`
  position: absolute;
  //   top: ${(props) => (props.isOpen ? "40px" : "9px")};
  //   right: ${(props) => (props.isOpen ? "20" : "9px")};
  top: 40px;
  margin-left: 15px;
  padding: 3.5px 5.5px;
  height: 18;
  width: 18;
  border-radius: 50%;
  background: red;
  font-size: 9px;
  line-height: 8px;
  color: white;
  font-weight: 600;
`;
