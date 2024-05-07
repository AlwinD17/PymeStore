import React from 'react'
import { useState } from 'react'
import productosJSON from '../data/Productos.js'
import { Sidebar, Dashboard } from '../components'

const Productos = () =>{
    const [sidebarToggle, setSidebarToggle] = useState(false)
    class Product {
        constructor(id, name, description, isInStock, gender, category, availableSizes, rating, productionDate, price, brandName, productCode, imageUrl, additionalImageUrls) {
          this.id = id;
          this.name = name;
          this.description = description;
          this.isInStock = isInStock;
          this.gender = gender;
          this.category = category;
          this.availableSizes = availableSizes;
          this.rating = rating;
          this.productionDate = new Date(productionDate);
          this.price = price;
          this.brandName = brandName;
          this.productCode = productCode;
          this.imageUrl = imageUrl;
          this.additionalImageUrls = additionalImageUrls;
        }
      }
      
      const products = productosJSON.map(product => new Product(
        product.id,
        product.name,
        product.description,
        product.isInStock,
        product.gender,
        product.category,
        product.availableSizes,
        product.rating,
        product.productionDate,
        product.price,
        product.brandName,
        product.productCode,
        product.imageUrl,
        product.additionalImageUrls
      ));
      console.log(products)
      return(
            <>
            <h1>Hola</h1>
            </>
      )
}

export default Productos