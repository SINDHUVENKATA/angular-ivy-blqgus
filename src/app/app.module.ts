import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ButtonComponent } from "./buttoncomponent/button.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ButtonComponent],
  declarations: [AppComponent, HelloComponent, ButtonComponent],
  bootstrap: [AppComponent, ButtonComponent]
})
export class AppModule {}
