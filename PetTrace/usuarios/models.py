# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
import datetime
from datetime import date
import datetime
from datetime import date
from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save
from django.dispatch import receiver
import os
from django.templatetags.static import static


class Usuario(AbstractUser):
    id = models.AutoField(primary_key=True)
    documento = models.PositiveIntegerField(unique=True)
    telefono = models.BigIntegerField()
    localidad = models.CharField(max_length=60, null=True, blank=True)
    barrio = models.CharField(max_length=60, null=True, blank=True)
    longitud = models.FloatField(null=True)
    latitud = models.FloatField(null=True)


    USERNAME_FIELD = 'documento'
    REQUIRED_FIELDS = ['username', 'email', 'first_name', 'last_name']

    class Meta:
        db_table = 'usuarios'


class Perfil(models.Model):
    usuario = models.OneToOneField(Usuario, on_delete=models.CASCADE, related_name='perfil')

    def get_upload_path(self, filename):
        return os.path.join('imgperfil', str(self.usuario.id), filename)

    imagen = models.ImageField(upload_to=get_upload_path)
    descripcion = models.CharField(max_length=200, default='Nuevo usuario de PetTrace')
    fecha_creacion = models.DateField(default=datetime.date.today)


    @receiver(post_save, sender=Usuario)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            Perfil.objects.create(usuario=instance)

    @receiver(post_save, sender=Usuario)
    def save_user_profile(sender, instance, **kwargs):
        instance.perfil.save()
    




        
class SaludMascota(models.Model):
    idestado_salud = models.AutoField(primary_key=True)
    enfermedadesmas = models.CharField(max_length=60, null=True, blank=True)
    vacunasmas = models.CharField(max_length=1000, blank=True, null=True)
    esterilizacionmas = models.CharField(max_length=2, blank=False, null=False)
    medicamentosmas = models.CharField(max_length=60, blank=True, null=True)

    class Meta:
      
        db_table = 'salud_mascota'

    def guardar_vacunas(self, vacunas):
        vacunas_str = ",".join(vacunas)
        self.vacunasmas = vacunas_str
        self.save()

    def mostrar_vacunas(self):
        if self.vacunasmas:
            return self.vacunasmas.split(',')
        else:
            return []


class Mascota(models.Model):
    id_mascota = models.AutoField(primary_key=True)
    nombremas = models.CharField(max_length=45, null='True')
    especiemas = models.CharField(max_length=45, null=False, default='')
    razamas = models.CharField(max_length=45, null=False, default='')
    sexomas = models.CharField(max_length=45, null=False, default='')
    colormas = models.CharField(max_length=45, null=False, default='')
    accesoriosmas = models.CharField(max_length=100, blank=True, null=True)
    tamañomas = models.CharField(max_length=45, null=False, default='')
    edadmas = models.FloatField(blank=True, null=True)
    marcasmas = models.CharField(max_length=150, null=True)
    idestado_salud = models.ForeignKey(SaludMascota, db_column='idestado_salud', blank=False, null=False, on_delete=models.CASCADE)
    id_usuario = models.ForeignKey(Usuario, db_column='id', blank=False, null=False, verbose_name='id_dueño',on_delete=models.CASCADE)
    
    personalidadmas = models.CharField(max_length=150, null=False, blank=False, default='')
    entrenamientomas = models.CharField(max_length=150, null=True, blank=True)
    socializacionmas = models.CharField(max_length=150, null=False, blank=False, default='')


    img1 = models.ImageField(upload_to="imgmascotas", null=False, default="")
    img2 = models.ImageField(upload_to="imgmascotas", null=False, default="")
    img3 = models.ImageField(upload_to="imgmascotas", null=False, default="")
    img4 = models.ImageField(upload_to="imgmascotas", null=False, default="")
    img5 = models.ImageField(upload_to="imgmascotas", null=False, default="")

    class Meta:
        
        db_table = 'mascotas'


class Publicacion(models.Model):
    id_publicacion = models.AutoField(primary_key=True)
    estadoPubli = models.BooleanField(default=True)
    fechaPubli = models.DateTimeField(auto_now=True)
    fechaPublicacion = models.DateField(auto_now=True)
    apartado = models.CharField(max_length=50, null=False, blank=False, default='')
    idestado_salud = models.OneToOneField(SaludMascota, on_delete=models.CASCADE, db_column='idestado_salud', blank=False, null=True)
    id_usuario = models.ForeignKey(Usuario, db_column='id', blank=False, null=False,on_delete=models.CASCADE)
    id_mascota = models.OneToOneField(Mascota, db_column='id_mascota', blank=False, null=False,on_delete=models.CASCADE)

    

    class Meta:
       
        db_table = 'publicaciones'




class Comentario(models.Model): 
    id_comentario = models.AutoField(primary_key=True) 
    comentario = models.CharField(max_length=400) 
    fechacom = models.DateTimeField(auto_now=True) 
    id_usuario = models.ForeignKey(Usuario, db_column='id_usuario', blank=False, null=False,on_delete=models.CASCADE, related_name='comentarios')
    id_publicacion = models.ForeignKey(Publicacion, db_column='id_publicacion', blank=False, null=False,on_delete=models.CASCADE)

    class Meta:
    
        db_table = 'comentarios'






class publicacionesFavoritas(models.Model):
    id = models.AutoField(primary_key=True)
    id_publicacion = models.ForeignKey(Publicacion, null=False, on_delete=models.CASCADE)
    id_usuario = models.ForeignKey(Usuario, null=False, on_delete=models.CASCADE)


    class Meta:
       
        db_table = 'publicacionesFavoritas'





class MascotasPerdidas(Publicacion):
    localidadExtravio = models.CharField(max_length=60, null=False, blank=False)
    barrioExtravio = models.CharField(max_length=60, null=False, blank=False)
    fechaExtravio = models.DateField(default=date.today, null=False, blank=False)
    horaExtravio = models.TimeField(null=True, blank=True)
    recompensa = models.FloatField(null=True, blank=True)

    def mostrarFecha(self):
        fechaExtravio = self.fechaExtravio.strftime('%Y-%m-%d')
        return fechaExtravio

    def mostrarHora(self):
        horaExtravio = self.horaExtravio.strftime('%H:%M:%S')
        return horaExtravio


    class Meta:
       
        db_table = 'mascotas_perdidas'
     

class MascotasEncontradas(Publicacion):

    localidadEncuentro = models.CharField(max_length=60, null=False, blank=False)
    barrioEncuentro = models.CharField(max_length=60, null=False, blank=False)
    fechaEncuentro = models.DateField(default=date.today, null=False, blank=False)
    horaEncuentro = models.TimeField(null=True, blank=True)
    recompensa = models.FloatField(null=True, blank=True)

    class Meta:
       
        db_table = 'mascotas_encontradas'


class MascotasAdopcion(Publicacion):

    motivoAdopcion = models.CharField(max_length=200, null=False, blank=False)
    requisitosAdopcion = models.CharField(max_length=500, null=False, blank=False)
    localidadAdopcion = models.CharField(max_length=60, null=False, blank=False, default='')
    barrioAdopcion = models.CharField(max_length=60, null=False, blank=False, default='')


    class Meta:
       
        db_table = 'mascotas_adopcion'