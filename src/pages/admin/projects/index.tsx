import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import AdminLayout from "layouts/admin";
import useFetch from "use-http";
import DataTable from "components/data/DataTable";
import Link from "next/link";

export default function Projects() {
  const { data, loading } = useFetch("http://localhost:8000/projects", {}, []);

  return (
    <AdminLayout>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid
          mb="20px"
          columns={{ sm: 1, md: 1 }}
          spacing={{ base: "20px", xl: "20px" }}
        >
          <Link href={"/admin/projects/form"}>
            <Button>Add New</Button>
          </Link>
          <DataTable
            loading={loading}
            columns={[
              { label: "id", name: "id" },
              { label: "title", name: "title" },
              { label: "desc", name: "desc" },
              {
                label: "tasks",
                render: (row, index) => (
                  <Link href={`/admin/projects/${row.id}/tasks`}>
                    <Button backgroundColor={"orange.300"}>Tasks</Button>
                  </Link>
                ),
              },
              {
                label: "Dashboard",
                render: (row, index) => (
                  <Link href={`/admin/projects/${row.id}/dashboard`}>
                    <Button backgroundColor={"green.500"}>Dashboard</Button>
                  </Link>
                ),
              },
            ]}
            rows={data?.data}
          />
        </SimpleGrid>
      </Box>
    </AdminLayout>
  );
}
