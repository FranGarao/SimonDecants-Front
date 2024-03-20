import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  constructor(
    private router: Router,
    private service: AppService,
  ) {}

  ngOnInit() {}

  logOut() {
    this.service.logOut().subscribe((res) => {
      console.log(res);
    });
  }
}
