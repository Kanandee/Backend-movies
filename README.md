# Proyecto Backend Movies
<h3>La base de datos se conecta a través de Docker con MongoDB. Toda la información de las películas ha sido insertada previamente. Utilizaremos una variable de entorno .env </h3>

```
mongodb://localhost:27017/movies
```

## Instalación
<h3>Para poder utilizar el proyecto tendrás que instalar Node.js y clonar el repositorio de GitHub con este comando:</h3>

```
$ git clone https://github.com/Kanandee/Backend-movies.git
```



<h3>Para poder instalar las dependencias utilizaremos:</h3>

```
npm install
```

<h3>Para arrancar el servidor:</h3>

```
npm run dev
```

## End Points
### Index

| Get  | Ruta | Descripción | Permisos |
| ------------- | ------------- | ------------- | ------------- |
| Get | / | Página de bienvenida | Público

### Users

| Get  | Ruta | Descripción | Permisos |
| ------------- | ------------- | ------------- | ------------- |
| Get | /users | Muestra todos los usuarios registrados | Administrador
| Get | /users/:id | Perfil del usuario | Token
| Get | /users/:id/rent | Alquila todas las películas del carrito para ese usuario | Token
| Get | /users/:id/rent/:movie | Alquila sólo esa película para ese usuario | Token
| Get | /users/:id/delete/:movie | Elimina el alquiler de esa película para ese usuario | Token
| Get | /users/:id/delete | Elimina el usuario | Administrador

### Movies

| Get  | Ruta | Descripción | Permisos |
| ------------- | ------------- | ------------- | ------------- |
| Get | /movies | Muestra todas las películas disponibles | Token
| Get | /movies/:id | Muestra la información de esa película | Token


### Authentication

| Get  | Ruta | Descripción | Permisos |
| ------------- | ------------- | ------------- | ------------- |
| Get | /auth/login | Comprueba las credenciales y genera un token de sesión | Público
| Get | /auth/register | Almacena la información del nuevo usuario | Público

## Creado con

* JavaScript - Lenguaje principal
* Node.js - Entorno de ejecución de JavaScript
* Express - Modulo
* Mongoose - ORM
* MongoDB - Lenguaje
