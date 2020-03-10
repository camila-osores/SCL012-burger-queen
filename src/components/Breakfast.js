import React from 'react';

const Breakfast = () => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h1 className="">Desayuno</h1>
                        <div><button>Café americano $500</button></div>
                        <div><button>Café con leche $700</button></div>
                        <div><button>Sandwich de jamón y queso $1.000</button></div>
                        <div><button>Jugo de frutas natural $700</button></div>
                </div>

                <div className="col-4">
                    <h1 className="">Almuerzo</h1>
                        <h5>Menú</h5>
                        <div><button>Hamburguesa simple res $1.000</button></div>
                        <div><button>Hamburguesa simple pollo $1.000</button></div>
                        <div><button>Hamburguesa simple vegetariana $1.000</button></div>
                        <div><button>Hamburguesa doble res $1.500</button></div>
                        <div><button>Hamburguesa doble pollo $1.500</button></div>
                        <div><button>Hamburguesa doble vegetariana $1.500</button></div>
                        <div><button>Con agregado de huevo $100</button></div>
                        <div><button>Con agregado de queso $100</button></div>
                        <h5>Acompañamiento</h5>
                        <div><button>Papas fritas $500</button></div>
                        <div><button>Aros de cebolla $500</button></div>
                        <h5>Para tomar</h5>
                        <div><button>Agua 500 ml $500</button></div>
                        <div><button>Agua 750 ml $700</button></div>
                        <div><button>Bebida 500 ml $700</button></div>
                        <div><button>Bebida 750 ml $1.000</button></div>
                </div>

                <div className="col-4 orden">
                    <h1 className="">Orden</h1>
                       
                </div>

            </div>

        </div>
        );
}
 
export default Breakfast;