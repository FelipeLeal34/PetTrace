-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-12-2023 a las 00:01:40
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
(49, 'Can add publicaciones favoritas', 13, 'add_publicacionesfavoritas'),
(50, 'Can change publicaciones favoritas', 13, 'change_publicacionesfavoritas'),
(51, 'Can delete publicaciones favoritas', 13, 'delete_publicacionesfavoritas'),
(52, 'Can view publicaciones favoritas', 13, 'view_publicacionesfavoritas'),
(53, 'Can add perfil', 14, 'add_perfil'),
(54, 'Can change perfil', 14, 'change_perfil'),
(55, 'Can delete perfil', 14, 'delete_perfil'),
(56, 'Can view perfil', 14, 'view_perfil'),
(57, 'Can add comentario', 15, 'add_comentario'),
(58, 'Can change comentario', 15, 'change_comentario'),
(59, 'Can delete comentario', 15, 'delete_comentario'),
(60, 'Can view comentario', 15, 'view_comentario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id_comentario` int(11) NOT NULL,
  `comentario` varchar(400) NOT NULL,
  `fechacom` datetime(6) NOT NULL,
  `id_publicacion` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id_comentario`, `comentario`, `fechacom`, `id_publicacion`, `id_usuario`) VALUES
(1, 'porfavor ayudenme a encontrar mi macota, hay buena recompensa', '2023-12-11 16:52:15.154567', 2, 1),
(2, 'yo la tengo secuestrada jaja', '2023-12-11 16:52:26.082334', 2, 2),
(3, 'yo la tengo secuestrada jaja', '2023-12-11 16:52:26.100395', 2, 2),
(4, 'a bueno quedesela', '2023-12-11 16:52:59.060261', 2, 1),
(5, 'jaja lol xd', '2023-12-11 16:53:04.943559', 2, 2),
(6, 'jaja lol xd', '2023-12-11 16:53:04.950159', 2, 2),
(7, 'jaja lol xd', '2023-12-11 16:53:04.953086', 2, 2),
(8, 'se la regalo', '2023-12-11 16:53:05.920787', 2, 1),
(9, 'mmm ño', '2023-12-11 16:53:42.927320', 2, 2),
(10, 'mmm ño', '2023-12-11 16:53:42.928844', 2, 2),
(11, 'mmm ño', '2023-12-11 16:53:42.937390', 2, 2),
(12, 'jaja lol xd', '2023-12-11 16:54:45.272478', 2, 2),
(13, 'como tan muchacho', '2023-12-11 16:55:01.699224', 2, 1),
(14, 'yo vi a ese perro por la 30', '2023-12-11 16:55:15.566146', 1, 1),
(15, 'lo hicieron salchichon xd', '2023-12-11 16:55:27.325468', 1, 1),
(16, 'se veia muy triste :(', '2023-12-11 16:55:39.302914', 1, 2),
(17, 'se veia muy triste :(', '2023-12-11 16:55:39.451966', 1, 2),
(18, ':v', '2023-12-11 16:56:01.325960', 1, 1),
(19, 'Busco alguien que adopte a mi perrito viejo', '2023-12-11 17:36:34.290136', 5, 1),
(20, 'aunque sea viejo aun se mantiene con mucha energia', '2023-12-11 17:36:53.219633', 5, 1),
(21, 'y pq?', '2023-12-11 17:39:08.610106', 5, 2),
(22, 'y pq?', '2023-12-11 17:39:08.622642', 5, 2),
(23, 'y pq?', '2023-12-11 17:39:08.638717', 5, 2),
(24, 'intenso', '2023-12-11 17:39:23.641880', 5, 1),
(25, 'Bieeen', '2023-12-11 18:38:43.913108', 2, 2),
(26, 'Bieeen', '2023-12-11 18:38:43.914109', 2, 2),
(27, 'Yo lo conozco, vive en mi barrio', '2023-12-11 18:45:54.066409', 1, 2),
(28, 'Yo lo conozco, vive en mi barrio', '2023-12-11 18:45:54.072957', 1, 2),
(29, 'No sé quién es él ', '2023-12-11 18:46:08.810679', 1, 2),
(30, 'No sé quién es él ', '2023-12-11 18:46:08.811694', 1, 2),
(31, 'felipe real', '2023-12-11 18:46:52.060748', 2, 1),
(32, 'tardes', '2023-12-11 18:48:09.479744', 1, 1),
(33, 'Cómo ta muchacho', '2023-12-11 18:53:46.755137', 2, 1),
(34, 'Noches ', '2023-12-11 18:54:06.022298', 1, 1),
(35, 'Días ', '2023-12-11 19:17:40.946970', 1, 4),
(36, 'Días ', '2023-12-11 19:17:40.947968', 1, 4),
(37, 'I do', '2023-12-11 19:18:22.868866', 2, 4),
(38, 'me interesa adoptar tu mascota', '2023-12-11 19:19:07.465945', 9, 1),
(39, 'me interesa adoptar tu mascota', '2023-12-11 19:19:07.467946', 9, 1),
(40, 'me interesa adoptar tu mascota', '2023-12-11 19:19:07.481485', 9, 1),
(41, 'Quien sos rocky', '2023-12-11 19:37:40.179345', 10, 4),
(42, 'ayuda necesito encontrar a mi macota perdida', '2023-12-11 19:47:13.697415', 10, 5),
(43, 'la hs visto?', '2023-12-11 19:47:33.581474', 10, 5),
(44, 'Ay veci a mi hija le interesa', '2023-12-11 22:57:06.078808', 9, 4),
(45, 'yo lo conozco', '2023-12-11 23:23:24.872424', 4, 4),
(47, 'hola profe', '2023-12-12 01:33:00.946173', 12, 8),
(48, 'ya encontré a tsuki', '2023-12-12 01:46:02.421623', 2, 8);

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
(15, 'usuarios', 'comentario'),
(7, 'usuarios', 'mascota'),
(10, 'usuarios', 'mascotasadopcion'),
(11, 'usuarios', 'mascotasencontradas'),
(12, 'usuarios', 'mascotasperdidas'),
(14, 'usuarios', 'perfil'),
(8, 'usuarios', 'publicacion'),
(13, 'usuarios', 'publicacionesfavoritas'),
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
(1, 'contenttypes', '0001_initial', '2023-12-11 15:04:13.219563'),
(2, 'contenttypes', '0002_remove_content_type_name', '2023-12-11 15:04:13.258220'),
(3, 'auth', '0001_initial', '2023-12-11 15:04:13.454373'),
(4, 'auth', '0002_alter_permission_name_max_length', '2023-12-11 15:04:13.492482'),
(5, 'auth', '0003_alter_user_email_max_length', '2023-12-11 15:04:13.500019'),
(6, 'auth', '0004_alter_user_username_opts', '2023-12-11 15:04:13.507033'),
(7, 'auth', '0005_alter_user_last_login_null', '2023-12-11 15:04:13.512576'),
(8, 'auth', '0006_require_contenttypes_0002', '2023-12-11 15:04:13.516573'),
(9, 'auth', '0007_alter_validators_add_error_messages', '2023-12-11 15:04:13.523108'),
(10, 'auth', '0008_alter_user_username_max_length', '2023-12-11 15:04:13.529636'),
(11, 'auth', '0009_alter_user_last_name_max_length', '2023-12-11 15:04:13.536184'),
(12, 'auth', '0010_alter_group_name_max_length', '2023-12-11 15:04:13.558264'),
(13, 'auth', '0011_update_proxy_permissions', '2023-12-11 15:04:13.563797'),
(14, 'auth', '0012_alter_user_first_name_max_length', '2023-12-11 15:04:13.571328'),
(15, 'usuarios', '0001_initial', '2023-12-11 15:04:14.404564'),
(16, 'admin', '0001_initial', '2023-12-11 15:04:14.522547'),
(17, 'admin', '0002_logentry_remove_auto_add', '2023-12-11 15:04:14.535621'),
(18, 'admin', '0003_logentry_add_action_flag_choices', '2023-12-11 15:04:14.548676'),
(19, 'sessions', '0001_initial', '2023-12-11 15:04:14.588829'),
(20, 'usuarios', '0002_publicacion_fechapublicacion', '2023-12-11 17:08:59.317523');

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
('2go0zkcg1i1vo7vsye3krd75pc6bpl5x', '.eJxVjDsOwyAQBe9CHSHAfFOm9xnQwi7BSYQlY1dR7h5bcpG0b2bem0XY1hq3TkuckF2ZZJffLUF-UjsAPqDdZ57nti5T4ofCT9r5OCO9bqf7d1Ch170ORemUNdAgyXpP2gVBBOiE0SRdCg5y0SiEST77AezOinNWGF9QKWKfL_X2OHE:1rCiRN:5WCJJWzliwphpwMhnndb0Ps4bIxEdJdC_b6mQmV3408', '2023-12-25 15:43:29.101960'),
('4h838s5mt10hr1r4pzaoaxfqh5zvtwie', '.eJxVjDsOwjAQBe_iGllxPhubkp4zRM_eXRxAjpRPhbg7REoB7ZuZ9zIDtjUP2yLzMLI5m9qcfreI9JCyA76j3CabprLOY7S7Yg-62OvE8rwc7t9BxpK_dQihJudDVbWx8b22ziVQBxUALjpFTyRevDIaT12qmFRD7ATswWTeH9sIOKQ:1rCkRh:MRUSc6_tpT4id9BQ-_8mrtcRzkcO6n1qfaZhvIbCO80', '2023-12-25 17:51:57.418337'),
('a1m2x6p1btlyxykm874qcahw66xkum4m', '.eJxVjDsOwyAQBe9CHSHAfFOm9xnQwi7BSYQlY1dR7h5bcpG0b2bem0XY1hq3TkuckF2ZZJffLUF-UjsAPqDdZ57nti5T4ofCT9r5OCO9bqf7d1Ch170ORemUNdAgyXpP2gVBBOiE0SRdCg5y0SiEST77AezOinNWGF9QKWKfL_X2OHE:1rCpO0:9B8odcAlU1CY6HssPRTx-LAw-_1sRUCuU2YQcpwdUdw', '2023-12-25 23:08:28.061542'),
('m9gqagrmji1nr0c33x3wy44e7nc1w0td', '.eJxVjM1uwyAQhN-Fc2PxEwLOsfe-QSVrWZaalpoKsFQ18rsXy77kNjPfzDxYiKmVXNn9wTCnXLrYXliBPzgU1R_CSIep9JsP1eAb3lfOgziDlBFS9OAP66CUeKJAOO9vTHKpLkJehGD3VlbaOpxgbfO0VipT7Ftm2VPmAL9o2YH_hOUjD5iXVqIb9spw0jq8ZU_p9ew-HcxQ576WN7DaKPRqvDoRuHUBhAnAjQUcb8qS7mfaGU5BKwA5Km-umpRDqSRytv0DAxJiMQ:1rCrpO:8FnNzz5K4H5bYPuppmUJ19llxvHtfqNNU1V-6lH5u0A', '2023-12-26 01:44:54.427059'),
('st737xl5dz5wb2pbf97l12ih269jwbq2', '.eJxVjDsOwyAQBe9CHSHAfFOm9xnQwi7BSYQlY1dR7h5bcpG0b2bem0XY1hq3TkuckF2ZZJffLUF-UjsAPqDdZ57nti5T4ofCT9r5OCO9bqf7d1Ch170ORemUNdAgyXpP2gVBBOiE0SRdCg5y0SiEST77AezOinNWGF9QKWKfL_X2OHE:1rCrhE:aFLcfBpcRH0lmLwng_9V4ho95tAwt_e8EKGxI6cLx9Y', '2023-12-26 01:36:28.107073'),
('txsb6ly869vvrojpr747obyoae397kkt', '.eJxVjDsOwjAQBe_iGlk4WXsNJT1niPZnEkCJFCcV4u4QKQW0b2bey3W0Ln23Vpu7Qd3ZRXf43ZjkYeMG9E7jbfIyjcs8sN8Uv9Pqr5Pa87K7fwc91f5bcyHTwIKlzcoQAAExQ8SEUkSbaCIALMqY6ZRSS0mOkhvIRhia5N4fDQk4dA:1rCm2g:TQDDNiOGwtBF0lAOQ63-qBo4ZsWS4HiRWT5J5Y2QUx8', '2023-12-25 19:34:14.342187'),
('vg8ybfntptzmyg93026l63b085rjb8pm', '.eJxVjDsOwyAQBe9CHSHAfFOm9xnQwi7BSYQlY1dR7h5bcpG0b2bem0XY1hq3TkuckF2ZZJffLUF-UjsAPqDdZ57nti5T4ofCT9r5OCO9bqf7d1Ch170ORemUNdAgyXpP2gVBBOiE0SRdCg5y0SiEST77AezOinNWGF9QKWKfL_X2OHE:1rCm9I:-wvHMzvdTKaBZVgZR2tRrQMiNgn48RWGzodgxXf_1rU', '2023-12-25 19:41:04.108388'),
('z40lpvpklci1y8frra19q30jixad4qp5', '.eJxVjEEOgyAQRe_CuiEBZBCX3fcMZGDGamskEVwZ764mLtrtf--_TQRc6xDWwksYSXSiEY_fLWL68nwB-uD8zjLluS5jlJcib1rkKxNPz9v9CwxYhvNttdVkSTN4VhFVQ6lVqMgRx0itBo09GvIA7MBYiy6x960BQ6yQ3Bntx6kuuYhu2_cD8W89Ew:1rCtaa:MWRlYe0yee6Q_xmKI8e3ZuuKJG6d0tlrhjFJ6oYqE4M', '2023-12-26 03:37:44.050551');

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
  `accesoriosmas` varchar(100) DEFAULT NULL,
  `tamañomas` varchar(45) NOT NULL,
  `edadmas` double DEFAULT NULL,
  `marcasmas` varchar(150) DEFAULT NULL,
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

--
-- Volcado de datos para la tabla `mascotas`
--

INSERT INTO `mascotas` (`id_mascota`, `nombremas`, `especiemas`, `razamas`, `sexomas`, `colormas`, `accesoriosmas`, `tamañomas`, `edadmas`, `marcasmas`, `personalidadmas`, `entrenamientomas`, `socializacionmas`, `img1`, `img2`, `img3`, `img4`, `img5`, `id`, `idestado_salud`) VALUES
(1, 'NIxon alejandro', 'perro', 'Siberian husky', 'macho', 'amarillo', 'trjtrjtrjtrjtrj', 'mediano', 6, 'erhestjsterjterj', '', NULL, '', 'imgmascotas/card2.jpg', 'imgmascotas/card3.jpg', 'imgmascotas/publi-2.jpg', 'imgmascotas/publi-7.webp', 'imgmascotas/publi-1.jpg', 2, 1),
(2, 'Tsuki', 'gato', 'Criollo', 'hembra', 'naranja', 'ninguno', 'mediano', 1, 'Rayas cafes', '', NULL, '', 'imgmascotas/IMG_20231025_214126_450-1145806771.jpg', 'imgmascotas/publi-10.webp', 'imgmascotas/card3_KwnRXEz.jpg', 'imgmascotas/banner2.jpg', 'imgmascotas/publi-5.jpg', 1, 2),
(4, NULL, 'gato', 'siames', 'macho', 'naranja', 'sdgsdgsdgsdgdsg', 'pequeño', NULL, 'sdgsgsdgsdgsdg', '', NULL, '', 'imgmascotas/publi-5_WOsmqWq.jpg', 'imgmascotas/publi-4.jpg', 'imgmascotas/card3_YPuLxa7.jpg', 'imgmascotas/publi-7_QtCslp5.webp', 'imgmascotas/publi-1_2qab5px.jpg', 2, 4),
(5, 'Felipe', 'perro', 'Pastor aleman', 'macho', 'amarillo', NULL, 'mediano', 12, NULL, 'Esquizofrenico', 'si', 'si', 'imgmascotas/banner1.jpg', 'imgmascotas/card3_YG9Zt9D.jpg', 'imgmascotas/card1.jpg', 'imgmascotas/card2_QksuYq0.jpg', 'imgmascotas/publi-10_TffH3te.webp', 1, 5),
(7, 'ninix', 'gato', 'Persa', 'hembra', 'rojizo', NULL, 'pequeño', 2, NULL, 'personalidad de pug', 'sabe dar la pata el bro', 'se llevan bien', 'imgmascotas/publi-3.jpg', 'imgmascotas/publi-6.jpeg', 'imgmascotas/publi-4_B5IaX41.jpg', 'imgmascotas/publi-9.webp', 'imgmascotas/publi-2_3yayg05.jpg', 2, 7),
(8, NULL, 'gato', 'Criollo', 'macho', 'negro', 'collar', 'mediano', NULL, 'ninguna', '', NULL, '', 'imgmascotas/gato2.jpg', 'imgmascotas/gato3.jpeg', 'imgmascotas/gato4.jpg', 'imgmascotas/gato5.jpeg', 'imgmascotas/gato2_guiW5qQ.jpg', 1, 8),
(9, 'Linda', 'perro', 'Golder retriever', 'hembra', 'amarillo', NULL, 'mediano', 8, NULL, 'personalidad extrovertida', 'Si', 'Es amigable y noble', 'imgmascotas/perroo3.jpg', 'imgmascotas/perroo4.jpg', 'imgmascotas/perroo5.jpg', 'imgmascotas/perroo5_zEwQ8dy.jpg', 'imgmascotas/perroo3_bYRKyeC.jpg', 1, 9),
(10, 'rocky', 'perro', 'Boyero de berna', 'macho', 'naranja', 'no', 'pequeño', 1, 'no', '', NULL, '', 'imgmascotas/publi-1_EVh8Hfl.jpg', 'imgmascotas/publi-2_AjAJEsJ.jpg', 'imgmascotas/publi-3_8hrf5sO.jpg', 'imgmascotas/banner4_2spzyGk.jpg', 'imgmascotas/card1_hLgJ86E.jpg', 5, 10),
(12, NULL, 'perro', 'Criollo', 'hembra', 'negro', 'Ninguno', 'mediano', NULL, 'Mancha oreja negra', '', NULL, '', 'imgmascotas/IMG_20231129_152447_570.jpg', 'imgmascotas/IMG_20231129_154302_421.jpg', 'imgmascotas/IMG_20231129_154523_805.jpg', 'imgmascotas/IMG_20231129_152346_104.jpg', 'imgmascotas/IMG_20231129_154439_042.jpg', 9, 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascotas_adopcion`
--

CREATE TABLE `mascotas_adopcion` (
  `publicacion_ptr_id` int(11) NOT NULL,
  `motivoAdopcion` varchar(200) NOT NULL,
  `requisitosAdopcion` varchar(500) NOT NULL,
  `localidadAdopcion` varchar(60) NOT NULL,
  `barrioAdopcion` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mascotas_adopcion`
--

INSERT INTO `mascotas_adopcion` (`publicacion_ptr_id`, `motivoAdopcion`, `requisitosAdopcion`, `localidadAdopcion`, `barrioAdopcion`) VALUES
(5, 'Mudanza', 'Buen hogar', 'santa fe', 'la merced'),
(7, 'esvesvweg4rhqrehrehreh', 'erhreherherherherherherh', 'santa fe', 'veracruz'),
(9, 'Viaje fuera del país', 'Familia amorosa', 'bosa', 'villa del río');

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

--
-- Volcado de datos para la tabla `mascotas_encontradas`
--

INSERT INTO `mascotas_encontradas` (`publicacion_ptr_id`, `localidadEncuentro`, `barrioEncuentro`, `fechaEncuentro`, `horaEncuentro`, `recompensa`) VALUES
(4, 'bosa', 'jardines del apogeo', '2023-12-13', '14:13:00.000000', NULL),
(8, 'santa fe', 'bosque izquierdo', '2023-12-07', '15:53:00.000000', NULL),
(12, 'suba', 'madeira', '2023-12-11', '20:00:00.000000', NULL);

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

--
-- Volcado de datos para la tabla `mascotas_perdidas`
--

INSERT INTO `mascotas_perdidas` (`publicacion_ptr_id`, `localidadExtravio`, `barrioExtravio`, `fechaExtravio`, `horaExtravio`, `recompensa`) VALUES
(1, 'tunjuelito', 'parque real 1.11', '2023-12-13', '13:50:00.000000', 120000),
(2, 'bosa', 'amaru', '2023-12-10', '08:50:00.000000', 1000000),
(10, 'san cristobal', 'buenavista suroriental', '2023-12-06', '14:33:00.000000', NULL);

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
  `idestado_salud` int(11) DEFAULT NULL,
  `fechaPublicacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `publicaciones`
--

INSERT INTO `publicaciones` (`id_publicacion`, `estadoPubli`, `fechaPubli`, `apartado`, `id_mascota`, `id`, `idestado_salud`, `fechaPublicacion`) VALUES
(1, 1, '2023-12-11 16:49:52.555321', 'perdidas', 1, 2, 1, '2023-12-11'),
(2, 1, '2023-12-11 16:51:25.351697', 'perdidas', 2, 1, 2, '2023-12-11'),
(4, 1, '2023-12-11 17:14:29.072701', 'encontradas', 4, 2, 4, '2023-12-11'),
(5, 1, '2023-12-11 17:39:00.236209', 'adopciones', 5, 1, 5, '2023-12-11'),
(7, 1, '2023-12-11 17:38:27.820411', 'adopciones', 7, 2, 7, '2023-12-11'),
(8, 1, '2023-12-11 17:53:55.777382', 'encontradas', 8, 1, 8, '2023-12-11'),
(9, 1, '2023-12-11 18:36:20.018148', 'adopciones', 9, 1, 9, '2023-12-11'),
(10, 1, '2023-12-11 19:33:17.468620', 'perdidas', 10, 5, 10, '2023-12-11'),
(12, 1, '2023-12-12 01:32:15.327068', 'encontradas', 12, 9, 12, '2023-12-11');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicacionesfavoritas`
--

CREATE TABLE `publicacionesfavoritas` (
  `id` int(11) NOT NULL,
  `id_publicacion_id` int(11) NOT NULL,
  `id_usuario_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `publicacionesfavoritas`
--

INSERT INTO `publicacionesfavoritas` (`id`, `id_publicacion_id`, `id_usuario_id`) VALUES
(1, 1, 2),
(3, 2, 2),
(4, 4, 1),
(14, 5, 7),
(15, 1, 4),
(16, 9, 4),
(20, 4, 4),
(21, 8, 1),
(22, 10, 8);

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

--
-- Volcado de datos para la tabla `salud_mascota`
--

INSERT INTO `salud_mascota` (`idestado_salud`, `enfermedadesmas`, `vacunasmas`, `esterilizacionmas`, `medicamentosmas`) VALUES
(1, 'rdynmtrtrnntr', 'moquillo,parvovirosis,pentavalente,coronavirus canino,rabia,tos de perreras', 'sí', 'rtntrntrnrtntrnrtntr'),
(2, 'ninguno', '', 'no', 'ninguno'),
(4, 'sdgsdgsdgsdg', NULL, 'sí', NULL),
(5, 'no', '', 'no', 'no'),
(7, 'ninguna', 'moquillo,trivalente,leucemia,gripe felina,rabia,peritonitis infecciosa felina', 'sí', 'ihjdsisddsvsdvdsv'),
(8, 'ninguna', NULL, 'sí', NULL),
(9, 'ninguna', '', 'sí', 'ninguno'),
(10, 'no', '', 'sí', 'no'),
(12, 'Ninguno', NULL, 'sí', NULL);

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
('pbkdf2_sha256$600000$r8bLnPMcjsUifpwKeCrgPD$cs1XONkkhIKHndf7uE29hXcEtO2g4QAC28i+vZqfmbw=', '2023-12-12 01:36:28.101066', 0, 'admin3', 'admin', 'admin', 'admin333@gmail.com', 0, 1, '2023-12-11 15:39:02.254332', 1, 1, 3104308689, 'puente aranda', 'la guaca', -74.1827004, 4.6192877),
('pbkdf2_sha256$600000$8okZcUTxTnof4XtQ3wji1A$ufxYMjGcSQ7yudbJNVrkiMcPzpF0zccH9g+QgrRZANs=', '2023-12-11 17:51:57.413335', 0, 'andfee', 'Felipe', 'Leal', 'afleal34@gmail.com', 0, 1, '2023-12-11 15:41:04.287825', 2, 1012329061, 3137525713, 'engativa', 'acapulco', -74.1181234, 4.58292),
('pbkdf2_sha256$600000$Bl1sLgWXSTRwkYE6X4ADgs$vOl9IXw0MT3zZsfctnK5xMhR2Ln90pSV8aPlvgtZGZU=', '2023-12-11 18:57:37.075648', 0, '2', '2', '2', '2@2.com', 0, 1, '2023-12-11 18:57:33.887898', 3, 2, 2, NULL, 'Seleccione un barrio', -74.1827004, 4.6192877),
('pbkdf2_sha256$600000$Z5xa8ikEUOqlUrbO0GFcXW$zAj/j0PThdcY/XkkXDXdEnOl+OLK8v5sUywStx3IPEc=', '2023-12-11 22:55:34.392302', 0, 'Miloo', 'Felipe', 'Leal Culma', 'andresfelipelealculma34@gmail.com', 0, 1, '2023-12-11 19:11:12.246002', 4, 333, 3137525713, 'usme', 'la cabaña', -74.1193557, 4.5872748),
('pbkdf2_sha256$600000$Bh4Dh8yqNw4stVSSLjHFpx$EMf8iOTZnXAjGipFEuHYZEBBWl498jWMNv/vcJPcgbk=', '2023-12-11 19:34:14.338184', 0, '3', '3', '3', '3@3.com', 0, 1, '2023-12-11 19:11:39.415773', 5, 3, 3, 'san cristobal', 'el ramajal (san pedro)', -74.1827004, 4.6192877),
('pbkdf2_sha256$600000$Z4uqaUcurqquY8604Hq7fN$1Xu/RyYiJyVByMy+mAtezLk4oLL/j6TuL6h8EW5BaUc=', '2023-12-11 19:17:20.872766', 0, '4', '4', '4', 'prueba@4.com', 0, 1, '2023-12-11 19:16:10.410677', 6, 4, 4, 'bosa', 'jardines del apogeo', -74.1827004, 4.6192877),
('pbkdf2_sha256$600000$BJxo7FlSlkHyOfJYgxFgLX$wb62J5iB0pmbXOegt5NLERkJonF2madviSglk5gW7JM=', '2023-12-11 19:40:27.029878', 0, 'Luisarmando1997@gmail.com', 'Luis Armando', 'Cañón Vasquez', 'amigoluis16@gmail.com', 0, 1, '2023-12-11 19:40:11.643004', 7, 1030673936, 3113776462, NULL, 'Seleccione un barrio', -74.1785942, 4.6210357),
('pbkdf2_sha256$600000$SXi7pqkjQ0vBBtwoeovjiU$z8o2pA38YVuRBGqhviZVIprPBcUt0T0cFRiwcwRndHE=', '2023-12-12 01:19:52.792991', 0, 'nixon3', 'nixon', 'canon', 'nixon@gmai.com', 0, 1, '2023-12-12 01:19:45.248980', 8, 123, 12333, 'los martires', 'eduardo santos', -74.0887461, 4.6171449),
('pbkdf2_sha256$600000$Yl6mgYdUOiIsvKwg48JvpP$K8UTw+ghOUV2Dvvqt3gPcYVH3nCMC9fO6O/e6mn3N+I=', '2023-12-12 01:26:28.973343', 0, 'Cifuentes0903', 'Johanna', 'Cifuentes', 'cifuentes0903@misena.edu.co', 0, 1, '2023-12-12 01:26:11.217945', 9, 40414732, 3158519351, NULL, 'Seleccione un barrio', -74.0914993, 4.6169943);

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
(1, 'imgperfil/1/IMG_20231208_012435_981.jpg', 'Nixon el mejor admin3', '2023-12-11', 1),
(2, 'imgperfil/2/publi-4.jpg', 'soy nuevo', '2023-12-11', 2),
(3, 'imgperfil/3/IMG_20231025_214126_450-1145806771_ghY9BYN.jpg', 'Nuevo usuario de PetTrace', '2023-12-11', 3),
(4, 'imgperfil/4/IMG_20231205_152112_473.jpg', 'Nuevo usuario de PetTrace', '2023-12-11', 4),
(5, 'imgperfil/5/chica-anime-lofi_3840x2160_xtrafondos.com.jpg', 'Nuevo usuario de PetTrace', '2023-12-11', 5),
(6, 'imgperfil/6/IMG_20231025_214125_411548054609.jpg', 'Nuevo usuario de PetTrace', '2023-12-11', 6),
(7, 'imgperfil/7/17023237296015402616237728115776.jpg', 'Nuevo usuario de PetTrace', '2023-12-11', 7),
(8, 'imgperfil/8/img6.jpg', 'Nuevo usuario de PetTrace', '2023-12-11', 8),
(9, 'imgperfil/9/IMG_20231129_163754_160.jpg', 'Nuevo usuario de PetTrace', '2023-12-11', 9);

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
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id_comentario`),
  ADD KEY `comentarios_id_publicacion_6e7dc043_fk_publicaci` (`id_publicacion`),
  ADD KEY `comentarios_id_usuario_ed4ede48_fk_usuarios_id` (`id_usuario`);

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
-- Indices de la tabla `publicacionesfavoritas`
--
ALTER TABLE `publicacionesfavoritas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `publicacionesFavorit_id_publicacion_id_ee454850_fk_publicaci` (`id_publicacion_id`),
  ADD KEY `publicacionesFavoritas_id_usuario_id_cbeea565_fk_usuarios_id` (`id_usuario_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id_comentario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT de la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `mascotas`
--
ALTER TABLE `mascotas`
  MODIFY `id_mascota` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  MODIFY `id_publicacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `publicacionesfavoritas`
--
ALTER TABLE `publicacionesfavoritas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `salud_mascota`
--
ALTER TABLE `salud_mascota`
  MODIFY `idestado_salud` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `usuarios_groups`
--
ALTER TABLE `usuarios_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios_perfil`
--
ALTER TABLE `usuarios_perfil`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

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
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_id_publicacion_6e7dc043_fk_publicaci` FOREIGN KEY (`id_publicacion`) REFERENCES `publicaciones` (`id_publicacion`),
  ADD CONSTRAINT `comentarios_id_usuario_ed4ede48_fk_usuarios_id` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);

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
-- Filtros para la tabla `publicacionesfavoritas`
--
ALTER TABLE `publicacionesfavoritas`
  ADD CONSTRAINT `publicacionesFavorit_id_publicacion_id_ee454850_fk_publicaci` FOREIGN KEY (`id_publicacion_id`) REFERENCES `publicaciones` (`id_publicacion`),
  ADD CONSTRAINT `publicacionesFavoritas_id_usuario_id_cbeea565_fk_usuarios_id` FOREIGN KEY (`id_usuario_id`) REFERENCES `usuarios` (`id`);

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
