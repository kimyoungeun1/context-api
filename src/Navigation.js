import'./App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
   return(
   <div className="App">
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
   <div class="container-fluid">
    <a class="navbar-brand" href="#!">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="http://localhost:3000/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#!">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#!">Pricing</a>
        </li>
        <li class="nav-item">
          <a href="#!" class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
   );
}

export default App;