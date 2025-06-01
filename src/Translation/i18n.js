import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
	en: {
		translation: {
			"Welcome to React": "Welcome to React and react-i18next",
			"Home": "Home",
			"Resume": "Resume",
			"RL.personnal.web.pages": "Rémi Lerolle Personal Web Pages",
			"CV.RL": "Remi Lerolle's resume",
			"project.formalizz.description": "RP Drancy is a windshield replacement company. It offers the possibility of money lending on condition of assignment of the debt from the insurance company. The project therefore consists of persistently retaining customers, their vehicles, and their insurance information.",
			"projet.portfolio.description": "The personal pages, the website you are currently visiting, reflect my professional experience.",
			"Formalizz.FrontEnd.title": "Front End",
			"Formalizz.FrontEnd.text": "The graphical interface of the Formalizz website was created in collaboration with a graphic designer. They designed the logo, the color scheme, etc. The icons come from the FontAwesome website. The CSS uses the Bootstrap library, including utilities for forms, cards, etc. thanks to Bootstrap, the interface is adaptative.",
			"projet.studioXSL.description": "XML documents do not carry formatting styles like Word documents, for example. What may seem like a weakness is actually a great strength. Because by externalizing the format parameters, the XML document can be published in a multitude of formats. HTML, PDF, etc. Also, the same document can be published in the same format but with different layouts and filtering. While the creation of XSLT style sheets is reserved for developers, the XSL generation studio allows Calenco users to generate XSL style sheets without having any knowledge of code.",
			"projet.StudioXSL.FrontEnd.title": "Front End",
			"projet.StudioXSL.FrontEnd.text": "The user interface is entirely built with React to facilitate component reuse. Given the particularly large state, the Redux library is used. It allows access to states via a manager or store that is accessible throughout the application. For drag-and-drop functionalities, the React-DnD library is utilized.",
			"Formalizz.SQL.title": "Database",
			"Formalizz.SQL.text": "The Formalizz website keeps persisting data thanks to  an SQL database. Its structure allows several companies to use its services by subscription. It provides recording for each company to record its customers, each customers can have one or several vehicules. Each vehicule is linked to an insurance contract. Each vehicule can also have one or several car accidents. Each car accident can be linked to courriers sent to the insurance.",
			"projet.StudioXSL.dnd.title": "Title page using Drag and Drop",
			"projet.StudioXSL.dnd.text-1": "The Studio proposes to design title pages for books, articles, chapters… thanks to a 'user friendly' interface. A side bar is available where the user can find a widget list. Each of those widgets corresponds to an element that can be added to the title page. For exemple the title of the book, the most recent revision… The user just has to drag and drop one of those 'widgets' on the preview. An additional widget allows to 'group' other widget categories, just moving a classical widget on a group. To allow communication between the side bar and the preview, redux is used. The example below is a mockup used as 'proof of concept'. It is interactive. You can drag / drop widgets from side bar to the light blue preview area. The table below is updated with the  Redux state.",
			"projet.StudioXSL.dnd.text-2": "You can consult this code on ",
			"projet.StudioXSL.dnd.text-3": "my github.",
			"Formalizz.Laposte.API.title": "Internal API creation and external API usage",
			"project.Formalizz.API-la-Post-para1": "A sample of code is available at ",
			"project.Formalizz.API-la-Post-para1-link1": "a public GitHub repository",
			"project.Formalizz.API-la-Post-para2-1": "users of Formalizz website automatically generate letters, associated with a registered mail number with acknowledgment of receipt (RAR)",
			"project.Formalizz.API-la-Post-para2-2": "The feature described here allows you to see the status of a letter at a glance.",
			"project.Formalizz.API-la-Post-li1-1": "Process initiation. A user visits the \"client List\" page.",
			"project.Formalizz.API-la-Post-li2-1": "The view requests a list of 15 clients from the controller.",
			"project.Formalizz.API-la-Post-li3-1": "The controller prepares and sends an SQL query to the database, requesting the RAR numbers of all the letters generated for this client.",
			"project.Formalizz.API-la-Post-li4-1": "The database returns the requested list of clients along with all associated RAR numbers.",
			"project.Formalizz.API-la-Post-li5-1": "The controller will compare the dates of the RARs to keep only the most recent one.",
			"project.Formalizz.API-la-Post-li5-2": "A table is built, converting each client into a row.",
			"project.Formalizz.API-la-Post-li5-3": "A white envelope icon on a blue background is added to each row.",
			"project.Formalizz.API-la-Post-li5-4": "The controller converts the list of clients into a JSON variable. The client's identifier is linked to the most recent RAR.",
			"project.Formalizz.API-la-Post-li6-1": "The view, in JavaScript, will make an asynchrone request to the internal API.",
			"project.Formalizz.API-la-Post-li6-2": "This internal API is mandatory because La Poste's API is on a different domain, and browser restrictions such as 'Cross-Origin' prevent direct requests to external domains.",
			"project.Formalizz.API-la-Post-li7-1": "The internal API contacts La Poste's remote API with the RAR numbers.",
			"project.Formalizz.API-la-Post-li8-1": "The response from the remote server is received.",
			"project.Formalizz.API-la-Post-li8-2": "It may contain a JSON object or an error message.",
			"project.Formalizz.API-la-Post-li9-1": "In the case of a response indicating that the remote server is unavailable, after a waiting period, the same request is retried.",
			"project.Formalizz.API-la-Post-li10-1": "When the response is valid, the internal API returns the JSON to the view.",
			"project.Formalizz.API-la-Post-li10-2": "The Promise of the asynchronous function is fulfilled.",
			"project.Formalizz.API-la-Post-li11-1": "In JavaScript, the RAR numbers are compared with the Client objects.",
			"project.Formalizz.API-la-Post-li11-2": "The color of the envelope icons is updated based on the status of the letter.",
		}
	},
	fr: {
		translation: {
			"Welcome to React": "Bienvenue à React et react-i18next",
			"Home": "Accueil",
			"Resume": "Curriculum Vitæ",
			"RL.personnal.web.pages": "Page perso de Rémi Lerolle",
			"CV.RL": "Curriculum Vitæ de Rémi Lerolle",
			"projet.portfolio.description": "Les pages perso, le site que vous visitez actuellement, reflète mon expérience professionnelle.",
			"project.formalizz.description": "RP Drancy est une entreprise de remplacement de pare-brise. Qui offre la possibilité d'avance des coûts, sous condition de cession de la créance au-près des assurances. Le projet consiste donc à conserver de manière persistante les clients, leurs véhicules, et leurs informations d'assurance.",
			"Formalizz.FrontEnd.title": "Front End",
			"Formalizz.FrontEnd.text": "L'interface graphique du site Formalizz a été réalisée en collaboration avec un graphiste. Celui-ci a créé le logo, les couleurs… Les icônes proviennent du site fontawsome. Le CSS utilise la bibliothèque Bootstrap notamment les utilitaires de formulaire, carte… Grâce à Bootstrap, l'interface est adaptative.",
			"projet.studioXSL.description": "Les documents au format XML ne sont pas porteurs des styles de mise en forme comme le sont les documents word, par exemple. Ce qui peut paraîte une faiblesse est en fait une grande force. Car en externalisant les paramètres de forme, le doucment XML peut être publié sous une mutlitude de formats. HTML, PDF… Aussi le même document peut-être publié dans le même format mais avec des mises en page et des filtrages différents. Alors que la création des feuilles de style XSLT est réservée aux développeurs le studio de génération de XSL permet aux utilisateurs de Calenco de générer des feuilles de style XSL sans avoir aucune connaissance en code.",
			"projet.StudioXSL.FrontEnd.title": "Côté client",
			"projet.StudioXSL.FrontEnd.text": "L'interface utilisateur est entièrement écrite en React, pour permettre la réutilisation de composants. Le state étant particulière imposant, la bibliothèque Redux est employée. Elle permet d'accéder aux states via un manager ou store accessible n'importe où dans l'application. Pour les fonctionnalités de glisser / déposer, la bibliothèque React-DnD est utilisée.",
			"Formalizz.SQL.title": "Base de données",
			"Formalizz.SQL.text": "Le site Formalizz garde ses données de manière persistante grâce à une base de données SQL. Sa structure permet à plusieurs entreprises d'utiliser ses services moyennant un abonnement.\n Elle permet d'enregister les clients de chaque entreprise. Chaque client peut avoir un ou plusieurs véhicules. Chaque véhicule est lié à un contrat d'assurance et à un ou plusieurs sinistres. Chaque accident peut-être lié à des courriers envoyés à l'assurance.",
			"projet.StudioXSL.dnd.title": "Glissé déposé pour la conception des pages de titre",
			"projet.StudioXSL.dnd.text-1": "Le studio propose de concevoir les pages de titre des livres, articles, chapitres… grâce à une interface 'user friendly'. L'utilisateur dispose dans une barre latérale d'une liste de 'widget'. Chacun de ces widgets correspond à un élément à ajouter à la page de titre. Par exemple le titre du livre, la révision la plus récente… Il suffit à l'utilisateur de glisser / déposer un de ces 'widgets' sur l'aperçu. Un widget additionnel permet de 'grouper' les autres catégories de widget. Il suffit de glisser un widget classique sur un groupe. Pour permettre la communication entre la barre latérale et la prévue, redux est utilisé. L'exemple ci-dessous est une maquette ayant servi comme 'proof of concept'. Il est interactif. Vous pouvez glisser / déposer des widgets depuis la barre latérale vers la zone de préuve 'bleue clair'. Le tableau renseigne sur le state Redux.",
			"projet.StudioXSL.dnd.text-2": "Vous pouvez consulter ce code sur ",
			"projet.StudioXSL.dnd.text-3": "mon github.",
			"Formalizz.Laposte.API.title": "Création d'API interne et utilisation d'API externe",
			"project.Formalizz.API-la-Post-para1": "Un échantillon de code est consultable sur ",
			"project.Formalizz.API-la-Post-para1-link1": "un dépôt public de githbub",
			"project.Formalizz.API-la-Post-para2-1": "Les Utlisateurs du site Formalizz génèrent automatiquement des courriers, associés à un numéro de recommandé avec accusé de réception (RAR)",
			"project.Formalizz.API-la-Post-para2-2": "La fonctionnalité décrite ici permet de connaître en un coup d'œil le statut d'un courrier.",
			"project.Formalizz.API-la-Post-li1-1": "Initiation du processus. Un utilisateur visite la page \"liste des clients\".",
			"project.Formalizz.API-la-Post-li2-1": "La vue demande au contrôleur une liste de 15 clients.",
			"project.Formalizz.API-la-Post-li3-1": "Le contrôleur prépare et envoie une requête SQL à la base de données, requérant les numéros RAR  de tous les courriers générés pour ce client.",
			"project.Formalizz.API-la-Post-li4-1": "La base de données retourne la liste des clients demandée avec tous les RAR associés.",
			"project.Formalizz.API-la-Post-li5-1": "Le contrôleur va comparer les dates des RAR pour ne conserver que le plus récent.",
			"project.Formalizz.API-la-Post-li5-2": "Un tableau est contruit convertissant chaque client en ligne.",
			"project.Formalizz.API-la-Post-li5-3": "Un pictogramme  blanc d'enveloppe sur fond bleu est ajouté à chaque ligne.",
			"project.Formalizz.API-la-Post-li5-4": "Le contrôleur convertit la liste de clients en une variable JSON. L'identifiant du client est lié au RAR le plus récent.",
			"project.Formalizz.API-la-Post-li6-1": "La vue, en javaScript, va faire une requête asynchrone sur l'API interne.",
			"project.Formalizz.API-la-Post-li6-2": "Cette API interne est indispensable car l'API de La Poste étant sur un domaine différent, les restrictions de navigateur de type \"Cross Origin\" la bloqueraient.",
			"project.Formalizz.API-la-Post-li7-1": "L'API interne contacte l'API distante de La Poste avec les numéros de RAR.",
			"project.Formalizz.API-la-Post-li8-1": "La réponse du serveur distant est reçue.",
			"project.Formalizz.API-la-Post-li8-2": "Elle peux contenir un objet JSON ou un message d'erreur.",
			"project.Formalizz.API-la-Post-li9-1": "Dans le cas d'une réponse contenant un statut de serveur distant indisponible, après un temps d'attente, la même requête est relancée.",
			"project.Formalizz.API-la-Post-li10-1": "Lorsque la réponse est valide l'API interne retourne le JSON à la vue.",
			"project.Formalizz.API-la-Post-li10-2": "La Promesse de la fonction asynchrone est satisfaite.",
			"project.Formalizz.API-la-Post-li11-1": "En javascript les numéros RAR sont comparés avec les objets Clients.",
			"project.Formalizz.API-la-Post-li11-2": "La couleur des pictogrammes enveloppe sont mises à jours au regard du statut du courrier.",
		}
	}
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
		// you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
		// if you're using a language detector, do not define the lng option

		interpolation: {
			escapeValue: false // react already safes from xss
		}
	});

export default i18n;