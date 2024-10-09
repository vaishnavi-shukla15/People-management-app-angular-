import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonService } from '../person.service';
import { Person } from '../person.model';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
})
export class EditPersonComponent implements OnInit {
  personForm: FormGroup;
  personId: number | null = null; // Initialize as null

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private fb: FormBuilder,
    private router: Router
  ) {
    // Initialize the form with default values
    this.personForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    // Get the person ID from the route and ensure it's a number
    this.personId = Number(this.route.snapshot.paramMap.get('id'));

    // Fetch the person data based on the ID
    if (this.personId) {
      this.personService.getPersonById(this.personId).subscribe((person) => {
        if (person) {
          this.initializeForm(person);
        } else {
          // Handle case where person is not found (optional)
          this.router.navigate(['/']); // Navigate back to the home page
        }
      });
    } else {
      // Handle case where personId is not valid
      this.router.navigate(['/']); // Navigate back to the home page
    }
  }

  initializeForm(person: Person): void {
    // Populate the form with the existing person's data
    this.personForm.patchValue({
      name: person.name,
      age: person.age,
      email: person.email,
    });
  }

  onSubmit(): void {
    if (this.personForm.valid) {
      // Ensure personId is not null and use it to create the updated person object
      if (this.personId !== null) {
        const updatedPerson: Person = {
          id: this.personId, // Use the existing ID
          name: this.personForm.value.name,
          age: this.personForm.value.age,
          email: this.personForm.value.email,
        };
        // Update the person in the service
        this.personService.updatePerson(updatedPerson);
        // Navigate back to the home page after successful update
        this.router.navigate(['/']);
      }
    }
  }
}
