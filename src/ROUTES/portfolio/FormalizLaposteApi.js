import React from "react";
import diagramSequenceLaposteAPI from '../../IMG/DIAGRAM-SEQUENCE-LAPOSTE_API.png';
import pictoEnvelopeBlue from '../../IMG/picto-envelope-blue.jpg';
import pictoEnvelopeGreen from '../../IMG/picto-envelope-green.jpg';


export function FormalizLaposteApi() {
	return <div>
		<p>Un échantillon de code est consultable sur <a
			href="https://github.com/Remi-Lerolle/API_La_Poste/blob/main/classes/customer-class.php"
			target="_blank">un dépôt public de githbub</a>.</p>
		<p>Les Utlisateurs du site Formalizz génèrent automatiquement des courriers, associés à un numéro de recommandé avec accusé de réception (RAR).<br />
			La fonctionnalité décrite ici permet de connaître en un coup d'œil de statut d'un courrier. </p>
		<img src={diagramSequenceLaposteAPI} alt="sequence digram la Poste API" width="100%" />
		<ol className="callout">
			<li>Initiation du processus. Un utilisateur visite la page "Liste des clients".</li>
			<li>La vue demande au contrôleur une liste de 15 clients. </li>
			<li>Le contrôleur prépare et envoie une requête SQL à la base de données.<br />
				Requiérant les numéros RAR  de tous les couriers générés pour ce client.</li>
			<li>La base de données retourne la liste des clients demandée avec tous les RAR associés.</li>
			<li>Le contrôleur va comparer les dates des RAR pour ne conserver que le plus récent.<br />
				Un tableau est contruit convertissant chauqe client en une ligne.<br />
				Sur chaque ligne est ajoutée un pictogramme d'enveloppe blanche sur fond blue.<br />
				<img src={pictoEnvelopeBlue} /><br />
				Le contrôleur converti la liste de clients en une variable JSON. L'identifiant du client est lié RAR le plus récent.
			</li>
			<li>La vue, en javaScript (XMLHttpRequest engloblée par une fonction fetch / await), va faire une requête sur l'API interne.<br />
				Cette API interne est indispensable car l'API de La Poste étant sur un domaine différent, les restrictions de navigateur de type "Cross Origin" interdisent la requête directement sur les domaines externes.<br />
			</li>
			<li>L'API interne contacte l'API distante de La Poste avec les numéros de RAR.</li>
			<li>La réponse de La Poste arrive.<br />
				Elle peux contenir un objet JSON ou un message d'erreur.</li>
			<li>Dans le cas d'une réponse donnant un statut de serveur distant indisponible, après un temps d'attente, la même requête est relancée.</li>
			<li>Lorsque la réponse est valide l'API interne retourne le JSON à la vue.</li>
			<li>La Promesse de la fonction fetch / await est satifaite</li>
			<li>En javascript les numéros RAR sont comparés avec les objets Clients.<br />
				La couleur des pictogrammes enveloppe sont mises à jours au regard du statut du courier.</li>
			<img src={pictoEnvelopeGreen} /><br />
		</ol>
	</div>
}