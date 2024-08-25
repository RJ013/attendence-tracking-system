"use client"
import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

function AttendanceGrid({attandanceList}) {
    const [rowData,setRowData]=useState();
    const [colDefs,setColDefs]=useState([
        {field:'studentId'},
        {field:'name'}
    ]);

    useEffect(() => {
        const userList=getUniqueRecord();
        console.log(userList);
        setRowData(userList);
    },[attandanceList])

    const getUniqueRecord=()=>{
        const uniqueRecord=[];
        const existingUser=new Set();
        attandanceList?.forEach(record=>{
            if(!existingUser.has(record.studentId)){
                existingUser.ass(record.studentId);
                uniqueRecord.push(record);
            }
        }); 
        return uniqueRecord;
    }

  return (
    <div>
        <div
    className="ag-theme-quartz" // applying the Data Grid theme
    style={{ height: 500 }} // the Data Grid will fill the size of the parent container
   >
     <AgGridReact
         rowData={rowData}
         columnDefs={colDefs}
     />
   </div>
   </div>
  )
}

export default AttendanceGrid