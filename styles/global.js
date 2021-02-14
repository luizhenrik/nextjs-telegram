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
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 14px;
        color: ${props => props.theme.colors.color};
    }
`
