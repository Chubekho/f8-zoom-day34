function Product() {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=12')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Error: ", err));
    }, [])

    if (!products) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {products.map(product => (
                <h1>243</h1>
            ))}
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Product />);