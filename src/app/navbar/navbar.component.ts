import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  toggleMenu(): void {
    const sidebar = document.getElementById("sidebar") as HTMLElement | null;
    const content = document.getElementById("content") as HTMLElement | null;

    if (sidebar && content) {
      sidebar.classList.toggle("visible");
      content.classList.toggle("shifted");
    }
  }
}
