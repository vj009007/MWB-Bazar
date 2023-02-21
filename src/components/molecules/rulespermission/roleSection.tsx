import { Box } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import pdf from '@/static/icons/pdf.svg';
import excel from '@/static/icons/excel.svg';
import plus from '@/static/icons/plus.svg';

const RoleSection = () => {
  const navigate = useNavigate();

  return (
   <Box className="flex items-center justify-between">
        <Box className="flex items-center gap-6">
            <a className="text-sm font-semibold text-[#2E2C34] pb-3 px-3  inline-block" onClick={() => navigate("/rolepermission")}>Users</a>
            <a className="text-sm font-normal text-[#84818A] pb-3 px-3 border-b-[2px] border-[#5542F6] inline-block" onClick={() => navigate("/addroles")}>Add New Role</a>
        </Box>
        <Box className="flex items-center gap-[10px]">
            <a className="pdf-link"> <img src={pdf} alt="PDF" /> Export to PDF</a>
            <a className="excel-link"> <img src={excel} alt="pdf" /> Export to Excel</a>
            <a className="add-rules"><img src={plus} alt="Plus" /> Add New User</a>
        </Box>
   </Box>
  );
};

export {RoleSection};
