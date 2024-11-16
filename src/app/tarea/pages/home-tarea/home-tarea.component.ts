import { Component } from '@angular/core';
import { ListTareaComponent } from '../../components/list-tarea/list-tarea.component';

@Component({
  selector: 'app-home-tarea',
  standalone: true,
  imports: [ListTareaComponent],
  templateUrl: './home-tarea.component.html',
  styleUrl: './home-tarea.component.css'
})
export class HomeTareaComponent {

}
