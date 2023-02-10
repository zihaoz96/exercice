import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import axios from "axios";
import {Router} from "@angular/router";

@Component({
  selector: 'app-formulair',
  templateUrl: './formulair.component.html',
  styleUrls: ['./formulair.component.scss']
})
export class FormulairComponent implements OnInit {
  loginForm !: FormGroup
  statusInput:any = {
    usernameError:false,
    passwordError:false,
  }

  constructor(
    private formBuilder: FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    // initial loginForm
    this.loginForm = this.formBuilder.group(({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    }))
  }

  submit(){
    // check login status
    if(this.loginForm.status === "VALID"){
      const [username,password] = [this.loginForm.get("username")?.value,this.loginForm.get("password")?.value]
      console.log(username, password)
      if(username && password){
        axios.post("http://localhost:3001/login",{username,password})
          .then((response)=>{
            console.log("response:",response)
            // login failed
            if(response.data.status == 0){
              alert("login failed: " + response.data.message)
            }
            // login success
            else if(response.data.status == 1){
              sessionStorage.setItem("username",username)
              this.router.navigate(["home"])
            }
          })
          .catch((error)=>{
            console.log("err:",error)
          })
      }
    }

    // set status inputs
    this.statusInput.usernameError = this.loginForm.get("username")?.invalid
    this.statusInput.passwordError = this.loginForm.get("password")?.invalid
  }

}
