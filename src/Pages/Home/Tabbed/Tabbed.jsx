import styled from "styled-components";
import { useState } from "react";

//data
import { tabbedData } from "./tabbedData";

//component
import TabContent from "./TabContent";
import TabList from "./TabList/TabList";

const Tabbed = () => {
    const [curTab, curTabUpdate] = useState(tabbedData[0]);

    return (
        <TabStyled>
            <TabList
                tabs={tabbedData}
                curTab={curTab}
                curTabUpdate={curTabUpdate}
            />
            <TabContent curTab={curTab} />
        </TabStyled>
    );
};

export default Tabbed;

const TabStyled = styled.div``;
