function List(props){
const itemList = props.items;
    const category = props.category;
     //fruits.sort((a,b)=>a.name.localeCompare(b.name))
   // const listItems=fruits.sort((a,b)=>b.calories - a.calories)
    
    const listItems = itemList.map(
        x=><li key={x.id}>
        {x.name}: &nbsp; <b>{x.calories}</b></li>
        );
//const lowCalFruit = fruits.filter(x=>x.calories <100)

    return (<>
    <h3>{category}</h3><ol>{listItems}</ol>
    </>
        );
}
export default List;