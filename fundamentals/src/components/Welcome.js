// State less functional component
function welcome(props) {
    return (
        <div>
        <h1> Welcome { props.name }</h1>
        <p>A new learner</p>
        </div>
    )
}

export default welcome