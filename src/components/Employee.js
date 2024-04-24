function Employee(props){
    return (
    <>
        <h3>Employee named {props.name}</h3>
        <p>Role: {props.role ? props.role : "unknown"}</p>
    </>
    )
}

export default Employee;