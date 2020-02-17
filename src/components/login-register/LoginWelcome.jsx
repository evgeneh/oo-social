import React from "react";

import styled from "styled-components"

export const LoginWelcomeText = styled.p`
    text-align: justify;
    line-height: 1.7;
    text-indent: 15px;
    padding: 0 20px;
`;

const LoginWelcome = ({count}) => {

    let suffix = (count === 3) ? "rd" : "th"

    return (<>
            <LoginWelcomeText>

                Welcome to OOSocial - network for developers, designers and other people who love IT,
                searching for a job or searching for a workers.
                Registered users can share their profiles, follow another users and upload your photos. And yes, we will add
                the Wall soon!
            </LoginWelcomeText>
            <LoginWelcomeText>
                Became a <b>{count + suffix}</b> user in OOSocial.
            </LoginWelcomeText>
        </>
    )
}

export default  LoginWelcome