## Parcial computacion orientada a servicios

## Restauración de la Base de Datos
Para restaurar la base de datos desde el archivo de respaldo ubicado en la carpeta db, sigue estos pasos:

Abre tu cliente de MySQL.

Crea una nueva base de datos con el nombre newt si aún no existe:

CREATE DATABASE IF NOT EXISTS newt;

Importa el archivo de respaldo backupDB.sql ubicado en la carpeta db:

SOURCE "RUTA DEL BACKUP";

## Instalación
Clona el repositorio 

Accede al directorio del proyecto:

cd crud-computacion-orientada-a-servicios

Instala las dependencias:

npm install

Una vez que el proyecto esté clonado y las dependencias estén instaladas, ejecuta el servidor con el siguiente comando:

docker compose up --build

Sin docker sería

npm run start

Abre tu navegador web y ve a la siguiente URL para acceder al formulario de registro:

http://localhost:3001/register

Completa el formulario de registro para crear un usuario.

Una vez registrado, podrás acceder al inicio.

Puedes cerrar sesión en cualquier momento y no podrás acceder al inicio hasta que inicies sesión nuevamente.

## API
Puedes acceder a la API de usuarios utilizando la siguiente ruta:

http://localhost:3001/api/db/users

Y para la API de costumers:

http://localhost:3001/api/db/costumers

//Colección de postman en la carpeta postman junto al entorno (incompleto)
