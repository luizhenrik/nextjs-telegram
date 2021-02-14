import styled from 'styled-components'

export const Appstyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.colors.background};
    min-height: 100vh;
    min-height: -webkit-fill-avaliable;

    .app__content {
        width: 100%;
        max-width: 520px;
        height: inherit;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 5px 5px rgba(0, 0 , 0 , 0.05);
        position: relative;
    }

    .app__container {
        width: 100%;
        float: left;
        flex: 1 1 10em;
    }
`
