import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { StudentsService, Student } from './students.service';

@Component({
  selector: 'app-students-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, RouterModule],
  template: `
    <h2 class="text-xl font-bold mb-4">Students</h2>
    <table mat-table [dataSource]="students" class="min-w-full">
      <ng-container matColumnDef="first_name">
        <th mat-header-cell *matHeaderCellDef>First Name</th>
        <td mat-cell *matCellDef="let s">{{s.first_name}}</td>
      </ng-container>
      <ng-container matColumnDef="last_name">
        <th mat-header-cell *matHeaderCellDef>Last Name</th>
        <td mat-cell *matCellDef="let s">{{s.last_name}}</td>
      </ng-container>
      <ng-container matColumnDef="email">
        <th mat-header-cell *matHeaderCellDef>Email</th>
        <td mat-cell *matCellDef="let s">{{s.email}}</td>
      </ng-container>
      <ng-container matColumnDef="actions">
        <th mat-header-cell *matHeaderCellDef></th>
        <td mat-cell *matCellDef="let s">
          <a mat-button color="primary" [routerLink]="['/students', s.id, 'edit']">Edit</a>
          <button mat-button color="warn" (click)="remove(s.id!)">Delete</button>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
    <a mat-raised-button color="primary" class="mt-4" routerLink="/students/new">Add Student</a>
  `,
})
export class StudentsListComponent implements OnInit {
  students: Student[] = [];
  displayedColumns = ['first_name', 'last_name', 'email', 'actions'];

  constructor(private service: StudentsService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.service.list().subscribe(d => this.students = d);
  }

  remove(id: number) {
    this.service.delete(id).subscribe(() => this.load());
  }
}
