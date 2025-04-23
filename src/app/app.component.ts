import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ButtonModule,PanelModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'docspaceclientattempt';
  binary = true;
}
