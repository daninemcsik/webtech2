import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CreateHokiDTO } from 'src/app/services/domain/settings/hoki/hoki';
import { ProductService } from 'src/app/services/domain/settings/hoki/product.service';

@Component({
  selector: 'app-create-hoki',
  templateUrl: './create-hoki.component.html',
  styleUrls: ['./create-hoki.component.css']
})
export class CreateHokiComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private router: Router, private service: ProductService) { }

  hokiFormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    organizer: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    date: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    sitting: new FormControl('', [Validators.required]),
  });
  hoki: CreateHokiDTO;
  ngOnInit(): void { }

  succes() {
    this.snackBar.open('Sikeres létrehozás', 'Új termék', {
      duration: 1000,
    });
  }
  error() {
    this.snackBar.open('Sikertelen létrehozás', 'A meccs már létezik', {
      duration: 1000,
    });
  }
  createProduct = () => {
    this.hoki = {
      title: this.hokiFormGroup.get('title').value,
      organizer: this.hokiFormGroup.get('organizer').value,
      date: this.hokiFormGroup.get('date').value,
      price: this.hokiFormGroup.get('price').value,
      sitting: this.hokiFormGroup.get('sitting').value,
    };
    this.service.createHoki(this.hoki.title, this.hoki.organizer, this.hoki.date, this.hoki.price, this.hoki.sitting).subscribe(val => {
      if (val != null) {
        this.succes();
      }

    }, (err) => {
      this.error();

    });
  }


}
