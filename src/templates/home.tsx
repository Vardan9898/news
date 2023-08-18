import { FC, useState } from "react";
import { Table } from "../components/table";
import { Box, Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { CreateArticleForm } from "../components/create-article-form";
import { mockService } from "../mock-service";

const COLUMNS = [
  { name: "title", render: () => "Title" },
  { name: "description", render: () => "Description" },
  { name: "text", render: () => "Text" },
  { name: "delete", render: () => "Delete" },
];

export const HomeTemplate: FC = () => {
  const [opened, { open, close }] = useDisclosure();
  const [data, setData] = useState<
    {
      id: string;
      title: string;
      description: string;
      text: string;
    }[]
  >(mockService.getData());

  const handleOnDelete = (id: string) => {
    mockService.deleteItem(id);
    setData(mockService.getData());
  };

  const handleOnCreate = (data: {
    id: string;
    title: string;
    description: string;
    text: string;
  }) => {
    mockService.addNewArticle(data);
    setData(mockService.getData());
    close();
  };

  const tableData = data.map((article) => ({
    title: { name: article.title, render: () => article.title },
    description: {
      name: article.description,
      render: () => article.description,
    },
    text: {
      name: article.text,
      render: () => article.text,
    },
    delete: {
      name: "delete",
      render: () => (
        <Button
          variant="outline"
          color="red"
          onClick={() => handleOnDelete(article.id)}
        >
          Delete
        </Button>
      ),
    },
  }));

  return (
    <Box p="lg">
      <Box pb="lg">
        <Button onClick={open}>Create</Button>
      </Box>
      <Table data={tableData} columns={COLUMNS} />
      <Modal opened={opened} onClose={close} centered title="New Article">
        <CreateArticleForm onSuccessSubmit={handleOnCreate} />
      </Modal>
    </Box>
  );
};
