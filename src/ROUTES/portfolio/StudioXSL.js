import { React, useContext } from 'react';
import { ProjectDataClass } from "../../Classes/ProjectDataClass.tsx"
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
    "technoList": ["React", "CSS", "Bootstrap", "XSL", "API"],
    "projectPath": "/portfolio/StudioXSL",
    "I18nDescriptionId": "projet.studioXSL.description",
    "imgUrl": xmlIcon
  }
)