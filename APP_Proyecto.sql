CREATE DATABASE Turismo
USE    Turismo
 
 CREATE TABLE Rol(
 idRol INT AUTO_INCREMENT,
 nombreRol VARCHAR(255) NOT NULL,
 descripcion VARCHAR(255) NOT NULL,
 PRIMARY KEY (idRol)
 );

CREATE TABLE Usuario(
idUsuario INT AUTO_INCREMENT,
nombre VARCHAR(255) NOT NULL,
apellido VARCHAR(255) NOT NULL,
correo VARCHAR(255) NOT NULL,
contrasena VARCHAR(255) NOT NULL,
telefono VARCHAR(255) NOT NULL,
idRol INT NOT NULL,
PRIMARY KEY (idUsuario),
FOREIGN KEY (idRol) REFERENCES Rol(idRol)
);
CREATE TABLE Departamento(
idDepartamento INT AUTO_INCREMENT,
nombre VARCHAR(255) NOT NULL,
descripcion VARCHAR(255) NOT NULL,
PRIMARY KEY(idDepartamento)
);

CREATE TABLE Municipio(
idMunicipio INT AUTO_INCREMENT,
nombre VARCHAR (255) NOT NULL,
descripcion VARCHAR(255) NOT NULL,
idDepartamento INT NOT NULL,
PRIMARY KEY (idMunicipio),
FOREIGN KEY(idDepartamento) REFERENCES Departamento(idDepartamento)

);
CREATE TABLE Hotel(
idHotel INT AUTO_INCREMENT,
nombre VARCHAR(255) NOT NULL,
descripcion VARCHAR(255) NOT NULL,
precio VARCHAR(255) NOT NULL,
idMunicipio INT NOT NULL,
PRIMARY KEY(idHotel),
FOREIGN KEY(idMunicipio) REFERENCES Municipio(idMunicipio)
);
CREATE TABLE Comentario(
idComentario INT AUTO_INCREMENT,
comentario VARCHAR (255) NOT NULL,
idUsuario INT NOT NULL,
PRIMARY KEY (idComentario),
FOREIGN KEY(idUsuario) REFERENCES Usuario(idUsuario)
);

CREATE TABLE Lugar(
idLugar INT AUTO_INCREMENT,
nombre VARCHAR(255) NOT NULL,
descripcion VARCHAR(255) NOT NULL,
idMunicipio INT NOT NULL,
idComentario INT NOT NULL,
PRIMARY KEY (idLugar),
FOREIGN KEY(idMunicipio) REFERENCES Municipio(idMunicipio),
FOREIGN KEY(idComentario) REFERENCES Comentario(idComentario)
);

CREATE TABLE Reserva(
idReserva INT AUTO_INCREMENT,
fecha VARCHAR(255) NOT NULL,
idUsuario INT NOT NULL,
idHotel INT NOT NULL,
PRIMARY KEY(idReserva),
FOREIGN KEY(idUsuario) REFERENCES Usuario(idUsuario),
FOREIGN KEY(idHotel) REFERENCES Hotel(idHotel)
);
CREATE TABLE HotelLugar(
idHotelLugar INT AUTO_INCREMENT,
descripcion VARCHAR (255) NOT NULL,
idHotel INT NOT NULL,
idLugar INT NOT NULL,
PRIMARY KEY (idHotelLugar),
FOREIGN KEY(idHotel) REFERENCES Hotel(idHotel),
FOREIGN KEY(idLugar) REFERENCES Lugar(idLugar)
);
