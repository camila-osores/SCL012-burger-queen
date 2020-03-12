import React ,{useState} from 'react';

const Breakfast = () => {

    const [cuenta, editarCuenta] = useState([]);

    function agregar(e){
        // console.log(e.target.value)
        editarCuenta([...cuenta , {
            id: cuenta.length,
            nombre:e.target.name,
            valor:e.target.value}])

        console.log(cuenta)
        
    }
 
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <h1 className=""><p className="display-4 mt-4 titles" >Desayuno</p></h1>
                        
                        <table class="table">
                            <thead class="thead-light">
                            
                                <tr>
                                    <th scope="col"> Café americano $500 </th>
                                    <th scope="col"><button onClick={agregar} className="btn agregar" name='Café americano' value="500">AGREGAR</button></th>
                                </tr>

                                <tr>
                                    <th scope="col">Café con leche $700</th>
                                    <th scope="col"><button onClick={agregar} className="btn agregar" name='Café con leche' value="700"> AGREGAR</button></th>
                                </tr>

                                <tr>
                                    <th scope="col">Sandwich de jamón y queso $1.000</th>
                                    <th scope="col"><button onClick={agregar} className="btn agregar" name='Sandwich de jamón y queso' value="1000"> AGREGAR</button></th>
                                </tr>

                                <tr>
                                    <th scope="col">Jugo de frutas natural $750</th>
                                    <th scope="col"><button onClick={agregar} className="btn agregar" name='Jugo de frutas natural' value="750"> AGREGAR</button></th>
                                </tr>
                        </thead>
                    </table>
                </div>

                

                <div className="col-sm-12 col-md-6 col-lg-4">
                    <h1 className=""><p className="display-4 mt-4 titles">Almuerzo</p></h1>
                        
                        <table class="table">
                            <thead class="thead-light">

                                <tr>
                                    <th scope="col"><h5>Menú</h5></th><th scope="col"></th>
                                </tr>

                                <tr>
                                    <th scope="col">Hamburguesa simple res $1.000</th>
                                    <th scope="col"><button onClick={agregar} className="btn agregar" name='Hamburguesa simple res' value="$1.000">AGREGAR</button></th>
                                </tr>

                                <tr>
                                    <th scope="col">Hamburguesa simple pollo $1.000</th>
                                    <th scope="col"><button onClick={agregar} className="btn agregar" name='Hamburguesa simple pollo' value="$1.000">AGREGAR</button></th>
                                </tr>

                                <tr>
                                    <th scope="col">Hamburguesa simple veg $1.000</th>
                                    <th scope="col"><button onClick={agregar} className="btn agregar" name='Hamburguesa simple vegetariana' value="$1.000">AGREGAR</button></th>
                                </tr>

                                <tr>
                                    <th scope="col">Hamburguesa doble res $1.500</th>
                                    <th scope="col"><button onClick={agregar} className="btn agregar" name='Hamburguesa doble res' value="$1.500">AGREGAR</button></th>
                                </tr>

                                <tr>
                                    <th scope="col">Hamburguesa doble pollo $1.500</th>
                                    <th scope="col"><button onClick={agregar} className="btn agregar" name='Hamburguesa doble pollo' value="$1.500">AGREGAR</button></th>
                                </tr>

                                <tr>
                                    <th scope="col">Hamburguesa doble veg $1.500</th>
                                    <th scope="col"><button onClick={agregar} className="btn agregar" name='Hamburguesa doble vegetariana' value="$1.500">AGREGAR</button></th>
                                </tr>

                                <tr>
                                    <th scope="col">Con agregado de huevo $100</th>
                                    <th scope="col"><button onClick={agregar} className="btn agregar" name='Agregado de huevo' value="$100">AGREGAR</button></th>
                                </tr>

                                <tr>
                                    <th scope="col">Con agregado de queso $100</th>
                                    <th scope="col"><button onClick={agregar} className="btn agregar" name='Agregado de queso' value="$100">AGREGAR</button></th>
                                </tr>

                                <th scope="col"><h5>Acompañamiento</h5></th><th scope="col"></th>

                                <tr>
                                    <th scope="col">Papas fritas $500</th>
                                    <th scope="col"><button onClick={agregar} className="btn agregar" name='Papas fritas' value="$500">AGREGAR</button></th>
                                </tr>

                                <tr>
                                    <th scope="col">Aros de cebolla $500</th>
                                    <th scope="col"><button onClick={agregar} className="btn agregar" name='Aros de cebolla' value="500">AGREGAR</button></th>
                                </tr>

                                <tr>
                                    <th scope="col"><h5>Para tomar</h5></th><th scope="col"></th>
                                </tr>

                                <tr>
                                    <th scope="col">Agua 500 ml $500</th>
                                    <th scope="col"><button onClick={agregar} className="btn agregar" name='Agua 500 ml' value="$500">AGREGAR</button></th>
                                </tr>

                                <tr>
                                    <th scope="col">Agua 750 ml $700</th>
                                    <th scope="col"><button onClick={agregar} className="btn agregar" name='Agua 750 ml' value="$700">AGREGAR</button></th>
                                </tr>

                                <tr>
                                    <th scope="col">Bebida 500 ml $700</th>
                                    <th scope="col"><button onClick={agregar} className="btn agregar" name='Bebida 500 ml' value="$700">AGREGAR</button></th>
                                </tr>

                                <tr>
                                    <th scope="col">Bebida 750 ml $1.000</th>
                                    <th scope="col"><button onClick={agregar} className="btn agregar" name='Bebida 750 ml' value="$1.000">AGREGAR</button></th>
                                </tr>

                            </thead>
                        </table>

                </div>

                <div className="col-sm-12 col-md-6 col-lg-4 orden">
                <h1 className=""><p className="display-4 mt-4 titles">Orden</p></h1>

                   {cuenta.map(item=>(
                       <li key={item.id}>{item.nombre} : {item.valor}</li>
                   ))}
                   
                </div>

            </div>

        </div>
        );
}
 
export default Breakfast;