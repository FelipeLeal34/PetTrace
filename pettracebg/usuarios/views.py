from django.shortcuts import render, redirect
from django.contrib import messages
from PetTrace.forms import UserRegisterForm, UserLoginForm
from django.urls import reverse
from django.contrib.auth import authenticate, login, get_user_model
from django.contrib.auth.decorators import login_required
from usuarios.models import Usuario


# Create your views here.
def index(request):
    return render(request, 'index/index.html')
@login_required
def perfil(request):
     return render(request, 'index/perfil.html')
 
 
def perdidas(request):
     return render(request, 'index/perdidas.html')

def registrar(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():

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

            # se crea el usuario con los datos y se le asignas la contraseña encriptada
            usuario = Usuario(first_name=first_name,last_name=last_name, username=username, documento=documento,email=email, telefono=telefono, localidad=localidad, barrio=barrio, longitud=longitud, latitud=latitud)
            usuario.set_password(password)
            usuario.save()

            # Aquí puedes enviar un mensaje de éxito o redirigir al usuario a otra página
            messages.success(request, f'Usuario {usuario.username} registrado con éxito.')
            return redirect(reverse('login'))
    else:
        form = UserRegisterForm()
        print ('error')
    return render(request, 'login/registro.html', {'form': form})


User = get_user_model() # Obtener el modelo de usuario personalizado

def login(request):
    if request.user.is_authenticated:
        # Si el usuario está logueado, redirigirlo a su perfil
        return redirect('perfil')
    else:
        # Si el usuario no está logueado, mostrarle el formulario de login
        context = {}
        if request.method == 'POST':
            # Obtener los datos del formulario
            username = request.POST.get('username')
            password = request.POST.get('password')
            # Autenticar al usuario
            user = authenticate(request, username=username, password=password)
            if user is not None:
                # Si el usuario existe y está activo, iniciar sesión y redirigir
                if user.is_active:
                    login(request, user)
                else:
                    # Si el usuario está inactivo o la contraseña es incorrecta, mostrar un mensaje de error
                    context['error'] = 'Contraseña incorrecta.'
            else:
                # Si el usuario no existe, mostrar un mensaje de error
                context['error'] = 'El usuario no esta registrado'
        # Crear una instancia del formulario
        form = UserLoginForm()
        # Pasar el formulario y el contexto al renderizar la plantilla
        return render(request, 'login/inicioSesion.html', {'form': form, **context})



def reset(request):
    return render(request, 'login/resetPassword/reset.html')
def resetHecho(request):
    return render(request, 'login/resetPassword/resetHecho.html')
def resetEmail(request):
    return render(request, 'login/resetPassword/resetEmail.html')
def resetConfirm(request):
    return render(request, 'login/resetPassword/resetConfirm.html')
def resetComplete(request):
    return render(request, 'login/resetPassword/resetComplete.html')





"""def login(request):
    
    documento = request.POST["documento"]
    password = request.POST["password"]
    user = authenticate(request, documento=documento, password=password)
    if user is not None:
        login(request, user)
        # Redirect to a success page.
        return render(request, 'index/perfil.html')
    else:
        from django.core.exceptions import ValidationError
        # Return an 'invalid login' error message.
        raise ValidationError('El usuario no esta registrado.')"""
    
    
    
    
    
    
    
    
    
"""template_name = "login/inicioSesion.html"
    form_class = MiLoginForm
    
    form = MiLoginForm()
        if documento is not None and password:
        # Busca al usuario por su email en la base de datos
            try:
                user = Usuario.objects.get(documento=documento)
            except Usuario.DoesNotExist:
            # Si no existe el usuario, lanza un error de validación
                raise ValidationError('El usuario no esta registrado.')
            else:
                # Si existe el usuario, verifica su contraseña
                self.user_cache = authenticate(self.request, documento=user.documento, password=password)
                if self.user_cache is None:
                    # Si la contraseña es incorrecta, lanza un error de validación
                    raise ValidationError('El correo o la contraseña son incorrectos.')
                else:
                    # Si la contraseña es correcta, guarda al usuario en el cache y retorna los datos limpios
                    self.confirm_login_allowed(self.user_cache)
                    #raise ValidationError('si sirve pero no reenvia.')"""
                    
    
    
    