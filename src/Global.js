import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: 'Inter', sans-serif;
        transition: all 0.25s linear;
    }

    .card {
        background-color: ${({ theme }) => theme.cardBg};
        padding: 20px;
        border-radius: 10px;
        text-align: center;
        margin-bottom: 1.5rem;
    }
`;

export default GlobalStyles;
