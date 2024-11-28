# Aplicativo FullStack

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes software en tu sistema:

1. **Node.js** y **npm**: Puedes descargarlos e instalarlos desde [nodejs.org](https://nodejs.org/).
2. **MongoDB**: Asegúrate de tener MongoDB instalado y corriendo en tu máquina. Puedes seguir las instrucciones de instalación en la [documentación oficial de MongoDB](https://docs.mongodb.com/manual/installation/).

## Pasos para Configurar el Proyecto

3. CLONAR REPOSITORIO

bash o git clone 

-https://github.com/Jousgc1/AplicativoFullStack.git


## Cambia al directorio del proyecto clonado:

cd AplicativoFullStack

4. Instalar Dependencias del Backend
bash
cd backend
npm install

(Si encuentras conflictos de dependencias, intenta)
bash
"npm install --legacy-peer-deps"

4.1 Instalar Dependencias del Frontend
bash
cd ../frontend
npm install
Si encuentras conflictos de dependencias, intenta:
bash
npm install " npm install --legacy-peer-deps "


5. Configurar Variables de Entorno
Crea un archivo .env en el directorio backend con la configuración necesaria:

PORT=3100
MONGODB_URI=mongodb://<usuario>:<contraseña>@<host>:<puerto>/<nombreBD> o  mongodb://localhost:27017/todoapp

Iniciar MongoDB
Asegúrate de que MongoDB esté corriendo en tu máquina. Si usas el servidor local, puedes iniciarlo con: bash

6. INICIAR EL BACKEND
Cambia al directorio backend y ejecuta el servidor:
cd backend
npm start
Esto iniciará el servidor backend en "http://localhost:3150/api/tasks"

7. INICIAR EL FRONTEND
Cambia al directorio todo-app y ejecuta la aplicación de frontend:
bash
cd ../todo-app
npm run dev
Esto iniciará la aplicación frontend en "(http://localhost:3000/)".

iNTERACTUANDO  CON MongoDB
Usar MongoDB Compass
MongoDB Compass es una interfaz gráfica para MongoDB que te permite ver y manipular tus datos fácilmente. Puedes descargarlo desde MongoDB Compass.
Una vez instalado, abre MongoDB Compass y conéctate a tu base de datos usando mongodb://localhost:27017/todoapp.

Consultas Básicas
Dentro de MongoDB Compass, puedes realizar operaciones básicas como insertar, actualizar y eliminar documentos.
También puedes escribir consultas en el lenguaje de consulta de MongoDB para filtrar y buscar datos específicos.

ESCTRUCUTURA DEL PROYECTO :
AplicativoFullStack/
├── backend/              # Directorio del servidor backend
│   ├── models/           # Modelos de la base de datos
│   ├── routes/           # Rutas de la API
│   ├── graphql/          # Esquema y resolvers de GraphQL
│   ├── server.js         # Archivo principal del servidor
│   └── .env              # Variables de entorno
├── todo-app/             # Directorio de la aplicación frontend
│   ├── components/       # Componentes Vue.js
│   ├── pages/            # Páginas de Nuxt.js
│   ├── nuxt.config.js    # Configuración de Nuxt.js
│   └── package.json      # Dependencias y scripts
└── README.md             # Documentación del proyecto

RECURSOS UTULIZADOS

-Documentación Oficial de Node.jsy NPM: nodejs.org

-Documentación Oficial de MongoDB: docs.mongodb.com

-Documentación Oficial de Nuxt.js: nuxtjs.org

-Documentación Oficial de Apollo: apollographql.com/docs

