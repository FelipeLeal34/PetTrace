from django.shortcuts import render, redirect
from django.contrib import messages
from PetTrace.forms import UserRegisterForm
from django.urls import reverse
from django.urls import reverse_lazy
from PetTrace.forms import MiLoginForm
from django.contrib.auth.views import LoginView
from django.contrib.auth.hashers import make_password

from usuarios.models import Usuario


# Create your views here.
def index(request):
    return render(request, 'index/index.html')

def perfil(request):
     return render(request, 'index/perfil.html')
 
 
def perdidas(request):
     return render(request, 'index/perdidas.html')

def registrar(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            # Aquí pones el código que te he mostrado para crear el usuario con la contraseña encriptada
            from django.contrib.auth.hashers import make_password

            # Recibes los datos del formulario
            first_name = form.cleaned_data.get('first_name')
            last_name = form.cleaned_data.get('last_name')
            documento = form.cleaned_data.get('documento')
            email = form.cleaned_data.get('email')
            telefono = form.cleaned_data.get('telefono')
            localidad = form.cleaned_data.get('localidad')
            barrio = form.cleaned_data.get('barrio')
            username = form.cleaned_data.get('username')
            longitud = form.cleaned_data.get('longitud')
            latitud = form.cleaned_data.get('latitud')
            password = form.cleaned_data.get('password')

            # Creas el usuario con los datos y le asignas la contraseña encriptada
            usuario = Usuario(first_name=first_name,last_name=last_name,documento=documento,email=email, telefono=telefono, localidad=localidad, barrio=barrio, username=username, longitud=longitud, latitud=latitud)
            usuario.set_password(password)
            usuario.save()

            # Aquí puedes enviar un mensaje de éxito o redirigir al usuario a otra página
            messages.success(request, f'Usuario {usuario.username} registrado con éxito.')
            return redirect(reverse('perfil'))
    else:
        form = UserRegisterForm()
    return render(request, 'login/registro.html', {'form': form})

class login(LoginView):
    template_name = "login/inicioSesion.html"
    form_class = MiLoginForm
    def get_success_url(self):
    # Aquí puedes implementar tu lógica para redirigir al usuario
        print(Usuario.is_authenticated) # Esto imprimirá True o False en la consola
        print(reverse('perfil')) # Esto imprimirá la url del perfil en la consola

        return reverse('perfil')
    