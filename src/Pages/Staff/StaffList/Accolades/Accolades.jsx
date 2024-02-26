import styled from "styled-components";
import PropTypes from "prop-types";

import Accoladeitem from "./Accoladeitem.jsx";

const Accolades = ({ accolades }) => {
    return (
        <AccoladesStyled>
            {accolades.map((accolade, idx) => {
                return <Accoladeitem key={idx} accolade={accolade} />;
            })}
        </AccoladesStyled>
    );
};

export default Accolades;

// prop-types
Accolades.propTypes = {
    accolades: PropTypes.array.isRequired,
};

const AccoladesStyled = styled.ul`
    padding-left: 20px;
    list-style-type: disc;
`;
