from django import forms
from . models import *

from django import forms
from usuarios.models import *
from django.core.exceptions import ValidationError




class MascotaPerdidaForm(forms.ModelForm):

    class Meta:

        model = Mascota
        
        fields = ['nombremas','especiemas','razamas','tamañomas','sexomas','colormas','edadmas','marcasmas','accesoriosmas','img1','img2','img3','img4','img5']

        
        
        

class SaludMascotaForm(forms.ModelForm):

    class Meta:

        model = SaludMascota
        fields = ['enfermedadesmas','esterilizacionmas','medicamentosmas']


class MascotaEncontradaForm(forms.ModelForm):

    class Meta:

        model = Mascota
        fields = ['especiemas','razamas','sexomas','accesoriosmas','colormas','tamañomas','marcasmas','accesoriosmas','img1','img2','img3','img4','img5']



class MascotaAdopcionForm(forms.ModelForm):

    class Meta:

        model = Mascota
        fields = ['nombremas','especiemas','razamas','sexomas','colormas','edadmas','tamañomas','personalidadmas','entrenamientomas','socializacionmas','img1','img2','img3','img4','img5']



class PubliMascotaPerdidaForm(forms.ModelForm):

    class Meta:

        model = MascotasPerdidas
        fields = ['localidadExtravio','barrioExtravio','fechaExtravio','horaExtravio','recompensa']



class PubliMascotaEncontradaForm(forms.ModelForm):

    class Meta:

        model = MascotasEncontradas
        fields = ['localidadEncuentro','barrioEncuentro','fechaEncuentro','horaEncuentro','recompensa']


class PubliMascotaAdopcionForm(forms.ModelForm):

    class Meta:

        model = MascotasAdopcion
        fields = ['motivoAdopcion','requisitosAdopcion','localidadAdopcion','barrioAdopcion']




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
        return latitud
    

class UserLoginForm(forms.ModelForm):
    class Meta:
        model = Usuario
        fields = ['username', 'password'] # Cambiar el nombre del campo email por username

    def __init__(self, *args, **kwargs):
        super(UserLoginForm, self).__init__(*args, **kwargs)
        # Cambiar el nombre del campo email por username
        self.fields['username'] = self.fields.pop('email')
        # Modificar los widgets de los campos para agregar atributos o estilos
        self.fields['username'].widget.attrs.update({'autofocus': True, })
        self.fields['password'].widget.attrs.update({'placeholder': 'Ingresa tu contraseña'})




