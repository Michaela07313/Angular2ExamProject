export class Project {
  constructor(
    public id : string,
    public title : string,
    public jobNumber : number,
    public status : string,
    public date : Date,
    public updatedDate: Date,
    public creator : string,
    public worker : string,
    public comments : { email: string, content: string, commentDate: Date }[]
  ) { }
}

// Components that will use this model
// BookDetailsComponent 
// AllBooksComponent