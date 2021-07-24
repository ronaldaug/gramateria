import sectionBlocks from './sectionBlocks';

const bootstrapBasicBlocks = [
  {
      id: 'nav',
      label: 'nav',
      category: 'Components',
      attributes: {
          class: 'gly-one-column'
      },
      content: `<nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button data-gjs-droppable="false" data-gjs-draggable="false" data-gjs-editable="false" data-gjs-removable="false" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" data-gjs-draggable="false" data-gjs-editable="false" data-gjs-removable="false" ></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown link
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>`
  },
  {
      id: 'modal',
      label: 'modal',
      category: 'Components',
      attributes: {
          class: 'gly-three-columns'
      },
      content: `<!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Click
      </button>
      
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
          </div>
          </div>
      </div>
      </div>`,
  },
  // These are basic blocks
  {
      id: 'b1',
      label: '1 Block',
      category: 'Grid',
      attributes: {
          class: 'gly-one-column'
      },
      content: `<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">
<div class="col-md-12" data-gjs-draggable=".row" data-gjs-custom-name="col12"></div>
</div><style>.col-md-12:empty{display:table-cell;height:75px}</style>`
  },
  {
      id: 'b2',
      label: '2 Blocks',
      category: 'Grid',
      attributes: {
          class: 'gly-two-columns'
      },
      content: `<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">
<div class="col-md-6" data-gjs-draggable=".row" data-gjs-custom-name="m6"></div>
<div class="col-md-6" data-gjs-draggable=".row" data-gjs-custom-name="m6"></div>
</div><style>.col-md-6:empty{display:table-cell;height:75px}</style>`
  },
  {
      id: 'b3',
      label: '3 Blocks',
      category: 'Grid',
      attributes: {
          class: 'gly-three-columns'
      },
      content: '<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">'
          + '<div class="col-md-4 col-sm-6" data-gjs-draggable=".row" data-gjs-custom-name="m4"></div>'
          + '<div class="col-md-4 col-sm-6" data-gjs-draggable=".row" data-gjs-custom-name="m4"></div>'
          + '<div class="col-md-4 col-sm-6" data-gjs-draggable=".row" data-gjs-custom-name="m4"></div>'
          + '</div><style>.col-md-4:empty{display:table-cell;height:75px}</style>',
  },
  {
      id: 'b5',
      label: '4/8 Block',
      category: 'Grid',
      attributes: {
          class: 'gly-four-eight'
      },
      content: '<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">'
          + '<div class="col-md-4" data-gjs-draggable=".row" data-gjs-custom-name="m4"></div>'
          + '<div class="col-md-8" data-gjs-draggable=".row" data-gjs-custom-name="m8"></div>'
          + '</div><style>.col-md-4:empty,.col-md-8:empty{display:table-cell;height:75px}</style>',
  },
  {
      id: 'b6',
      label: '5/7 Block',
      category: 'Grid',
      attributes: {
          class: 'gly-four-eight'
      },
      content: '<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">'
          + '<div class="col m5" data-gjs-draggable=".row" data-gjs-custom-name="m5"></div>'
          + '<div class="col m7" data-gjs-draggable=".row" data-gjs-custom-name="m7"></div>'
          + '</div><style>.col:empty{display:table-cell;height:75px}</style>',
  },
  {
      id: 'b7',
      label: '3/9 Block',
      category: 'Grid',
      attributes: {
          class: 'gly-three-nine'
      },
      content: '<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">'
          + '<div class="col-md-3" data-gjs-draggable=".row" data-gjs-custom-name="m3"></div>'
          + '<div class="col-md-9" data-gjs-draggable=".row" data-gjs-custom-name="m9"></div>'
          + '</div><style>.col-md-3:empty,.col-md-9:empty{display:table-cell;height:75px}</style>',
  },
  {
      id: 'text',
      label: 'Text',
      attributes: {
          class: 'fa fa-text-width'
      },
      category: 'Basic',
      content: { type: "text", content: "Insert your text here", style: { padding: "10px" } }
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
      content: `<ul class="list-group">
<li class="list-group-item">List One</li>
<li class="list-group-item">List Two</li>
<li class="list-group-item">List Three</li>
<li class="list-group-item">List Four</li>
</ul>`,
  },
  {
      id: 'list2',
      label: 'List Two',
      category: 'Basic',
      attributes: {
          class: 'fa fa-bars'
      },
      content: `<div class="list-group">
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small>Donec id elit non mi porta.</small>
      </a>
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small class="text-muted">Donec id elit non mi porta.</small>
      </a>
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small class="text-muted">Donec id elit non mi porta.</small>
      </a>
  </div>`
  },
  {
      id: 'table',
      label: 'Table',
      category: 'Basic',
      attributes: {
          class: 'fa fa-table'
      },
      content: `<table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>`
  },
  {
      id: 'res',
      label: 'respon image',
      category: 'Media',
      content: '<img src="http://via.placeholder.com/250x250/0174DF/ffffff/" class="img-fluid">',
      attributes: {
          class: 'fa fa-image'
      }
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
      content: '<div>'
          + '<h3>Insert title here</h3>'
          + '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>'
          + '</div>',
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
]

const blocks = [...sectionBlocks,...bootstrapBasicBlocks]

const blocksObj = {
    blocks
}



export default blocksObj;