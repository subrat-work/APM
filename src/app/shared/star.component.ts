import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "pm-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  starWidth: number;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.starWidth = (this.rating * 75) / 5;
  }

  onClick(): void {
    this.ratingClicked.emit('rating clicked');
  }
}
