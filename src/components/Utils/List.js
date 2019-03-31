import React from 'react';


const List = ({ list, className }) => {
    const renderItem = (item, index) => {
        const isBold = item.startsWith('*');
        item = item.replace('*', '');
        return (
        <li key={index}>
            {isBold ? <strong>{item}</strong> : item}
        </li>
        )
    }

    return (
        <ul className={className}>
            {list.map(renderItem)}
        </ul>
    )
}

List.defaultProps = {
    list: [],
    className: '',
}

export default List;
