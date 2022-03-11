import { Component, OnInit } from '@angular/core';
import { TestService } from './test-service';

@Component({
  selector: 'app-root',
  template: `
	
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'beer-demo';

  constructor(private testService: TestService) {}

  ngOnInit(): void {
	this.testService.testGet().subscribe(val => console.log(val));
	this.testService.testPost().subscribe(val => console.log(val));
  }
}
