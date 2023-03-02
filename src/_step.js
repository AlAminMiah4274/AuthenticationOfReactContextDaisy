/*
 Basic context API setup:

1. Context API: share auth state with other components(accross the application).
2. Create an userContext
3. ContextProvider with passed children 
4. set the UserContext with the index.js
5. To consume the context: export the AuthContext from UserContext.
6. Now at Header or Home or anyWhere else: use useContext hook to get the info in the context. 
*/

/*
Auth intregation: 
1. use getAuth by passing the app form firebase config
2. create a function named createUser to return createUserEmailAndPassword. 
*/