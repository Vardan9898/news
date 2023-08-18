import { Button, Flex, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { FC } from "react";

export const CreateArticleForm: FC<{
  onSuccessSubmit: (data: {
    id: string;
    title: string;
    description: string;
    text: string;
  }) => void;
}> = ({ onSuccessSubmit }) => {
  const { getInputProps, onSubmit } = useForm({
    initialValues: { title: "", description: "", text: "" },

    validate: {
      title: (value) => (value.length ? null : "Title is required"),
      description: (value) => (value.length ? null : "Description is required"),
      text: (value) => (value.length ? null : "Text is required"),
    },
  });

  const onSubmitHandler = (data: {
    title: string;
    description: string;
    text: string;
  }) => {
    onSuccessSubmit({ ...data, id: Date.now().toString(36) });
  };

  return (
    <form onSubmit={onSubmit(onSubmitHandler)}>
      <Flex direction="column" gap="sm">
        <TextInput placeholder="Title" {...getInputProps("title")} />
        <TextInput
          placeholder="Description"
          {...getInputProps("description")}
        />
        <Textarea placeholder="Text" {...getInputProps("text")} />
        <Button type="submit" size="md">
          Save
        </Button>
      </Flex>
    </form>
  );
};
