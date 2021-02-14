import styled from 'styled-components'

const sizehandler = '45px'

export const Headerstyle = styled.div`
    width: 100%;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: rgba(0,0,0, 0.05);

    .header__handler {
        width: ${sizehandler};
        height: ${sizehandler};
        flex: 0 1 ${sizehandler};
        float: left;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${props => props.theme.font.sizes.large2x};
        color: ${props => props.theme.colors.text};
    }

    .header__handler:hover {
        color: ${props => props.theme.colors.text};
    }

    .header__container{
        width: auto;
        flex: 1 1 10em;
        padding: 0;
        border: none;
        position: relative;
        height: ${sizehandler};
        margin-left: 10px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    .header__field {
        width: 100%;
        float: left;
        border: none;
        border-radius: 6px;
        background-color: rgba(255, 255, 255, 0.05);
        outline: none;
        height: 100%;
        padding: 10px;
    }

    .header__image {
        width: ${sizehandler};
        height: ${sizehandler};
        flex: 0 1 ${sizehandler};
        float: left;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
    }

    .header__title {
        width: 100%;
        float: left;
        color: ${props => props.theme.colors.text};
        font-weight: ${props => props.theme.font.weight.strong};
        font-size: ${props => props.theme.font.sizes.large};
        line-height: 1.2;
    }

    .header__description {
        width: 100%;
        float: left;
        font-size: ${props => props.theme.font.sizes.small};
        line-height: 1.2;
        color: ${props => props.theme.colors.text};
        opacity: 0.5;
    }
`
