import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    this.currentDisplayedSkill = this.displaySkills[this.activeIndex];

    this.loop();
  }
  displaySkills: Array<string> = [
    'Web Developer',
    'Angular Developer',
    'Salesforce Developer',
  ];
  currentDisplayedSkill!: any;
  activeIndex: number = 0;
  loop() {
    setTimeout(() => {
      if (this.activeIndex == 0) {
        this.activeIndex = this.displaySkills.length - 2;
      } else if (this.activeIndex == 1) {
        this.activeIndex = this.displaySkills.length - 1;
      } else {
        this.activeIndex = 0;
      }
      this.currentDisplayedSkill = this.displaySkills[this.activeIndex];

      this.loop();
      console.log('current element1', this.currentDisplayedSkill);
    }, 5000);

    console.log('current element2', this.currentDisplayedSkill);
  }
}
