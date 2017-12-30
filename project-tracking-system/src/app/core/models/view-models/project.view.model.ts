export class Project {
  public _id : string
  public status : string
  public date : Date
  public updatedDate: Date
  public comments : { email: string, content: string, commentDate: Date }[]

  constructor(
    public title : string,
    public jobNumber : number,
    public creator : string,
    public creatorId : string,
    public selectWorker : string
  ) { }
}

// Components that will use this model
// BookDetailsComponent 
// AllBooksComponent