
class InventoryPage{

    constructor(page){
        this.page = page;
        this.inventory_list = ".inventory_list"
        this.add_to_cart_button ="#add-to-cart-sauce-labs-backpack";
        this.shopping_cart_icon = ".shopping_cart_link";
        this.cart_badge = ".shopping_cart_badge";
        
    }

    async is_loaded(){
       return this.page.locator(this.inventory_list).isVisible();
    }

    async add_first_item_to_cart(){
        await this.page.locator(this.add_to_cart_button).first().click();

    }

     async open_cart(){
        await this.page.click(this.shopping_cart_icon);
    }
  
    async items_in_carts(){
        if(this.page.locator(this.cart_badge).isVisible()){
            const text = await this.page.locator(this.cart_badge).textContent();
            return parseInt(text,10);
        }else{
            return 0;
        }
    }
    


}
module.exports = {InventoryPage};