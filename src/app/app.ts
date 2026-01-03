import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  templateUrl: "./app.html",
  host: {
    class: "fixed inset-0 border overflow-hidden",
  },
})
export class App {}
