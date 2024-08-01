import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  bookingForm!: FormGroup 

  constructor(private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      datetime: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      // Process form data here
      console.log(this.bookingForm.value);
      this.router.navigate(['/confirmation']);
    }
  }
}
