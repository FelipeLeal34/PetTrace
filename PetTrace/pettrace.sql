-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-12-2023 a las 02:28:10
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

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
-- Estructura de tabla para la tabla `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add content type', 4, 'add_contenttype'),
(14, 'Can change content type', 4, 'change_contenttype'),
(15, 'Can delete content type', 4, 'delete_contenttype'),
(16, 'Can view content type', 4, 'view_contenttype'),
(17, 'Can add session', 5, 'add_session'),
(18, 'Can change session', 5, 'change_session'),
(19, 'Can delete session', 5, 'delete_session'),
(20, 'Can view session', 5, 'view_session'),
(21, 'Can add usuario', 6, 'add_usuario'),
(22, 'Can change usuario', 6, 'change_usuario'),
(23, 'Can delete usuario', 6, 'delete_usuario'),
(24, 'Can view usuario', 6, 'view_usuario'),
(25, 'Can add mascota', 7, 'add_mascota'),
(26, 'Can change mascota', 7, 'change_mascota'),
(27, 'Can delete mascota', 7, 'delete_mascota'),
(28, 'Can view mascota', 7, 'view_mascota'),
(29, 'Can add publicacion', 8, 'add_publicacion'),
(30, 'Can change publicacion', 8, 'change_publicacion'),
(31, 'Can delete publicacion', 8, 'delete_publicacion'),
(32, 'Can view publicacion', 8, 'view_publicacion'),
(33, 'Can add salud mascota', 9, 'add_saludmascota'),
(34, 'Can change salud mascota', 9, 'change_saludmascota'),
(35, 'Can delete salud mascota', 9, 'delete_saludmascota'),
(36, 'Can view salud mascota', 9, 'view_saludmascota'),
(37, 'Can add mascotas adopcion', 10, 'add_mascotasadopcion'),
(38, 'Can change mascotas adopcion', 10, 'change_mascotasadopcion'),
(39, 'Can delete mascotas adopcion', 10, 'delete_mascotasadopcion'),
(40, 'Can view mascotas adopcion', 10, 'view_mascotasadopcion'),
(41, 'Can add mascotas encontradas', 11, 'add_mascotasencontradas'),
(42, 'Can change mascotas encontradas', 11, 'change_mascotasencontradas'),
(43, 'Can delete mascotas encontradas', 11, 'delete_mascotasencontradas'),
(44, 'Can view mascotas encontradas', 11, 'view_mascotasencontradas'),
(45, 'Can add mascotas perdidas', 12, 'add_mascotasperdidas'),
(46, 'Can change mascotas perdidas', 12, 'change_mascotasperdidas'),
(47, 'Can delete mascotas perdidas', 12, 'delete_mascotasperdidas'),
(48, 'Can view mascotas perdidas', 12, 'view_mascotasperdidas'),
(49, 'Can add perfil', 13, 'add_perfil'),
(50, 'Can change perfil', 13, 'change_perfil'),
(51, 'Can delete perfil', 13, 'delete_perfil'),
(52, 'Can view perfil', 13, 'view_perfil');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'contenttypes', 'contenttype'),
(5, 'sessions', 'session'),
(7, 'usuarios', 'mascota'),
(10, 'usuarios', 'mascotasadopcion'),
(11, 'usuarios', 'mascotasencontradas'),
(12, 'usuarios', 'mascotasperdidas'),
(13, 'usuarios', 'perfil'),
(8, 'usuarios', 'publicacion'),
(9, 'usuarios', 'saludmascota'),
(6, 'usuarios', 'usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2023-12-06 23:07:34.376975'),
(2, 'contenttypes', '0002_remove_content_type_name', '2023-12-06 23:07:34.416482'),
(3, 'auth', '0001_initial', '2023-12-06 23:07:34.588235'),
(4, 'auth', '0002_alter_permission_name_max_length', '2023-12-06 23:07:34.623235'),
(5, 'auth', '0003_alter_user_email_max_length', '2023-12-06 23:07:34.628235'),
(6, 'auth', '0004_alter_user_username_opts', '2023-12-06 23:07:34.633235'),
(7, 'auth', '0005_alter_user_last_login_null', '2023-12-06 23:07:34.651235'),
(8, 'auth', '0006_require_contenttypes_0002', '2023-12-06 23:07:34.654236'),
(9, 'auth', '0007_alter_validators_add_error_messages', '2023-12-06 23:07:34.660235'),
(10, 'auth', '0008_alter_user_username_max_length', '2023-12-06 23:07:34.666235'),
(11, 'auth', '0009_alter_user_last_name_max_length', '2023-12-06 23:07:34.672241'),
(12, 'auth', '0010_alter_group_name_max_length', '2023-12-06 23:07:34.682239'),
(13, 'auth', '0011_update_proxy_permissions', '2023-12-06 23:07:34.688445'),
(14, 'auth', '0012_alter_user_first_name_max_length', '2023-12-06 23:07:34.694449'),
(15, 'usuarios', '0001_initial', '2023-12-06 23:07:35.313922'),
(16, 'admin', '0001_initial', '2023-12-06 23:07:35.399422'),
(17, 'admin', '0002_logentry_remove_auto_add', '2023-12-06 23:07:35.407422'),
(18, 'admin', '0003_logentry_add_action_flag_choices', '2023-12-06 23:07:35.418422'),
(19, 'sessions', '0001_initial', '2023-12-06 23:07:35.442451');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('2w0ccy17v32gjqsf06blriwpslw5bbvt', '.eJxVjDsOwjAQBe_iGll24i8lPWewdtdrHECOFCcV4u4QKQW0b2beSyTY1pq2zkuasjgLLU6_GwI9uO0g36HdZklzW5cJ5a7Ig3Z5nTM_L4f7d1Ch12-tuJSofTFMZAOMI4ZBO-M0FetQ5YCodInemkjZRuOBg2EcQsDMyqJ4fwDvxjhC:1rB10b:S-pYGYddYKTcMwPFvoxkvM9m0M01E-A9YQIjG5fsCNk', '2023-12-20 23:08:49.599995'),
('qmr6cjl66tv2fzrst4ksrt7eleifw1ky', '.eJxVjDsOwjAQBe_iGll24i8lPWewdtdrHECOFCcV4u4QKQW0b2beSyTY1pq2zkuasjgLLU6_GwI9uO0g36HdZklzW5cJ5a7Ig3Z5nTM_L4f7d1Ch12-tuJSofTFMZAOMI4ZBO-M0FetQ5YCodInemkjZRuOBg2EcQsDMyqJ4fwDvxjhC:1rB1Am:TjkMg3rjzVWwugQwVUKWULhY2HcWK35LCH9MOkyb3iM', '2023-12-20 23:19:20.297426');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascotas`
--

CREATE TABLE `mascotas` (
  `id_mascota` int(11) NOT NULL,
  `nombremas` varchar(45) DEFAULT NULL,
  `especiemas` varchar(45) NOT NULL,
  `razamas` varchar(45) NOT NULL,
  `sexomas` varchar(45) NOT NULL,
  `colormas` varchar(45) NOT NULL,
  `accesoriosmas` varchar(45) DEFAULT NULL,
  `tamañomas` varchar(45) NOT NULL,
  `edadmas` int(10) UNSIGNED DEFAULT NULL CHECK (`edadmas` >= 0),
  `marcasmas` varchar(45) DEFAULT NULL,
  `personalidadmas` varchar(150) NOT NULL,
  `entrenamientomas` varchar(150) DEFAULT NULL,
  `socializacionmas` varchar(150) NOT NULL,
  `img1` varchar(100) NOT NULL,
  `img2` varchar(100) NOT NULL,
  `img3` varchar(100) NOT NULL,
  `img4` varchar(100) NOT NULL,
  `img5` varchar(100) NOT NULL,
  `id` int(11) NOT NULL,
  `idestado_salud` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascotas_adopcion`
--

CREATE TABLE `mascotas_adopcion` (
  `publicacion_ptr_id` int(11) NOT NULL,
  `motivoAdopcion` varchar(200) NOT NULL,
  `requisitosAdopcion` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascotas_encontradas`
--

CREATE TABLE `mascotas_encontradas` (
  `publicacion_ptr_id` int(11) NOT NULL,
  `localidadEncuentro` varchar(60) NOT NULL,
  `barrioEncuentro` varchar(60) NOT NULL,
  `fechaEncuentro` date NOT NULL,
  `horaEncuentro` time(6) DEFAULT NULL,
  `recompensa` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascotas_perdidas`
--

CREATE TABLE `mascotas_perdidas` (
  `publicacion_ptr_id` int(11) NOT NULL,
  `localidadExtravio` varchar(60) NOT NULL,
  `barrioExtravio` varchar(60) NOT NULL,
  `fechaExtravio` date NOT NULL,
  `horaExtravio` time(6) DEFAULT NULL,
  `recompensa` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicaciones`
--

CREATE TABLE `publicaciones` (
  `id_publicacion` int(11) NOT NULL,
  `estadoPubli` tinyint(1) NOT NULL,
  `fechaPubli` datetime(6) NOT NULL,
  `apartado` varchar(50) NOT NULL,
  `id_mascota` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `idestado_salud` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salud_mascota`
--

CREATE TABLE `salud_mascota` (
  `idestado_salud` int(11) NOT NULL,
  `enfermedadesmas` varchar(60) DEFAULT NULL,
  `vacunasmas` varchar(1000) DEFAULT NULL,
  `esterilizacionmas` varchar(2) NOT NULL,
  `medicamentosmas` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `id` int(11) NOT NULL,
  `documento` int(10) UNSIGNED NOT NULL CHECK (`documento` >= 0),
  `telefono` bigint(20) NOT NULL,
  `localidad` varchar(60) DEFAULT NULL,
  `barrio` varchar(60) DEFAULT NULL,
  `longitud` double DEFAULT NULL,
  `latitud` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`, `id`, `documento`, `telefono`, `localidad`, `barrio`, `longitud`, `latitud`) VALUES
('pbkdf2_sha256$600000$MoKKgrpTxgUu5AgiWhG4Eh$2LfTfrqaEVXBCrsMSFkNJJ7QusrzhGNwUVw8YBxPw9s=', '2023-12-06 23:19:20.278424', 0, 'prueba2', 'admin', 'admin', 'admin@admin.com', 0, 1, '2023-12-06 23:08:41.681500', 1, 1, 3104308888, NULL, 'Seleccione un barrio', -74.0921369, 4.616693);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_groups`
--

CREATE TABLE `usuarios_groups` (
  `id` bigint(20) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_perfil`
--

CREATE TABLE `usuarios_perfil` (
  `id` bigint(20) NOT NULL,
  `imagen` varchar(100) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `usuario_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios_perfil`
--

INSERT INTO `usuarios_perfil` (`id`, `imagen`, `descripcion`, `fecha_creacion`, `usuario_id`) VALUES
(1, 'imgperfil/1/Avengers_Assemble.jpg', 'prueba2', '2023-12-06', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_user_permissions`
--

CREATE TABLE `usuarios_user_permissions` (
  `id` bigint(20) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indices de la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indices de la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_usuarios_id` (`user_id`);

--
-- Indices de la tabla `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indices de la tabla `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indices de la tabla `mascotas`
--
ALTER TABLE `mascotas`
  ADD PRIMARY KEY (`id_mascota`),
  ADD KEY `mascotas_idestado_salud_fd8b9d4a_fk_salud_mascota_idestado_salud` (`idestado_salud`),
  ADD KEY `mascotas_id_d4f2f9d5_fk_usuarios_id` (`id`);

--
-- Indices de la tabla `mascotas_adopcion`
--
ALTER TABLE `mascotas_adopcion`
  ADD PRIMARY KEY (`publicacion_ptr_id`);

--
-- Indices de la tabla `mascotas_encontradas`
--
ALTER TABLE `mascotas_encontradas`
  ADD PRIMARY KEY (`publicacion_ptr_id`);

--
-- Indices de la tabla `mascotas_perdidas`
--
ALTER TABLE `mascotas_perdidas`
  ADD PRIMARY KEY (`publicacion_ptr_id`);

--
-- Indices de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD PRIMARY KEY (`id_publicacion`),
  ADD UNIQUE KEY `id_mascota` (`id_mascota`),
  ADD UNIQUE KEY `idestado_salud` (`idestado_salud`),
  ADD KEY `publicaciones_id_92bc2fc9_fk_usuarios_id` (`id`);

--
-- Indices de la tabla `salud_mascota`
--
ALTER TABLE `salud_mascota`
  ADD PRIMARY KEY (`idestado_salud`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `documento` (`documento`);

--
-- Indices de la tabla `usuarios_groups`
--
ALTER TABLE `usuarios_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuarios_groups_usuario_id_group_id_a66c5ef3_uniq` (`usuario_id`,`group_id`),
  ADD KEY `usuarios_groups_group_id_18c61092_fk_auth_group_id` (`group_id`);

--
-- Indices de la tabla `usuarios_perfil`
--
ALTER TABLE `usuarios_perfil`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `usuarios_user_permissions`
--
ALTER TABLE `usuarios_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuarios_user_permissions_usuario_id_permission_id_474b33a5_uniq` (`usuario_id`,`permission_id`),
  ADD KEY `usuarios_user_permis_permission_id_af615ca1_fk_auth_perm` (`permission_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

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
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios_groups`
--
ALTER TABLE `usuarios_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios_perfil`
--
ALTER TABLE `usuarios_perfil`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios_user_permissions`
--
ALTER TABLE `usuarios_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Filtros para la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Filtros para la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_usuarios_id` FOREIGN KEY (`user_id`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `mascotas`
--
ALTER TABLE `mascotas`
  ADD CONSTRAINT `mascotas_id_d4f2f9d5_fk_usuarios_id` FOREIGN KEY (`id`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `mascotas_idestado_salud_fd8b9d4a_fk_salud_mascota_idestado_salud` FOREIGN KEY (`idestado_salud`) REFERENCES `salud_mascota` (`idestado_salud`);

--
-- Filtros para la tabla `mascotas_adopcion`
--
ALTER TABLE `mascotas_adopcion`
  ADD CONSTRAINT `mascotas_adopcion_publicacion_ptr_id_e886fed1_fk_publicaci` FOREIGN KEY (`publicacion_ptr_id`) REFERENCES `publicaciones` (`id_publicacion`);

--
-- Filtros para la tabla `mascotas_encontradas`
--
ALTER TABLE `mascotas_encontradas`
  ADD CONSTRAINT `mascotas_encontradas_publicacion_ptr_id_db812bed_fk_publicaci` FOREIGN KEY (`publicacion_ptr_id`) REFERENCES `publicaciones` (`id_publicacion`);

--
-- Filtros para la tabla `mascotas_perdidas`
--
ALTER TABLE `mascotas_perdidas`
  ADD CONSTRAINT `mascotas_perdidas_publicacion_ptr_id_e22157fa_fk_publicaci` FOREIGN KEY (`publicacion_ptr_id`) REFERENCES `publicaciones` (`id_publicacion`);

--
-- Filtros para la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD CONSTRAINT `publicaciones_id_92bc2fc9_fk_usuarios_id` FOREIGN KEY (`id`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `publicaciones_id_mascota_cb7e1d3b_fk_mascotas_id_mascota` FOREIGN KEY (`id_mascota`) REFERENCES `mascotas` (`id_mascota`),
  ADD CONSTRAINT `publicaciones_idestado_salud_c0af2f79_fk_salud_mas` FOREIGN KEY (`idestado_salud`) REFERENCES `salud_mascota` (`idestado_salud`);

--
-- Filtros para la tabla `usuarios_groups`
--
ALTER TABLE `usuarios_groups`
  ADD CONSTRAINT `usuarios_groups_group_id_18c61092_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `usuarios_groups_usuario_id_1132ca50_fk_usuarios_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `usuarios_perfil`
--
ALTER TABLE `usuarios_perfil`
  ADD CONSTRAINT `usuarios_perfil_usuario_id_ca6ea2f9_fk_usuarios_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `usuarios_user_permissions`
--
ALTER TABLE `usuarios_user_permissions`
  ADD CONSTRAINT `usuarios_user_permis_permission_id_af615ca1_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `usuarios_user_permissions_usuario_id_232fd58d_fk_usuarios_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
