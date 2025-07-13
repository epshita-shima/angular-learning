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
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter((u) => u.id !== id);
    });
  }
}
