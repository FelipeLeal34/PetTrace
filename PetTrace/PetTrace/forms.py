from django import forms
from usuarios.models import Usuario
from django.contrib.auth.forms import AuthenticationForm
from django.core.exceptions import ValidationError
from django.contrib.auth import authenticate

class UserRegisterForm(forms.ModelForm):
    class Meta:
        model = Usuario
        fields = ['first_name', 'last_name', 'username', 'documento', 'email', 'telefono', 'password', 'longitud', 'latitud']

    def __init__(self, *args, **kwargs):
        super(UserRegisterForm, self).__init__(*args, **kwargs)
        self.fields['longitud'].widget = forms.HiddenInput()
        self.fields['latitud'].widget = forms.HiddenInput() # Oculta el campo en el template
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
    
"""class UserRegisterForm(UserCreationForm):
    class Meta:
        model = Usuario
        fields = ['documento', 'telefono', 'localidad', 'barrio']

    def save(self, commit=True):
        user = super().save(commit=False)
        user.username = self.cleaned_data['nombreusu'][0].upper() + self.cleaned_data['apellidousu'][0].upper()  # Concatenate and capitalize first letters
        if commit:
            user.save()
        return user"""

class MiLoginForm(AuthenticationForm):
    # Aquí puedes definir los campos adicionales o modificar los existentes del formulario de inicio de sesión
    documento = forms.IntegerField(label="Documento")
    password = forms.CharField(label="Contraseña", strip=False, widget=forms.PasswordInput)

    def clean(self):
        # Aquí puedes validar los datos del usuario y autenticarlo
        documento = self.cleaned_data.get('documento')
        password = self.cleaned_data.get('password')

        if documento is not None and password:
            # Busca al usuario por su email en la base de datos
            try:
                user = Usuario.objects.get(documento=documento)
            except Usuario.DoesNotExist:
                # Si no existe el usuario, lanza un error de validación
                raise ValidationError('El correo o la contraseña son incorrectos.')
            else:
                # Si existe el usuario, verifica su contraseña
                self.user_cache = authenticate(self.request, documento=user.documento, password=password)
                if self.user_cache is None:
                    # Si la contraseña es incorrecta, lanza un error de validación
                    raise ValidationError('El correo o la contraseña son incorrectos.')
                else:
                    # Si la contraseña es correcta, guarda al usuario en el cache y retorna los datos limpios
                    self.confirm_login_allowed(self.user_cache)
                    return self.cleaned_data

        return self.cleaned_data