-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-09-2023 a las 23:34:22
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pettrace`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `campos_tipopubli`
--

CREATE TABLE `campos_tipopubli` (
  `idcampo` int(11) NOT NULL,
  `nombreCampo` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `campos_tipopubli`
--

INSERT INTO `campos_tipopubli` (`idcampo`, `nombreCampo`) VALUES
(1, 'nombremas'),
(2, 'raza'),
(3, 'sexo'),
(4, 'color'),
(5, 'edad'),
(6, 'caracteristicas'),
(7, 'accesorios'),
(8, 'enfermedades'),
(9, 'esterilizacion'),
(10, 'medicamentos'),
(11, 'vacunas'),
(12, 'localidadExtravio'),
(13, 'barrioExtravio'),
(14, 'fechaExtravio'),
(15, 'localidadEncuentro'),
(16, 'barrioEncuentro'),
(17, 'fechaEncuentro'),
(18, 'recompensa'),
(19, 'motivoAdopcion');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `campos_tipopubli_has_tipo_publicaciones`
--

CREATE TABLE `campos_tipopubli_has_tipo_publicaciones` (
  `idcampo` int(11) DEFAULT NULL,
  `idtipo_publi` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id_comentario` int(11) NOT NULL,
  `comentario` varchar(100) NOT NULL,
  `fechacom` date NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_publicacion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascotas`
--

CREATE TABLE `mascotas` (
  `id_mascota` int(11) NOT NULL,
  `nombremas` varchar(45) NOT NULL,
  `raza` varchar(45) NOT NULL,
  `sexo` varchar(45) NOT NULL,
  `accesorios` varchar(45) DEFAULT NULL,
  `tamano` varchar(45) NOT NULL,
  `edad` int(11) DEFAULT NULL,
  `caracteristicas` varchar(45) NOT NULL,
  `idestado_salud` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicaciones`
--

CREATE TABLE `publicaciones` (
  `id_publicacion` int(11) NOT NULL,
  `estado` varchar(45) NOT NULL,
  `fecha` date NOT NULL,
  `idestado_salud` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_mascota` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicaciones_campos_tipopubli_tipo_publicaciones`
--

CREATE TABLE `publicaciones_campos_tipopubli_tipo_publicaciones` (
  `id_publicacion` int(11) DEFAULT NULL,
  `idestado_salud` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_mascota` int(11) DEFAULT NULL,
  `idcampo` int(11) DEFAULT NULL,
  `idtipo_publi` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salud_mascota`
--

CREATE TABLE `salud_mascota` (
  `idestado_salud` int(11) NOT NULL,
  `enfermedades` varchar(60) NOT NULL,
  `vacunas` varchar(60) NOT NULL,
  `esterilizacion` varchar(20) NOT NULL,
  `medicamentos` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_publicaciones`
--

CREATE TABLE `tipo_publicaciones` (
  `idtipo_publi` int(11) NOT NULL,
  `nombreTipoPubli` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipo_publicaciones`
--

INSERT INTO `tipo_publicaciones` (`idtipo_publi`, `nombreTipoPubli`) VALUES
(1, 'perdidas'),
(2, 'encontradas'),
(3, 'adopcion');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombreusu` varchar(60) NOT NULL,
  `apellidousu` varchar(60) NOT NULL,
  `documento` int(11) NOT NULL,
  `correousu` varchar(60) NOT NULL,
  `telefono` int(11) NOT NULL,
  `localidad` varchar(60) NOT NULL,
  `barrio` varchar(60) NOT NULL,
  `contrasena` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `campos_tipopubli`
--
ALTER TABLE `campos_tipopubli`
  ADD PRIMARY KEY (`idcampo`);

--
-- Indices de la tabla `campos_tipopubli_has_tipo_publicaciones`
--
ALTER TABLE `campos_tipopubli_has_tipo_publicaciones`
  ADD KEY `idcampo` (`idcampo`),
  ADD KEY `idtipo_publi` (`idtipo_publi`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id_comentario`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_publicacion` (`id_publicacion`);

--
-- Indices de la tabla `mascotas`
--
ALTER TABLE `mascotas`
  ADD PRIMARY KEY (`id_mascota`),
  ADD KEY `idestado_salud` (`idestado_salud`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD PRIMARY KEY (`id_publicacion`),
  ADD KEY `idestado_salud` (`idestado_salud`),
  ADD KEY `id_mascota` (`id_mascota`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `publicaciones_campos_tipopubli_tipo_publicaciones`
--
ALTER TABLE `publicaciones_campos_tipopubli_tipo_publicaciones`
  ADD KEY `id_publicacion` (`id_publicacion`),
  ADD KEY `id_mascota` (`id_mascota`),
  ADD KEY `idestado_salud` (`idestado_salud`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `idcampo` (`idcampo`),
  ADD KEY `idtipo_publi` (`idtipo_publi`);

--
-- Indices de la tabla `salud_mascota`
--
ALTER TABLE `salud_mascota`
  ADD PRIMARY KEY (`idestado_salud`);

--
-- Indices de la tabla `tipo_publicaciones`
--
ALTER TABLE `tipo_publicaciones`
  ADD PRIMARY KEY (`idtipo_publi`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `documento` (`documento`),
  ADD UNIQUE KEY `correousu` (`correousu`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `campos_tipopubli`
--
ALTER TABLE `campos_tipopubli`
  MODIFY `idcampo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id_comentario` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mascotas`
--
ALTER TABLE `mascotas`
  MODIFY `id_mascota` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  MODIFY `id_publicacion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `salud_mascota`
--
ALTER TABLE `salud_mascota`
  MODIFY `idestado_salud` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipo_publicaciones`
--
ALTER TABLE `tipo_publicaciones`
  MODIFY `idtipo_publi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `campos_tipopubli_has_tipo_publicaciones`
--
ALTER TABLE `campos_tipopubli_has_tipo_publicaciones`
  ADD CONSTRAINT `campos_tipopubli_has_tipo_publicaciones_ibfk_1` FOREIGN KEY (`idcampo`) REFERENCES `campos_tipopubli` (`idcampo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `campos_tipopubli_has_tipo_publicaciones_ibfk_2` FOREIGN KEY (`idtipo_publi`) REFERENCES `tipo_publicaciones` (`idtipo_publi`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`id_publicacion`) REFERENCES `publicaciones` (`id_publicacion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `mascotas`
--
ALTER TABLE `mascotas`
  ADD CONSTRAINT `mascotas_ibfk_1` FOREIGN KEY (`idestado_salud`) REFERENCES `salud_mascota` (`idestado_salud`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `mascotas_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD CONSTRAINT `publicaciones_ibfk_1` FOREIGN KEY (`idestado_salud`) REFERENCES `salud_mascota` (`idestado_salud`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publicaciones_ibfk_2` FOREIGN KEY (`id_mascota`) REFERENCES `mascotas` (`id_mascota`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publicaciones_ibfk_3` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `publicaciones_campos_tipopubli_tipo_publicaciones`
--
ALTER TABLE `publicaciones_campos_tipopubli_tipo_publicaciones`
  ADD CONSTRAINT `publicaciones_campos_tipopubli_tipo_publicaciones_ibfk_1` FOREIGN KEY (`id_publicacion`) REFERENCES `publicaciones` (`id_publicacion`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publicaciones_campos_tipopubli_tipo_publicaciones_ibfk_2` FOREIGN KEY (`id_mascota`) REFERENCES `mascotas` (`id_mascota`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publicaciones_campos_tipopubli_tipo_publicaciones_ibfk_3` FOREIGN KEY (`idestado_salud`) REFERENCES `salud_mascota` (`idestado_salud`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publicaciones_campos_tipopubli_tipo_publicaciones_ibfk_4` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publicaciones_campos_tipopubli_tipo_publicaciones_ibfk_5` FOREIGN KEY (`idcampo`) REFERENCES `campos_tipopubli` (`idcampo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publicaciones_campos_tipopubli_tipo_publicaciones_ibfk_6` FOREIGN KEY (`idtipo_publi`) REFERENCES `tipo_publicaciones` (`idtipo_publi`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
