import { css } from "@emotion/react";
import styled from "@emotion/styled";
import NextLink from "next/link";
import React from "react";

import appTheme from "../styles/appTheme";

interface WrapperProps {
  href?: string;
}

const commonStyle = css`
  width: fit-content;
  padding: 8px 16px;
  color: ${appTheme.colors.secondary["500"]};
  font-weight: ${appTheme.fontWeight.bold};
  font-size: ${appTheme.fontSize.sm};
  text-transform: uppercase;
  background-color: ${appTheme.colors.warning["500"]};
  border-radius: 8px;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);

  @media ${appTheme.queries.tabletAndUp} {
    font-size: ${appTheme.fontSize.xl};
  }

  &:hover {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  :active {
    transform: translateY(-2px);
  }
`;

const Button = styled.button<WrapperProps>`
  ${commonStyle}
`;

const StyledNextLink = styled(NextLink)`
  ${commonStyle}
`;

interface LinkButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  delegated?: Array<unknown>;
}

const LinkButton = ({
  href,
  onClick,
  children,
  ...delegated
}: LinkButtonProps) => {
  if (href) return <StyledNextLink href={href}>{children}</StyledNextLink>;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Button onClick={onClick} {...delegated}>
      {children}
    </Button>
  );
};

export default LinkButton;
