const laptopstore=require('../database/product/electronics/laptops/laptopStore')

class FetchDetails{
    constructor(){
        this.laptopstore=laptopstore
    }

    fetchProductDetails(category){
        if(category=="laptops"){
            return this.laptopstore
        }
    }
}

module.exports=FetchDetails