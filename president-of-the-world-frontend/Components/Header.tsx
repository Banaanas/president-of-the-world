import { ApolloError, useApolloClient } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import styled from "@emotion/styled";
import NextLink from "next/link";
import { useDispatch, useSelector } from "react-redux";

import navLinks from "../data/navLinks";
import { resetAuthenticatedUser } from "../store/slices/authenticationSlice";
import { RootState } from "../store/store";
import appTheme from "../styles/appTheme";
import toasts from "../utils/toasts";
import GitHubBanner from "./GitHubBanner";
import LogoIcon from "./Illustrations/LogoIcon";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px 16px 0 16px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const List = styled.ul`
  display: flex;
  column-gap: 4px;
  align-items: center;
  justify-content: space-around;

  @media ${appTheme.queries.tabletAndUp} {
    column-gap: 16px;
  }
`;

const Li = styled.li`
  list-style: none;
`;

const StyledLink = styled.a`
  position: relative;
  z-index: 1;
  display: flex;
  padding: 2px 8px;
  overflow: hidden;
  color: ${appTheme.colors.secondary["500"]};
  font-weight: ${appTheme.fontWeight.bold};
  text-decoration: none;
  list-style: none;
  background-color: ${appTheme.colors.primary["500"]};
  border-radius: 8px;
  transition: opacity 250ms ease;

  @media ${appTheme.queries.tabletAndUp} {
    padding: 8px;
  }

  ::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    display: block;
    background-color: ${appTheme.colors.tertiary["500"]};
    opacity: 0;
    transition: opacity 250ms ease;
    content: "";
  }

  :hover::before {
    opacity: 1;
  }
`;

const StyledLiGradient = styled(NextLink)`
  padding: 2px 8px;
  color: ${appTheme.colors.secondary["500"]};
  font-weight: ${appTheme.fontWeight.bold};
  list-style: none;
  background-color: ${appTheme.colors.tertiary["500"]};
  background: linear-gradient(
    ${appTheme.colors.tertiary["500"]},
    ${appTheme.colors.tertiary["300"]}
  );
  border-radius: 8px;

  @media ${appTheme.queries.tabletAndUp} {
    margin: 0 16px;
    padding: 8px;
  }
`;

const Header = () => {
  // isAuthenticated - Redux State
  const isAuthenticated = useSelector(
    (state: RootState) => state.userAuthentication.isAuthenticated,
  );

  // useDispatch - Redux State
  const dispatch = useDispatch();

  // useApolloClient - Apollo Client
  const client = useApolloClient();

  // Chakra-UI Toast
  const toast = useToast();

  // Logout - Function
  const handleLogout = () => {
    try {
      // Clear localStorage
      localStorage.clear();
      // Reset Apollo Store / Token
      // eslint-disable-next-line no-void
      void client.resetStore();
      // Reset Authenticated User - Dispatch - Redux State
      dispatch(resetAuthenticatedUser());
      // Display Success Toast
      toast(toasts.logout);
    } catch (error) {
      // Display Error Toast
      toast(toasts.error(error as ApolloError));
    }
  };

  return (
    <HeaderContainer>
      <NextLink href={navLinks.home.href}>
        <LogoIcon />
      </NextLink>
      <Nav>
        <List>
          <Li>
            <StyledLiGradient href={navLinks.myCandidate.href}>
              My Candidate
            </StyledLiGradient>
          </Li>
          <Li>
            {isAuthenticated ? (
              <StyledLink as="button" onClick={handleLogout}>
                Logout
              </StyledLink>
            ) : null}
          </Li>
        </List>
      </Nav>
      <GitHubBanner />
    </HeaderContainer>
  );
};

export default Header;
