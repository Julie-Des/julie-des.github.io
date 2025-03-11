function Tags({tags}) {
    return (
        <ul className="tags">
            {tags.map((tag, id) => (<li key={id} className="tag">{tag}</li>))}
        </ul>
    )
}

export default Tags