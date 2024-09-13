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
			"projet.studioXSL.description": "The XSL generation studio is an application that allows Calenco users to generate XSL style sheets without any coding knowledge.",
			"projet.StudioXSL.FrontEnd.title": "Front End",
			"projet.StudioXSL.FrontEnd.text": "The user interface is entirely built with React to facilitate component reuse. Given the particularly large state, the Redux library is used. It allows access to states via a manager or store that is accessible throughout the application. For drag-and-drop functionalities, the React-DnD library is utilized.",
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
			"projet.studioXSL.description": "Le studio de génération de XSL est une application qui permet aux utilisateurs de Calenco de générer des feuilles de style XSL sans avoir aucune connaissance en code.",
			"projet.StudioXSL.FrontEnd.title": "Côté client",
			"projet.StudioXSL.FrontEnd.text": "L'interface utilisateur est entièrement écrite en React, pour la réutilisation de composants. Le state étant particulière imposant, la bibliothèque Redux est employée. Elle permet d'accéder aux states via un manager ou store accessible n'importe où dans l'application. Pour les fonctionnalités de glisser déploser, la bibliothèque React-DnD est utilisée.",
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