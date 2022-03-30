const initialState = {
    first: 0,
    second: 0,
}

export function counterReducer(state = initialState, action) {
    if (action.type === 'INCREMENT') {        
        return {
            first: state.first + 1,
            second: state.second + 2,
        };
    }

    if (action.type === 'INCREMENT_BY_AMOUNT') {
        return {
            first: state.first + action.incrementAmount,
            second: state.second + action.incrementAmount
        }
    }

    if (action.type === 'DECREMENT') {
        return {
            first: state.first - 1,
            second: state.second -1,
        }
    }

    return state;
} 

// https://www.amazon.com/dp/B09743F8P6/

// https://www.amazon.com/dp/B08FC6Y4VG

// https://www.redfin.com/OR/Portland/524-NE-29th-Ave-97232/home/26587848

/*
https://www.google.com/search?
q=playstation+5
&
sxsrf=APq-WBtBRXr45GpR3UEeCNyVwX43BLzkDQ%3A1648613823618
&
source=hp
&
ei=v9lDYsXkI9S40PEP46WNMA&iflsig=AHkkrS4AAAAAYkPnz578rEA6qX2iIsMRKBL9BgyCsYhv&ved=0ahUKEwiFwM6K_ez2AhVUHDQIHeNSAwYQ4dUDCAg&uact=5
&
oq=playstation+5
&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEIAEELEDMgsIABCABBCxAxCDATIICAAQgAQQsQMyCwgAEIAEELEDEMkDMgUIABCSAzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyCAgAEIAEELEDOgcIIxDqAhAnOgQIIxAnOhEILhCABBCxAxCDARDHARDRAzoOCC4QgAQQsQMQxwEQowI6CAguEIAEENQCOhEILhCABBCxAxCDARDHARCjAjoICAAQsQMQgwE6CAguELEDEIMBOgUIABCABDoOCC4QgAQQsQMQxwEQ0QM6CwguELEDEIMBENQCOggILhCABBCxAzoOCAAQgAQQsQMQgwEQyQM6CAgAEIAEEMkDSgUIPBIBM1DKAViPFmDmFmgFcAB4AIABVIgByQaSAQIxNZgBAKABAbABCg&sclient=gws-wiz

*/