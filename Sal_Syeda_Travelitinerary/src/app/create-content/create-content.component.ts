import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss'
})
export class CreateContentComponent {

  // Output event to emit the new content
  @Output() createContent = new EventEmitter<any>();

  // Content object to store the form data
  content: any = {
    id: 0,
    title: '',
    description: '',
    creator: '',
    imgUrl: '',
    type: '',
    tags: []
  };

  // Error message to display to the user
  errorMessage: string = '';

  // Function to handle form submission
  onSubmit() {
    // Bonus: Validate form data
    if (!this.content.id || !this.content.title || !this.content.description || !this.content.creator) {
      this.errorMessage = 'Please fill in all required fields.';
      return;
    }

    // Clear previous error message
    this.errorMessage = '';

    // Create a new promise
    const promise = new Promise<void>((resolve, reject) => {
      // Simulate success
      if (Math.random() < 0.8) {
        this.createContent.emit({ ...this.content }); // Clone the content
        console.log(`Content added successfully: ${this.content.title}`);
        this.content = { id: 0, title: '', description: '', creator: '', imgUrl: '', type: '', tags: [] }; // Clear input fields
        resolve();
      } else {
        // Simulate failure
        reject('Failed to add content. Please try again.');
      }
    });

    // Handle promise resolution/rejection
    promise
      .then(() => console.log('Promise resolved')) // Log success message
      .catch((error) => {
        this.errorMessage = error; // Display error message
        console.error(`Promise rejected: ${error}`);
      });
  }


}
