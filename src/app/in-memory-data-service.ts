import  { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb(){/*CHANGEDD THE OBJECT TO CONATAIN MOVIE DATA AND TO HOLD PICTURE SOURCES*/
 let movies = [
  { id: 10, name: 'Batman Vs Superman', picSrc:'img/a.jpg'},/*picSrc key is added to help display images*/
  { id: 11, name: 'Rogue One', picSrc:'img/b.jpg' },
  { id: 12, name: 'Civil War', picSrc:'img/c.jpg' },
  { id: 13, name: 'Doctor Strange', picSrc:'img/d.jpg' },
  { id: 14, name: 'Jason Bourne', picSrc:'img/e.jpg' },
  { id: 15, name: 'Independence day', picSrc:'img/f.jpg' },
  { id: 16, name: 'P.O.C Deadman Tales', picSrc:'img/g.jpg' },
  { id: 17, name: 'Skip Trace', picSrc:'img/h.jpg' },
  { id: 18, name: 'Max Steel', picSrc:'img/i.jpg' },
  { id: 19, name: 'Central Intelligence', picSrc:'img/j.jpg' },
  { id: 20, name: 'Lord of the rings', picSrc:'img/k.jpg' }
];
return { movies };
}
}
