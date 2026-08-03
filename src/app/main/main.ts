import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '../card/card';
import { Card } from '../card/card.model';
import about from '../../assets/about.json';
import skills from '../../assets/skills.json';
import projects from '../../assets/projects.json';

const EXPERIENCE_START = new Date(2019, 3, 1); // April 2019

function yearsSince(start: Date): number {
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  const anniversaryNotReachedYet =
    now.getMonth() < start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() < start.getDate());
  if (anniversaryNotReachedYet) {
    years--;
  }
  return years;
}

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, CardComponent],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class MainComponent {
  cards = signal<Card[]>([
    {
      collapseTitle: 'O',
      expandTitle: 'About',
      content: about.content.replace('{years}', String(yearsSince(EXPERIENCE_START))),
      class: 'card-about',
      bgColor: 'mulberry',
      resumeUrl: '/docs/Olga_Kruglova_CV.pdf',
    },
    {
      collapseTitle: 'L',
      expandTitle: 'Skills',
      content: null,
      class: 'card-skills',
      bgColor: 'black-plum',
      skills: skills.categories,
    },
    {
      collapseTitle: 'G',
      expandTitle: 'Gallery',
      content: null,
      class: 'card-gallery',
      bgColor: 'black-cherry',
      projects: projects.projects,
    },
    {
      collapseTitle: 'A',
      expandTitle: 'Contact',
      content: null,
      class: 'card-contact',
      bgColor: 'deep-indigo',
      contactForm: true,
      links: [
        { platform: 'facebook', url: 'https://www.facebook.com/olga.kruglova.9849' },
        { platform: 'linkedin', url: 'https://www.linkedin.com/in/olga-k-502b06154/' },
        { platform: 'github', url: 'https://github.com/olkruglova' },
      ],
    },
  ]);
}
