# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from datetime import date, datetime
from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save
from django.dispatch import receiver
import os



"""como puedo obtener el nombre de la localidad y barrio de bogota colombia con las cordenadas y viceversa en djago con ArcGIS

dime paso por paso y yo te voy diciendo para avanzar, todo el codigo que me des damelo en un bloque de texto para entenderlo mejor:

model

class Usuario(AbstractUser):
    id = models.AutoField(primary_key=True)
    documento = models.PositiveIntegerField(unique=True)
    telefono = models.IntegerField()
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

    def get_upload_path(self, instance, filename): return os.path.join('imgperfil', str(instance.usuario.id), filename)
    imagen = models.ImageField(upload_to=get_upload_path)

    descripcion = models.CharField(max_length=200, default='Nuevo usuario de PetTrace')
    num_mascotas = models.IntegerField(default=0)
    
    @receiver(post_save, sender=Usuario)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            Perfil.objects.create(usuario=instance)

    @receiver(post_save, sender=Usuario)
    def save_user_profile(sender, instance, **kwargs):
        instance.perfil.save()


form:
class UserRegisterForm(forms.ModelForm):
    class Meta:
        model = Usuario
        fields = ['first_name', 'last_name', 'username', 'documento', 'email', 'telefono', 'password', 'localidad', 'barrio', 'longitud', 'latitud']
        widgets = {
            'password': forms.PasswordInput(attrs={'id': 'password'})
        }

    def __init__(self, *args, **kwargs):
        super(UserRegisterForm, self).__init__(*args, **kwargs)
        # Ocultar los campos
        self.fields['longitud'].widget = forms.HiddenInput()
        self.fields['latitud'].widget = forms.HiddenInput() 
    def clean_longitud(self):
        # Obtiene el valor del campo longitud
        longitud = self.cleaned_data.get('longitud')
        if longitud:
            try:
                # Convierte el valor a un número decimal
                longitud = float(longitud)
            except ValueError:
                # Si no se puede convertir, lanza un error de validación
                raise ValidationError('La longitud debe ser un número decimal.')
        return longitud

    def clean_latitud(self):
        # Obtiene el valor del campo latitud
        latitud = self.cleaned_data.get('latitud')
        if latitud:
            try:
                # Convierte el valor a un número decimal
                latitud = float(latitud)
            except ValueError:
                # Si no se puede convertir, lanza un error de validación
                raise ValidationError('La latitud debe ser un número decimal.')
        return latitud"""



class Usuario(AbstractUser):
    id = models.AutoField(primary_key=True)
    documento = models.PositiveIntegerField(unique=True)
    telefono = models.IntegerField()
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

    def get_upload_path(self, instance, filename): return os.path.join('imgperfil', str(instance.usuario.id), filename)
    imagen = models.ImageField(upload_to=get_upload_path)

    descripcion = models.CharField(max_length=200, default='Nuevo usuario de PetTrace')
    num_mascotas = models.IntegerField(default=0)
    
    @receiver(post_save, sender=Usuario)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            Perfil.objects.create(usuario=instance)

    @receiver(post_save, sender=Usuario)
    def save_user_profile(sender, instance, **kwargs):
        instance.perfil.save()


class Comentario(models.Model): 
    id_comentario = models.AutoField(primary_key=True) 
    comentario = models.CharField(max_length=100) 
    fechacom = models.DateTimeField() 
    id_usuario = models.ForeignKey(Usuario, db_column='id_usuario', blank=False, null=False,on_delete=models.CASCADE, related_name='comentarios')
    class Meta:
        
        db_table = 'comentarios'

        
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
    nombremas = models.CharField(max_length=45)
    especiemas = models.CharField(max_length=45, null=False, default='')
    razamas = models.CharField(max_length=45, null=False, default='')
    sexomas = models.CharField(max_length=45, null=False, default='')
    colormas = models.CharField(max_length=45, null=False, default='')
    accesoriosmas = models.CharField(max_length=45, blank=True, null=True)
    tamañomas = models.CharField(max_length=45, null=False, default='')
    edadmas = models.PositiveIntegerField(blank=True, null=True)
    marcasmas = models.CharField(max_length=45, null=True)
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
    apartado = models.CharField(max_length=50, null=False, blank=False, default='')
    idestado_salud = models.OneToOneField(SaludMascota, on_delete=models.CASCADE, db_column='idestado_salud', blank=False, null=True)
    id_usuario = models.ForeignKey(Usuario, db_column='id', blank=False, null=False,on_delete=models.CASCADE)
    id_mascota = models.OneToOneField(Mascota, db_column='id_mascota', blank=False, null=False,on_delete=models.CASCADE)

    

    class Meta:
       
        db_table = 'publicaciones'


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
    fechaEncuentro = models.DateTimeField(default=date.today, null=False, blank=False)

    recompensa = models.FloatField(null=True, blank=True)

    class Meta:
       
        db_table = 'mascotas_encontradas'


class MascotasAdopcion(Publicacion):

    motivoAdopcion = models.CharField(max_length=200, null=False, blank=False)
    requisitosAdopcion = models.CharField(max_length=500, null=False, blank=False)

    class Meta:
       
        db_table = 'mascotas_adopcion'