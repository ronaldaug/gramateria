  var blkStyle = '.blk-row::after{ content: ""; clear: both; display: block;} .blk-row{padding: 10px;}';

  var editor = grapesjs.init({
      allowScripts: 1,
      showOffsets: 1,
      autorender: 0,
      noticeOnUnload: 0,
      container: '#gjs',
      height: '100%',
      fromElement: true,
      clearOnRender: 0,
      plugins: [
                'gjs-plugin-export'
            ],
      pluginsOpts: {
          'gjs-plugin-export': {
              btnLabel: 'Download Zip',
              preHtml: `<!doctype html>
                        <html>
                        <head>
                        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
                        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
                        <link rel="stylesheet" href="css/style.css">
                            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
                        </head>
                        <body>`,
              postHtml: `<!-- this page is generateded by Gramateria -->
                        </body>
                        </html>`
          }
      },
      canvas: {
          styles: ['https://fonts.googleapis.com/css?family=Roboto', 'https://fonts.googleapis.com/icon?family=Material+Icons', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css','https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css'],
          scripts: ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/js/materialize.min.js']
      },
      commands: {
          defaults: [
//              {
//              id: 'open-github',
//              run: function (editor, sender) {
//                  sender.set('active', false);
//                  window.open('https://github.com/ronaldaug/gramateria', '_blank');
//              }
//                }, 
              {
                  id: 'undo',
                  run: function (editor, sender) {
                      sender.set('active', false);
                      editor.UndoManager.undo(true);
                  }
                }, {
                  id: 'redo',
                  run: function (editor, sender) {
                      sender.set('active', false);
                      editor.UndoManager.redo(true);
                  }
                }, {
                  id: 'clean-all',
                  run: function (editor, sender) {
                      sender.set('active', false);
                      if (confirm('Are you sure to clean the canvas?')) {
                          var comps = editor.DomComponents.clear();
                      }
                  }
                }],
      },


      assetManager: {
          upload: 'https://test.page',
          params: {
              _token: 'pCYrSwjuiV0t5NVtZpQDY41Gn5lNUwo3it1FIkAj',
          },
          assets: [
              {
                  type: 'image',
                  src: 'https://res.cloudinary.com/ronaldaug/image/upload/v1515419443/background_ckgyqe.jpg',
                  date: '2015-02-01',
                  height: 808,
                  width: 1440
                    },
              {
                  type: 'image',
                  src: 'https://res.cloudinary.com/ronaldaug/image/upload/v1515419441/background2_gjvaxs.jpg',
                  date: '2015-02-01',
                  height: 800,
                  width: 1600
                    },
              {
                  type: 'image',
                  src: 'https://res.cloudinary.com/ronaldaug/image/upload/v1515419443/background3_d0ghix.jpg',
                  date: '2015-02-01',
                  height: 743,
                  width: 1440
                    },
              {
                  type: 'image',
                  src: 'https://res.cloudinary.com/ronaldaug/image/upload/v1515419446/background4_pzh5ou.jpg',
                  date: '2015-02-01',
                  height: 808,
                  width: 1440
                    },
              {
                  type: 'image',
                  src: 'http://via.placeholder.com/250x350/0174DF/ffffff/',
                  height: 350,
                  width: 250
                    },
              {
                  type: 'image',
                  src: 'http://via.placeholder.com/250x350/5FB404/ffffff/',
                  height: 350,
                  width: 250
                    },
              {
                  type: 'image',
                  src: 'http://via.placeholder.com/250x350/BF00FF/ffffff/',
                  height: 350,
                  width: 250
                    },
              {
                  type: 'image',
                  src: 'http://via.placeholder.com/250x350/B40431/ffffff/',
                  height: 350,
                  width: 250
                    },
              {
                  type: 'image',
                  src: 'http://via.placeholder.com/250x350/088A68/ffffff/',
                  height: 350,
                  width: 250
                    },
              {
                  type: 'image',
                  src: 'http://via.placeholder.com/250x350/DF7401/ffffff/',
                  height: 350,
                  width: 250
                    },
              {
                  type: 'image',
                  src: 'http://via.placeholder.com/250x350/00BFFF/ffffff/',
                  height: 350,
                  width: 250
                    }
                ]
      },

      blockManager: {
          blocks: [
              {
                  id: 'std',
                  label: 'Starter',
                  category: 'Section',
                  content: '<div class="section no-pad-bot" id="banner-gradient">' +
                      '<nav class="bg-none" role="navigation">' +
                      '<div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo white-text">Logo</a>' +
                      '<ul class="right hide-on-med-and-down">' +
                      '<li><a class="white-text" href="#">Navbar Link</a></li>' +
                      '<li><a class="white-text" href="#">Navbar Link 2</a></li>' +
                      '</ul>' +
                      '<ul id="nav-mobile" class="side-nav">' +
                      '<li><a href="#">Navbar Link</a></li>' +
                      '<li><a href="#">Navbar Link 2</a></li>' +
                      '</ul>' +
                      '<a href="#" data-activates="nav-mobile" class="button-collapse white-text"><i class="material-icons">menu</i></a>' +
                      '</div>' +
                      '</nav>' +
                      '<div class="container">' +
                      '<br><br>' +
                      '<h1 class="header center white-text">Starter Template</h1>' +
                      '<div class="row center">' +
                      '<h5 class="header col s12 light white-text">A modern responsive front-end framework based on Material Design</h5>' +
                      '</div>' +
                      '<div class="row center">' +
                      '<a href="#" id="download-button" class="btn-large waves-effect waves-light light-blue">Get Started</a>' +
                      '</div>' +
                      '<br><br>' +
                      '</div>' +
                      '</div>' +
                      `<script type="text/javascript">
                        $('.button-collapse').sideNav();
                        </script>`,
                  attributes: {
                      class: 'fa fa-wpforms'
                  }
                    },
              {
                  id: 'parallax',
                  label: 'Parallax',
                  category: 'Section',
                  content: `<div class="parallax-container">
    <div class="parallax"><img src="https://res.cloudinary.com/ronaldaug/image/upload/v1515419443/background_ckgyqe.jpg"></div>
  </div>
  <div class="section white">
    <div class="row container">
      <h2 class="header">Parallax</h2>
      <p class="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
    </div>
  </div>
  <div class="parallax-container">
    <div class="parallax"><img src="https://res.cloudinary.com/ronaldaug/image/upload/v1515419441/background2_gjvaxs.jpg"></div>
  </div>
                      <script type="text/javascript">
                        $('.parallax').parallax();
                        </script>`,
                  attributes: {
                      class: 'fa fa-list-alt'
                  }
                    }
              ,
              {
                  id: 'nav',
                  label: 'Navbar 1',
                  category: 'Section',
                  content: '<nav class="light-blue lighten-1" role="navigation">' +
                      '<div class="nav-wrapper container">' +
                      '<a id="logo-container" href="#" class="brand-logo white-text">Logo</a>' +
                      '<ul class="right hide-on-med-and-down">' +
                      '<li><a class="white-text" href="#">Navbar Link</a></li>' +
                      '<li><a class="white-text" href="#">Navbar Link</a></li>' +
                      '</ul>' +
                      '<ul id="nav-mobile" class="side-nav light-blue">' +
                      '<li><a class="white-text" href="#">Navbar Link</a></li>' +
                      '<li><a class="white-text" href="#">Navbar Link</a></li>' +
                      '</ul>' +
                      '<a href="#" data-activates="nav-mobile" class="button-collapse white-text"><i class="material-icons">menu</i></a>' +
                      '</div>' +
                      '</nav>' +
                      `<script type="text/javascript">
                        $('.button-collapse').sideNav();
                        </script>`,
                  attributes: {
                      class: 'fa fa-window-maximize'
                  }
                    },
              {
                  id: 'dropdownNav',
                  label: 'Navbar 2',
                  category: 'Section',
                  content: `<!-- Dropdown Structure -->
<nav class="light-blue lighten-1" role="navigation">
  <div class="nav-wrapper container">
    <a href="#!" class="brand-logo white-text">Logo</a>
    <ul class="right hide-on-med-and-down">
      <li><a class="white-text light-blue lighten-1" href="sass.html">Sass</a></li>
      <li><a class="white-text light-blue lighten-1" href="badges.html">Components</a></li>
      <!-- Dropdown Trigger -->
      <li><a class="dropdown-button white-text light-blue lighten-1" href="#!" data-activates="mainmenu-dropdown">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
    </ul>
    <ul id="nav-mobile" class="side-nav light-blue">
    <li><a class="white-text light-blue lighten-1" href="sass.html">Sass</a></li>
      <li><a class="white-text light-blue lighten-1" href="badges.html">Components</a></li>
      <!-- Dropdown Trigger -->
      <li><a class="dropdown-button white-text light-blue lighten-1" href="#!" data-activates="sidemenu-dropdown">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
    </ul>
    <a href="#" data-activates="nav-mobile" class="button-collapse white-text"><i class="material-icons">menu</i></a>
  </div>
</nav>
<ul id="mainmenu-dropdown" class="dropdown-content">
  <li><a class="white-text light-blue lighten-1" href="#!">one</a></li>
  <li><a class="white-text light-blue lighten-1" href="#!">two</a></li>
  <li class="divider"></li>
  <li><a class="white-text light-blue lighten-1" href="#!">three</a></li>
</ul>
<ul id="sidemenu-dropdown" class="dropdown-content">
  <li><a class="white-text light-blue lighten-1" href="#!">one</a></li>
  <li><a class="white-text light-blue lighten-1" href="#!">two</a></li>
  <li class="divider"></li>
  <li><a class="white-text light-blue lighten-1" href="#!">three</a></li>
</ul>
<script type="text/javascript">
$("a.dropdown-button").dropdown();
$('.button-collapse').sideNav();
</script>`,
                  attributes: {
                      class: 'fa fa-toggle-down'
                  }
              }
              ,
              {
                  id: 'footer',
                  label: 'Footer',
                  category: 'Section',
                  content: '<footer class="page-footer light-blue gram-footer">' +
                      '<div class="container">' +
                      '<div class="row">' +
                      '<div class="col l6 s12">' +
                      '<h5 class="white-text">Company Bio</h5>' +
                      '<p class="grey-text text-lighten-4">We are a team of college students working on this project like its our full time job.Any amount would help support and continue development on this project and is greatly appreciated. </p>' +
                      '</div>' +
                      '<div class="col l3 s12">' +
                      '<h5 class="white-text">Settings</h5>' +
                      '<ul class="collection light-blue">' +
                      '<li class="collection-item"><a class="white-text" href="#!">Link 1</a></li>' +
                      '<li class="collection-item"><a class="white-text" href="#!">Link 2</a></li>' +
                      '<li class="collection-item"><a class="white-text" href="#!">Link 3</a></li>' +
                      '<li class="collection-item"><a class="white-text" href="#!">Link 4</a></li>' +
                      '</ul>' +
                      '</div>' +
                      '<div class="col l3 s12">' +
                      '<h5 class="white-text">Connect</h5>' +
                      '<ul class="collection light-blue with-header">' +
                      '<li class="collection-item"><a class="white-text" href="#!">Link 1</a></li>' +
                      '<li class="collection-item"><a class="white-text" href="#!">Link 2</a></li>' +
                      '<li class="collection-item"><a class="white-text" href="#!">Link 3</a></li>' +
                      '<li class="collection-item"><a class="white-text" href="#!">Link 4</a></li>' +
                      '</ul>' +
                      '</div>' +
                      '</div>' +
                      '</div>' +
                      '<div class="footer-copyright">' +
                      '<div class="container">' +
                      'Made by <a class="white-text text-lighten-3" href="http://materializecss.com">Materialize</a>' +
                      '</div>' +
                      '</div>' +
                      '</footer>',
                  attributes: {
                      class: 'fa fa-desktop'
                  }
                    },
              {
                  id: 'b1',
                  label: '1 Block',
                  category: 'Grid',
                  attributes: {
                      class: 'fa fa-reorder'
                  },
                  content: `<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">
                <div class="col m12" data-gjs-draggable=".row" data-gjs-custom-name="col12"></div>
              </div>`
                    }, {
                  id: 'b2',
                  label: '2 Blocks',
                  category: 'Grid',
                  attributes: {
                      class: 'fa fa-th-large'
                  },
                  content: `<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">
                <div class="col m6" data-gjs-draggable=".row" data-gjs-custom-name="m6"></div>
                <div class="col m6" data-gjs-draggable=".row" data-gjs-custom-name="m6"></div>
              </div>`
                    }, {
                  id: 'b3',
                  label: '3 Blocks',
                  category: 'Grid',
                  attributes: {
                      class: 'fa fa-th'
                  },
                  content: `<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">
                <div class="col s6 m4" data-gjs-draggable=".row" data-gjs-custom-name="m4"></div>
                <div class="col s6 m4" data-gjs-draggable=".row" data-gjs-custom-name="m4"></div>
                <div class="col s6 m4" data-gjs-draggable=".row" data-gjs-custom-name="m4"></div>
              </div>`
                    }, {
                  id: 'b4',
                  label: '4/8 Block',
                  category: 'Grid',
                  attributes: {
                      class: 'fa fa-th-list'
                  },
                  content: `<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">
                <div class="col m4" data-gjs-draggable=".row" data-gjs-custom-name="m4"></div>
                <div class="col m8" data-gjs-draggable=".row" data-gjs-custom-name="m8"></div>
              </div>`,
                    },

              {
                  id: '3ba',
                  label: 'Badges',
                  category: 'Section',
                  content: `<div class="section"><div class="container">
      <div class="row">
        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">flash_on</i></h2>
            <h5 class="center">Speeds up development</h5>

            <p class="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">group</i></h2>
            <h5 class="center">User Experience Focused</h5>

            <p class="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">settings</i></h2>
            <h5 class="center">Easy to work with</h5>

            <p class="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
          </div>
        </div>
      </div>
    </div>
    </div>`,
                  attributes: {
                      class: 'fa fa-sitemap'
                  }
                    },
              {
                  id: 'text',
                  label: 'Text',
                  attributes: {
                      class: 'fa fa-text-width'
                  },
                  category: 'Basic',
                  content: {
                      type: 'text',
                      content: 'Insert your text here',
                      activeOnRender: 1
                  },
                    }, {
                  id: 'image',
                  label: 'Image',
                  category: 'Basic',
                  attributes: {
                      class: 'fa fa-file-image-o'
                  },
                  content: {
                      type: 'image',
                      activeOnRender: 1
                  },
                    }, {
                  id: 'list',
                  label: 'List',
                  category: 'Basic',
                  attributes: {
                      class: 'fa fa-bars'
                  },
                  content: `<ul class="collection">
                    <li class="collection-item">List One</li>
                    <li class="collection-item">List Two</li>
                    <li class="collection-item">List Three</li>
                    <li class="collection-item">List Four</li>
                    </ul>`,
                    },

              {
                  id: 'list2',
                  label: 'List Two',
                  category: 'Basic',
                  attributes: {
                      class: 'fa fa-bars'
                  },
                  content: `<ul class="collection">
    <li class="collection-item avatar">
      <img src="https://randomuser.me/api/portraits/women/83.jpg" alt="" class="circle">
      <span class="title">Title</span>
      <p>First Line <br>
         Second Line
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <li class="collection-item avatar">
      <i class="material-icons circle">folder</i>
      <span class="title">Title</span>
      <p>First Line <br>
         Second Line
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <li class="collection-item avatar">
      <i class="material-icons circle green">insert_chart</i>
      <span class="title">Title</span>
      <p>First Line <br>
         Second Line
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <li class="collection-item avatar">
      <i class="material-icons circle red">play_arrow</i>
      <span class="title">Title</span>
      <p>First Line <br>
         Second Line
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
  </ul>`,
                 },
              {
                  id: 'table',
                  label: 'Table',
                  category: 'Basic',
                  attributes: {
                      class: 'fa fa-table'
                  },
                  content: `<table class="responsive-table centered striped highlight bordered">
        <thead>
          <tr>
              <th>Name</th>
              <th>Item Name</th>
              <th>Item Price</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alvin</td>
            <td>Eclair</td>
            <td>$0.87</td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td>$3.76</td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
          </tr>
        </tbody>
      </table>`,
                    },
              {
                  id: 'res',
                  label: 'respon image',
                  category: 'Media',
                  content: '<img src="http://via.placeholder.com/250x250/0174DF/ffffff/" class="responsive-img">',
                  attributes: {
                      class: 'fa fa-image'
                  }
                    },
              {
                  id: 'popup',
                  label: 'popup image',
                  category: 'Media',
                  content: `<img class="materialboxed" data-caption="A picture of a way with a group of trees in a park" width="250" src="http://via.placeholder.com/250x250/BF00FF/ffffff/">
                            <script type="text/javascript">
                            $('.materialboxed').materialbox();
                            </script>
                  `,
                  attributes: {
                      class: 'fa fa-object-group'
                  }
                    }
              ,
              {
                  id: 'dropdown',
                  label: 'dropdown',
                  category: 'Button',
                  content: `<!-- Dropdown Trigger -->
  <a class='dropdown-button btn orange' href='#' data-activates='dropdown1'>Drop Me!</a>
  <ul id='dropdown1' class='dropdown-content'>
    <li><a class="white-text orange" href="#!">one</a></li>
    <li><a class="white-text orange" href="#!">two</a></li>
    <li class="divider"></li>
    <li><a class="white-text orange" href="#!">three</a></li>
    <li><a class="white-text orange" href="#!"><i class="material-icons">view_module</i>four</a></li>
    <li><a class="white-text orange" href="#!"><i class="material-icons">cloud</i>five</a></li>
  </ul><script>$('.dropdown-button').dropdown();</script>`,
                  attributes: {
                      class: 'fa fa-list'
                  }
              }
              , {
                  id: 'modal',
                  label: 'modal',
                  category: 'Button',
                  content: `<!-- Modal Trigger -->
  <a class="waves-effect waves-light btn modal-trigger orange" href="#modal1">Modal</a>
  <div id="modal1" class="modal modal-fixed-footer black-text">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
    </div>
  </div><script type="text/javascript">
        $('.modal').modal();
        </script>
                `,
                  attributes: {
                      class: 'fa fa-object-ungroup'
                  }
                    },
              {
                  id: 'slider',
                  label: 'slider',
                  category: 'Section',
                  content: `<div class="slider">
    <ul class="slides">
      <li>
        <img src="https://res.cloudinary.com/ronaldaug/image/upload/v1515419441/background2_gjvaxs.jpg"> <!-- random image -->
        <div class="caption center-align">
          <h3>This is our big Tagline!</h3>
          <h5 class="light grey-text text-lighten-3">Heres our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="https://res.cloudinary.com/ronaldaug/image/upload/v1515419443/background_ckgyqe.jpg"> <!-- random image -->
        <div class="caption left-align">
          <h3>Left Aligned Caption</h3>
          <h5 class="light grey-text text-lighten-3">Heres our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="https://res.cloudinary.com/ronaldaug/image/upload/v1515419443/background3_d0ghix.jpg"> <!-- random image -->
        <div class="caption right-align">
          <h3>Right Aligned Caption</h3>
          <h5 class="light grey-text text-lighten-3">Heres our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="https://res.cloudinary.com/ronaldaug/image/upload/v1515419446/background4_pzh5ou.jpg"> <!-- random image -->
        <div class="caption center-align">
          <h3>This is our big Tagline!</h3>
          <h5 class="light grey-text text-lighten-3">Heres our small slogan.</h5>
        </div>
      </li>
    </ul>
  </div>
                        <script type="text/javascript">
                                $('.slider').slider({
                                    full_width: true,
                                    indicators: false,
                                });
                                $('.slider').hover(function() {
                                    $('.slider').slider('pause');
                                })
                                $('.slider').mouseleave(function() {
                                    $('.slider').slider('start');
                                })
                        </script>`,
                  attributes: {
                      class: 'fa fa-credit-card'
                  }
                    },

              {
                  id: 'btn',
                  label: 'button',
                  category: 'Button',
                  content: '<a class="btn waves-effect waves-light orange">button</a>',
                  attributes: {
                      class: 'fa fa-square-o'
                  }
                    },
              {
                  id: 'target',
                  label: 'tap target',
                  category: 'Button',
                  content: `<div class="fixed-action-btn"><a onclick="$('.tap-target').tapTarget('open');" id="menu" class="btn btn-floating btn-large orange"><i class="material-icons">menu</i></a></div>
                <div class="tap-target" data-activates="menu">
                <div class="tap-target-content">
                <h5>Title</h5>
                <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.</p>
                </div>
                </div>`,
                  attributes: {
                      class: 'fa fa-bullseye'
                  }
                    },
              {
                  id: 'fab',
                  label: 'FAB',
                  category: 'Button',
                  content: `<div class="fixed-action-btn horizontal click-to-toggle">
                       <a onclick="$('.fixed-action-btn').openFAB()" class="btn-floating btn-large waves-effect waves-light orange">
                       <i class="material-icons">menu</i>
                       </a>
                       <ul><li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li><li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li><li><a class="btn-floating green"><i class="material-icons">publish</i></a></li><li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li></ul>
                      </div>`,
                  attributes: {
                      class: 'fa fa-bullseye'
                  }
            }, {
                  id: 'fabtool',
                  label: 'FAB toolbar',
                  category: 'Button',
                  content: `<div class="fixed-action-btn toolbar">
                      <a onclick="$('.fixed-action-btn.toolbar').openToolbar();" class="btn-floating btn-large waves-effect orange">
                      <i class="large material-icons">mode_edit</i>
                      </a>
                      <ul>
                      <li class="waves-effect waves-light"><a href="#!"><i class="material-icons">insert_chart</i></a></li>
                      <li class="waves-effect waves-light"><a href="#!"><i class="material-icons">format_quote</i></a></li>
                      <li class="waves-effect waves-light"><a href="#!"><i class="material-icons">publish</i></a></li>
                      <li class="waves-effect waves-light"><a href="#!"><i class="material-icons">attach_file</i></a></li>
                      </ul>
                      </div>`,
                  attributes: {
                      class: 'fa fa-ellipsis-h'
                  }
            },
              {
                  id: 'cbtn',
                  label: 'Circle Button',
                  category: 'Button',
                  content: '<a class="btn-floating btn-large waves-effect waves-light orange"><i class="material-icons">add</i></a>',
                  attributes: {
                      class: 'fa fa-circle-thin'
                  }
                    }, {
                  id: 'link',
                  label: 'Link',
                  category: 'Basic',
                  attributes: {
                      class: 'fa fa-link'
                  },
                  content: {
                      type: 'link',
                      content: 'Link',
                  },
                    }, {
                  id: 'formtag',
                  label: 'Form Tag',
                  category: 'Form',
                  attributes: {
                      class: 'fa fa-file-text'
                  },
                  content: `<form id="myForm" action="#" method="POST"><div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">
                <div class="col m12" data-gjs-draggable=".row" data-gjs-custom-name="col12"></div>
              </div></form>`
              }
                  , {
                  id: 'formgroup',
                  label: 'Form group',
                  category: 'Form',
                  attributes: {
                      class: 'fa fa-list'
                  },
                  content: `<div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input placeholder="Placeholder" id="first_name" type="text" class="validate">
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate">
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          This is an inline input field:
          <div class="input-field inline">
            <input id="email" type="email" class="validate">
            <label for="email" data-error="wrong" data-success="right">Email</label>
          </div>
        </div>
      </div>
    </form>
  </div>`
                    },
              {
                  id: 'iconinput',
                  label: 'input',
                  category: 'Form',
                  attributes: {
                      class: 'fa fa-minus-square'
                  },
                  content: `<div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" class="validate">
          <label for="icon_prefix">First Name</label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">phone</i>
          <input id="icon_telephone" type="tel" class="validate">
          <label for="icon_telephone">Telephone</label>
        </div>
      </div>`
                    }, {
                  id: 'textarea',
                  label: 'Textarea',
                  category: 'Form',
                  attributes: {
                      class: 'fa fa-sticky-note-o'
                  },
                  content: `<div class="row">
        <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">Textarea</label>
        </div>
      </div>`,
                 }, {
                  id: 'select',
                  label: 'Select',
                  category: 'Form',
                  attributes: {
                      class: 'fa fa-caret-square-o-down'
                  },
                  content: `<div class="input-field col s12">
    <select>
      <option value="" disabled selected>Choose your option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
    <label>Materialize Select</label>
  </div><script>$('select').material_select();</script>`
                 },
              {
                  id: 'radio',
                  label: 'Radio',
                  category: 'Form',
                  attributes: {
                      class: 'fa fa-dot-circle-o'
                  },
                  content: `<div class="row">
        <div class="input-field col s12">
<p>
      <input name="group1" type="radio" id="test1"/>
      <label for="test1">Red</label>
    </p>
    <p>
      <input name="group1" type="radio" id="test2"/>
      <label for="test2">Yellow</label>
    </p>
    <p>
      <input class="with-gap" name="group1" type="radio" id="test3" />
      <label for="test3">Green</label>
    </p>
    <p>
      <input name="group1" type="radio" id="test4" disabled="disabled"/>
      <label for="test4">Brown</label>
    </p>
    </div>
    </div>`
              }, {
                  id: 'checkbox',
                  label: 'Checkbox',
                  category: 'Form',
                  attributes: {
                      class: 'fa fa-check-square-o'
                  },
                  content: `<div class="row">
        <div class="input-field col s12">
    <p>
      <input type="checkbox" id="test5" />
      <label for="test5">Red</label>
    </p>
    <p>
      <input type="checkbox" id="test6" checked="checked" />
      <label for="test6">Yellow</label>
    </p>
    </div>
    </div>`
               }, {
                  id: 'map',
                  label: 'Map',
                  category: 'Extra',
                  attributes: {
                      class: 'fa fa-map-o'
                  },
                  content: {
                      type: 'map',
                      style: {
                          height: '350px'
                      }
                  },
                    }
              ,
              {
                  id: 'sidenav',
                  label: 'SideNav',
                  category: 'Extra',
                  content: `<ul id="slide-out" class="side-nav">
    <li><div class="user-view">
      <div class="background">
        <img src="https://randomuser.me/api/portraits/women/82.jpg">
      </div>
      <a href="#!user"><img class="circle" src="images/yuna.jpg"></a>
      <a href="#!name"><span class="white-text name">John Doe</span></a>
      <a href="#!email"><span class="white-text email">jdandturk@gmail.com</span></a>
    </div></li>
    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
    <li><a href="#!">Second Link</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Subheader</a></li>
    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
  </ul>
  <a href="#" data-activates="slide-out" class="btn-flat btn button-collapse white-text orange"><i class="material-icons">menu</i></a>
                      <script type="text/javascript">
                            $('.button-collapse').sideNav();
                        </script>`,
                  attributes: {
                      class: 'fa fa-indent'
                  }
                    },
              {
                  id: 'accor',
                  label: 'Accordian',
                  category: 'Extra',
                  attributes: {
                      class: 'fa fa-reorder'
                  },
                  content: `<ul class="collapsible" data-collapsible="accordion">
    <li>
      <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
  </ul>
<script type="text/javascript">
$('.collapsible').collapsible();
</script>`,
                    },
              {
                  id: 'tap',
                  label: 'Tap',
                  category: 'Extra',
                  attributes: {
                      class: 'fa fa-ellipsis-h'
                  },
                  content: `<div class="row">
    <div class="col s12">
      <ul class="tabs">
        <li class="tab col s3"><a href="#test1">Test 1</a></li>
        <li class="tab col s3"><a class="active" href="#test2">Test 2</a></li>
        <li class="tab col s3 disabled"><a href="#test3">Disabled Tab</a></li>
        <li class="tab col s3"><a href="#test4">Test 4</a></li>
      </ul>
    </div>
    <div id="test1" class="col s12">Test 1</div>
    <div id="test2" class="col s12">Test 2</div>
    <div id="test3" class="col s12">Test 3</div>
    <div id="test4" class="col s12">Test 4</div>
  </div>
<script type="text/javascript">
$('ul.tabs').tabs();
</script>`,
                    },
              {
                  id: 'card',
                  label: 'Card',
                  category: 'Section',
                  content: `<div class="row">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <img src="http://via.placeholder.com/250x250/BF00FF/ffffff/">
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>`,
                  attributes: {
                      class: 'fa fa-newspaper-o'
                  },
              },
              {
                  id: 'video',
                  label: 'Video',
                  category: 'Media',
                  attributes: {
                      class: 'fa fa-youtube-play'
                  },
                  content: {
                      type: 'video',
                      src: 'img/video2.webm',
                      style: {
                          height: '350px',
                          width: '615px',
                      }
                  },
                    }, {
                  id: 'h1p',
                  label: 'Text section',
                  category: 'Typography',
                  content: `<div>
              <h3>Insert title here</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </div>`,
                  attributes: {
                      class: 'fa fa-align-center'
                  }
                    }, {
                  id: 'quo',
                  label: 'Quote',
                  category: 'Typography',
                  content: '<blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</blockquote>',
                  attributes: {
                      class: 'fa fa-quote-right'
                  }
                    }
                ],
      },
      storageManager: {
          id: 'gjs-',
          type: 'local',
          autosave: 1,
          autoload: 1,
          stepsBeforeSave: 1,
          storeComponents: 1,
          storeStyles: 1,
          storeHtml: 1,
          storeCss: 1,
      },
      styleManager: {
          sectors: [{
                  name: 'General',
                  open: false,
                  buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']
                    }, {
                  name: 'Dimension',
                  open: false,
                  buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
                    }, {
                  name: 'Typography',
                  open: false,
                  buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow'],
                  properties: [{
                      property: 'text-align',
                      list: [{
                              value: 'left',
                              className: 'fa fa-align-left'
                                },
                          {
                              value: 'center',
                              className: 'fa fa-align-center'
                                },
                          {
                              value: 'right',
                              className: 'fa fa-align-right'
                                },
                          {
                              value: 'justify',
                              className: 'fa fa-align-justify'
                                }
                            ],
                        }]
                    }, {
                  name: 'Decorations',
                  open: false,
                  buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
                    }, {
                  name: 'Extra',
                  open: false,
                  buildProps: ['opacity', 'transition', 'perspective', 'transform'],
                  properties: [{
                      type: 'slider',
                      property: 'opacity',
                      defaults: 1,
                      step: 0.01,
                      max: 1,
                      min: 0,
                        }]
                    }, {
                  name: 'Flex',
                  open: false,
                  properties: [{
                      name: 'Flex Container',
                      property: 'display',
                      type: 'select',
                      defaults: 'block',
                      list: [{
                          value: 'block',
                          name: 'Disable',
                            }, {
                          value: 'flex',
                          name: 'Enable',
                            }],
                        }, {
                      name: 'Flex Parent',
                      property: 'label-parent-flex',
                        }, {
                      name: 'Direction',
                      property: 'flex-direction',
                      type: 'radio',
                      defaults: 'row',
                      list: [{
                          value: 'row',
                          name: 'Row',
                          className: 'icons-flex icon-dir-row',
                          title: 'Row',
                            }, {
                          value: 'row-reverse',
                          name: 'Row reverse',
                          className: 'icons-flex icon-dir-row-rev',
                          title: 'Row reverse',
                            }, {
                          value: 'column',
                          name: 'Column',
                          title: 'Column',
                          className: 'icons-flex icon-dir-col',
                            }, {
                          value: 'column-reverse',
                          name: 'Column reverse',
                          title: 'Column reverse',
                          className: 'icons-flex icon-dir-col-rev',
                            }],
                        }, {
                      name: 'Wrap',
                      property: 'flex-wrap',
                      type: 'radio',
                      defaults: 'nowrap',
                      list: [{
                          value: 'nowrap',
                          title: 'Single line',
                            }, {
                          value: 'wrap',
                          title: 'Multiple lines',
                            }, {
                          value: 'wrap-reverse',
                          title: 'Multiple lines reverse',
                            }],
                        }, {
                      name: 'Justify',
                      property: 'justify-content',
                      type: 'radio',
                      defaults: 'flex-start',
                      list: [{
                          value: 'flex-start',
                          className: 'icons-flex icon-just-start',
                          title: 'Start',
                            }, {
                          value: 'flex-end',
                          title: 'End',
                          className: 'icons-flex icon-just-end',
                            }, {
                          value: 'space-between',
                          title: 'Space between',
                          className: 'icons-flex icon-just-sp-bet',
                            }, {
                          value: 'space-around',
                          title: 'Space around',
                          className: 'icons-flex icon-just-sp-ar',
                            }, {
                          value: 'center',
                          title: 'Center',
                          className: 'icons-flex icon-just-sp-cent',
                            }],
                        }, {
                      name: 'Align',
                      property: 'align-items',
                      type: 'radio',
                      defaults: 'center',
                      list: [{
                          value: 'flex-start',
                          title: 'Start',
                          className: 'icons-flex icon-al-start',
                            }, {
                          value: 'flex-end',
                          title: 'End',
                          className: 'icons-flex icon-al-end',
                            }, {
                          value: 'stretch',
                          title: 'Stretch',
                          className: 'icons-flex icon-al-str',
                            }, {
                          value: 'center',
                          title: 'Center',
                          className: 'icons-flex icon-al-center',
                            }],
                        }, {
                      name: 'Flex Children',
                      property: 'label-parent-flex',
                        }, {
                      name: 'Order',
                      property: 'order',
                      type: 'integer',
                      defaults: 0,
                      min: 0
                        }, {
                      name: 'Flex',
                      property: 'flex',
                      type: 'composite',
                      properties: [{
                          name: 'Grow',
                          property: 'flex-grow',
                          type: 'integer',
                          defaults: 0,
                          min: 0
                            }, {
                          name: 'Shrink',
                          property: 'flex-shrink',
                          type: 'integer',
                          defaults: 0,
                          min: 0
                            }, {
                          name: 'Basis',
                          property: 'flex-basis',
                          type: 'integer',
                          units: ['px', '%', ''],
                          unit: '',
                          defaults: 'auto',
                            }],
                        }, {
                      name: 'Align',
                      property: 'align-self',
                      type: 'radio',
                      defaults: 'auto',
                      list: [{
                          value: 'auto',
                          name: 'Auto',
                            }, {
                          value: 'flex-start',
                          title: 'Start',
                          className: 'icons-flex icon-al-start',
                            }, {
                          value: 'flex-end',
                          title: 'End',
                          className: 'icons-flex icon-al-end',
                            }, {
                          value: 'stretch',
                          title: 'Stretch',
                          className: 'icons-flex icon-al-str',
                            }, {
                          value: 'center',
                          title: 'Center',
                          className: 'icons-flex icon-al-center',
                            }],
                        }]
                    }

                ],

      },
  });

  editor.setStyle(`.row{display:table;padding:10px;width:100%}#myForm .col:empty,.col:empty{display:table-cell;height:75px}#banner-gradient{background:#7abcff;background:-moz-linear-gradient(45deg,#7abcff 0,#60abf8 44%,#4096ee 100%);background:-webkit-linear-gradient(45deg,#7abcff 0,#60abf8 44%,#4096ee 100%);background:linear-gradient(45deg,#7abcff 0,#60abf8 44%,#4096ee 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#7abcff', endColorstr='#4096ee', GradientType=1)}.bg-none{background:0 0}#myForm .col:empty{position:relative}#myForm .col:empty:after{content:'Add form elements here';color:#888;position:absolute;left:10px;top:10px;display:block;width:400px}nav .brand-logo,nav ul a{color:#444}p{line-height:2rem}.button-collapse{color:#26a69a}.parallax-container{min-height:380px;line-height:0;height:auto;color:rgba(255,255,255,.9)}.parallax-container .section{width:100%}footer.gram-footer ul.collection>li.collection-header,footer.gram-footer ul.collection>li.collection-item{background:0 0;border:0}footer.gram-footer ul.collection{border:0}.input-field [type=checkbox]+label,.input-field [type=radio]:checked+label,.input-field [type=radio]:not(:checked)+label{pointer-events:auto}input:not([type]):focus:not([readonly]),input[type=date]:not(.browser-default):focus:not([readonly]),input[type=datetime-local]:not(.browser-default):focus:not([readonly]),input[type=datetime]:not(.browser-default):focus:not([readonly]),input[type=email]:not(.browser-default):focus:not([readonly]),input[type=number]:not(.browser-default):focus:not([readonly]),input[type=password]:not(.browser-default):focus:not([readonly]),input[type=search]:not(.browser-default):focus:not([readonly]),input[type=tel]:not(.browser-default):focus:not([readonly]),input[type=text]:not(.browser-default):focus:not([readonly]),input[type=time]:not(.browser-default):focus:not([readonly]),input[type=url]:not(.browser-default):focus:not([readonly]),textarea.materialize-textarea:focus:not([readonly]){border-bottom:1px solid orange;-webkit-box-shadow:0 1px 0 0 orange;-moz-box-shadow:0 1px 0 0 orange;box-shadow:0 1px 0 0 orange}#contact input#your-email,#contact textarea#your-message{color:#fff}@media only screen and (max-width:992px){.parallax-container .section{position:absolute;top:40%}#index-banner .section{top:10%}}@media only screen and (max-width:600px){#index-banner .section{top:0}}.icon-block{padding:0 15px}.icon-block .material-icons{font-size:inherit}footer.page-footer{margin:0}.parallax{position:static}`);


  var pnm = editor.Panels;
  pnm.addButton('options', [{
          id: 'undo',
          className: 'fa fa-undo icon-undo',
          command: function (editor, sender) {
              sender.set('active', 0);
              editor.UndoManager.undo(1);
          },
          attributes: {
              title: 'Undo (CTRL/CMD + Z)'
          }
            },
      {
          id: 'redo',
          className: 'fa fa-repeat icon-redo',
          command: function (editor, sender) {
              sender.set('active', 0);
              editor.UndoManager.redo(1);
          },
          attributes: {
              title: 'Redo (CTRL/CMD + SHIFT + Z)'
          }
            }, {
          id: 'clear-local',
          className: 'fa fa-close',
          command: function () {
              if (confirm('Reset to original?')) {
                  localStorage.clear();
                  location.reload();
              }
          },
          attributes: {
              title: 'Reset'
          }
            },
      {
          id: 'import',
          className: 'fa fa-edit',
          command: 'html-edit',
          attributes: {
              title: 'Import'
          }
        }, {
          id: 'clean-all',
          className: 'fa fa-trash icon-blank',
          command: function (editor, sender) {
              if (sender) sender.set('active', false);
              if (confirm('Are you sure to clean the canvas?')) {
                  editor.DomComponents.clear();
                  setTimeout(function () {
                      localStorage.clear();
                  }, 0);
              }
          },
          attributes: {
              title: 'Empty canvas'
          }
            },
      {
          id: 'open-github',
          className: 'fa fa-link',
          command: function (editor, sender) {
              sender.set('active', 0);
              window.open('https://github.com/ronaldaug/gramateria', '_blank');
          },
          attributes: {
              title: 'github'
          }
            }
        ]);


  // ---------------------
  // Import/Edit  
  // ---------------------
  var gra = {
      // append in container
      _a: function (appendName) {
          return container.appendChild(appendName);
      },
      // create elements
      _c: function (tagName) {
          return document.createElement(tagName);
      },
      // check extensions
      _e: function (fname) {
          var ext = /^.+\.([^.]+)$/.exec(fname);
          return ext == null ? "" : ext[1];
      },
      // select id
      _d: function (name, tag) {
          switch (tag) {
              case 'class':
                  return document.getElementsByClassName(name);
                  break;
              case 'id':
                  return document.getElementById(name);
                  break;
              default:
                  return document.getElementById(name);
          }
      }
  }

  var pmodel = gra._d("modelPopup", "class");
  var pfx = editor.getConfig().stylePrefix;
  var modal = editor.Modal;
  var cmdm = editor.Commands;
  var codeViewer = editor.CodeManager.getViewer('CodeMirror').clone();
  var pnm = editor.Panels;
  var container = gra._c("div");
  var fileform = gra._c("div");
  var btnEdit = gra._c("button");
  var exportTxt = gra._c("button");
  var loadTxt = gra._c("button");
  var fileLoader = gra._c("form");
  var anchor = gra._c("a");

  codeViewer.set({
      codeName: 'htmlmixed',
      readOnly: 0,
      theme: 'hopscotch',
      autoBeautify: true,
      autoCloseTags: true,
      autoCloseBrackets: true,
      lineWrapping: true,
      styleActiveLine: true,
      smartIndent: true,
      indentWithTabs: true
  });

  btnEdit.innerHTML = '<i class="fa fa-upload"></i> Import';
  exportTxt.innerHTML = '<i class="fa fa-download"></i> Save as file';
  loadTxt.innerHTML = '<i class="fa fa-upload"></i> Load file';
  fileLoader.innerHTML = '<br><hr color="#ddd"><br><input type="file" id="fileToLoad"><br><br>';
  fileform.innerHTML = '<input id="file_name" value="" type="text" placeholder="Enter file Name" name="filename"><button class="exportgram" onclick="exportgramfile()">Save</button>';

  fileform.className = 'modelPopup';
  fileLoader.className = pfx + 'import-file';
  btnEdit.className = pfx + 'btn-prim ' + pfx + 'btn-import';
  exportTxt.className = pfx + 'btn-prim ' + pfx + 'btn-export';
  loadTxt.className = pfx + 'btn-prim ' + pfx + 'btn-load';


  // import button inside import editor
  btnEdit.onclick = function () {
      var code = codeViewer.editor.getValue();
      editor.DomComponents.getWrapper().set('content', '');
      editor.setComponents(code.trim());
      modal.close();
  };

  // onclick load file button inside import editor
  loadTxt.onclick = function (e) {
      e.preventDefault();
      var fileToLoad = document.getElementById("fileToLoad").files[0];
      var fType = gra._e(fileToLoad['name']);
      if (fileToLoad === undefined) {
          alert('Please select a file');
          return;
      }
      if (fType === 'gram' || fType === 'txt') {
          var reader = new FileReader();
          reader.onload = function (e) {
              var fileData = e.target.result;
              var viewer = codeViewer.editor;
              modal.setTitle('Import/Edit');
              if (!viewer) {
                  var txtarea = document.createElement('textarea');
                  gra._a(txtarea);
                  gra._a(btnEdit);
                  gra._a(fileform);
                  gra._a(fileLoader);
                  gra._a(loadTxt);
                  gra._a(exportTxt);
                  codeViewer.init(txtarea);
                  viewer = codeViewer.editor;
              }
              modal.setContent('');
              modal.setContent(container);
              codeViewer.setContent(fileData);
          }
          reader.readAsText(fileToLoad);
      } else {
          alert('You can only import .gram or .txt extension');
      }
  }


  // onclick save as button inside import editor
  exportTxt.onclick = function () {
      pmodel[0].className += " " + 'showup';
  }

  // export file as .gram extension 
  function exportgramfile() {
      var fileName = gra._d("file_name", "id").value;
      if (fileName !== undefined && fileName !== '') {
          var InnerHtml = editor.getHtml();
          var Css = editor.getCss();
          var text = InnerHtml + "<style>" + Css + '</style>';
          var blob = new Blob([text], {
              type: "text/plain"
          });
          anchor.download = fileName + ".gram";
          anchor.href = window.URL.createObjectURL(blob);
          anchor.target = "_blank";
          anchor.style.display = "none"; // just to be safe!
          document.body.appendChild(anchor);
          anchor.click();
          document.body.removeChild(anchor);
          pmodel[0].className = "modelPopup";
      } else {
          alert('Please type a file name');
          return;
      }
  }

  // import nav button click event 
  cmdm.add('html-edit', {
      run: function importArea(editor, sender) {
          sender && sender.set('active', 0);
          var viewer = codeViewer.editor;
          modal.setTitle('Import/Edit');
          if (!viewer) {
              var txtarea = gra._c('textarea');
              gra._a(txtarea);
              gra._a(btnEdit);
              gra._a(fileform);
              gra._a(fileLoader);
              gra._a(loadTxt);
              gra._a(exportTxt);
              codeViewer.init(txtarea);
              viewer = codeViewer.editor;
          }
          var InnerHtml = editor.getHtml();
          var Css = editor.getCss();
          modal.setContent('');
          modal.setContent(container);
          codeViewer.setContent(InnerHtml + "<style>" + Css + '</style>');
          modal.open();
          viewer.refresh();
      }
  });

  editor.BlockManager.getCategories().each(ctg => ctg.set('open', false))
  var bm = editor.BlockManager;
  //        bm.add('link-block', {
  //          label: 'Link Block',
  //          attributes: {class:'fa fa-link'},
  //          category: 'Basic',
  //          content: {
  //            type:'link',
  //            editable: false,
  //            droppable: true,
  //            style:{
  //              display: 'inline-block',
  //              padding: '5px',
  //              'min-height': '50px',
  //              'min-width': '50px'
  //            }
  //          },
  //        });

  var domc = editor.DomComponents;
  var defaultType = domc.getType('default');
  var defaultModel = defaultType.model;
  var defaultView = defaultType.view;

  //          model: defaultModel.extend({
  //            defaults: Object.assign({}, defaultModel.prototype.defaults, {
  //              traits: [{
  //                name: 'title',
  //                label: 'Título',
  //                placeholder: 'Insira um texto aqui'
  //              }]
  //            }),
  //          }),
  //        });


  editor.on('storage:load', function (e) {
      console.log('LOAD ', e);
  })
  editor.on('storage:store', function (e) {
      console.log('STORE ', e);
  })



  editor.on('styleManager:change:text-shadow', function (view) {
      var model = view.model;
      let targetValue = view.getTargetValue({
          ignoreDefault: 1
      });
      let computedValue = view.getComputedValue();
      let defaultValue = view.model.getDefaultValue();
      //console.log('Style of ', model.get('property'), 'Target: ', targetValue, 'Computed:', computedValue, 'Default:', defaultValue);
  });

  editor.render();
