import styled from "styled-components";

import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essay</h2>

            <SingleEssay question={`Q1: Sample question...`}>
                <p>
                    HTML stands for HyperText Markup Language and is the code
                    and building blocks that structure a web page and its
                    content.
                </p>
                <p>
                    CSS stands for Cascading Style Sheets, and its is a style
                    sheet language that enhance the HTML codes to make content
                    to be presented in certain ways, certain formatting and
                    layout.
                </p>
                <p>
                    Javascript is a programming language for web design to
                    control the behavior of different elements on a web page.
                    Elements such as a pop up asking the users for permission.
                    In another word, Javascript handles the interactive part of
                    a website.
                </p>
            </SingleEssay>
            <SingleEssay question={`Q2: Sample question...`}>
                Answer 2 goes here
            </SingleEssay>
            <SingleEssay question={`Q3: Sample question...`}>
                Answer 3 goes here
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
