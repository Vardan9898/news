export const mockService = {
  data: [
    {
      id: "id-1",
      title: "Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: "id-2",
      title: "Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: "id-3",
      title: "Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ],
  getData() {
    return this.data;
  },
  addNewArticle(newArticle: {
    id: string;
    title: string;
    description: string;
    text: string;
  }) {
    this.data = [...this.data, newArticle];
  },
  deleteItem(id: string) {
    this.data = this.data.filter((article) => article.id !== id);
  },
};
