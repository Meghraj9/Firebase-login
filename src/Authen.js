import React, {Component} from 'react';
var firebase = require('firebase');
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBML6EPdIvp7ZZPOo7NJqlifei8IRve7p4",
    authDomain: "fir-login-8380d.firebaseapp.com",
    databaseURL: "https://fir-login-8380d.firebaseio.com",
    projectId: "fir-login-8380d",
    storageBucket: "fir-login-8380d.appspot.com",
    messagingSenderId: "455376110228",
    appId: "1:455376110228:web:c2218a29a4ccda485a2a81"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



class Authen extends Component {
    Login(event){
        const email = this.refs.email.value;
        const password = this.refs.password.value;


        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email,password);
        promise
        .then(user => {
            var msg = "you are Logged In"
            this.setState({msg : msg});
            var lout = document.getElementById('lout');
            lout.classList.remove('hide');
        });
        promise.catch(e => {
            var msg = e.message;
            this.setState({msg : msg});

            
        });
    }



    Signup(event){
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        

        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email, password);
        
        promise
        .then ( user => {
            console.log(user);
            console.log(user.user.uid);
            
            var msg = "welcome ," + user.user.email;
            firebase.database().ref('users/'+ user.user.uid).set({
                email : email
            });

            this.setState({msg : msg})
        });

        promise
        .catch(e => {
            var msg = e.message;
            this.setState({msg : msg});
        });


    }
    Logout(event){
       firebase.auth().signOut();
       var msg = "Thanks  For using the System"
       this.setState({msg : msg});
       var lout = document.getElementById('lout');
       lout.classList.add('hide');
    
    }

    
    constructor(props){
        super(props);
    
        this.state = {
            msg : ''
        };
        this.Login = this.Login.bind(this);
        this.Signup = this.Signup.bind(this);
        this.Logout = this.Logout.bind(this);
    }
    render(){
      return(
        <div>
            <input type="email" name="email" ref="email" placeholder="Email" />       <br/>
            <input type="password" name="password" ref="password" placeholder="Password" />  <br/>
            
            <p>{this.state.msg}</p>
            
            <button onClick = {this.Login} >Login</button>
            <button onClick = {this.Signup} >Signin</button>
            <button onClick = {this.Logout} id = "lout" className="hide">Logout</button>

        </div>
      );
    }
  }

  export default Authen;