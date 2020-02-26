import styled from "styled-components";
import { Col } from "antd";

export const NameSpan = styled.span`
  padding: 10px;
  font-size: 15px;
  font-weight: 600;
`;

export const HrTag = styled.hr`
  border: 1px solid #e6e5e5;
`;

export const ListDiv = styled.div`
  cursor: pointer;
`;

export const ProfileCol = styled(Col)`
  border-radius: 25px;
  padding: 30px;
  margin: auto;
  width: 500px;
  z-index: 222;
  background-color: white;
  margin-top: -15%;
`;

export const HeadPara = styled.p`
  text-align: center;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
`;

export const DivScroll = styled.div`
  margin: auto;
  align-content: center;
  overflow-y: scroll;
  height: 400px;
`;