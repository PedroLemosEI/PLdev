import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './sections/hero/hero';
import { OnOff } from './sections/on-off/on-off';
import { Stats } from './sections/stats/stats';
import { Contact } from './sections/contact/contact';
import { Projects } from './sections/projects/projects';

@Component({
  selector: 'app-root',
  imports: [Hero, OnOff, Projects, Stats, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('website');
}
