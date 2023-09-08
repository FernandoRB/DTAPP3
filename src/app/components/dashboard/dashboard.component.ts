import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ClientsService } from 'src/app/services/clients.service';
import { FormControl, FormGroup } from '@angular/forms';
import Clients from 'src/app/interfaces/clients.interface';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy, OnInit {
  router: any;
  formulary: FormGroup;
  menuItems: any[] | undefined;
  clients: Clients[] | undefined;
  filterpost = '';
  posts = [
    {
      id: 1,
      titulo: "Post Uno",
      fecha: "02/04/2019"
    },
    {
      id: 2,
      titulo: "Post Dos",
      fecha: "11/04/2019"
    },
    {
      id: 3,
      titulo: "Post Tres",
      fecha: "30/01/2019"
    },
    {
      id: 4,
      titulo: "Post Cuatro",
      fecha: "30/05/2019"
    },
    {
      id: 5,
      titulo: "Post Cinco",
      fecha: "30/04/2019"
    }
  ];
  //Datatable 
  // dtTrigger = new Subject<any>();
  dtTrigger: Subject<any> = new Subject<any>();
  data: any;

  constructor(
    private clientService: ClientsService,
    private userService: UserService,
    //Datatable
    private httpClient: HttpClient


  ) {
    this.formulary = new FormGroup({
      date: new FormControl(),
      name: new FormControl(),
      identificator: new FormControl(),
      contact: new FormControl(),
      fon: new FormControl(),
      direction: new FormControl(),
      commune: new FormControl(),
      system: new FormControl(),
      service: new FormControl(),
    })
  }

  ngOnInit(): void {
    this.clientService.getService().subscribe(clients => {
      console.log(clients)
      this.clients = clients;
      // this.dtTrigger.next;

    })

    //Datatable Start
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 2
    // };



      // this.httpClient.get('https://dummy.restapiexample.com/api/v1/employees')
      // .subscribe((res: any) => {
      //   this.data = res.data;
      //   this.dtTrigger.next;
      // });
    //Datatable Stop


  }
  //Login
  onClick() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }
  //Datatable
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
      }

}
