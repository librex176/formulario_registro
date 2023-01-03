import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="container mt-3 " id="contenedor">
      <div className='row d-flex justify-content-center '>
        <div className='col-md-8 '>
          <form>
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" 
          aria-describedby="emailHelp" placeholder='tu_correo@mail.com'/>
          <label for="exampleInputEmail1" class="form-label">Cuentanos mas acerca de lo que necesitas:</label>
          <textarea class="form-control" id="exampleInputEmail1" 
          aria-describedby="emailHelp"/>
          <input type="submit" value="Registrarse" id='btn' className='btn btn-info mb-4'/>
          </form>
        </div>
        
      </div>
    </div>
  );
}

export default App;
