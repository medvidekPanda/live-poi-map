import { Component, OnInit } from "@angular/core";

import { MapComponent } from "@maplibre/ngx-maplibre-gl";
import { MenuItem } from "primeng/api";
import { AvatarModule } from "primeng/avatar";
import { BadgeModule } from "primeng/badge";
import { DialogModule, DialogPassThrough } from "primeng/dialog";
import { ImageModule } from "primeng/image";
import { MenubarModule } from "primeng/menubar";

@Component({
  selector: "app-map",
  imports: [AvatarModule, BadgeModule, ImageModule, MapComponent, MenubarModule, DialogModule],
  templateUrl: "./map.html",
  host: {
    class: "contents",
  },
})
export class Map implements OnInit {
  items: MenuItem[] | undefined;

  dialogPt: DialogPassThrough = {
    root: {
      class: "!m-4 !mt-24",
      style: {
        height: "100%",
      },
    },
  };

  ngOnInit() {
    this.items = [
      {
        label: "Home",
        icon: "pi pi-home",
      },
      {
        label: "Projects",
        icon: "pi pi-search",
        badge: "3",
      },
    ];
  }
}
