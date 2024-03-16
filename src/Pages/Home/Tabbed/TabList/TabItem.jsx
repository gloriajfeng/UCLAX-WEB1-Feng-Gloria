import styled from "styled-components";
import PropTypes from "prop-types";

const TabItem = ({ tab, curTab, curTabUpdate }) => {
    const handleClick = () => {
        curTabUpdate(tab);
    };

    const theClassName = tab.id === curTab.id ? "selected" : "";

    return (
        <TabItemStyled className={theClassName} onClick={handleClick}>
            {tab.title}
        </TabItemStyled>
    );
};

export default TabItem;

// prop-types
TabItem.propTypes = {
    tab: PropTypes.object.isRequired,
};

const TabItemStyled = styled.div`
    background-color: #f9ece8;
    color: #452516;
    text-align: center;
    cursor: pointer;
    border-radius: 0px 0px 0px 0px;
    line-height: 40px;
    margin-right: 0px;

    display: inline-block;
    width: clamp(30%, 20%, 150px);

    &.selected {
        background-color: #f6d0c0;
        color: #452516;
        font-weight: 600;
    }
`;
