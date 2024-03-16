import styled from "styled-components";
import PropTypes from "prop-types";

import { breakpoints } from "@/Common/useMediaQuery";

const TabContent = ({ curTab }) => {
    const { title, image, text } = curTab;

    return (
        <TabContentStyled>
            <div className="column1">
                <img src={image} alt={title} />
            </div>

            <div className="column2">
                <h3>{title}</h3>
                <div dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </TabContentStyled>
    );
};

export default TabContent;

// prop-types
TabContent.propTypes = {
    curTab: PropTypes.object.isRequired,
};

const TabContentStyled = styled.div`
    padding: 32px;
    background-color: #f6d0c0;

    @media ${breakpoints.isMediumAndUp} {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1rem;
    }

    .column1 {
        width: 700px;
    }

    img {
        max-width: 100%;
        display: block;
        margin: 0px auto 15px;
        border-radius: 4px;
    }

    h3 {
        font-size: 24px;
        color: #452516;
        padding-left: 30px;
    }

    p {
        font-size: 14px;
        color: black;
        margin-bottom: 20px;
        line-height: 150%;
        padding-left: 30px;
    }
`;
