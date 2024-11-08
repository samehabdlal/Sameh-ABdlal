import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
projects:any[]=[
{
  id:1,
  name:'E-comerce-js',
  link:'/profile/images.png',
  git:'https://github.com/samehabdlal/E-commerce-Js.git',
  alt:'E-comerce-js'
},
{
  id:2,
  name:'E-comerce',
  link:'/profile/angular.png',
  git:'https://github.com/samehabdlal/E-commerce.git',
  alt:'E-comerce angular '
},
{
  id:3,
  name:'Quiz-app',
  link:'/profile/How-to-Create-a-Quiz-in-WordPress-1536x804.jpg',
  git:'https://github.com/samehabdlal/Qiuze-app.git',
  alt:'Quiz-app'
},
]
}
