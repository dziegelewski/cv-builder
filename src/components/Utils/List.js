import React from 'react';

const renderItem = (item, index) => <li key={index}>{item}</li>;


const List = ({ list }) => {
    return (
        <ul>
            {list.map(renderItem)}
        </ul>
    )
}

export default List;
