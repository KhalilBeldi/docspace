import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { StepperModule } from 'primeng/stepper';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ButtonModule,PanelModule,ToastModule,StepperModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent {
  title = 'docspaceclientattempt';

  constructor(private messageService: MessageService) {}


}


