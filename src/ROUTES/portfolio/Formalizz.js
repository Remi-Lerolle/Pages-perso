import React from 'react';
import { ProjectDataClass } from "../../Classes/ProjectDataClass"
import { Project } from './Project';


export function Formalizz( data ){
  return(
    <Project data={FormalizzData} />
  )
}

export const FormalizzData = new ProjectDataClass( 
  "Formalizz", //title
  [ "PHP", "SQL"] //technoList
)