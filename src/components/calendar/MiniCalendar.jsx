

import React from "react";
import DatePicker from "react-horizontal-datepicker";
import Grid from '@mui/material/Grid';

function MiniCalendar() {
    const selectedDay = (val) => {
        console.log(val)
    };
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>

                    <DatePicker getSelectedDay={selectedDay}
                        endDate={100}
                        selectDate={new Date("2020-04-30")}
                        labelFormat={"MMMM"}
                        color={"#374e8c"}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default MiniCalendar;

