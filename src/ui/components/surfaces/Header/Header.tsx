import React from "react";
import { HeaderAppBar, HeaderLogo, ButtonsContainer } from "../Header/Header.style";
import { Container, Toolbar, IconButton } from "@material-ui/core";
import Link from "ui/components/navigation/Link/Link";
import RoundedButton from "ui/components/inputs/RoundedButton/RoundedButton";


const Header = () => {
    return <HeaderMobile/>;
};

const HeaderDesktop = () => {
    return (
    <HeaderAppBar>
        <Toolbar component={Container} > 
            <Link href={'/'} >
                <HeaderLogo src={'/img/logos/logo.svg'} alt={'e-diaristas'} />
            </Link>

            <div>&nbsp;</div>
            <div>&nbsp;</div>
            
            <ButtonsContainer>
                <Link 
                    href="{'/cadastro/diarista'}" 
                    Component={RoundedButton} 
                    mui={{color: 'primary', variant: 'contained'}} 
                >
                    Seja um(a) diarista
                </Link>
                <Link href="{'/login'}" Component={RoundedButton}>
                    Login
                </Link>
            </ButtonsContainer>
            
        </Toolbar>
    </HeaderAppBar>
    );
};

const HeaderMobile = () => {
    return(
        <HeaderAppBar>
            <Toolbar component={Container} >
                <IconButton>
                    <i className={'twf-bars'} />
                </IconButton>
            </Toolbar>
        </HeaderAppBar>
    )
}


export default Header;