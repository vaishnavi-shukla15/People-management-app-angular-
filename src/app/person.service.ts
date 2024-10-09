import { Injectable } from '@angular/core';
import { Person } from './person.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private people: Person[] = [];

  constructor() {
    // Sample data
    this.people = [
      { id: 1, name: 'John Doe', age: 30, email: 'john.doe@example.com' },
      { id: 2, name: 'Jane Smith', age: 25, email: 'jane.smith@example.com' },
      // Add more sample data as needed
    ];
  }

  getPeople(): Observable<Person[]> {
    return of(this.people); // Return the array as an Observable
  }

  getPersonById(id: number): Observable<Person | undefined> {
    const person = this.people.find(person => person.id === id);
    return of(person); // Return the person as an Observable
  }

  updatePerson(updatedPerson: Person): void {
    const index = this.people.findIndex(person => person.id === updatedPerson.id);
    if (index !== -1) {
      this.people[index] = updatedPerson;
    }
  }

  deletePerson(id: number): void {
    this.people = this.people.filter(person => person.id !== id);
  }

  addPerson(newPerson: Person): void {
    this.people.push(newPerson);
  }
}
