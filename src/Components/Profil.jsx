
export default function Profil () {
	const profilDescription = 
	`Ayant depuis tout petit cotoyé le numérique et le monde de l'internet, ce n'est qu'assez récemment que je me suis dirigé professionnellement vers ce domaine. C'était une envie qui était là depuis longtemps et j'ai finalement franchi le pas en avant en effectuant une formation en Développeur Web auprès d'Openclassrooms.
Aujourd'hui, je suis à la recherche d'une entreprise afin de continuer sur ma lancée avec une alternance sur un parcours Développeur d'application Javascript React de 24 mois.
C'est avec le sourire, de la bonne humeur, et un peu de musique dans les oreilles, que je compte continuer mon chemin dans le domaine du développement ! 
Je suis ouvert à bouger dans une grande agglomération partout en France, alors n'hésitez pas à me contacter si mon profil vous intéresse !`
	
	return (
		<main>
			<div className='profil-page'>
				<div className="profil-and-picture">
					<p>
						{profilDescription}
					</p>
					<img src='/Portfolio/assets/Images/profil-picture.webp' alt='photo de ma tête' id='profil-picture'/>
				</div>
				<img src='/Portfolio/assets/Images/logo-stacks.webp' alt = 'logos des stacks front-end et back-end' />
			</div>
			
		</main>
	)
}