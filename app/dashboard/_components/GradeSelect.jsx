"use client";
import GlobalApi from "@/app/_services/GlobalApi";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function GradeSelection({selectedGrade}) {
  const [grades, setGrades] = useState([]);
 
  useEffect(() => {
    GetAllGradesList();
  }, []);
  const GetAllGradesList = () => {
    GlobalApi.GetAllGrades().then((resp) => {
      setGrades(resp.data);
    });
  };

  return (
    <div>
      <select
        className="p-2 border rounded-lg bg-white"
        onChange={(e)=>selectedGrade(e.target.value)}
      >
        {Array.isArray(grades) && grades.length > 0 ? (
          grades.map((item, index) => (
            <option key={index} value={item.grade}>
              {item.grade}
            </option>
          ))
        ) : (
          <option value="">No grades available</option>
        )}
      </select>
    </div>
  );
}

export default GradeSelection;
