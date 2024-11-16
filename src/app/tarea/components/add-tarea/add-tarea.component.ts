import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Tarea } from '../../interface/tarea.interface';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-add-tarea',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-tarea.component.html',
  styleUrl: './add-tarea.component.css'
})
export class AddTareaComponent {

  @Output()
  emitirTarea = new EventEmitter<Tarea>()

  fb = inject(FormBuilder)
  tareaService = inject(TareaService)
  formulario = this.fb.nonNullable.group(
    {
      id: ['', [Validators.required]],
      tarea: ['', [Validators.required, Validators.minLength(3)]]
    }
  )

  addTarea(){

    if(this.formulario.invalid) return;

    const tarea = this.formulario.getRawValue();

    this.addTareaDB(tarea);

    this.emitirTarea.emit(tarea);
  }

  addTareaDB(tarea: Tarea){
    this.tareaService.postTarea(tarea).subscribe(
      {
        next: () => {
          console.log('Tarea ingresada...');
        },
        error: (error: Error) => {
          console.log(error.message);
        }
      }
    )
  }

}
