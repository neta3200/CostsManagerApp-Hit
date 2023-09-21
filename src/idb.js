/*  Student1: Netanel Iluz ID: 205856354
    Student2: Daniel Dabush ID: 316013671 */

class openCostsDB {

    constructor(dbName, version = 1) {
        this.dbName = dbName;
        this.version = version
        this.db = null;
    }

    async openDatabase() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, 1);

            request.onerror = event => {
                reject("Failed to open the database");
            };

            request.onsuccess = event => {
                this.db = event.target.result;
                resolve("Database opened successfully");
            };

            request.onupgradeneeded = event => {
                this.db = event.target.result;
                const objectStore = this.db.createObjectStore("products", { keyPath: "id", autoIncrement: true });
                objectStore.createIndex("name", "name", { unique: false });
            };
        });
    }

    async get() {
        try {
            if (!this.db) {
                await this.openDatabase();
            }

            return new Promise((resolve, reject) => {
                const transaction = this.db.transaction(["products"], "readonly");
                const objectStore = transaction.objectStore("products");
                const request = objectStore.getAll();

                request.onsuccess = event => {
                    resolve(request.result || []);
                };

                request.onerror = event => {
                    reject("Failed to retrieve data from the database");
                };
            });
        } catch (error) {
            console.error("Failed to get data: " + error);
        }
    }

    async addCost(product) {
        try {
            if (!this.db) {
                await this.openDatabase();
            }

            return new Promise((resolve, reject) => {
                const transaction = this.db.transaction(["products"], "readwrite");
                const objectStore = transaction.objectStore("products");
                const request = objectStore.add(product);

                request.onsuccess = event => {
                    resolve("Item added successfully");
                };

                request.onerror = event => {
                    reject("Failed to add item to the database");
                };
            });
        } catch (error) {
            console.error("Failed to add item: " + error);
        }
    }
}

const idb = {
    openCostsDB(dbName, version) {
        return new openCostsDB(dbName, version);
    }
};

export default openCostsDB;
