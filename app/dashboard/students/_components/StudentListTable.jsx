import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { Button } from "@/components/ui/button";
import { Search, Trash } from "lucide-react";

const pagination = true;
const paginationPageSize = 10;
const paginationPageSizeSelector = [25, 50, 100];

// Adjusting component to correctly handle props
function StudentListTable({ studentList = [] }) {
    const CustomButtons=(props)=>{
        return <Button variant="destructive" ><Trash/></Button>
    }
  const [colDefs, setColDefs] = useState([
    { field: "id", filter: true },
    { field: "name", filter: true },
    { field: "address", filter: true },
    { field: "contact", filter: true },
    {field:"action",cellRenderer:CustomButtons}
  ]);

  const [rowData, setRowData] = useState([]);
  const [SearchInput,setSearchInput] = useState();

  useEffect(() => {
    if (Array.isArray(studentList)) {
      setRowData(studentList);
    }
  }, [studentList]);

  return (
    <div className="my-7">
      <div
        className="ag-theme-quartz" // applying the Data Grid theme
        style={{ height: 500 }} // the Data Grid will fill the size of the parent container
      >
        <div className="p-2 rounded-lg border 
        shadow-sm flex gap-2 mb-4 max-w-sm ">
            <Search/>
            <input className="bg-white outline-none w-full " 
            type="text" placeholder="Search on Anything..."
            onChange={(event)=>setSearchInput(event.target.value)}
            />
        </div>
        <AgGridReact 
        rowData={rowData} 
        columnDefs={colDefs}
        quickFilterText={SearchInput}
        pagination={pagination}
        paginationPageSize={paginationPageSize}
        paginationPageSizeSelector={paginationPageSizeSelector}
        />
      </div>
    </div>
  );
}

export default StudentListTable;
