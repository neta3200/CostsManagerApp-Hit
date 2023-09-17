class openCostsDB {

    constructor() {
        this.storage = window.localStorage;
    }

    //async func that let us get the product list asynchronically from the local storage
    async getdb() {
        try {

            let result=await localStorage.getItem("products");
            result=JSON.parse(result);
            return result===null?[]:result;
        } catch (error) {

            return console.error("failed to add item" + error);

        }
    }
    //async func that let us add product list asynchronically to the local storage
    async addtodb(product) {

        try {

            let result=[]
            //checks if we insert to the local storage earlier
            if(await localStorage.getItem("products")==null)
            {result.push(product);
                await this.storage.setItem("products", JSON.stringify(result));
            }
            else{
                //getting the product list adding item and then push it again into the local storage
                result=await localStorage.getItem("products");
                result=JSON.parse(result);
                result.push(product);
                await this.storage.setItem("products", JSON.stringify(result));
            }
        } catch (error) {
            return console.error("failed to add item" + error);
        }
    }
}
export default openCostsDB;