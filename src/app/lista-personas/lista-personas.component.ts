import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl,} from '@angular/forms';


@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})

export class listaNombres{

public personasForm: FormGroup;
  private formBuilder: FormBuilder = new FormBuilder;
personas: listaNombre[];

  constructor(){
    this.personas=[];
    this.personasForm = this.formBuilder.group({
      nombre: new FormControl(''),
      edad: new FormControl(''),
    });
    
  }

  public createPersona(personasForm: FormGroup): void {
    const persona:listaNombre=new listaNombre();
    persona.nombre=personasForm.get('nombre')?.value;
    persona.edad=personasForm.get('edad')?.value;
    
    const edadpersona= Number(persona.edad);
    let rangoedad= '';
    if(edadpersona>=0 && edadpersona<=11){
      rangoedad='niño'
    }
    if(edadpersona>=12 && edadpersona<=18){
      rangoedad='adolescente'
    }
    if(edadpersona>=18 && edadpersona<=59){
      rangoedad='adulto'
    }
    if(edadpersona>=60 ){
      rangoedad='adulto mayor'
    }
    persona.rangoedad=rangoedad;
    this.personas.push(persona);
    this.personasForm.reset();
    console.log(this.personas)


  }


  anadirnombre(nombre:String, edad:String){
    console.log("impresion"+nombre)

    let listnombre: listaNombre;
    listnombre=new listaNombre();
    console.log("impresion")
    console.log(listaNombre)
    if(listnombre.esValido()){
      
      this.personas.push(listnombre);
      console.log('persona añadida')

    }else{
      console.log('persona no valida')
    }
  }

}



class listaNombre{

  nombre:String='';
  edad: String='';
  rangoedad: String='';


  esValido(){
    if(this.edad){
      return "es menor de edad";
    }
    return "es mayor de edad";
  }

  // datosCompletos(){
  //   return this.nombre+ ''+ this.edad;
  // }
}