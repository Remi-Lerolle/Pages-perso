import { React, useContext } from 'react';
import { ProjectDataClass, SectionProjectDataClass } from "../../Classes/ProjectDataClass.tsx"
import { Project } from './Project.js';
import xmlIcon from "../../IMG/xml-icon.png"

export default function StudioXSL() {
	return (
		<Project data={StudioXSLDataClass} />
	)
}

export const StudioXSLDataClass = new ProjectDataClass(
	{
		"title": "Studio XSL",
		"projectPath": "/portfolio/StudioXSL",
		"I18nDescriptionId": "projet.studioXSL.description",
		"imgUrl": xmlIcon,
		"listOfSection": [
			new SectionProjectDataClass(
				{
					title: "projet.StudioXSL.FrontEnd.title",
					i18nTextId: "projet.StudioXSL.FrontEnd.text",
					imgUrl: null,
					technoList: ["Bootstrap", "CSS"]
				}
			),
			new SectionProjectDataClass(
				{
					title: "projet.StudioXSL.dnd.title",
					i18nTextId: "projet.StudioXSL.dnd.text",
					imgUrl: null,
					technoList: ["React", "Redux", "Redux-ToolKik", "React-Dnd"],
					componentList: [Dummy()]
				}
			)
		]
	}
)

function Dummy() {
	return <div>dummy</div>
}