import { React, useContext } from 'react';
import { ProjectDataClass, SectionProjectDataClass } from "../../Classes/ProjectDataClass.tsx"
import { Project } from './Project.js';
import Logo_Portfolio from "../../IMG/Logo_Portfolio.png"

export default function PortfolioCV() {
	return (
		<Project data={PortfolioCVData} />
	)
}

export const PortfolioCVData = new ProjectDataClass(
	{
		"title": "Pages Perso",
		"technoList": ["React", "CSS", "Bootstrap"],
		"projectPath": "/portfolio/PortfolioCV",
		"I18nDescriptionId": "projet.portfolio.description",
		"imgUrl": Logo_Portfolio,
		"listOfSection": [
			new SectionProjectDataClass(
				{
					title: "",
					i18nTextId: "CV.FrontEnd.text",
					imgUrl: null,
					technoList: ["Bootstrap", "CSS"]
				}
			)
		]
	})