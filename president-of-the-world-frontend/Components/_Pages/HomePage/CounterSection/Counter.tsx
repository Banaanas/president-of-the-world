import styled from "@emotion/styled";
import { useEffect, useState } from "react";

import appTheme from "../../../../styles/appTheme";
import countdown, { TimeObject } from "../../../../utils/countdown-function";
import Loader from "../../../Common/Loader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.div`
  color: ${appTheme.colors.tertiary["500"]};
`;

const CounterContainer = styled.div`
  display: flex;
  column-gap: 16px;
  flex-direction: column;

  @media ${appTheme.queries.tabletAndUp} {
    flex-direction: row;
  }
`;

const TimeUnitContainer = styled.div`
  display: flex;
  column-gap: 6px;
  align-items: baseline;
  font-size: ${appTheme.fontSize.xl};

  span {
    color: ${appTheme.colors.secondary["300"]};
  }
`;

const TimeUnit = styled.div`
  font-size: ${appTheme.fontSize.xl2};

  @media ${appTheme.queries.tabletAndUp} {
    font-size: ${appTheme.fontSize.xl4};
  }

  @media ${appTheme.queries.laptopAndUp} {
    font-size: ${appTheme.fontSize.xl6};
  }
`;

const Counter = () => {
  const [timeToMidnight, setTimeToMidnight] = useState<TimeObject | null>(null);

  useEffect(() => {
    const intervalID = setTimeout(() => {
      setTimeToMidnight(countdown());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(intervalID);
  });

  // Return Null if timeUnit is undefined - SSR
  if (
    !timeToMidnight?.days &&
    !timeToMidnight?.hours &&
    !timeToMidnight?.minutes &&
    !timeToMidnight?.seconds
  )
    return <Loader />;

  return (
    <Container>
      <Heading>Election ends in :</Heading>
      <CounterContainer>
        <TimeUnitContainer>
          <TimeUnit>
            {Number(timeToMidnight?.days) > 0 ? timeToMidnight?.days : null}
          </TimeUnit>
          <span>{Number(timeToMidnight?.days) > 0 ? "days" : null}</span>
        </TimeUnitContainer>
        <TimeUnitContainer>
          <TimeUnit>{timeToMidnight?.hours}</TimeUnit>
          <span>{Number(timeToMidnight?.hours) > 1 ? "hours" : "hour"}</span>
        </TimeUnitContainer>
        <TimeUnitContainer>
          <TimeUnit>{timeToMidnight?.minutes}</TimeUnit>
          <span>
            {Number(timeToMidnight?.minutes) > 1 ? "minutes" : "minute"}
          </span>
        </TimeUnitContainer>
        <TimeUnitContainer>
          <TimeUnit>{timeToMidnight?.seconds}</TimeUnit>
          <span>
            {Number(timeToMidnight?.seconds) > 1 ? "seconds" : "second"}
          </span>
        </TimeUnitContainer>
      </CounterContainer>
    </Container>
  );
};

export default Counter;
