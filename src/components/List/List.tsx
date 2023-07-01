import React from "react";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T, i: number) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return <>{items.map(renderItem)}</>;
}

export default List;
