import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router, ActivatedRoute } from '@angular/router';
import  * as $ from 'jquery';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  $(document).ready(function(){
    // const url ='http://34.213.106.173/api/user/adminLogin';
    $('#btn').click(function(){
      const data={
        "email":$("#inputEmail").val(),     
        "password":$("#inputPassword").val()     

      }
      console.log(data);
    $.ajax({
      url:'http://34.213.106.173/api/user/adminLogin',
      type:'POST',
      data:data,
      success: function(result){
        console.log("success",result);
        $(location).attr('href', '/dashboardAdmin')
      },
    error: function(error){
      console.log(error);
      $('span#errMsg').html('Email or Password is Invalid!!!')
    }
    })
  })
  })
}

}
