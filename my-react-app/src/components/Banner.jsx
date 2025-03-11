function Banner({className, title}) {
    return (
        <div className={`banner ${className}`}>
        {title && <h1>{title}</h1>}
      </div>
    )
}

export default Banner