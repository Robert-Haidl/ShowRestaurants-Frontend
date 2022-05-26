import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { RestaurantService } from 'src/app/_services/restaurant.service';

export interface RestaurantData {
  name: string;
  category: string;
  progress: string;
  price: number;
  taste: number;
  ambiente: number;
  service: number;
  impression: number;
  price_quality: number;
  carpark: boolean;
  address: string;
}

@Component({
  selector: 'app-restaurants-table',
  templateUrl: './restaurants-table.component.html',
  styleUrls: ['./restaurants-table.component.scss']
})

export class RestaurantsTableComponent implements OnInit, AfterViewInit {
  
  restaurants : Array<any>;
  
  
  constructor(private http: HttpClient, private restaurantService: RestaurantService) { }
  
  displayedColumns: string[] = ['index', 'name', 'category', 'price', 'taste', 'ambiente', 'service', 'impression', 'price_quality', 'carpark', 'address'];
  dataSource: MatTableDataSource<RestaurantData>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  ngOnInit(): void {
    this.testService();
  }
  
  ngAfterViewInit() {
    
  }
  
  testService() {
    this.restaurantService.getRestaurants().subscribe(
      next => {
        console.log(next);
        this.restaurants = next;
        this.dataSource = new MatTableDataSource(this.restaurants);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
    return;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}