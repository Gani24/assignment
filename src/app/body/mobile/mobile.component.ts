import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function(){
      $("#myInput1").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });

      
    });

    $(function(){
  
      createSticky($("#header"));
    
    });
    
    function createSticky(sticky) {
      
      if (typeof sticky !== "undefined") {
    
        var	pos = sticky.offset().top + 20,
            win = $(window);
          
        win.on("scroll", function() {
            win.scrollTop() >= pos ? sticky.addClass("fixed") : sticky.removeClass("fixed");      
        });			
      }
    }

    
  
   

  }

}
