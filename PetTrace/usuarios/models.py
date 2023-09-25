# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models
from django.contrib.auth.models import User

class Usuario(models.Model):
    id_usuario = models.OneToOneField(User,primary_key=True, on_delete=models.CASCADE)
    documento = models.PositiveIntegerField(unique=True)
    telefono = models.IntegerField()
    localidad = models.CharField(max_length=60)
    barrio = models.CharField(max_length=60)
    

    class Meta:
       
        db_table = 'usuarios'


    def __str__(self):
        return f"{self.nombreusu}  {self.apellidousu}"




class TipoPublicaciones(models.Model):
    idtipo_publi = models.AutoField(primary_key=True)
    nombretipopubli = models.CharField(db_column='nombreTipoPubli', max_length=45)  # Field name made lowercase.

    class Meta:
        
        db_table = 'tipo_publicaciones'


    def __str__(self):
        return f"{self.idtipo_publi}  {self.nombretipopubli}"





class CamposTipopubli(models.Model):
    idcampo = models.AutoField(primary_key=True)
    nombrecampo = models.CharField(db_column='nombreCampo', max_length=45)  # Field name made lowercase.

    class Meta:
      
        db_table = 'campos_tipopubli'

    def __str__(self):
        return f"{self.idcampo}  {self.nombrecampo}"


'''

class CamposTipopubliHasTipoPublicaciones(models.Model):
    idcampo = models.ForeignKey(CamposTipopubli, db_column='idcampo', blank=False, null= False, on_delete=models.CASCADE)
    idtipo_publi = models.ForeignKey(TipoPublicaciones, db_column='idtipo_publi', blank=False, null=False, on_delete=models.CASCADE)

    class Meta:
       
        db_table = 'campos_tipopubli_has_tipo_publicaciones'
        



class Comentario(models.Model):
    id_comentario = models.AutoField(primary_key=True)
    comentario = models.CharField(max_length=100)
    fechacom = models.DateTimeField()
    id_usuario = models.ForeignKey(Usuario, db_column='id_usuario', blank=False, null=False,on_delete=models.CASCADE)

    class Meta:
        
        db_table = 'comentarios'

        



'''

class SaludMascota(models.Model):
    idestado_salud = models.AutoField(primary_key=True)
    enfermedades = models.CharField(max_length=60)
    vacunas = models.CharField(max_length=60)
    esterilizacion = models.BooleanField(default=False)
    medicamentos = models.CharField(max_length=60)

    class Meta:
      
        db_table = 'salud_mascota'







class Mascota(models.Model):
    id_mascota = models.AutoField(primary_key=True)
    nombremas = models.CharField(max_length=45)
    especie = models.CharField(max_length=45)
    raza = models.CharField(max_length=45)
    sexo = models.CharField(max_length=45)
    color = models.CharField(max_length=45)
    accesorios = models.CharField(max_length=45, blank=True, null=True)
    tamano = models.CharField(max_length=45)
    edad = models.PositiveIntegerField(blank=True, null=True)
    caracteristicas = models.CharField(max_length=45)
    idestado_salud = models.OneToOneField(SaludMascota, db_column='idestado_salud', blank=False, null=False, on_delete=models.CASCADE)
    id_usuario = models.OneToOneField(Usuario, db_column='id_usuario', blank=False, null=False, verbose_name='id_dueño',on_delete=models.CASCADE)
    img1 = models.ImageField(upload_to="imgmascotas", null=False )
    img2 = models.ImageField(upload_to="imgmascotas", null=False )
    img3 = models.ImageField(upload_to="imgmascotas", null=False )
    img4 = models.ImageField(upload_to="imgmascotas", null=False )
    img5 = models.ImageField(upload_to="imgmascotas", null=False )

    class Meta:
        
        db_table = 'mascotas'


class Publicacion(models.Model):
    id_publicacion = models.AutoField(primary_key=True)
    estado = models.BooleanField(default=True)
    fecha = models.DateTimeField(auto_now=True)
    idestado_salud = models.OneToOneField(SaludMascota, on_delete=models.CASCADE, db_column='idestado_salud', blank=False, null=True)
    id_usuario = models.OneToOneField(Usuario, db_column='id_usuario', blank=False, null=False,on_delete=models.CASCADE)
    id_mascota = models.OneToOneField(Mascota, db_column='id_mascota', blank=False, null=False,on_delete=models.CASCADE)

    class Meta:
       
        db_table = 'publicaciones'

'''
class Publicacion_detalle(models.Model):
    id_publicacion = models.ForeignKey(Publicacion, db_column='id_publicacion', blank=False, null=False, on_delete=models.CASCADE)
    idestado_salud = models.ForeignKey('SaludMascota', db_column='idestado_salud', blank=False, null=False, on_delete=models.CASCADE)
    id_usuario = models.ForeignKey(Usuario, db_column='id_usuario', blank=False, null=False, on_delete=models.CASCADE)
    id_mascota = models.ForeignKey(Mascota, db_column='id_mascota', blank=False, null=False, on_delete=models.CASCADE)
    idcampo = models.ForeignKey(CamposTipopubli, db_column='idcampo', blank=False, null=False, on_delete=models.CASCADE)
    idtipo_publi = models.ForeignKey(TipoPublicaciones, db_column='idtipo_publi', blank=False, null=False, on_delete=models.CASCADE)

    class Meta:

        db_table = 'publicacion_detalle'
        '''










