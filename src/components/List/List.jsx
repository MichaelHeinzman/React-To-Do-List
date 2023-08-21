import React from "react";
import ListItem from "./ListItem";

const List = ({ list }) => {
  if (!list || list.length === 0)
    return (
      <div className="w-full text-center font-semibold text-[#ffffff]">
        No items in list yet
      </div>
    );

  return list?.map((item) => <ListItem key={item.id} item={item} />);
};

export default List;
