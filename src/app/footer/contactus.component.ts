import {Component} from '@angular/core'

@Component({
    template: `<h1 class="listopro">Contact Us!</h1>
    <h3>Put your info below and tell us what you would like us to know!</h3>
    <div style="padding:10px;" id="border">
    <form>
    <div class="form-group">
    Username: <input type="text" name="username" placeholder="Username">
    </div>
    <div class="form-group">
    Email Address: <input type="email" name="email" placeholder="Email">
    </div>
    <div class="form-group">
    Information:
    <textarea class="form-control"></textarea>
    </div>
    </form>

    <button class="btn btn-primary">Submit</button>
    </div>
    
    `,
    styleUrls: ['../app.component.css']
})
export class ContactComponent{}