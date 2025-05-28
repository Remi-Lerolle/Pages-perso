import React, { useContext } from 'react';

import { ProjectDataClass, SectionProjectDataClass } from "../../Classes/ProjectDataClass.tsx"
import { Project } from './Project';
import LogoRPDrancy from "../../IMG/Logo_Captain-Pare-Brise.png"
import FormalizzFrontImg from "../../IMG/Formalizz-front.jpg"
import FormalizzSQLtImg from "../../IMG/formalizqvsuadmi.svg"
import { FormalizzApiWrapper } from './Formalizz_api_wrapper.js';


import i18n from '../../Translation/i18n';
import { LangContext } from '../../App.js';

export function Formalizz(data) {

	const langue = useContext(LangContext);
	i18n.changeLanguage(langue);

	return (
		<Project data={FormalizzData} />
	)
}

export const FormalizzData = new ProjectDataClass(
	{
		"title": "Formalizz",
		"imgUrl": LogoRPDrancy,
		"projectPath": "/portfolio/Formalizz",
		"I18nDescriptionId": "project.formalizz.description",
		"listOfSection": [
			new SectionProjectDataClass(
				{
					title: "Formalizz.FrontEnd.title",
					i18nTextId: "Formalizz.FrontEnd.text",
					imgUrl: FormalizzFrontImg,
					technoList: ["Bootstrap", "CSS"]
				}
			),
			new SectionProjectDataClass(
				{
					title: "Formalizz.SQL.title",
					i18nTextId: "Formalizz.SQL.text",
					imgUrl: FormalizzSQLtImg,
					technoList: ["SQL"]
				}
			),
			new SectionProjectDataClass(
				{
					title: "Formalizz.Laposte.API.title",
					technoList: ["XHR", "API"],
					componentList: [FormalizzApiWrapper()]
				}
			)
		]
	}
)