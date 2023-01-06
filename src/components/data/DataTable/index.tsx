import React from "react";
import Card from "components/card/Card";
import { Flex, Text, useColorModeValue, Table, Tr, Thead, Tbody, Td, Th } from "@chakra-ui/react"; // prettier-ignore

type ColumnType = {
  name: string;
  label: string;
};

type RowType = {
  [key: string]: any;
};

type DataTableProps = {
  columns: ColumnType[];
  rows: RowType[];
  title?: string;
};

export default function DataTable(props: DataTableProps) {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  return (
    <Card
      flexDirection="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" justify="space-between" mb="20px" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          {props.title ?? ""}
        </Text>
      </Flex>
      <Table variant="simple" color="gray.500" mb="24px">
        <Thead>
          <Tr>
            {props.columns.map((column, index) => (
              <Th pe="10px" key={index} borderColor={borderColor}>
                <Flex
                  justify="space-between"
                  align="center"
                  fontSize={{ sm: "10px", lg: "12px" }}
                  color="gray.400"
                >
                  {column.label}
                </Flex>
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {props.rows?.length &&
            props.rows.map((row, i) => (
              <Tr key={i}>
                {props.columns.map((column, j) => (
                  <Td
                    key={j}
                    fontSize={{ sm: "14px" }}
                    minW={{ sm: "150px", md: "200px", lg: "auto" }}
                    borderColor="transparent"
                  >
                    {row[column.name]}
                  </Td>
                ))}
              </Tr>
            ))}
        </Tbody>
      </Table>
    </Card>
  );
}
