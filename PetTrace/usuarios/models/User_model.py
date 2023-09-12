from django import forms

class UsuarioRegistrar(forms.Form):
    Nombreusu = forms.CharField(label='Nombre')
    Apellidousu = forms.CharField(label='Apellido')
    Documentousu = forms.IntegerField(label='Documento')
    Correousu = forms.CharField(label='Correo')
    Telefonousu = forms.IntegerField(label='Telefono')
    Localidadusu = forms.CharField(label='Localidad', required=False)
    Barriousu = forms.CharField(label='Barrio', required=False)
    contrasena = forms.CharField(widget=forms.PasswordInput)