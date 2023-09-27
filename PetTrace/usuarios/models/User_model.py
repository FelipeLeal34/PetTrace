from django import forms
from models import Usuarios

class UsuarioRegistrarForm(forms.ModelForm):
    class Meta:
        model = Usuarios  # Reemplaza 'Usuarios' con el nombre correcto de tu modelo de base de datos
        fields = ['nombreusu', 'apellidousu', 'documento', 'correousu', 'telefono', 'localidad', 'barrio', 'contrasena']
        
        labels = {
            'nombreusu': 'Nombre',
            'apellidousu': 'Apellido',
            'documento': 'Documento',
            'correousu': 'Correo',
            'telefono': 'Teléfono',
            'localidad': 'Localidad',
            'barrio': 'Barrio',
            'contrasena': 'Contraseña',
        }
