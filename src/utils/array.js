
export const Arrays = {

    findOneAndUpdate(items, itemName, itemValue, newProps) {
        return items.map(item => {
            if (item[itemName] == itemValue)
                return {...item, ...newProps}
            else
                return item;
        })
    }

}

