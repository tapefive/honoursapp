import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dumplings',
  templateUrl: './dumplings.page.html',
  styleUrls: ['./dumplings.page.scss'],
})
export class DumplingsPage{

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
