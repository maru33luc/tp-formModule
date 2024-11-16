import { Component, inject, OnInit } from '@angular/core';
import { AddTareaComponent } from '../add-tarea/add-tarea.component';
import { Tarea } from '../../interface/tarea.interface';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-list-tarea',
  standalone: true,
  imports: [AddTareaComponent],
  templateUrl: './list-tarea.component.html',
  styleUrl: './list-tarea.component.css'
})
export class ListTareaComponent implements OnInit{


  ngOnInit(): void {
    this.traerTareas()
  }

  tareaService = inject(TareaService)

  lista: Tarea[]=[];

  traerTareas(){
    this.tareaService.getTareas().subscribe(
      {
        next: (tareas: Tarea[]) => {
          this.lista = tareas;
        },
        error: () => {
          console.log('Error');
        }
      }
    )
  }

  agregarLista(tarea: Tarea){
    //const tareacopiada = {...tarea}
    this.lista.push(structuredClone(tarea))
  }

 
}
