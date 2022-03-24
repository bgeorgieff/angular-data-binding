import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChange,
  DoCheck,
  ViewChild,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent implements OnInit {
  @Input("srvElement") element: { name: string; type: string; content: string };
  @Input() name: string;
  @ViewChild("heading") header: ElementRef;

  constructor() {
    console.log("constructor loaded");
    // console.log(this.header.nativeElement, "text content");
  }

  ngOnChanges(changes: SimpleChange) {
    console.log("ngOnChanges loaded");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit loaded");
    console.log(this.header.nativeElement, "text content");
  }

  ngDoCheck() {
    console.log("ngDoCheck loaded");
  }
}
