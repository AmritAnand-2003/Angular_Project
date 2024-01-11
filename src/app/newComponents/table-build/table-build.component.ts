import { Component, OnInit } from '@angular/core';
import { MaterialUIModule } from '../../material-ui/material-ui.module';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule} from '@angular/cdk/table';
import {DataSource} from '@angular/cdk/table';
import { ApprovalService } from '../../approval.service';
// import { count } from 'rxjs';



// export interface PeriodicElement {
//   position: number;
//   labelName: string;
//   labelType: string;
//   required: boolean;
// }


// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, labelName: 'Hydrogen', labelType: "Text", required: true},
//   // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

export interface PeriodicElement {
  labelName: string;
  position: number;
  labelType: number;
  isRequired: boolean;
}

let ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, labelName: 'Hydrogen', labelType: 1.0079, isRequired: false},
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

let count = 1;
@Component({
  selector: 'app-table-build',
  templateUrl: './table-build.component.html',
  styleUrl: './table-build.component.css'
})

export class TableBuildComponent implements OnInit{
  receivedData: any[] = [];
  
  constructor(private shared:ApprovalService){
    this.runforLoop();
  }
  ngOnInit():void{
    this.runforLoop();
    this.shared.getForm().subscribe(data =>{
      this.receivedData = data;
      console.log("Data received in Table Component");
      this.runforLoop();
    })
    // this.receivedData = this.shared.getForm();
    // console.log("Data received in Table Component");
  }
  // displayedColumns: string[] = ['position', "labelName", 'labelType', 'required'];
  displayedColumns: string[] = ['position', 'labelName', 'weight', 'symbol'];


  runforLoop(){
    this.receivedData.forEach(item => {
      ELEMENT_DATA.push(
        {position: count,labelName: item.labelName,labelType: item.labelType, isRequired: item.isRequired}
      )
      count += 1;
    });
    console.log(ELEMENT_DATA);
  }
  // for (let i = 0; i < this.receivedData.length; i++) {

  // };
  // for (item of this.receivedData) {
  //   // Perform any other logic here
  // }
  // count = 1;
  

  // ELEMENT_DATA.push(
  //   {position: receivedData.}
  // )

  // const data = {
  //   labelName: this.loginForm.value.labelName || "",
  //   labelType: this.loginForm.value.labelType || "",
  //   isRequired,
  //   options: this.loginForm.value.options || ""
  // };

  dataSources = ELEMENT_DATA;

  tempHtml = "";
  rowHtml = "";
  htmlFile = "";
  // htmlFile += "<form>\n<br>\n";

  generateForm(){
    this.htmlFile = "<form>\n<br>\n";
    this.receivedData.forEach((element) => {
      this.htmlFile += `<label>${element.labelName}</label>\n`; 
      if(element.labelType==="text" || element.labelType==="email" || element.labelType ==="password"){
        // this.tempHtml = `<label>${element.ElementName}</label>\n`
        this.tempHtml = `<input type=${element.labelType} ${element.isRequired?"required":""}></input> \n <br>\n`;
      }
      else if(element.labelType ==="select"){
        this.tempHtml = '<select>';
        let splitted : string[] = element.options.split(" ", 3); 
        splitted.forEach((ele,i)=>{
          this.tempHtml += `<option>${ele}</option>`;
        })
        this.tempHtml += `</select>\n<br>\n`
      }
      this.htmlFile += this.tempHtml;

    });

    this.htmlFile += "<button type='submit'>submit</button>\n<br>\n</form>"
    this.rowHtml = this.htmlFile;
    console.log(this.rowHtml);
    // this.rowMyHtml = "<form>\n";
  }

  
}


