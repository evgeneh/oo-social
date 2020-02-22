//methods for date amd time manipulations
export const dateParse = {
    toNumbers (date) {
        return (new Date(date)).toLocaleDateString("en-Us")
    },
    toStrings(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' ,  hour12: false, hour: 'numeric', minute: 'numeric'};
        return (new Date(date)).toLocaleString("en-Us", options)
    }
}