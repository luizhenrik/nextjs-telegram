import styled from 'styled-components'

export const LoaderStyle = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.1);
    z-index: 10;

    .loader__area {
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        width: 60px;
        height: 60px;

        &-item {
            width: 10px;
            height: 10px;
            background-color: #0077ff;
            border-radius: 50%;
            animation: bouncer 0.5s cubic-bezier(0.19, 0.57, 0.3, 0.98) infinite alternate;

            &:nth-child(2) {
                animation-delay: 0.1s;
                opacity: 0.8;
            }

            &:nth-child(3) {
                animation-delay: 0.2s;
                opacity: 0.6;
            }

            &:nth-child(4) {
                animation-delay: 0.3s;
                opacity: 0.4;
            }
        }
    }

    @keyframes bouncer {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-100px);
        }
    }
`
