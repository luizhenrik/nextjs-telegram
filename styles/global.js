import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --app-bg: ${props => props.theme.colors.background};
        --app-sidebar-bg: ${props => props.theme.colors.floatBackground};
        --app-tooltip-bg: ${props => props.theme.colors.floatBackground};
        --app-header-bg: ${props => props.theme.colors.background};
    }

    html,
    body {
        font-family: 'Roboto', sans-serif;
        font-weight: ${props => props.theme.font.weight.regular};
        font-size: ${props => props.theme.font.sizes.default};
        color: ${props => props.theme.colors.text};
        min-height: 100vh;
        min-height: -webkit-fill-avaliable;
    }
`
