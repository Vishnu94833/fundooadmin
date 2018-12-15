import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import 'datatables.net';
@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/loginAdmin'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  private show=false;

  question() {
    $(location).attr('href', '/questionanswer')
  }
  goToCart(){
    $(location).attr('href', '/ordercomplete')
  }

  ngOnInit() {
    $(document).ready(function () {
      $(function () {
        $.ajax({
          url: 'http://34.213.106.173/api/user/getAdminUserList',
          type: 'GET',

          success: function (result) {
            this.show=true;
            var users = [];
            for (var i = 0; i < result.data.data.length; i++) {
              users.push([i + 1, result.data.data[i].firstName, result.data.data[i].lastName, result.data.data[i].email, result.data.data[i].service]);
            }

            var table = $('#example').DataTable({
              data: users,
              deferRender: true,
              scrollY: 200,
              scrollCollapse: true,
              scroller: true
            });
            $('#example tbody').on('click', 'tr', function () {
              var id = this.id;
              console.log(id);
              var myindex = table.row(this).index();
              console.log(myindex);
              console.log(result.data.data[myindex].firstName)
              $("#firstName").text(result.data.data[myindex].firstName);
              $("#lastName").text(result.data.data[myindex].lastName);
              $("#role").text(result.data.data[myindex].role);
              $("#service").text(result.data.data[myindex].service);
              $("#createdDate").text(result.data.data[myindex].createdDate);
              $("#email").text(result.data.data[myindex].email);
              $("#popup").click();
            })
          },

          error: function (error) {
            console.log(error);
          }
        })
      })
    })
    var token = localStorage.getItem('token');
    $(document).ready(function () {
      $.ajax({
        type: "GET",/**posting the data */
        url: 'http://34.213.106.173/api/user/UserStatics',
        headers: {
          'Authorization': token,
        },


        error: function (error) {/**if error exists then print the alert */
          console.log(error);
          console.log('Error in login');
          alert("Enter all the details");

        },
        success: function (response) {
         
          console.log("successfull");
          console.log(response);
          var arr = response.data.details;
          var html = '';

          html += "<div class='row'fxLayout='row' fxLayoutAlign='space-between center'  padding-right='30px' >";
          for (let i = 0; i < arr.length; i++) {
            html += "<div class='col-sm-6'><div class='card  ' style='max-width: 18rem;'>";
            html += "<div class='card-header bg-dark text-white '>" + arr[i].service + "</div>";
            html += "<div class='card-body'>" + arr[i].count + "</div>";
            html += "</div></div>";
            $("#services").html(html);
          }
          html += "</div>";
          // this.show=true;
        }

      })


    })

    $(document).ready(function () {
      $('#logout').on('click', function () {
        $.ajax({
          url: 'http://34.213.106.173/api/user/logout',
          type: 'POST',
          headers: {
            'Authorization': token
          },
          success: function (result) {
            
            localStorage.removeItem('token');
            $(location).attr('href', '/loginAdmin')
            console.log("success", result);
            // this.show=true;
          },
          error: function (error) {
            console.log(error)
          }
        })
      })
    })


    $(document).ready(function () {
      $('#question').on('click', function () {
        this.router.navigate('/questionanswer')
      })
    })

    $('#basicModal').on('shown.bs.modal', function (e) {
      alert('Modal is successfully shown!');
    });


    $(document).ready(function () {
      $.ajax({
        type: 'GET',
        url: 'http://34.213.106.173/api/questionAndAnswerNotes/getUnApprovedAnswer',
        headers:
        {
          'Authorization': token
        },
        success: function (result) {
        $("#hide").hide();
          console.log(result);
        },
        error: function (error) {
          console.log(error);
        }
      })
    })

  }

}