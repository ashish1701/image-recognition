import React from 'react';

class Signin extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			signinEmail :'',
			signinPassword : ''
		}
	}

	onEmailChange = (event) =>{
		this.setState({signinEmail: event.target.value});
	} 

	onPasswordChange = (event) => {
		this.setState({signinPassword: event.target.value});
	}

	render(){
		const {onRouteChange}=this.props;
		return(
		<article className="br3 ba shadow-5 dark-gray b--black-10 mv6 w-100 w-50-m w-25-l mw6 center">
			<main className="pa4 black-80">
			  <form className="measure center">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f4 fw6 ph0 mh0 center">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input 
			        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="email" 
			        name="email-address"  
			        id="email-address" 
			        onChange={this.onEmailChange}
			        />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input 
			        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="password" 
			        name="password"  
			        id="password" 
			        onChange = {this.onPasswordChange}
			        />
			      </div>
			    </fieldset>
			    <div className="">
			      <input onClick = {() => onRouteChange('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
			    </div>
			     <div className="lh-copy mt3">
				     <p onClick = {() => onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
			    </div>
			  </form>
			</main>
		</article>
	)
	}
}

export default Signin;