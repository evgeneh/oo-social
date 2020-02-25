//methods for date amd time manipulations
export const dateParse = {
    toNumbers (date) {
        return (new Date(date)).toLocaleDateString("en-Us")
    },

    toStrings(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' ,  hour12: false, hour: 'numeric', minute: 'numeric'};
        return (new Date(date)).toLocaleString("en-Us", options)
    },

    toTimeString(date) {
        return (new Date(date)).toLocaleTimeString().slice(0, -3)
    },

    toDayAndMonth(date){
        const options = {month: 'long', day: 'numeric' }
        return date.toLocaleString("en-Us", options)
    }
}


export const dateCompare = {
    isSameDay(date1, date2)
    {
        if (date1.getFullYear() !== date2.getFullYear())
            return false
        else if  (date1.getMonth() !== date2.getMonth())
            return false
        else if (date1.getDate() !== date2.getDate())
            return false

        return true
    }
}