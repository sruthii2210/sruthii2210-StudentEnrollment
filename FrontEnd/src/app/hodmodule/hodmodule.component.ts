import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hodmodule',
  templateUrl: './hodmodule.component.html',
  styleUrls: ['./hodmodule.component.css']
})
export class HODModuleComponent implements OnInit {
  
  constructor(private router:Router){}

  ngOnInit(): void {
  }
  onSubmit()
  {
    this.router.navigate(['main'])
  }
}
