import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-person',
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.css']
})
export class DeletePersonComponent implements OnInit {
  personId: number | null = null; // Initialize with null

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.personId = id ? +id : null; // Use conditional check
  }

  confirmDelete(): void {
    // Logic for confirming deletion
    console.log(`Person with ID ${this.personId} will be deleted.`);
    // Navigate back to the people list or perform the delete operation
    this.router.navigate(['/people']); // Adjust the navigation as necessary
  }

  cancelDelete(): void {
    // Logic for cancelling the deletion
    console.log('Deletion cancelled.');
    this.router.navigate(['/people']); // Adjust the navigation as necessary
  }
}
