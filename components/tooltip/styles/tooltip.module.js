import styled from 'styled-components'

export const Tooltipstyle = styled.div`
    width: 100%;
    height: 100%;
    float: left;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
    z-index: 1;

    &[data-open="true"] {
        opacity: 1;
        pointer-events: all;
    }

    .tooltip__overlay {
        width: 100%;
        height: 100%;
        float: left;
    }

    .tooltip__content {
        width: 50%;
        float: left;
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: ${props => props.theme.colors.floatBackground};
        border-radius: 12px;
        transition: left 0.15s linear;
    }

    .tooltip__nav {
        width: 100%;
        float: left;
    }

    .tooltip__nav-item {
        width: 100%;
        float: left;
        padding: 12px 20px;
        display: flex;
        align-items: center;
    }

    .tooltip:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }

    .tooltip__nav-icon {
        font-size: ${props => props.theme.font.sizes.large};
        margin-right: 20px;
        opacity: 0.2;
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .tooltip__nav-text {
        font-size: ${props => props.theme.font.sizes.medium};
    }
`
