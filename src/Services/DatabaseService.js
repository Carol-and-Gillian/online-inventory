/**
 * Created by gillianyue on 2/28/17.
 */
class DatabaseService {


    var
    itemName = {
        1: 'Sweatshirt Gray',
        2: 'Kitkat',
        3: 'Twizzlers',
        4: 'Eraser',
        5: 'Odyssey',
        6: 'Waterbottle'
    }

    /**
    itemImage = {
       1: <img src="/img/placeholderT.jpg" alt="sweatshirt"> ,
       2: <img src="/img/kitkiat.png" alt="kitkat">
    }
**/

     itemPrice = {
               1: '20',
               2: '3',
               3: '2000',
               4: '2',
               5: '50',
               6: '30'

    }

    getName(id) {
        if (id in this.itemName) {
            return this.itemName[id];
        } else {
            return undefined;
        }
    }

/**
    getImg(id) {
        if (id in this.itemImage) {
            return this.itemImage[id];
        } else {
            return undefined;
        }
    }
**/

    getPrice(id) {
        if (id in this.itemPrice) {
            return this.itemPrice[id];
        } else {
            return undefined;
        }
    }
}

export default new DatabaseService();