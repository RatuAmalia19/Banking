import { Component, OnInit } from '@angular/core';
import { Tutorial } from './models/tutorial.models';
import { TutorialService } from './services/tutorial.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
//implements OnInit
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  newEntry: Tutorial = { avatar: 'path/to/new-entry-avatar.jpg', name: '', country: '', city: '', balance: 0 };
  tutorials: Tutorial[] = [];

  constructor(
    private tutorialService: TutorialService
  ) { }


  addEntry(): void {
    this.tutorials.push({ ...this.newEntry });
    this.tutorialService.addEntry({ ...this.newEntry });
    this.newEntry = { avatar: 'path/to/new-entry-avatar.jpg', name: '', country: '', city: '', balance: 0 };
  }

  // ngOnInit(): void {
  //   this.getDataTutorial()
  // }

  // getDataTutorial() {
  //   this.tutorialService.getAll().subscribe((res) => {
  //     console.log('success get data', res);
  //     this.tutorials = res;
  //   })
  // }

  // getDataTutorialId(id: any) {
  //   this.tutorialService.get(id).subscribe((res) => {
  //     console.log('success get data', res);
  //   })
  // }

  // Delete(id: any) {
  //   this.tutorialService.delete(id).subscribe((res) => {
  //     console.log('success delete data', res);
  //   })
  // }
}
