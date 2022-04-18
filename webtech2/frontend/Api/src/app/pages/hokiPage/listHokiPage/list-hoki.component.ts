import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CurrentUserService } from 'src/app/services/domain/auth/current-user/current-user.service';
import { Hoki } from 'src/app/services/domain/settings/hoki/hoki.model';
import { ProductService } from 'src/app/services/domain/settings/hoki/product.service';
import { CreateHokiComponent } from '../create-hoki/create-hoki.component';

@Component({
  selector: 'app-list-hokis',
  templateUrl: './list-hoki.component.html',
  styleUrls: ['./list-hoki.component.css']
})
export class ListHokiComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog, private service: ProductService, private currentUserService: CurrentUserService) { }

  user: string;
  ELEMENT_DATA: Hoki[];
  displayedColumns: string[];
  dataSource: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    // console.log(sessionStorage.getItem('currentUser'));
    this.user = this.currentUserService.getUsername();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.getAllProducts();
  }

  deleteProduct(product: Hoki): void {

    this.service.deleteHoki(product._id).subscribe(val => {
      console.log(val);
      alert('Sikeres törlés!');
      this.getAllProducts();
    });

  }

  editProduct(hoki: Hoki): void {
    localStorage.setItem('title', hoki.title);
    localStorage.setItem('organizer', hoki.organizer);
    localStorage.setItem('price', hoki.price.toString());
    localStorage.setItem('sitting', hoki.sitting.toString());
    this.router.navigate(['settings/hoki', 'edit', hoki._id]);
  }

  getAllProducts(): void {
    this.service.getHokis().subscribe(val => {
      this.ELEMENT_DATA = val;
      this.displayedColumns = ['title', 'organizer', 'date', 'price', 'sitting', 'delete'];
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  navigateBack() {
    this.router.navigate(['../../']);
  }
  createProduct(): void {
    const dialogRef = this.dialog.open(CreateHokiComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAllProducts();
    });
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['../../']);
  }

}
