interface ProjectDataProps{
  title: string,
  technoList: string[],
  imgUrl: any
}

export class ProjectDataClass{
  title: string;
  technoList: string[] = [];
  imgUrl: any;

  constructor( props: ProjectDataProps ){

    this.title = props.title;
    
    props.technoList.forEach( techno => {
      if ( this.technoList.indexOf(techno) !== -1){
        return;
      }
      if ( authorizedTechnoList.indexOf(techno) === -1){
          console.log( "techno not listed as authorized: " + techno);
          return;
      }
      this.technoList.push(techno);
    })

    this.imgUrl = props.imgUrl
  }

}

const authorizedTechnoList = ["PHP", "SQL", "React", "Bootstrap", "CSS"]