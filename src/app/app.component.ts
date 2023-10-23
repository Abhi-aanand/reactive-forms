import { Component } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
[x: string]: any;

  constructor(private fb: FormBuilder){}

  registrationForm=this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3)]],
    password:[''],
    confirmPassword:[''],
    address: this.fb.group({
      city:[''],
      state:[''],
      postalCode:['']
    })
  })
  
  


  // registrationForm=new FormGroup({
  //   userName: new FormControl('Sabuja'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl(''),
  //   })

  // });

  loadApiData(){
    this.registrationForm.setValue({
      userName: 'Swapnil',
      password: 'test',
      confirmPassword: 'test',
      address: {
        city: 'Indore',
        state: 'MP',
        postalCode: '123456'
      }
    });
  }
}
