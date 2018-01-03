import {Component} from '@angular/core'

@Component({
    selector:'about-us',
    template: `
    <h1 class="listopro">About Us</h1>
    <body>
    <div>
    <p>
    WWImporter(It's short for World Wide Importer) is the leader of Imported goods across the world!
    </p>
    <p>
    We were founded in 1817 and have been just growing stronger since then! The internet didn't even exist, 
    and we had to take big boats back and forth from every country getting orders and fighting off pirates. 
    Now that planes and the internet exist we can sit in the comfort of our own homes and wait for our nice fresh items 
    to be delivered to our doorsteps.

    We have a wide range of different products that you can buy from us. Including baby supplies, fruit, vegetables, 
    and yes even bread, because bread makes sandwiches, and we all love sandwiches.
    </p>
    </div>
    </body>`,
    styleUrls:['../app.component.css']
})
export class AboutUsComponent{}