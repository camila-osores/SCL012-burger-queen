import React from 'react';

const Breakfast = () => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h1 className="desayuno">Desayuno</h1>
                        <button class="breakfast_menu" id="breakfast_menu">Café americano $500</button> <br></br>
                        <button class="breakfast_menu" id="breakfast_menu">Café con leche $700</button>
                        <button class="breakfast_menu" id="breakfast_menu">Sandwich de jamón y queso $1.000</button>
                        <button class="breakfast_menu" id="breakfast_menu">Jugo de frutas natural $700</button>
                </div>

                <div className="col-4">
                    <h1 className="almuerzo">Almuerzo</h1>
                        <h5>Menú</h5>

                        <button class="lunch_menu" id="lunch_menu">Hamburguesa simple res $1.000</button>
                        <button class="lunch_menu" id="lunch_menu">Hamburguesa simple pollo $1.000</button>
                        <button class="lunch_menu" id="lunch_menu">Hamburguesa simple vegetariana $1.000</button>
                        <button class="lunch_menu" id="lunch_menu">Hamburguesa doble res $1.500</button>
                        <button class="lunch_menu" id="lunch_menu">Hamburguesa doble pollo $1.500</button>
                        <button class="lunch_menu" id="lunch_menu">Hamburguesa doble vegetariana $1.500</button>
                        <button class="lunch_menu" id="lunch_menu">Huevo $100</button>
                        <button class="lunch_menu" id="lunch_menu">Queso $100</button>
                                               
                        <h5>Acompañamiento</h5>

                        <button class="accompaniment" id="accompaniment">Papas fritas $500</button>
                        <button class="accompaniment" id="accompaniment">Aros de cebolla $500</button>

                        <h5>Bebestibles</h5>

                        <button class="drink" id="drink">Agua 500 ml $500</button>
                        <button class="drink" id="drink">Agua 750 ml $700</button>
                        <button class="drink" id="drink">Bebida 500 ml $700</button>
                        <button class="drink" id="drink">Bebida 750 ml $1.000</button>

                </div>

                <div className="col-4 orden">
                    <h1 className="order">Orden</h1>
                       
                </div>

            </div>

        </div>
        );
}
 
export default Breakfast;