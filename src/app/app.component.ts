import { Component } from '@angular/core';
import { ProjectDescription } from './types/project.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mock-company-site';
  projectDescription: ProjectDescription = {
    name: 'Some Awesome Project',
    projectManager: 'Project Manager', // probably add also a link
    domain: 'Medical',
    teamLead: 'Team Lead',
    mainTechnology: 'C++',
    additionalTechnologies: ['C#', 'Python'],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.`,
    teamMembers: [
      { id: 'teamMember1', profileImagePath: '', fullName: 'Team Member1' },
      { id: 'teamMember2', profileImagePath: '', fullName: 'Team Member2' },
      { id: 'teamMember3', profileImagePath: '', fullName: 'Team Member3' },
      { id: 'teamMember4', profileImagePath: '', fullName: 'Team Member4' },
      { id: 'teamMember5', profileImagePath: '', fullName: 'Team Member5' },
      { id: 'teamMember5', profileImagePath: '', fullName: 'Team Member5' },
      { id: 'teamMember5', profileImagePath: '', fullName: 'Team Member5' },
      { id: 'teamMember5', profileImagePath: '', fullName: 'Team Member5' },
    ],
  };
}
