import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  service: any[] = [
    {
      id: 1,
      img:'/service/ecommerce.png',
      titel: 'E-Commerce',
      desc: " Tailoring online stores to meet your specific business requirements. I also use platforms like NopCommerce, SmartStore, and custom solutions to build feature-rich eCommerce websites."
    },
    {
      id: 2,
      img:'/service/web_design.png',
      titel: 'Software Development',
      desc: "Developing custom software that addresses specific business challenges and opportunities.I ensure the software is tailored to your exact requirements and enhances your operational efficiency."
    },
    {
      id: 3,
      img:'/service/copywrite.png',
      titel: 'Mentorship',
      desc: "Helping you set clear, achievable career goals and creating a roadmap to reach them.Offering advice on crafting a standout resume and preparing for job interviews, ensuring you present your best self to potential employers."
    },

  ]

  why_me: any[] = [
    {
      id: 1,
      img:'/why-me/rocket.png',
      titel: 'Rapid Delivery',
      desc: " Time is money. I understand the importance of meeting deadlines and getting your project up and running as quickly as possible. My efficient workflow ensures that your project is completed swiftly without sacrificing quality."
    },
    {
      id: 2,
      img:'/why-me/sales.png',
      titel: 'Unbeatable Value',
      desc: "Helping you set clear, achievable career goals and creating a roadmap to reach them.Offering advice on crafting a standout resume and preparing for job interviews, ensuring you present your best self to potential employers."
    },
    {
      id: 3,
      img:'/why-me/trust.png',
      titel: 'Client-Centric Approach',
      desc: "Your satisfaction is my priority. I work closely with you to understand your requirements, ensuring that the solutions I provide are aligned with your vision and goals. Clear communication and collaboration are the keys to successful outcomes."
    },

  ]

  fact_me: any[] = [
    {
      id: 1,
      i:'fa-regular fa-face-smile',
      titel: 'Happy Clients',
      desc: "4"
    },
    {
      id: 2,
      i:'fa-regular fa-clock',
      titel: 'Working Hours',
      desc: "4000"
    },
    {
      id: 3,
      i:'fa-solid fa-mug-saucer',
      titel: 'Coffee Consumed',
      desc:'160'
    },
  ]
}
