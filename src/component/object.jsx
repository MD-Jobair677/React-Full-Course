





const Object = (props)=> {
    return (
        <div>
        <h1>Object Component</h1>
        <p>This is a simple object component.</p>
        <p>{props.item['name']}</p>
        <p>{props.item['price']}</p>
        <p>{props.item['description']}</p>
        <button  onClick={props.childButtonClick}>submit </button>
        </div>
    );
}
export default Object;