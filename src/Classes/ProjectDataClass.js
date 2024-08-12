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
        if ( typeof techno === "string" && this.technoList.indexOf(techno) === -1){
          this.technoList.push(techno);
        }
      })
    }
  }
}