
     $(document).ready(()=>{
         $("#loginbtn").click(()=>{
             $("#loginbox").html(`<div class=" container login-container">
             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
             </button>
             <div class="row">
                 <div class="col-md-6 login-form-1">
                     <h3>Personal Login</h3>
                     
                         <div class="form-group">
                             <input type="text" class="form-control" placeholder="Your Email *" value="" />
                         </div>
                         <div class="form-group">
                             <input type="password" class="form-control" placeholder="Your Password *" value="" />
                         </div>
                         <div class="form-group">
                             <input type="submit" class="btnSubmit" value="Login" />
                         </div>
                         <div class="form-group">
                             <a href="#" class="btnForgetPwd">Forget Password?</a>
                         </div>
                         <div class="form-group">
                             <a href="#" class="btnForgetPwd">New User Registration</a>
                         </div>
                     
                 </div>
                 <div class="col-md-6 login-form-2">
                     <div class="login-logo">
                         <img src="images/logo_white.png" alt=""/>
                     </div>
                     <h3>Business Login</h3>
                         <div class="form-group">
                             <input type="text" id="uemail" class="form-control" placeholder="Your Email *" value="" />
                         </div>
                         <div class="form-group">
                             <input type="password" id="pass" class="form-control" placeholder="Your Password *" value="" />
                         </div>
                         <div class="form-group">
                             <input type="button" class="btnSubmit" value="Login" id="login2" />
                         </div>
                         <div class="form-group">
      
                             <a href="#" class="btnForgetPwd" value="Login">Forget Password?</a>
                         </div>
                         <div class="form-group">
                             <a href="#" class="btnForgetPwd">New Business Registration</a>
                         </div>
                     </form>
                 </div>
             </div>
         </div>`)
         $("#login2").on('click',()=>{
             uname=$("#uemail").val()
             upass=$("#pass").val()
             console.log(uname)
             console.log(upass)
         })
         })
     })