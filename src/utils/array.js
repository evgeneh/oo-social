
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
    }

}

