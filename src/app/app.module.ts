import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import the required modules
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { PeopleListComponent } from './people-list/people-list.component';
import { AddPersonComponent } from './add-person/add-person.component'; // Import your AddPersonComponent
import { EditPersonComponent } from './edit-person/edit-person.component'; // Import your EditPersonComponent
import { PersonService } from './person.service';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    AddPersonComponent, // Declare your AddPersonComponent
    EditPersonComponent // Declare your EditPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add FormsModule here
    ReactiveFormsModule // Add ReactiveFormsModule here
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
