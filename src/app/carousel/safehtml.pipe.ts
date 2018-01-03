import {DomSanitizer} from '@angular/platform-browser'
import {Component, Pipe, PipeTransform, Input} from '@angular/core'

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
@Component({
    selector:"printSlide",
    template:`
        <div *ngIf="meta.sType=='div'" [innerHtml]="meta.content | safeHtml">

        </div>
        <div style="display:block;width:920px;text-align:center;"><img [src]="meta.imgSrc" *ngIf="meta.sType=='img'" style="height:200px;" /></div>
    `
})
export class printSlide{
    @Input("meta") meta:any;
    constructor(){

    }
}
