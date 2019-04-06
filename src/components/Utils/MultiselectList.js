import React from 'react';

const unique = (values) => Array.from(new Set(values));
const without = (values, valueToRemove) => values.filter(item => item !== valueToRemove);

const MultiselectList = ({ items, selectedItems, onChange }) => {
  const isSelected = (item) => selectedItems.includes(item.value);
  const toggle = (item) => {
    isSelected(item)
      ? onChange(without(selectedItems, item.value))
      : onChange(unique([...selectedItems, item.value]))
  }

  return (
    <>
      {items.map((item, index) => (
        <label key={index} >
          <input type="checkbox" checked={isSelected(item)} onChange={() => toggle(item)}/>
          {item.name}
        </label>
      ))}
    </>
  );
}

export default MultiselectList;