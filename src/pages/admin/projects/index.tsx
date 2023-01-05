import { Box, SimpleGrid } from "@chakra-ui/react";
import DevelopmentTable from "views/admin/dataTables/components/DevelopmentTable";
import { columnsDataDevelopment } from "views/admin/dataTables/variables/columnsData";
import tableDataDevelopment from "views/admin/dataTables/variables/tableDataDevelopment.json";
import React, { useEffect, useState } from "react";
import AdminLayout from "layouts/admin";
import { TableData } from "views/admin/default/variables/columnsData";
import axios from "axios";

export default function DataTables() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/projects", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        setProjects(res.data.data);
      })
      .catch((e) => {
        console.log("ERROR", e);
      });
  });
  return (
    <AdminLayout>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid
          mb="20px"
          columns={{ sm: 1, md: 1 }}
          spacing={{ base: "20px", xl: "20px" }}
        >
          {projects.map((project) => (
            <div>
              <h1>{project.id}</h1>
              <h1>{project.title}</h1>
              <h1>{project.desc}</h1>
            </div>
          ))}
          {/* <DevelopmentTable
            columnsData={columnsDataDevelopment}
            tableData={projects as unknown as TableData[]}
          /> */}
        </SimpleGrid>
      </Box>
    </AdminLayout>
  );
}
