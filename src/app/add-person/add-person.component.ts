import { Component } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person.model'; // Import the Person model

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
})
export class AddPersonComponent {
  name: string = '';
  age: number = 0;
  email: string = '';

  constructor(private personService: PersonService) {}

  onSubmit(form: any) {
    if (form.valid) {
      // Subscribe to get the current people and calculate the new ID
      this.personService.getPeople().subscribe(people => {
        const newPerson: Person = {
          id: people.length + 1, // Simple ID assignment
          name: this.name,
          age: this.age,
          email: this.email
        };
        this.personService.addPerson(newPerson); // Add the new person
        // Reset form or navigate as needed
        form.reset(); // Reset the form after submission
      });
    }
  }
}
