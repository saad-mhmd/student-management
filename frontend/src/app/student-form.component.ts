import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { StudentsService } from './students.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
  ],
  template: `
    <h2 class="text-xl font-bold mb-4">{{ id ? 'Edit' : 'Add' }} Student</h2>
    <form [formGroup]="form" (ngSubmit)="submit()" class="space-y-4 max-w-md">
      <mat-form-field class="w-full">
        <mat-label>First Name</mat-label>
        <input matInput formControlName="first_name" required />
      </mat-form-field>
      <mat-form-field class="w-full">
        <mat-label>Last Name</mat-label>
        <input matInput formControlName="last_name" required />
      </mat-form-field>
      <mat-form-field class="w-full">
        <mat-label>Email</mat-label>
        <input matInput formControlName="email" type="email" required />
      </mat-form-field>
      <mat-form-field class="w-full">
        <mat-label>Enrollment Date</mat-label>
        <input matInput formControlName="enrollment_date" type="date" required />
      </mat-form-field>
      <button mat-raised-button color="primary" type="submit">Save</button>
    </form>
  `,
})
export class StudentFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: StudentsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.nonNullable.group({
      first_name: '',
      last_name: '',
      email: '',
      enrollment_date: '',
    });
  }
  id?: number;

  

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    this.id = param ? +param : undefined;
    if (this.id) {
      this.service.get(this.id).subscribe(s => this.form.patchValue(s));
    }
  }

  submit() {
    const data = this.form.getRawValue();
    const obs = this.id
      ? this.service.update(this.id, { id: this.id, ...data })
      : this.service.create(data);
    obs.subscribe(() => this.router.navigate(['/students']));
  }
}
