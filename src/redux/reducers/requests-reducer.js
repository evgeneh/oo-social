let initialState = {
    alerts: [ {name: 'Friends', count: 0 }, {name: 'Photos', count: 0},
        {name: 'Music', count: 0 }, {name: 'Messages', count: 10}, {name: 'Notes', count: 0},
        {name: 'Groups',  count: 0 }
    ]}

export let requestsReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }

}