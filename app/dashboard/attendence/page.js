"use client"
import React, { useState } from "react";
import MonthSelection from "../_components/MonthSelection";
import GradeSelect from "../_components/GradeSelect";
import { Button } from "@/components/ui/button";
import GlobalApi from "@/app/_services/GlobalApi";
import moment from "moment";
import AttendanceGrid from "./_components/AttendanceGrid";

function Attendance() {
 
    const [selectedMonth,setSelectedMonth]=useState();
    const [selectedGrade,setSelectedGrade]=useState();
    const [attlendanceList,setAttendanceList]=useState();

    
    const onSearchHandler=()=>{

      const month = moment(selectedMonth).format('MM/YYYY');
      GlobalApi.GetAttendanceList(selectedGrade,month).then(resp=>{
        setAttendanceList(resp.data);
      })
    }
 
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Attendance</h2>
      {/*Search option*/}
      <div className="flex gap-5 my-5 p-5 border rounded-lg shadow-sm">
        <div className="flex gap-2 items-center">
          <label>Select Month:</label>
          <MonthSelection selectedMonth={(value)=>setSelectedMonth(value)}/>
        </div>
        <div className="flex gap-2 items-center">
          <label>Select Grade:</label>
          <GradeSelect selectedGrade={(value)=>setSelectedGrade(value)}/>
        </div>
        <Button
        onClick={()=>onSearchHandler()}>Search</Button>
      </div>

      {/*Student Attendece grid*/}
      <AttendanceGrid/>
    </div>
  );
}

export default Attendance;
