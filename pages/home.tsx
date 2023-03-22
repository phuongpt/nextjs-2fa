import React from 'react';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { Scrollbars } from 'react-custom-scrollbars'

import {
    PageContainer,
    StyledGrid,
    StyledContainer,
    LogoutButtonContainer,
    LogoutButton,
} from '../components/home-page/home-page.styles'
import { getTokens } from '../libs/auth/src';

function WelcomePage() {
    const router = useRouter()

    const handleLogOut = () => {
        router.push('/logout')
    }

    const tokens = getTokens()
    return (
        <PageContainer data-cy="homepage">
            <Scrollbars
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
                hideTracksWhenNotNeeded
                style={{ height: 'calc(100vh - 60px)' }}
            >
                <StyledGrid container>
                    <StyledContainer>
                        <Typography variant="h1" >
                            Welcome To Our Website
                        </Typography>
                        <LogoutButtonContainer>
                            <LogoutButton type="button" data-cy="logoutbutton" onClick={handleLogOut}>
                                {"Sign out"}
                            </LogoutButton>
                        </LogoutButtonContainer>
                    </StyledContainer>
                </StyledGrid>
            </Scrollbars>
        </PageContainer>
    );
}

export default WelcomePage;