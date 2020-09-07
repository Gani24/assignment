import { Component, OnInit } from '@angular/core';

// declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  //   $(window).scroll(function() {
      

  //     if ($(this).scrollTop()>0)

  //      {
  //         $('#mobile_logo').fadeOut();
          
  //      }
  //     else
  //      {
  //       $('#mobile_logo').fadeIn();
  //      }
  //  });


  }

}
