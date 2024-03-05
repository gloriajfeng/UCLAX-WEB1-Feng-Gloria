import styled from "styled-components";
import Inset from "@/Common/PagesLayout/Inset.jsx";

import Slideshow from "./Slideshow/Slideshow.jsx";
import Tabbed from "./Tabbed/Tabbed.jsx";

const Home = () => {
    return (
        <HomeStyled>
            <h1>Home</h1>
            <Slideshow />
            <Inset>
                <Tabbed />
            </Inset>
        </HomeStyled>
    );
};

export default Home;

const HomeStyled = styled.div`
    h1 {
        display: none;
    }
`;
