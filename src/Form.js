import React from "react";
import axios from 'axios';
import { resetWarningCache } from "prop-types";

export default class Form extends React.Component {

    
    
  constructor(props)
  {
      super(props);
      this.state = {
          userName:" ",
          email:" ",
          title: "",
          techStack: "",
          message: "",
        //   userNameError:null,
        //   emailError:null,
        //   titleError: null,
        //   techStackError: null,
        //   messageError: null,
        //   final_name:"",
        //   final_email:"",
        //   final_title:"",
        //  final_techStack:"",
        //  final_message:"",
        //  initialState:""
         
       }
     }

    // validateName = (e) => {
    //   const userName= e.target.value;
    //   this.setState({
    //     userNameError:
    //     userName.length > 3 && userName.length < 15 ? null : 'Name must be longer than 3 characters and smaller than 15 characters',
    //     final_name : userName
    //   });
    // }
    
    // validateEmail = (e) => {
    //   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //    const email = e.target.value;
    //   this.setState({
    //     emailError:
    //    re.test(String(email)) ? null : 'Email must be valid',
    //    final_email : email
    //   });
    // }
    // validateTitle = (e) => {
    //   const title = e.target.value;
    //   this.setState({
    //     titleError:
    //       title.length > 3 && title.length < 15 ? null : 'Title must be longer than 3 characters and smaller than 15 characters',
    //       final_title : title
    //     });
    // }
    // validateTechStack= (e) => {
    //   const techstack = e.target.value;
    //   this.setState({
    //     techStackError:
    //     techstack.length > 3 && techstack.length <15 ? null : 'TechStack must be longer than 3 characters and smaller than 15 characters',
    //     final_techStack: techstack
    //   });
    // }
    // validateMessage= (e) => {
    //   const message = e.target.value;
    //   this.setState({
    //     messageError:
    //     message.length > 3 && message.length < 100? null : 'Message  must be longer than 3 characters and smaller than 100 characters',
    //     final_message : message
    //   });
    // }

    handleSubmit = event => {
      const user = {
            userName: this.state.final_name,
            email: this.state.final_email,
            title: this.state.final_title,
            techStack: this.state.final_techStack,
            message: this.state.final_message,
         
          };
          console.log(user);

          if(this.state.final_name !== ""&& this.state.final_email !== "" && this.state.final_title !== "" && this.state.final_techStack !== "" && this.state.final_message !== ""){     
                console.log("submit");
  
          }
    //       else
    //       {
    //      if(this.state.final_name == ""){
    //         const userName= event.target.value;
    //         this.setState({   
    //        userNameError:
    //        userName.length > 3 && userName.length < 10 ? null : 'Name must be longer than 3 characters and smaller than 15 characters',
    //        final_name : userName
    //       });
    //      }
    //     if(this.state.final_email == ""){
    //        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //        const email = event.target.value;
    //        this.setState({
    //        emailError:
    //        re.test(String(email)) ? null : 'Email must be valid',
    //        final_email : email
    //       });
    //      }
    //     if(this.state.final_title == ""){
    //        const title = event.target.value;
    //        this.setState({
    //        titleError:
    //        title.length > 3 && title.length < 15 ? null : 'Title must be longer than 3 characters and smaller than 15 characters',
    //        final_title : title
    //      });
    //      }
    //   if(this.state.final_techStack == ""){
    //      const techstack = event.target.value;
    //      this.setState({
    //      techStackError:
    //      techstack.length > 3 && techstack.length <15 ? null : 'TechStack must be longer than 3 characters and smaller than 15 characters',
    //      final_techStack: techstack
    //    });
    //   }
    //   if(this.state.final_techStack == ""){
    //      const message = event.target.value;
    //      this.setState({
    //      messageError:
    //      message.length > 3 && message.length < 100? null : 'Message must be longer than 3 characters and smaller than 100 characters',
    //      final_message : message
    //    });
    //   }
    // }
    }
    
  render() {
   
    return (
      <form id="myForm" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" netlify>
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-group">
            <label>Name</label>
            <input
            type="text"
            name="userName"
            className="form-control"
            // onBlur={this. validateName}

            // className={`form-control ${this.state. userNameError ? 'is-invalid':''}`}
            />
            {/* <span>{this.state.userNameError}</span> */}
        </div>
        <div className="form-group">
            <label>Email</label>
            <input
            type="email"
            name="email"
            className="form-control"
            // onBlur={this.validateEmail}
            // className={`form-control ${this.state. emailError ? 'is-invalid':''}`}
            />
            {/* <span>{this.state.emailError}</span> */}
        </div>
        <div className="form-group">
            <label>Title</label>
            <input
             type="text"
            name="title"
            className="form-control"
            // onBlur={this.validateTitle}
            // className={`form-control ${this.state. titleError ? 'is-invalid':''}`}
            />
            {/* <span>{this.state.titleError}</span> */}
        </div>
        <div className="form-group">
            <label>HR Tech Stack</label>
            <input
             type="text"
            name="techStack"
            className="form-control"
            // onBlur={this.validateTechStack}
            // className={`form-control ${this.state. techStackError? 'is-invalid':''}`}
            />
            {/* <span>{this.state.techStackError}</span> */}
        </div>
        <div className="form-group">
            <label>message</label>
            <textarea name="message"
            className="form-control"
            // onBlur={this.validateMessage}
            // className={`form-control ${this.state. messageError ? 'is-invalid':''}`}
            >
            </textarea>
            {/* <span>{this.state. messageError}</span> */}
            
        </div>
        <button className="btn theme-btn-blue theme-btn" type="submit" onClick={e => this.handleSubmit(e)}  >Submit</button>
      </form>
    );
  }
}
