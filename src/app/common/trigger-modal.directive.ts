import { Directive, OnInit, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
  selector: '[emsTriggerModal]',
})
export class TriggerModalDirective implements OnInit {
  private el: HTMLElement;

  constructor(private ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit(): void {
    this.el.addEventListener('click', (e) => {
      this.$('#ems-simple-modal').modal({});
    });
  }
}
