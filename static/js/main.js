/*
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      loggedIn: window.localStorage.getItem('loggedIn'),
    
    },
    //plugin : [myPlugin],
    mutations: {
        setStatus(state, payload){
            state.loggedIn = payload;
            //window.localStorage.setItem('loggedIn',payload);
        },
        setUser(state,payload){
            state.currentUser = payload;
        }
        
       
    },
    getters: {
        status(state){
            return state.loggedIn;
        },
        currentUser(state){
            return state.currentUser;
        }
    }
  })

  */


 let app2 =  new Vue({
    el: '#app', 
    delimiters: ["{-","-}"],
    

    data: {
        testing : window.localStorage.getItem('testing'),
        currentUser : JSON.parse(window.localStorage.getItem('user'))
    
    },
    computed: {
         username() {
            return  this.$data.currentUser ? this.$data.currentUser.username: "";
          },
          loginfo(){
              return this.$data.testing;
          }

    },

    methods: {
            
        triggerNetlifyIdentityAction(action) {

            if (action == "login" || action == "signup") {
                    
                netlifyIdentity.open();
                netlifyIdentity.on(action, user => {
                    window.localStorage.setItem('testing','loggedIn');
                    this.testing = 'loggedIn';
                    this.currentUser = {
                        username: user.user_metadata.full_name,
                        email: user.email,
                        access_token: user.token.access_token,
                        expires_at: user.token.expires_at,
                        refresh_token: user.token.refresh_token,
                        token_type: user.token.token_type
                      };
                      let theUser = JSON.stringify(this.currentUser);
        
                        window.localStorage.setItem('user', theUser);
                
                  netlifyIdentity.close();
                });
                 
                  //store.commit('setStatus',1);
                
              
            } else if (action == "logout") {
      
                netlifyIdentity.open();
                netlifyIdentity.on(action, user => {
                    window.localStorage.setItem('testing','loggedOut');
                    this.testing = 'loggedOut';
                    this.currentUser = null;
                  netlifyIdentity.close();
                });
                 
                    //store.commit('setStatus',0);  

          }}  
         
    // instance methods
        
    }
    })

    
                    
                  netlifyIdentity.on('login', user => {
                    window.localStorage.setItem('testing','loggedIn');
                    app2.$data.testing = 'loggedIn';
                    let theUser = {
                        username: user.user_metadata.full_name,
                        email: user.email,
                        access_token: user.token.access_token,
                        expires_at: user.token.expires_at,
                        refresh_token: user.token.refresh_token,
                        token_type: user.token.token_type
                      };
                      app2.$data.currentUser = theUser;

                        window.localStorage.setItem('user', JSON.stringify(theUser));
                
                     });
                     
                     netlifyIdentity.on('signup', user => {
                    window.localStorage.setItem('testing','loggedIn');
                    app2.$data.testing = 'loggedIn';
                    let theUser = {
                        username: user.user_metadata.full_name,
                        email: user.email,
                        access_token: user.token.access_token,
                        expires_at: user.token.expires_at,
                        refresh_token: user.token.refresh_token,
                        token_type: user.token.token_type
                      };
                      app2.$data.currentUser = theUser;
        
                        window.localStorage.setItem('user', JSON.stringify(theUser));
                
                  
                     });
                     netlifyIdentity.on('logout', user => {
                        window.localStorage.setItem('testing','loggedOut');
                        app2.$data.testing = 'loggedOut';
                        let theUser = null;
                        app2.$data.currentUser = theUser;

                            window.localStorage.setItem('user', JSON.stringify(theUser));
                    
                         });

