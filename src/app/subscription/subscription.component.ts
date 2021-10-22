import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  InteriorCars=[{imageUrl:'https://pictures.topspeed.com/IMG/jpg/201407/2015-ford-mustang-wi.jpg',model:'Mustang',year:'2015',isCertified:'y',problems:'Audio'},
  {imageUrl:'https://assets.newcars.com/images/car-pictures/original/2020-Ford-Explorer-SUV-Base-4dr-4x2-Photo-27.png',model:'Explorer',year:'2020',isCertified:'y',problems:'Maintainence/Pre-Delivery'},
  {imageUrl:'https://www.fleet.ford.ca/content/dam/vdm_ford/live/en_ca/ford/nameplate/ecosport/2020/collections/3-2/20_frd_eco_tnm_rbrd_ps34_32.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg',model:'Ecosport',year:'2016',isCertified:'y',problems:'Warning Indicators'},
  {imageUrl:'https://ford-admirer.com/wp-content/uploads/2019/02/2020-Ford-Escape-Titanium-changes.jpg',model:'Escape',year:'2017',isCertified:'y',problems:'Speedometer'},
  {imageUrl:'https://smallforsenate.com/wp-content/uploads/fordjadi/2019/09/2020-Ford-Falcon-XR8-new.jpg',model:'Falcon',year:'2021',isCertified:'y',problems:'Heads up Display'},
  {imageUrl:'https://www.fleet.ford.com/content/dam/vdm_ford/live/en_us/ford/nameplate/fusion/2020/collections/3-2/20_frd_fsn_ps34_hyb_se_icsl_32.jpg/_jcr_content/renditions/cq5dam.web.1440.1440.jpeg',model:'Fusion', year:'2020',isCertified:'y',problems:'Blind Spots'},

  {imageUrl:'https://ford-admirer.com/wp-content/uploads/2019/02/2020-Ford-Escape-Titanium-changes.jpg',model:'Escape',year:'2017',isCertified:'y',problems:'Speedometer'},
  {imageUrl:'https://smallforsenate.com/wp-content/uploads/fordjadi/2019/09/2020-Ford-Falcon-XR8-new.jpg',model:'Falcon',year:'2021',isCertified:'y',problems:'Heads up Display'},
  {imageUrl:'https://www.fleet.ford.com/content/dam/vdm_ford/live/en_us/ford/nameplate/fusion/2020/collections/3-2/20_frd_fsn_ps34_hyb_se_icsl_32.jpg/_jcr_content/renditions/cq5dam.web.1440.1440.jpeg',model:'Fusion', year:'2020',isCertified:'y',problems:'Blind Spots'}
        ]

        ExteriorCars=[
        {imageUrl:'https://assets.newcars.com/images/car-pictures/original/2020-Ford-Explorer-SUV-Base-4dr-4x2-Photo-27.png',model:'Explorer',year:'2020',isCertified:'y',problems:'Maintainence/Pre-Delivery'},
        {imageUrl:'https://www.fleet.ford.ca/content/dam/vdm_ford/live/en_ca/ford/nameplate/ecosport/2020/collections/3-2/20_frd_eco_tnm_rbrd_ps34_32.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg',model:'Ecosport',year:'2016',isCertified:'y',problems:'Warning Indicators'},
        {imageUrl:'https://ford-admirer.com/wp-content/uploads/2019/02/2020-Ford-Escape-Titanium-changes.jpg',model:'Escape',year:'2017',isCertified:'y',problems:'Speedometer'},
        {imageUrl:'https://smallforsenate.com/wp-content/uploads/fordjadi/2019/09/2020-Ford-Falcon-XR8-new.jpg',model:'Falcon',year:'2021',isCertified:'y',problems:'Heads up Display'},
        {imageUrl:'https://www.fleet.ford.com/content/dam/vdm_ford/live/en_us/ford/nameplate/fusion/2020/collections/3-2/20_frd_fsn_ps34_hyb_se_icsl_32.jpg/_jcr_content/renditions/cq5dam.web.1440.1440.jpeg',model:'Fusion', year:'2020',isCertified:'y',problems:'Blind Spots'},
      
        {imageUrl:'https://ford-admirer.com/wp-content/uploads/2019/02/2020-Ford-Escape-Titanium-changes.jpg',model:'Escape',year:'2017',isCertified:'y',problems:'Speedometer'},
        {imageUrl:'https://smallforsenate.com/wp-content/uploads/fordjadi/2019/09/2020-Ford-Falcon-XR8-new.jpg',model:'Falcon',year:'2021',isCertified:'y',problems:'Heads up Display'}
              ]

        





}
