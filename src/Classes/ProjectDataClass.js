export class ProjectDataClass{
  constructor( 
    title,
    technoList
   ){

    this.title="";
    if (title && typeof title === "string"){
      this.title = title;
    }
  
    this.technoList =[];
    if ( technoList && Array.isArray(technoList) ){
      technoList.forEach( techno => {
        if ( typeof techno !== "string" ){
            console.error( "technoList accepts only strings");
            return;
        }
        if ( this.technoList.indexOf(techno) !== -1){
          return;
        }
        if ( authorizedTechnoList.indexOf(techno) === -1){
            console.log( "techno not listed as authorized: " + techno);
            return;
        }
        this.technoList.push(techno);
      })
    }
  }

}
const authorizedTechnoList = ["PHP", "SQL", "React", "Bootstrap", "CSS"]