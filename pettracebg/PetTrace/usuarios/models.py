# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class CamposTipopubli(models.Model):
    idcampo = models.AutoField(primary_key=True)
    nombrecampo = models.CharField(db_column='nombreCampo', max_length=45)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'campos_tipopubli'


class CamposTipopubliHasTipoPublicaciones(models.Model):
    idcampo = models.ForeignKey(CamposTipopubli, models.DO_NOTHING, db_column='idcampo', blank=True, null=True)
    idtipo_publi = models.ForeignKey('TipoPublicaciones', models.DO_NOTHING, db_column='idtipo_publi', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'campos_tipopubli_has_tipo_publicaciones'


class Comentarios(models.Model):
    id_comentario = models.AutoField(primary_key=True)
    comentario = models.CharField(max_length=100)
    fechacom = models.DateField()
    id_usuario = models.ForeignKey('Usuarios', models.DO_NOTHING, db_column='id_usuario', blank=True, null=True)
    id_publicacion = models.ForeignKey('Publicaciones', models.DO_NOTHING, db_column='id_publicacion', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'comentarios'


class Mascotas(models.Model):
    id_mascota = models.AutoField(primary_key=True)
    nombremas = models.CharField(max_length=45)
    raza = models.CharField(max_length=45)
    sexo = models.CharField(max_length=45)
    accesorios = models.CharField(max_length=45, blank=True, null=True)
    tamano = models.CharField(max_length=45)
    edad = models.IntegerField(blank=True, null=True)
    caracteristicas = models.CharField(max_length=45)
    idestado_salud = models.ForeignKey('SaludMascota', models.DO_NOTHING, db_column='idestado_salud', blank=True, null=True)
    id_usuario = models.ForeignKey('Usuarios', models.DO_NOTHING, db_column='id_usuario', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mascotas'


class Publicaciones(models.Model):
    id_publicacion = models.AutoField(primary_key=True)
    estado = models.CharField(max_length=45)
    fecha = models.DateField()
    idestado_salud = models.ForeignKey('SaludMascota', models.DO_NOTHING, db_column='idestado_salud', blank=True, null=True)
    id_usuario = models.ForeignKey('Usuarios', models.DO_NOTHING, db_column='id_usuario', blank=True, null=True)
    id_mascota = models.ForeignKey(Mascotas, models.DO_NOTHING, db_column='id_mascota', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'publicaciones'


class PublicacionesCamposTipopubliTipoPublicaciones(models.Model):
    id_publicacion = models.ForeignKey(Publicaciones, models.DO_NOTHING, db_column='id_publicacion', blank=True, null=True)
    idestado_salud = models.ForeignKey('SaludMascota', models.DO_NOTHING, db_column='idestado_salud', blank=True, null=True)
    id_usuario = models.ForeignKey('Usuarios', models.DO_NOTHING, db_column='id_usuario', blank=True, null=True)
    id_mascota = models.ForeignKey(Mascotas, models.DO_NOTHING, db_column='id_mascota', blank=True, null=True)
    idcampo = models.ForeignKey(CamposTipopubli, models.DO_NOTHING, db_column='idcampo', blank=True, null=True)
    idtipo_publi = models.ForeignKey('TipoPublicaciones', models.DO_NOTHING, db_column='idtipo_publi', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'publicaciones_campos_tipopubli_tipo_publicaciones'


class SaludMascota(models.Model):
    idestado_salud = models.AutoField(primary_key=True)
    enfermedades = models.CharField(max_length=60)
    vacunas = models.CharField(max_length=60)
    esterilizacion = models.CharField(max_length=20)
    medicamentos = models.CharField(max_length=60)

    class Meta:
        managed = False
        db_table = 'salud_mascota'


class TipoPublicaciones(models.Model):
    idtipo_publi = models.AutoField(primary_key=True)
    nombretipopubli = models.CharField(db_column='nombreTipoPubli', max_length=45)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tipo_publicaciones'


class Usuarios(models.Model):
    id_usuario = models.AutoField(primary_key=True)
    nombreusu = models.CharField(max_length=60)
    apellidousu = models.CharField(max_length=60)
    documento = models.IntegerField(unique=True)
    correousu = models.CharField(unique=True, max_length=60)
    telefono = models.IntegerField()
    localidad = models.CharField(max_length=60)
    barrio = models.CharField(max_length=60)
    contrasena = models.CharField(max_length=60)

    class Meta:
        managed = False
        db_table = 'usuarios'




