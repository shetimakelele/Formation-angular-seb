import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-card',
  imports: [FormsModule],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css',
})
export class ProfileCard {
  name = 'john Doe';
  bio = "développeur angular junior";
  isOnline = true;
  avatarUrl ='https://i.pravatar.cc/150?img=12';

    toggleStatus() {
    this.isOnline = !this.isOnline;
  }
}
