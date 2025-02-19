const handleEdit = () =>{

}

return (
  <div>
    <input type="checkbox" checked={completed} />
    <h3>{title}</h3>
    <p>{description}</p>
    <p>Due: {dueDate}</p>
    <button onClick={handleEdit}>Edit</button>
    <button onClick={() => deleteTodoItem(id)}>Delete</button>
  </div>
)
}