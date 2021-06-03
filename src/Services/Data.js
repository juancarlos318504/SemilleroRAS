const WordpressUrl= "https://rasuao.000webhostapp.com/wp-json/wp/v2/posts?per_page=100"//"http://192.168.1.4/wordpress-sir/wp-json/wp/v2/posts?per_page=100";

function fetchDataPending() {
    return {
        type: 'FETCH_DATA_PENDING'
    }
}

function fetchDataSuccess(data) {
    return {
        type: 'FETCH_DATA_SUCCESS',
        data
    }
}

function fetchDataError(error) {
    return {
        type: 'FETCH_DATA_ERROR',
        error: error
    }
}

function fetchData() {
    return dispatch => {
        dispatch(fetchDataPending());
        fetch(WordpressUrl)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchDataSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchDataError(error));
        })
    }
}

export default fetchData;