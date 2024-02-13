import styled from "styled-components";

import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essay</h2>

            <SingleEssay
                question={`Q1: Explain the difference between HTML, CSS and JavaScript.`}
            >
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
            <SingleEssay
                question={`Q2: What is the difference between Git and Github?`}
            >
                <p>
                    Git is a version control system for developers to manage
                    projects and track code histories. Multiple developers can
                    work on the same code (same file but different section of
                    the code) locally without messing up each other’s work.
                </p>
                <p>
                    Github is one of the cloud-based hosting services for
                    developers to manage git repositories and allow for
                    collaboration, social interaction, review codes, and
                    tracking and management.
                </p>
            </SingleEssay>
            <SingleEssay
                question={`Q3: What is the difference between JQuery and React?`}
            >
                <p>
                    Query is a utility library of JavaScript code that enables
                    front-end developers to build web pages and web apps
                    effortlessly. This library provides quick solutions for
                    simple problems such as straightforward web pages and web
                    apps.
                </p>
                <p>
                    React is a library that allows for embedding HTML within
                    JavaScript. It provides a reusable library code that cuts
                    down on the total development time and also shortens the
                    scope of errors. React uses JSX, an XML like syntax
                    extension for Javascript to reduce complexity when coding
                    websites, and uses virtual DOM.
                </p>
            </SingleEssay>

            <SingleEssay question={`Q4: ...`}>Answer 4 goes here</SingleEssay>
            <SingleEssay question={`Q5: ...`}>Answer 5 goes here</SingleEssay>
            <SingleEssay question={`Q6: ...`}>Answer 6 goes here</SingleEssay>
            <SingleEssay question={`Q7: ...`}>Answer 7 goes here</SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
