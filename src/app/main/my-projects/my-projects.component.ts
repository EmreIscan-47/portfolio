import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {
constructor(private router: Router) {}

goToProject(){
  this.router.navigate(['project-showcase'])
}
}
