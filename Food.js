class Food{
    constructor(){
        this.foodStock = 10;
        this.lastfed;
        this.image = loadImage("images/Milk.png"); 
        this.image = preloadImage("images/Milk.png");
    }

    getfoodStock(){

        return this.foodStock;
    
    }

    updatefoodStock(foodStock){
        this.foodStock = foodStock;

    }

    deductFoodStock(){

    if(this.foodStock>0){
     this.foodStock = this.foodStock+1;
    }

    }

    display();
    

}
