const mongoose = require("mongoose");
const Car = require("../../api/cars/cars.model");
require("dotenv").config();
const cars = [
  {
    name: "Ferrari 458",
    image: "",
    color: "rojo",
    year: 2009,
    description:"El Ferrari 458 Italia es un automóvil superdeportivo de 2 puertas biplaza,diseñado por Donato Coco en colaboración con Pininfarina",
  },
  {
    name: "Ford Fairlane",
    image: "",
    color: "rojo y blanco",
    year: 1966,
    description:"automóvil fabricado en Argentina por la Ford Motor Company el diseño del auto, se basaba en un estilo sobrio y señorial,contando con 5,10 m de largo y 1,90 de ancho",
  },
  {
    name: "Nissan Skyline GTR-r34",
    image: "",
    color: "azul",
    year: 1988,
    description:"El Nissan Skyline GT-R R34 nació en 1998  y es uno de los más recordados por su participación en varias películas de renombre",
  },
  {
    name: "Plymouth Superbird",
    image: "",
    color: "amarillo",
    year: 1969,
    description:"es una versión muy modificada y de corta duración del Plymouth Road Runner,desarrollado específicamente para las carreras de NASCAR",
  },
  {
    name: "Ford shelby gt500",
    image: "",
    color: "amarillo",
    year: 2007,
    description:"El Mustang Shelby es una de las leyendas automovilísticas más arraigadas en el gusto de los entusiastas de los autos deportivos,En 2009 el Super Snake (1967) de Carroll Shelby tuvo una actualización para el GT500. Este modelo llegó a tener 605 Caballos de Fuerza,además de algunas modificaciones de rendimiento y estética.",
  },
  
];

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    const allCars = await Car.find().lean();

    if (!allCars.length) {
      console.log("[seed]: No estoy encontrando los coches ... ");
    } else {
      console.log(`[seed]: Encontrados ${allCars.length} coches.`);
      await Car.collection.drop();
      console.log("[seed]: Colección HotWheels eliminada correctamente");
    }
  })
  .catch((error) => console.log("[seed]: Error eliminando la colección -->", error))
  .then(async () => {
    await Car.insertMany(cars);
    console.log("[seed]: Nuevos coches añadidas con éxito");
  })
  .catch((error) => console.log("[seed]: Error añadiendo los coches", error))
  .finally(() => mongoose.disconnect());
