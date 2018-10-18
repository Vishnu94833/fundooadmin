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
      $(function(){
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
            data: users,
            deferRender:true,
            scrollY:200,
            scrollCollapse:true,
            scroller:true
        } );
    
        },
      error: function(error){
        console.log(error);
      }
      })
    })
    })
    $(document).ready(function(){
      var token = localStorage.getItem('token');
      $.ajax({
      type: "GET",/**posting the data */
      url:'http://34.213.106.173/api/user/UserStatics',
    headers:{
        'Authorization':token,


      },

      
      error:function(response){/**if error exists then print the alert */
        console.log('Error in login');
        alert("Enter all the details");
        
      },
      success:function(response){
        console.log("successfull");
        console.log(response);
        var arr=response.data.details;
        var html='';
                 
        html+="<div class='row'fxLayout='row' fxLayoutAlign='space-between center'  padding-right='30px' >";
        for(let index=0;index<arr.length;index++)
        {
          html+="<div class='col-sm-6'><div class='card' style='max-width: 18rem;'>";
          html+="<div class='card-header '>"+arr[index].service+"</div>";
          html+="<div class='card-body'>"+arr[index].count+"</div>";
          html+="</div></div>";
          $("#services").html(html);
        }
        html+="</div>";

      }
      
    })
      

   })
   $(document).ready(function(){
     $('#logout').on('click',function(){
      $(location).attr('href', '/loginAdmin')
      localStorage.removeItem('token');
     })
   })

}

}
