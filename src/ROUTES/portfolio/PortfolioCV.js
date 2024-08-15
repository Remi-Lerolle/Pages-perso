import {React, useContext} from 'react';
import { ProjectDataClass } from "../../Classes/ProjectDataClass"

export default function PortfolioCV(){
  return(
    <h1>CV</h1>
  )
}

export const PortfolioCVData = new ProjectDataClass(
  "Pages Perso",
  [ "React", "CSS", "Bootstrap"]
)