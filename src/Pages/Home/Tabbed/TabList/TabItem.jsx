import styled from "styled-components";
import PropTypes from "prop-types";

const TabItem = ({ tab, curTab, curTabUpdate }) => {
    const handleClick = () => {
        curTabUpdate(tab);
    };

    const tabClassName = `tab${tab.id}`;

    const theClassName =
        tab.id === curTab.id ? `${tabClassName} selected` : tabClassName;

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
    padding: 10px;

    display: inline-block;
    /* width: clamp(30%, 20%, 150px); */
    /* width: 33%; */
    flex: 1;

    &.tab1 {
    }

    &.tab2 {
    }

    &.tab3 {
    }

    &:hover,
    &:focus {
        background-color: #f6d0c0;
    }

    &.selected {
        flex: 1;
        background-color: #f6d0c0;
        color: #452516;
        font-weight: 600;
    }
`;
