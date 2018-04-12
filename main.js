var coffeeShop = {
    beans: 20,
    money: 200,
    beansPrice: 8,

    drinkRequirements: {
      latte: {
        beanRequirement: 10,
        price: 15
      },
      americano: {
        beanRequirement: 5,
        price: 3
      },
      doubleShot: {
        beanRequirement: 15,
        price: 8
      },
      frenchPress: {
        beanRequirement: 12,
        price: 6
      }
    },

    buySupplies: function (beanQuantity) {
      if (this.money >= beanQuantity * this.beansPrice) {
        this.money -= beanQuantity * this.beansPrice;
        this.beans += beanQuantity;
      } else console.log("Sorry not enough money");
    },

    buyDrink: function (drinkType) {
    //debugger;
      if(this.drinkRequirements.hasOwnProperty(drinkType) && this.beans >= this.drinkRequirements[drinkType].beanRequirement) {
        this.money += this.drinkRequirements[drinkType]["price"];
        this.makeDrink(drinkType);
        } else if(this.drinkRequirements.hasOwnProperty(drinkType) && this.beans < this.drinkRequirements[drinkType].beanRequirement) {
        alert("Sorry, we're all out of beans; We'll have to buy more.");
        this.buySupplies(15);
      } else {
        alert("Sorry, we don't make " + drinkType);
      }
    },
 
    makeDrink: function (drinkType) {
      this.beans -= this.drinkRequirements[drinkType]["beanRequirement"];
      alert("Enjoy your " + drinkType + " !");
      alert("Beans = " + coffeeShop.beans + " Money = " + coffeeShop.money);
    }
  }
    coffeeShop.buyDrink("latte");
    coffeeShop.buyDrink("americano");
    coffeeShop.buyDrink("filtered");
    coffeeShop.buyDrink("doubleShot");
    coffeeShop.buyDrink("frenchPress");
   