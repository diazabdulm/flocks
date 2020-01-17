import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const IconContainer = styled(FontAwesomeIcon)`
  font-size: ${props => (props.isLarge ? "45px" : "35px")};
`;
