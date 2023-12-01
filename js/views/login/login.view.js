import View from "../view.js";

class LoginView extends View {
  formData = {};
  generateAppMarkup() {
    return `
        <div id="page-container" class="fade">
		<!-- begin login -->
		<div class="login login-v1">
			<!-- begin login-container -->
			<div class="login-container">
				<!-- begin login-header -->
				<div class="login-header">
					<div class="brand">
						<span class="logo"></span> <b>ITPE130</b> Web System
					</div>
					<div class="icon">
						<i class="fa fa-lock"></i>
					</div>
				</div>
				<!-- end login-header -->
				<!-- begin login-body -->
				<div class="login-body">
					<!-- begin login-content -->
					<div class="login-content">
						<form action="index.html" id="login-form" method="post" class="margin-bottom-0">
							<div class="form-group m-b-20">
								<input type="text" class="form-control form-control-lg inverse-mode" id="email" name="email" placeholder="Email Address" required />
							</div>
							<div class="form-group m-b-20">
								<input type="password" class="form-control form-control-lg inverse-mode" id="password" name="password" placeholder="Password" required />
							</div>
							<div class="login-buttons">
								<button type="submit" class="btn btn-success btn-block btn-lg">Sign me in</button>
							</div>
						</form>
					</div>
					<!-- end login-content -->
				</div>
				<!-- end login-body -->
			</div>
			<!-- end login-container -->
		</div>
        </div>
        `;
  }

  bindLoginHandler(handler) {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      this.formData = {
        email: e.target.elements.email.value.trim(),
        password: e.target.elements.password.value.trim(),
      };

      handler();
    });
  }

  getFormData() {
    return { ...this.formData };
  }

  handleSuccessLogin(){
	
  }
}

export default new LoginView();
