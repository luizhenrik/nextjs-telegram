import styled from 'styled-components'

export const Sidebarstyle = styled.div`
    width: 100%;
    height: 100%;
    float: left;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
    z-index: 1;
    overflow: hidden;

    &[data-open="true"] {
        opacity: 1;
        pointer-events: all;
    }

    &[data-open="true"] .sidebar__content{
        left: 0;
    }

    .sidebar__overlay {
        width: 100%;
        height: 100%;
        float: left;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .sidebar__content {
        width: 70%;
        height: 100%;
        float: left;
        position: absolute;
        top: 0;
        left: -100%;
        background-color: ${props => props.theme.colors.floatBackground};
        transition: left 0.30s linear;
    }
`
