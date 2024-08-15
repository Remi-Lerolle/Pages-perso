import {React, useContext} from 'react';
import { ProjectDataClass } from "../../Classes/ProjectDataClass.tsx"

export default function PortfolioCV(){
  return(
    <h1>CV</h1>
  )
}

export const PortfolioCVData = new ProjectDataClass(
  { "title": "Pages Perso",
  "technoList":[ "React", "CSS", "Bootstrap"]}
)