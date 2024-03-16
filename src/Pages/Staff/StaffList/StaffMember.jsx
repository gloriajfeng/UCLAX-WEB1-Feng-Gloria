import styled from "styled-components";
import PropTypes from "prop-types";

import Accolades from "./Accolades/Accolades.jsx";

const StaffMember = ({ member }) => {
    const { name, image, yearStarted, accolades } = member;

    return (
        <StaffMemberStyled>
            <img src={image} alt={name} />
            <h3>{name}</h3>

            <div className="bottom">
                <p>
                    <b>Year Joined:</b> {yearStarted}
                </p>

                <Accolades accolades={accolades} />
            </div>
        </StaffMemberStyled>
    );
};

export default StaffMember;

// prop-types
StaffMember.propTypes = {
    member: PropTypes.object.isRequired,
};

const StaffMemberStyled = styled.div`
    background-color: white;
    border-radius: 10px;

    img {
        width: 100%;
        display: block;
        border-radius: 10px;
    }

    .bottom {
        padding: 20px;
    }

    h3 {
        color: black;
        background-color: white;
        padding: 10px 10px;
        margin: 0px;
        text-align: center;
    }
`;
