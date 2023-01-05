import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import AdminLayout from "layouts/admin";
import useFetch from "use-http";
import { RenderJsonValues } from "components/utils/RenderJsonValues";

export default function DataTables() {
  const { data = [] } = useFetch("http://localhost:8000/projects", {}, []);
  return (
    <AdminLayout>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid
          mb="20px"
          columns={{ sm: 1, md: 1 }}
          spacing={{ base: "20px", xl: "20px" }}
        >
          <RenderJsonValues>{data.data}</RenderJsonValues>
        </SimpleGrid>
      </Box>
    </AdminLayout>
  );
}
