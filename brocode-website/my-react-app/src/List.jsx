import PropTypes from 'prop-types';

function List(props) {
    
    const category = props.category;
    const lists = props.itemList;

    const sort = props.sort ? lists.sort((a, b) => a.name.localeCompare(b.name)) : false ;


    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // alphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // reverse alphabetical
    // fruits.sort((a, b) => a.calories - b.calories); // numeric
    // fruits.sort((a, b) => b.calories - a.calories); // reverse numeric

    // const listItem = fruits.map(fruit => <li>{fruit}</li>); // concise iterating elements without using loops

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    const fruitsItem = lists.map(list => <li key={list.id}>
                                            {list.name}:&nbsp; 
                                            <b>{list.calories}cal</b></li>);
    return (
        <div className='list-style'>
            <h2>{category}</h2>
            <ul>{fruitsItem}</ul>
        </div>
    );
}

List.defaultProps = {
    category: "Category input",
    itemList: [],
    sort: false,
}


List.propTypes = {
    category: PropTypes.string,
    itemList: PropTypes.arrayOf(PropTypes.shape({  id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number,
    })),
    sort: PropTypes.bool,
}

export default List