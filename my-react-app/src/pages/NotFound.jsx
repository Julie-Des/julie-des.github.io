import { Link } from "react-router-dom"

function NotFound() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p><span>Oups! La page que</span> vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default NotFound