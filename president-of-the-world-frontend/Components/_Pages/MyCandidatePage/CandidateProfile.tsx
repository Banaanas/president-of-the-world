import styled from "@emotion/styled";
import NextLink from "next/link";
import React, { useRef, useState } from "react";

import navLinks from "../../../data/navLinks";
import appTheme from "../../../styles/appTheme";
import {
  formHeadingStyle,
  formStyle,
  submitButtonStyle,
} from "../../../styles/css-composition";
import { LoggedInUserData } from "../../../types/types";
import DetailContainer from "../../Form/DetailsContainer";
import { ButtonsContainer } from "../../Form/StyledFormComponents";
import DeleteAlertDialog from "./DeleteAlertDialog";

const ProfileContainer = styled.div`
  ${formStyle}
`;

const ProfileHeading = styled.div`
  ${formHeadingStyle}
`;

const marginButtons = "6px";

const UpdateLink = styled(NextLink)`
  ${submitButtonStyle};
`;

const DeleteButton = styled.button`
  ${submitButtonStyle};

  margin-left: ${marginButtons};
  background-color: ${appTheme.colors.error["500"]};
`;

type LoggedInUserDataAllRequired = Required<LoggedInUserData>;

const CandidateProfile = ({ loggedInUser }: LoggedInUserDataAllRequired) => {
  // DeleteAlertDialog - Chakra UI
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onCloseAlertDialog = () => setIsOpen(false);
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <ProfileContainer>
      <ProfileHeading>Profile Details</ProfileHeading>
      <DetailContainer>
        <div>Last Name</div>
        <div> {loggedInUser?.candidate?.lastName}</div>
      </DetailContainer>
      <DetailContainer>
        <div>First Name</div>
        <div> {loggedInUser?.candidate?.firstName}</div>
      </DetailContainer>
      <DetailContainer>
        <div>Country</div>
        <div> {loggedInUser?.candidate?.country}</div>
      </DetailContainer>
      <DetailContainer>
        <div>Political Orientation</div>
        <div> {loggedInUser?.candidate?.politicalOrientation}</div>
      </DetailContainer>
      <DetailContainer>
        <div>Votes</div>
        <div>{loggedInUser?.candidate?.votes}</div>
      </DetailContainer>
      <ButtonsContainer>
        <UpdateLink href={navLinks.updateCandidate.href}>Update</UpdateLink>
        <DeleteButton as="button" onClick={() => setIsOpen(true)}>
          Delete
        </DeleteButton>
      </ButtonsContainer>
      <DeleteAlertDialog
        isOpen={isOpen}
        cancelRef={cancelRef}
        onCloseAlertDialog={onCloseAlertDialog}
        candidateID={loggedInUser?.candidate?.id}
      />
    </ProfileContainer>
  );
};

export default CandidateProfile;
