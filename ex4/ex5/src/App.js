//import logo from './logo.svg';
import './App.css';
import CarDetails from './Component/CarDetails';
function App() {
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
    { id: 2, brand: "KIA", color: "Branco", km: 200000 },
    { id: 3, brand: "Renault", color: "Azul", km: 32000 },
  ];
  return (
    <div className="App">
      <h1>isso</h1>
      {cars.map((car) => (
      <CarDetails
        key={car.id}
        brand={car.brand}
        color={car.color}
        km={car.km}
      />
    ))}
    </div>
    
  );
}

export default App;
