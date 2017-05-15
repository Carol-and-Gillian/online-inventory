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


     itemImageRoute = {
       1: '/img/Apparel/placeholderT.jpg',
       2: '/img/Snacks/kitkat.png',
         3: '/img/Snacks/twizzlers.png',
         4: '/img/Stationary/eraser.png',
         5: '/img/Book/odyssey.png'
    }

    itemPrice = {
        1: '20',
        2: '3',
        3: '2000',
        4: '2',
        5: '50',
        6: '30'

    }

    itemDescription = {
        1: 'This amazing gray shirt is amazing!',
        2: 'Kit kat is good for your health!',
        3: 'Try this strawberry liquorice that contains neither strawberry nor liquorice!',
        4: 'Keep writing and erasing on the math test to pretend you actually know something!',
        5: 'At least you do not need to go through an Odyssey to get the Odyssey!'
    }

    getName(id) {
        if (id in this.itemName) {
            return this.itemName[id];
        } else {
            return undefined;
        }
    }


     getImageRoute(id) {
        if (id in this.itemImageRoute) {
            return this.itemImageRoute[id];
        } else {
            return undefined;
        }
    }

    getPrice(id) {
        if (id in this.itemPrice) {
            return this.itemPrice[id];
        } else {
            return undefined;
        }
    }


    getDescription(id) {
        if (id in this.itemDescription) {
            return this.itemDescription[id];
        } else {
            return undefined;
        }
    }

}

export default new DatabaseService();