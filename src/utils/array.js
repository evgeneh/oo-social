
export const Arrays = {

    findOneAndUpdate(items, itemName, itemValue, newProps) {
        return items.map(item => {
            if (item[itemName] == itemValue)
                return {...item, ...newProps}
            else
                return item;
        })
    },

    sortBy(items, itemName, reverse = false) {
        let rev = reverse ? -1 : 1
        return items.sort( (a, b) => {
            if (a[itemName] < b[itemName]) return rev * -1;
            if (a[itemName] > b[itemName]) return rev * 1;
            return 0
        })
    },

     getSomeRandom (users, COUNT) {
         if (users.length <= COUNT)
             return users;
         else {
             let arr = [];
             let result = []

             for (let i = 0; i < COUNT; i++) {
                 let index = Math.floor(Math.random() * users.length);
                 while (arr.includes(index)) {
                     index = (index + 1) % users.length;
                 }
                 arr.push(index);
                 result.push(users[index])
             }
             return result;
         }
     }

}

