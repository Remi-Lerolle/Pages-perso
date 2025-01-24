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
			"project.formalizz.description": "RP Drancy is a windshield replacement company. Which offers the possibility of lend on condition of assignment of the debt from the insurance company.<br />Project therefore consists of persistently retaining customers, their vehicles, and their insurance information.",
			"projet.portfolio.description": "The personal pages, the website you are currently visiting, reflect my professional experience.",
			"Formalizz.FrontEnd.title": "Front End",
			"Formalizz.FrontEnd.text": "Front End.",
			"projet.studioXSL.description": "XML documents do not carry formatting styles like Word documents, for example. What may seem like a weakness is actually a great strength. Because by externalizing the format parameters, the XML document can be published in a multitude of formats. HTML, PDF, etc. Also, the same document can be published in the same format but with different layouts and filtering. While the creation of XSLT style sheets is reserved for developers, the XSL generation studio allows Calenco users to generate XSL style sheets without having any knowledge of code.",
			"projet.StudioXSL.FrontEnd.title": "Front End",
			"projet.StudioXSL.FrontEnd.text": "The user interface is entirely built with React to facilitate component reuse. Given the particularly large state, the Redux library is used. It allows access to states via a manager or store that is accessible throughout the application. For drag-and-drop functionalities, the React-DnD library is utilized.",
			"Formalizz.SQL.title": "Data base",
			"Formalizz.SQL.text": "The Formalizz website keeps persisting data thanks to  an SQL database. Its structure allows several companies to use its services by subscription. It provide recording for each company to record its customers, several customers can have one or several vehicule. Each vehicule is linked to an insurance contract. Each vehicule can also have one or several car accident. Each car accident can be linked to couriers sent to the insurance.",
			"projet.StudioXSL.dnd.title": "Glissé déposé pour concevoir les pages de titre",
			"projet.StudioXSL.dnd.text": "",
			"projet.StudioXSL.dnd.text": "The studio proposes to design title pages for books, articles, chapter... Thanks to a 'user friendly' interface. A side bar is available where the user can find a widget list. Each of those widgets correspond to an element that can be added to the title page. For exemple the title of the book, the most recent révision... The useer just have to drag and drop one of those 'wdigets' on the preview. An additional widget allows to 'group' other widget catégories. Just moving a classical widget on a group. To allow communitation between the side bar and the preview, redux is used. The below example is a mockup used as 'proof of concept'. It is interactiv. You can drag / drop widgets from side bar to the light blue preview area. The below table is updated with the  Redux state. You can consult this code on my github: 'https://github.com/Remi-Lerolle/nested-dnd'",
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
			"project.formalizz.description": "RP Drancy est une entreprise de remplacement de pare-brise. Qui offre la possibilité d'avance des coups, sous condition de cession de la créance au-près des assurance.Le projet consiste donc à conserver de manière persistante les clients, leurs véhicules, et leurs informations d'assurance.",
			"Formalizz.FrontEnd.title": "Front End",
			"Formalizz.FrontEnd.text": "L'interface graphique du site Formalizz a été réalisée en collaboration avec un graphiste. Celui-ci a créé le logo, les couleurs… Les icones proviennent du site fontawsome. Le CSS utilise la bibliothèque bootstrap. avec les utilitaires de formulaire, carte… Grâce à Bootstrap, l'interface est responsive.",
			"projet.studioXSL.description": "Les documents au format XML ne sont pas porteurs des styles de mise en forme comme le sont les documents word par exemple. Ce qui peut paraîte une faiblesse est en fait une grande force. Car en externalisant les paramètres de forme, le doucment XML peut être publié sous une mutlitude de format. HTML, PDF… Aussi le même document peut-être publié dans le même format mais avec des mises en page et des filtrage différents. Alors que la création des feuilles de style XSLT est réservée aux développeurs le studio de génération de XSL permet aux utilisateurs de Calenco de générer des feuilles de style XSL sans avoir aucune connaissance en code.",
			"projet.StudioXSL.FrontEnd.title": "Côté client",
			"projet.StudioXSL.FrontEnd.text": "L'interface utilisateur est entièrement écrite en React, pour la réutilisation de composants. Le state étant particulière imposant, la bibliothèque Redux est employée. Elle permet d'accéder aux states via un manager ou store accessible n'importe où dans l'application. Pour les fonctionnalités de glisser déploser, la bibliothèque React-DnD est utilisée.",
			"Formalizz.SQL.title": "Base de données",
			"Formalizz.SQL.text": "Le site Formalizz garde ses données de manière persistante grâce à une base de données SQL. Sa structure permet à plusieurs entreprises d'utiliser ses services moyennant un abonnement.\n Elle permet d'enregister les clients de chaque entreprise. Chaque client peut avoir un ou plusieurs véhicule. Chaque véhicule est lié à un contrat d'assurance et à un ou plusieurs sinistres. Chaque accident peut-être lié à des couriers envoyé à l'assurance.",
			"projet.StudioXSL.dnd.title": "Glissé déposé pour la conception les pages de titre",
			"projet.StudioXSL.dnd.text": "Le studio propose de concevoir les pages de titre des livres, articles, chapitres... grâce à une interface 'user friendly'. L'utilisateur dispose dans une barre latérale d'une liste de 'widget'. Chacun de ces widgets correspond à un élément à ajouter à la page de titre. Par exemple le titre du livre, la révision la plus récente... Il suffit à l'utilisateur de glisser déposer un de ces 'wdigets' sur l'aperçu. Un widget additionnel permet de 'grouper' les autres catégories de widget. Il suffit de glisser un widget classique sur un groupe. Pour permettre la communitation entre la barre latérale et la prévue, redux est utilisé. L'exemple si dessus est une maquette ayant servi comme 'proof of concept'. Il est interactif. Vous pouvez glisser / déposer des widgets depuis la barre latérale vers la zone de préuve 'bleue clair'. Le tableau renseigne sur le state Redux. Vous pouvez consulter ce code sur mon github: 'https://github.com/Remi-Lerolle/nested-dnd'"
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