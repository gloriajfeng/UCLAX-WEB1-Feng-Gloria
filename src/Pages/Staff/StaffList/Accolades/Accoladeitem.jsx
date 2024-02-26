import styled from "styled-components";
import PropTypes from "prop-types";

const Accoladeitem = ({ accolade }) => {
    return <AccoladeitemStyled>{accolade}</AccoladeitemStyled>;
};

export default Accoladeitem;

// prop-types
Accoladeitem.propTypes = {
    accolade: PropTypes.string.isRequired,
};

const AccoladeitemStyled = styled.li``;
