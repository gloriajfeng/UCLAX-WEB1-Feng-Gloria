import styled from "styled-components";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calendar = ({}) => {
    const onChange = (changes) => {
        // console.log({ changes });
    };

    return (
        <CalendarStyled>
            <ReactCalendar onChange={onChange} />
        </CalendarStyled>
    );
};

//
export default Calendar;

const CalendarStyled = styled.div`
    margin: 50px 0px;

    .react-calendar button {
        color: black;
        background-color: white;
    }

    &:hover {
    }

    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus {
        background-color: #f6d0c0;
    }
`;
