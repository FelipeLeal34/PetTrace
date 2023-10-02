from django.shortcuts import render, HttpResponse, HttpResponseRedirect
from models import Usuarios
from models.User_model import UsuarioRegistrarForm
from django.contrib import auth
from django.urls import reverse

class userController():
    def registro(request):
        template = 'views/login/registro.html'
        
        if request.method == "POST":
            form = UsuarioRegistrarForm(request.POST)
            if form.is_valid():
                # Procesa el formulario y crea un nuevo usuario
                usuario = form.save()
                
                # Autentica al usuario
                user = auth.authenticate(correousu=usuario.correousu, contrasena=form.cleaned_data['contrasena'])
                auth.login(request, user)
                
                return HttpResponseRedirect(reverse('perdidas'))
            else:
                context = {'form': form}
                return render(request, template, context)
        else:
            form = UsuarioRegistrarForm()
            context = {'form': form}
            return render(request, template, context)
