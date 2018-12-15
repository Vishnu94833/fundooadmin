import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-ordercomplete',
  templateUrl: './ordercomplete.component.html',
  styleUrls: ['./ordercomplete.component.css']
})
export class OrdercompleteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var id=localStorage.getItem("token");
    var rowIndex;
    $("#loader").show();
    $("#cartList").hide();
  $(document).ready(function(){

    
    $("#dashboard").click(function(){
      $(location).attr('href','dashboard');
    });

    $.ajax({
      type: 'GET',
      url: 'http://34.213.106.173/api/productcarts/userCartList',
      headers:{
        "Authorization": id
      },
      //data['data'][i].id
      success: function (data) {
        var cartList=[];
        for(let i=0;i<data['data'].length;i++){
          cartList.push([i+1,data['data'][i].product.name,data['data'][i].price])
          console.log(cartList)
        }
        $("#loader").hide();
        $("#cartList").show();

        var table=$('#cartList').DataTable( {
  "data":cartList,
  "columnDefs": [{
    "targets": 4,
    "render": function ( data, type, row, meta ) {
      return '<button type="button" class="btn  btn-success" id="place" >Confirm order</button>'
    // '<button type="button" class="btn  btn-danger" id="reject" style="margin-left:10px;">Reject order</button>';
    }
  }]
});

        $('#cartList tbody').on('click', 'tr', function () {
          rowIndex = table.row(this).index();
          $.ajax({
            type: 'POST',
            url: 'http://34.213.106.173/api/productcarts/adminCompleteOrder',
            data:{
              "cartId": data['data'][rowIndex].id
            },
            dataType:"json",
            headers:{
              "Authorization": id
            },
            success: function (data) {
              $(location).attr('href','/ordercomplete');
            },
            error: function (request, status, error) {
            }
          })
        });
      },
      error: function (request, status, error) {
      }
    });

  });



}

back() {
  $(location).attr('href', '/dashboardAdmin')
}

}
