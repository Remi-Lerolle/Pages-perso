export class Techno {
  constructor(list){
    this.listOfTecho = []
  }

  addTechnoFromList = (list) => {
    list.forEach( techno => {
      if( this.listOfTecho.indexOf( techno) === -1 )
        this.listOfTecho.push( techno)
    }) 
  }

}