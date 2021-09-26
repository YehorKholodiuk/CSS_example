import logo from './logo.svg';
import './App.css';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css'

const tasks=[{
  id:1,
  name:'Learn JS',
  status:'todo',
},
  {
    id:1,
    name:'Learn React',
    status:'progress',
  },
  {
    id:1,
    name:'Learn CSS',
    status:'review',
  }]


function App() {




  return (
    <div className="container">
      <h1>Hello Bootstrap</h1>
      <div className="row">

        <div className='col-md-3 col-sm-6'>
          <h3>To Do</h3>
          <div className='border border-secondary p-1'>
            {
              tasks.map(task=>(<div className="card mb-1" key={task.id}>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              ))
            }


          </div>
        </div>

        <div className='col-md-3 col-sm-6 bg-danger'>
          <h3>Progress</h3>
        </div>

        <div className='col-md-3 col-sm-6'>
          <h3>Review</h3>
        </div>


        <div className='col-md-3 col-sm-6'>
          <h3>Done</h3>
        </div>


      </div>
    </div>
  );
}

export default App;
