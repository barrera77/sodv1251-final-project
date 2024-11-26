const SigninForm = `
<section class="vh-75">
  <div class="container py-3 h-100">
    <div class="row d-flex justify-content-center pt-3 h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card login-card" style="border-radius: 1rem;">
          <div class="card-body py-3 px-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-2">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="" mb-5">Please enter your login and password!</p>

              <div data-mdb-input-init class="form-outline form-white mb-4">
                <input type="text" id="username" name="username" placeholder="username" class="form-control form-control-lg" placeholder="email"/>
                <div
                    id="invalid-login-username"
                    class="invalid-feedback text-dark"
                >
                    <i class="bi bi-exclamation-triangle"></i>
                    <span id="message">Invalid Username</span>
                </div>
              </div>

              <div data-mdb-input-init class="form-outline form-white mb-4">
                <input placeholder="password" type="password" name="password" id="password" class="form-control form-control-lg" />
                 <div
                    id="invalid-login-password"
                    class="invalid-feedback text-dark"
                >
                    <i class="bi bi-exclamation-triangle"></i>
                    <span id="message">Invalid Password</span>
                </div>
              </div>

              <p class="small mb-3 pb-lg-2"><a class="text-dark" href="#!">Forgot password?</a></p>

              <button class="btn btn-dark btn-lg px-5" type="submit">Login</button>

              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" class="text-dark"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-dark"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-dark"><i class="fab fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              <p class="mb-0">Don't have an account? <a href="#!" class="fw-bold">Sign Up</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

export default SigninForm;
