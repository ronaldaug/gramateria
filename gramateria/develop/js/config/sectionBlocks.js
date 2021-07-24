export default [
    {
        id: 'section-header',
        label: 'Header',
        category: 'Sections',
        attributes: {
            class: 'fa fa-window-minimize'
        },
        content: `<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand text-primary" href="#">G.</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <div class="d-flex">
              <button class="btn btn-outline-primary me-2"><span class="fas fa-lock me-2"></span>Login</button>
              <button class="btn btn-primary"><span class="fas fa-plus me-2"></span>New account</button>
            </div>
          </div>
        </div>
      </nav>
      <section id="hero" class="d-flex flex-column align-items-center justify-content-center pt-4">
        <h2 class="hero-title display-2 text-uppercase mt-5"><span class="text-primary">G</span>ramateria</h2>
        <p class="hero-subtitle display-6">Fastest way to build single HTML pages</p>
        <div class="hero-buttons my-5">
          <button class="btn btn-primary me-2">
          <span class="fas fa-eye me-2"></span>Try now
        </button>
        <button class="btn btn-outline-primary"><span class="fas fa-book me-2"></span>Documentation</button>
        </div>
        <div class="hero-image p-4 bg-white shadow-sm rounded">
          <img src="https://res.cloudinary.com/dpnea22ek/image/upload/c_scale,q_100,w_1400/v1627100771/gramateria.jpg" style="max-width:600px;" alt="Gramateria">
        </div>
        <svg class="background-wave" width="1440" height="386" xmlns="http://www.w3.org/2000/svg"><g fill="#09F" fill-rule="nonzero" fill-opacity=".2"><path d="M0 87l26.7 10.7C53.3 108 107 130 160 124.3c53.3-5.3 107-37.3 160-64C373.3 34 427 12 480 12.3 533.3 12 587 34 640 55c53.3 21 107 43 160 21.3C853.3 55 907-9 960 1.7c53.3 10.3 107 96.3 160 122.6 53.3 26.7 107-5.3 160-26.6 53.3-21.7 107-31.7 133-37.4l27-5.3v128H0V87zM0 311l26.7-5.3C53.3 300 107 290 160 311c53.3 21 107 75 160 74.701C373.3 386 427 332 480 311c53.3-21 107-11 160 10.7C693.3 343 747 375 800 359c53.3-16 107-80 160-101.3 53.3-21.7 107 .3 160 21.3 53.3 21 107 43 160 42.7 53.3.3 107-21.7 133-32l27-10.7v-96H0v128z"/></g></svg>
      </section>
    <style>#hero{position:relative}#hero .background-wave{width:100%;height:600px;position:absolute;top:340px;left:0;z-index:-1}</style>`
    },
    {
        id: 'section-blog',
        label: 'Blog',
        category: 'Sections',
        attributes: {
            class: 'fa fa-th-large'
        },
        content: `<section id="blog">
        <div class="section-header container">
          <h3 class="display-6 p-4 text-uppercase">Recent Posts</h3>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="post bg-white shadow-sm rounded">
                <div class="post-image" style="height:200px;">
                  <img src="https://picsum.photos/300" alt="" style="height:100%;width:100%;object-fit:cover;">
                </div>
                <div class="post-content p-4">
                  <a href="#" class="text-decoration-none text-dark text-uppercase">
                    <h3>Post Title</h3>
                  </a>
                  <div class="row my-3">
                    <div class="col-md-6"><small><span class="fas fa-user me-2"></span> John Doe</small></div>
                    <div class="col-md-6">
                      <small> <span class="fas fa-clock me-2"></span> 4 min read</small>
                    </div>
                  </div>
                  <p class="post-content mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio delectus assumenda, voluptatibus rem labore nesciunt magnam ab provident odio ipsam!
      
                  </p>
                  <button class="btn btn-outline-primary">Continue Reading <span class="ms-2 fa fa-arrow-right"></span></button>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="post bg-white shadow-sm rounded">
                <div class="post-image" style="height:200px;">
                  <img src="https://picsum.photos/301" alt="" style="height:100%;width:100%;object-fit:cover;">
                </div>
                <div class="post-content p-4">
                  <a href="#" class="text-decoration-none text-dark text-uppercase">
                    <h3>Post Title</h3>
                  </a>
                  <div class="row my-3">
                    <div class="col-md-6"><small><span class="fas fa-user me-2"></span> John Doe</small></div>
                    <div class="col-md-6">
                      <small> <span class="fas fa-clock me-2"></span> 4 min read</small>
                    </div>
                  </div>
                  <p class="post-content mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio delectus assumenda, voluptatibus rem labore nesciunt magnam ab provident odio ipsam!
      
                  </p>
                  <button class="btn btn-outline-primary">Continue Reading <span class="ms-2 fa fa-arrow-right"></span></button>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="post bg-white shadow-sm rounded">
                <div class="post-image" style="height:200px;">
                  <img src="https://picsum.photos/302" alt="" style="height:100%;width:100%;object-fit:cover;">
                </div>
                <div class="post-content p-4">
                  <a href="#" class="text-decoration-none text-dark text-uppercase">
                    <h3>Post Title</h3>
                  </a>
                  <div class="row my-3">
                    <div class="col-md-6"><small><span class="fas fa-user me-2"></span> John Doe</small></div>
                    <div class="col-md-6">
                      <small> <span class="fas fa-clock me-2"></span> 4 min read</small>
                    </div>
                  </div>
                  <p class="post-content mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio delectus assumenda, voluptatibus rem labore nesciunt magnam ab provident odio ipsam!
      
                  </p>
                  <button class="btn btn-outline-primary">Continue Reading <span class="ms-2 fa fa-arrow-right"></span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`
    }
]