export class Techno {
  constructor(list){
    this.listOfTechno = []
    if( list ){
      this.addTechnoFromList(list)
    }
  }

  addTechnoFromList = (list) => {
    list.forEach( techno => {
      if( this.listOfTechno.indexOf( techno) === -1 )
        this.listOfTechno.push( techno)
    }) 
  }

}