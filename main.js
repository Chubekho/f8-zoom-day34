let uniqId = 0;

function TodoApp() {
    const [inputValue, setInputValue] = React.useState('');
    const [todos, setTodos] = React.useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value); // Lấy giá trị từ input
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Ngăn trang reload khi submit form
        if (inputValue.trim()) {
            setTodos([...todos, { id: ++uniqId, text: inputValue, completed: false }]);
            setInputValue(''); // Reset input sau khi thêm
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Nhập task mới..."
                />
                <button type="submit">Thêm</button>
            </form>

            <div className="task-list">
                {todos.map((todo) => (
                    <div key={todo.id}>
                        <i class="fa-regular fa-square"></i>
                        {/* <i class="fa-solid fa-square-check"></i> */}
                        <div>{todo.text}</div>
                        <i class="fa-solid fa-trash"></i>
                    </div>
                ))}
            </div>

        </div>
    );
}



const app = (
    <div className="todo-app app-center">
        <h2 className="heading-title">Todo App</h2>
        <TodoApp />
    </div>
)

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(app)
