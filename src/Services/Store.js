import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    ROBOTS:[],
    NOTICES:[],
    MEMBERS:[],
    PROJECTS:[],
    GALLERY:[],
    pending: false,
    data: [],
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        
        case 'FETCH_DATA_PENDING':
            console.log("Pendiente");
            return{
                ...state,
                pending: true
            }

        case 'FETCH_DATA_SUCCESS':
            console.log("realizado");
            var R = [];
            var N = [];
            var M = [];
            var P = [];
            var G = [];
            action.data.map((post, i)=>{
                switch (post.categories[0]) {
                    case 7:
                        R.push({name:post.title.rendered, content:post.content.rendered});
                        break;
                    case 8:
                        N.push({noticetitle:post.title.rendered, content:post.content.rendered, date:post.date});
                        break;
                    case 10:
                        P.push({projecttitle:post.title.rendered, content:post.content.rendered, date:post.date});
                        break;
                    case 11:
                        var g = post.content.rendered.split('src="')
                        g.shift(); //Borra el primer elemento de la lista que es innecesario
                        
                        g.map((link,i) => {
                            var link_img = link.split('" alt=')[0];
                            var img = new Image();
                            img.src = link_img;
                            img.onload = function(){
                              G.push({src:link_img, thumbnailWidth:this.width, thumbnailHeight:this.height, thumbnail: link_img})
                            }
                          })
                        break;
                    case 9:
                        M.push({name:post.title.rendered, description:post.excerpt.rendered, content:post.content.rendered});
                        break;
                }   
            })
            
            return{
                ...state,
                pending: false,
                data: action.data,
                ROBOTS: R,
                NOTICES:N,
                MEMBERS:M,
                PROJECTS:P,
                GALLERY:G
            }

        case 'FETCH_DATA_ERROR':
            console.log(action.error);
            return{
                ...state,
                pending: false,
                error: action.error
            }
    }

    return state
}

const middlewares = [thunk];
createStore(reducer, initialState, applyMiddleware(...middlewares));

export default createStore(reducer, initialState, applyMiddleware(...middlewares)); //createStore(reducer); //, {cart:[]}