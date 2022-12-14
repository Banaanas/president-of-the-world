import styled from "@emotion/styled";
import { FaOm as AumIcon } from "react-icons/fa";

import { externalLinks } from "../../data/external-links";
import appTheme from "../../styles/appTheme";
import ContactIcons from "./ContactIcons";

const StyledAumIcon = styled(AumIcon)`
  color: ${appTheme.colors.tertiary["500"]};
  font-size: 16px;
`;

const StyledSpan = styled.span`
  display: flex;
  column-gap: 4px;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 8px 0;
  font-size: 16px;

  a {
    margin-right: 4px;
    color: ${appTheme.colors.tertiary["500"]};
    text-decoration: none;
  }
`;

const SubFooter = () => (
  <>
    <StyledSpan>
      <span>
        <a
          aria-label="Personal Website"
          href={externalLinks.website.href}
          target="_blank"
          rel="noopener noreferrer"
          title={externalLinks.website.href}
        >
          CyrilO
        </a>
        | Imagined with
      </span>
      <StyledAumIcon />
    </StyledSpan>
    <ContactIcons />
  </>
);

export default SubFooter;
