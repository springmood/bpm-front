import { Box, Button, Input, SimpleGrid, Textarea } from "@chakra-ui/react";
import AdminLayout from "layouts/admin";
import Card from "components/card/Card";
import { useState } from "react";
import useFetch from "use-http";
import { useRouter } from "next/router";

export default function DataTables() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const router = useRouter();

  const { post } = useFetch("http://localhost:8000/task/create", {});
  const handleCreateProject = () => {
    post({ title, desc });
    router.push(`/admin/projects/${router.query.project_id}/tasks`);
  };

  return (
    <AdminLayout>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid
          mb="20px"
          columns={{ sm: 1, md: 1 }}
          spacing={{ base: "20px", xl: "20px" }}
        >
          <Card>
            <Input
              placeholder="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <br />
            <Textarea
              placeholder="desc"
              value={desc}
              onChange={(event) => setDesc(event.target.value)}
            />
            <br />
            <Button onClick={handleCreateProject}>Add</Button>
          </Card>
        </SimpleGrid>
      </Box>
    </AdminLayout>
  );
}
