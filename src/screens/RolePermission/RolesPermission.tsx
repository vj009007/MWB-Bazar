import React, { useState } from "react";
import { DashboardLayout } from "@/components/layouts";
import { RoleSection } from "@/components/molecules/rulespermission/roleSection";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Pagination, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import UserProfile from '@/static/images/User-profile.png';

const RolesPermission = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <Box className="w-full">
        <RoleSection />
        vhghghgh

      </Box>
    </DashboardLayout>
  );
};

export default RolesPermission;
