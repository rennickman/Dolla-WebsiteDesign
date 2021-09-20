import styled from "styled-components";
import { Link } from 'react-scroll';


// Global button component
export const Button = styled(Link)`
    border-radius: 50px;
    white-space: nowrap;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    // Set styles based on values passed down in state
    background: ${({primary}) => (primary ? '#01BF71' : '#010606')};
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    }
`;