import { Component, OnInit } from '@angular/core';
import { UserDetailsModel } from '../../models/userDetails.model';
import { UserDetailsService } from '../../services/user-details';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-details-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-details-list.html',
  styleUrl: './user-details-list.css',
})
export class UserDetailsList implements OnInit {
  users: UserDetailsModel[] = [];
  newUser: UserDetailsModel = { name: '', username: '', email: '' };
  isEditMode: boolean = false;

  constructor(private userService: UserDetailsService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((data) => (this.users = data));
  }

  addUser() {
    this.userService.addUser(this.newUser).subscribe((user) => {
      this.users.unshift(user);
      this.newUser = { name: '', username: '', email: '' };
    });
  }

  editUser(user: UserDetailsModel) {
    this.newUser = { ...user };
    this.isEditMode = true;
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter((u) => u.id !== id);
    });
  }

  generateNewId(): number {
    const maxId =
      this.users.length > 0 ? Math.max(...this.users.map((u) => u.id || 0)) : 0;
    return maxId + 1;
  }

  onSubmit() {
    if (this.isEditMode && this.newUser.id != null) {
      const index = this.users.findIndex((u) => u.id === this.newUser.id);
      if (index !== -1) {
        this.users[index] = { ...this.newUser };
      }
      this.isEditMode = false;
    } else {
      const currentUser = { ...this.newUser, id: this.generateNewId() };
      this.users.push(currentUser);
    }
    this.resetForm();
  }

  resetForm() {
    this.newUser = {
      name: '',
      username: '',
      email: '',
    };
    this.isEditMode = false;
  }
}
