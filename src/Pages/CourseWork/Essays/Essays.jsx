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
                    jQuery is a utility library of JavaScript code that enables
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

            <SingleEssay question={`Q4: Front-end vs Back-end developer`}>
                <p>
                    Front-end developers handle the the user interface of a
                    website or application. They are responsible of coding the
                    look and interactions of the elements using HTML, CSS and
                    Javascript.
                </p>
                <p>
                    Back-end developers handle the behind-the-scenes portions of
                    a website or application. They are responsible for app
                    authentication, site security, performance, data storage and
                    other server-side functions.
                </p>
            </SingleEssay>
            <SingleEssay
                question={`Q5: In React, what are the different ways we can link to resources (e.g. Root Relative vs Document Relative)?`}
            >
                <p>
                    Root Relave: Writing links from the root of a folder. If a
                    file is never changing location(file path), a root relative
                    is beneficial. Ex: @/Folder/Folder/file
                </p>
                <p>
                    Document Relative is the relationship of navigating to the
                    correct file in the same folder or different folders Ex: ./
                    looking in the same directory, ../ up a directory, ../../../
                </p>
            </SingleEssay>
            <SingleEssay
                question={`Q6: Essay 6 What is the difference between jpg, gif, png and svg images?`}
            >
                <p>
                    JPG: stands for Joint Photographic Experts Group, this
                    pixel-based format takes up little storage space and is
                    quick to upload or download. It is best used for photographs
                    due to its support of millions of colors. However, the
                    quality will go down when a JPG is compressed, meaning
                    unnecessary information will get deleted from the file
                    permanently.{" "}
                </p>
                <p>
                    GIF: stands for Graphics Interchange Format, it was meant to
                    be used for small and simple graphic icons. It can only
                    accommodate up to 256 indexed colors but this is the only
                    format that allows for animation.{" "}
                </p>
                <p>
                    PNG: stands for Portable Network Graphics, pixel-based
                    images featuring high resolution, lossless compression and
                    transparency. PNG-8 supports 256 indexed colors, while
                    PNG-24 supports up to 16 minion colors. Larger files
                    compared to jpg.{" "}
                </p>
                <p>
                    SVG: stands for Scalable Vector Graphics, vector-based and
                    work well for logos and graphics that need to be scaled up
                    or down without losing quality.
                </p>
            </SingleEssay>
            <SingleEssay
                question={`Q7: Define the following Agile roles: Product Manager, Product Owner, Business Analyst, Scrum Master, UX Designer, Developer/Engineer, QA/SDET, and DevOpss`}
            >
                <p>
                    Product manager: responsible for the vision and strategy for
                    the product.
                </p>
                <p>
                    Product owner: represent the voice of the customer. Manage
                    the product roadmap and priories the backlog. Define product
                    vision and manage stakeholders. Have the authority to make
                    key decisions and responsible for ensuring the team is
                    working on the right items.{" "}
                </p>
                <p>
                    Business analyst: someone that solve business problems by
                    recognizing business needs, analyzing the business domain by
                    documenting business requirements, conducting stakeholder
                    interviews and understanding the customer’s needs.
                </p>
                <p>
                    Scrum master: someone that facilitates the scrum meetings
                    and oversees the sprint planning meetings to keep the team
                    focused and prevent scope creep, then facilitates the
                    retro-perspective at the end of the sprint.{" "}
                </p>
                <p>
                    UX designer:someone that work with product owner to gather
                    insights on user experience and design the product.
                </p>
                <p>
                    Developer/engineer: Build the product both on the front-end
                    and back-end. Responsible for programming, testing,
                    debugging the product.
                </p>
                <p>
                    QA/SDNET: someone who test on the product by running test
                    cases and tracking bugs Dev Ops: someone that works on
                    version control, testing, security, integration and
                    deployment.
                </p>
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
