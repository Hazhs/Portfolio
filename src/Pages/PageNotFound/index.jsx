import { NavLink } from "react-router-dom"

export default function PageNotFound () {
	return (
		<main>
				<div className="error-page">
					<h1>Une erreur est survenue</h1>
					<NavLink to='/'>Retourner sur le site</NavLink>
				</div>
			</main>
	)
}