import { FC, ReactNode } from "react";
import { Table as MTable } from "@mantine/core";

interface TableProps {
  columns: { name: string; render: () => ReactNode }[];
  data: Record<string, { name: string; render: () => ReactNode }>[];
}

export const Table: FC<TableProps> = ({ columns, data }) => {
  const tableColumns = columns.map((item, index) => (
    <th key={index}>{item.render()}</th>
  ));
  const tableRows = data.map((item, index) => (
    <tr key={index}>
      {columns.map((col, colIndex) => (
        <td key={`${index}-${colIndex}`}>{item[col.name].render()}</td>
      ))}
    </tr>
  ));

  return (
    <MTable striped highlightOnHover withBorder withColumnBorders>
      <thead>
        <tr>{tableColumns}</tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </MTable>
  );
};
