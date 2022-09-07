import styled from 'styled-components';

export const SelectContainer = styled.div`
    position: relative;
    height: min-content;
    width: 100%;
    padding: 3rem;
`;

export const SelectSection = styled.div`
    padding: .8rem 1.6rem;
    width: 28rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border: .1rem solid #000;
`;

export const Span = styled.span`
    font-size: 1.4rem;
`;

export const OptionsSection = styled.div`
    width: 28rem;
`;

export const OptionTarget = styled.div`
    padding: .8rem 1.6rem;
    border: .1rem solid #000;
    border-bottom: none;
    cursor: pointer;
    transition: .25s ease;
    &:last-child{
        border-bottom: .1rem solid #000;
    }
    &:first-child{
        border-top: none;
    }
    &:hover{
        background-color: #f1f1f1;
    }
`;

export const P = styled.p`
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    font-size: 1.4rem;
`;

export const SpanP = styled.span`
    color: #f00;
    font-weight: bold ;
`;