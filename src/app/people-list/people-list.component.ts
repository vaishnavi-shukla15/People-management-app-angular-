import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../person.service';
import { Person } from '../person.model';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit(): void {
    this.personService.getPeople().subscribe((data: Person[]) => {
      this.people = data; // Assign the data to the people array
    });
  }

  onEdit(personId: number): void {
    this.router.navigate(['/edit', personId]);
  }

  onDelete(personId: number): void {
    this.personService.deletePerson(personId);
    this.personService.getPeople().subscribe((data: Person[]) => {
      this.people = data; // Refresh the list after deletion
    });
  }
}
