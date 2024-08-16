import {React, useContext} from 'react';
import { ProjectDataClass } from "../../Classes/ProjectDataClass.tsx"
import { Project } from './Project.js';

export default function PortfolioCV(){
  return(
    <Project data={PortfolioCVData} />
  )
}

export const PortfolioCVData = new ProjectDataClass(
  { "title": "Pages Perso",
  "technoList":[ "React", "CSS", "Bootstrap"],
  "projectPath": "/portfolio/PortfolioCV"
})