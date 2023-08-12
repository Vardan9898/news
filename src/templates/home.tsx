import { FC } from "react";
import { Table } from "../components/table";
import { Button } from "@mantine/core";

const COLUMNS = [
  { name: "title", render: () => "Title" },
  { name: "description", render: () => "Description" },
  { name: "text", render: () => "Text" },
  { name: "delete", render: () => "Delete" },
];

const DATA = [
  {
    title: { name: "Lorem Ipsum", render: () => "Lorem Ipsum" },
    description: {
      name: "description",
      render: () =>
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    text: {
      name: "text",
      render: () =>
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    delete: {
      name: "delete",
      render: () => (
        <Button variant="outline" color="red">
          Delete
        </Button>
      ),
    },
  },
  {
    title: { name: "Lorem Ipsum", render: () => "Lorem Ipsum" },
    description: {
      name: "description",
      render: () =>
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    text: {
      name: "text",
      render: () =>
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    delete: {
      name: "delete",
      render: () => (
        <Button variant="outline" color="red">
          Delete
        </Button>
      ),
    },
  },
  {
    title: { name: "Lorem Ipsum", render: () => "Lorem Ipsum" },
    description: {
      name: "description",
      render: () =>
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    text: {
      name: "text",
      render: () =>
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    delete: {
      name: "delete",
      render: () => (
        <Button variant="outline" color="red">
          Delete
        </Button>
      ),
    },
  },
  {
    title: { name: "Lorem Ipsum", render: () => "Lorem Ipsum" },
    description: {
      name: "description",
      render: () =>
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    text: {
      name: "text",
      render: () =>
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    delete: {
      name: "delete",
      render: () => (
        <Button variant="outline" color="red">
          Delete
        </Button>
      ),
    },
  },
  {
    title: { name: "Lorem Ipsum", render: () => "Lorem Ipsum" },
    description: {
      name: "description",
      render: () =>
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    text: {
      name: "text",
      render: () =>
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    delete: {
      name: "delete",
      render: () => (
        <Button variant="outline" color="red">
          Delete
        </Button>
      ),
    },
  },
];

export const HomeTemplate: FC = () => {
  return <Table data={DATA} columns={COLUMNS} />;
};
