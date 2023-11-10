import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { TranslateService } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Lyfe';
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: false,
  };

  customOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    margin: 20,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      668: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
    nav: false,
  };

  //emailjs
  form: FormGroup = this.fb.group({
    from_name: '',
    to_name: 'Admin',
    from_email: '',
    message: '',
  });

  // emailjs
  async send() {
    emailjs.init('chEwgtnnlDggUzOHP');
    let response = await emailjs.send('service_zsy81gc', 'template_6eqrviv', {
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      message: this.form.value.message,
    });
    alert('"Message has been sent " "تم ارسال رسالتك بنجاح " ');
    this.form.reset();
  }

  // loading spinner
  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }

  // routerlink for id

  toContact() {
    document.getElementById('contact')?.scrollIntoView();
  }
  toWhoAre() {
    document.getElementById('whoAre')?.scrollIntoView();
  }
  toMessage() {
    document.getElementById('ourMessage')?.scrollIntoView();
  }
  toservices() {
    document.getElementById('ourservices')?.scrollIntoView();
  }
  tosuccessPartners() {
    document.getElementById('oursuccessPartners')?.scrollIntoView();
  }

  constructor(
    private translatesService: TranslateService,
    http: HttpClient,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder
  ) {
    translatesService.setDefaultLang('ar');
  }

  translate(event: any) {
    this.translatesService.use(event.target.value);
  }
}
