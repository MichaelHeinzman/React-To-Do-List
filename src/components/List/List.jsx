import React from "react";
import ListItem from "./ListItem";

const List = ({ list }) => {
  if (!list || list.length === 0)
    return (
      <div className="w-full text-center font-semibold text-[#ffffff]">
        No items in list yet
      </div>
    );

  return list?.map((item, index) => (
    <ListItem key={item.id} item={item} index={index} />
  ));
};

export default List;
