import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net'
@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() 
  {
    $(document).ready(function(){
      $('#card').click(function(){
      $.ajax({
        url:'http://34.213.106.173/api/user/getAdminUserList',
        type:'GET',
        success: function(result){
          // console.log("success",result);
          var users = [];
        for ( var i=0 ; i<result.data.data.length ; i++ ) {
            users.push( [ i+1,result.data.data[i].firstName,result.data.data[i].lastName,result.data.data[i].email,result.data.data[i].service ] );
        }
         
        $('#example').DataTable( {
            data: users
        } );
    
        },
      error: function(error){
        console.log(error);
      }
      })
    })
    })

}

}
