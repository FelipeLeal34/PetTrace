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



class MascotaAdopcion(forms.ModelForm):

    class Meta:

        model = Mascota
        fields = ['nombremas','especiemas','razamas','sexomas','colormas','tamañomas','personalidadmas','entrenamientomas','socializacionmas','img1','img2','img3','img4','img5']



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



class comentarioForm(forms.ModelForm):

    class Meta:
        model = Comentario
        fields = ['comentario']





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
        fields = ['documento', 'password']







class UserRegisterForm(forms.ModelForm):
    class Meta:
        model = Usuario
        fields = ['first_name', 'last_name', 'username', 'documento', 'email', 'telefono', 'password', 'localidad', 'barrio', 'longitud', 'latitud']
        widgets = {
            'documento': forms.NumberInput(attrs={'type': 'number', 'min': '0'}),
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
        fields = ['documento', 'password']
        widgets = {
            'documento': forms.NumberInput(attrs={'type': 'number', 'min': '0'}),
        }
    
    

class PerfilForm(forms.ModelForm):
    class Meta:
        model = Perfil
        fields = ['imagen']
        widgets = {
            'imagen': forms.FileInput(attrs={'id': 'id_imagen'}),
        }

    def clean_imagen(self):
        imagen = self.cleaned_data.get('imagen')
        if imagen:
            if not imagen.name.endswith(('.jpg', '.jpeg', '.png', '.gif')):
                raise ValidationError('Formato de archivo no admitido. Solo se admiten archivos JPG, JPEG, PNG, y GIF.')
        return imagen
