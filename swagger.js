const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/routes/router.ts']

const doc = {
  info: {
    title: 'Ask suite test API',
    description: 'Description'
  },
  host: 'localhost:8080',
  definitions: {
    Rooms: [{
      name: "STUDIO CASAL",
      description: "Apartamentos localizados no prédio principal do Resort, próximos a recepção e a área de convivência, com vista para área de estacionamento não possuem varanda. Acomoda até 1 adulto e 1 criança ou 2 adultos",
      price: "R$ 1.092,00",
      image: "https://letsimage.s3.amazonaws.com/letsbook/193/quartos/30/fotoprincipal.jpg"
    }],
    SearchRoom: {
      $checkin: '2024-06-10',
      $checkout: '2024-06-15',
    }
  }
};


swaggerAutogen(outputFile, endpointsFiles, doc)
