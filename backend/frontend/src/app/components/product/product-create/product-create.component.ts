
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import { Product } from '../product.model';



@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {


  product: Product = {
    name: '',
    price: null 

  }

  constructor(private productService: ProductService,
    private Router: Router ) { }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!')
      this.Router.navigate(['/products'])
    
      
      

    })

    
  }

  cancel(): void {
    this.Router.navigate(['/products'])
  }

}
