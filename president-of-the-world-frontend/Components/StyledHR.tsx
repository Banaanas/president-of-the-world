import styled from "@emotion/styled";

import appTheme from "../styles/appTheme";

interface StyledHRProps {
  width?: string;
}

const StyledHR = styled.hr<StyledHRProps>`
  all: unset;
  width: ${({ width }) => width || "80%"};
  height: 4px;
  background-color: ${appTheme.colors.primary["500"]};
  background: linear-gradient(
    to right,
    transparent 0%,
    ${appTheme.colors.primary["500"]} 50%,
    transparent 100%
  );
  border-radius: 4px;
`;

export default StyledHR;
