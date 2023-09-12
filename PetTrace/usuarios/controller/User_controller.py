from django.shortcuts import render,HttpResponse
from usuarios.models.User_model import UsuarioRegistrar
from django.http import HttpResponseRedirect
from django.contrib import auth
from django.urls import reverse

class userController():

    def registro(request):

        template='views/login/registro.html'
        Demail = None
        if request.method== "POST":
            form=UsuarioRegistrar(request.POST)
            if form.is_valid():
                
                #username=form.cleaned_data.get('Usuariousu')
                #return HttpResponseRedirect("admin/")
                #return HttpResponse('<h1>hola niños</h1>%s' %username)
                email = form.cleaned_data.get('Correousu')
                usuarios_db = UsuarioRegistrar.objects.filter(correousu=email)
                for item in usuarios_db:
                    Demail = item.email
                if Demail != None:
                    context={'form':form,'error':'El correo ya esta registrado'}
                    return render(request,template,context)
                else:
                    password = form.cleaned_data.get('contrasena')
                    nombre = form.cleaned_data.get('Nombreusu')
                    apellido = form.cleaned_data.get('Apellidousu')
                    documento = form.cleaned_data.get('Documentousu')
                    telefono = form.cleaned_data.get('Telefonousu')
                    barrio = form.cleaned_data.get('Barriousu')
                    localidad = form.cleaned_data.get('Localidadusu')
                    
                    UsuarioRegistrar.objects.create_user(
                                            nombreusu = nombre,
                                            apellidousu = apellido,
                                            documento = documento,
                                            correousu = email,
                                            telefono = telefono,
                                            localidad = localidad,
                                            barrio = barrio,
                                            contrasena = password,
                                            is_staff = 1)
                    user = auth.authenticate(correousu = email, contrasena = password)
                    auth.login(request, user)
                    return HttpResponseRedirect (reverse ('perdidas'))
                    #context={'form':form}
                    #return render(request,template,context)
            else:
                context={'form':form}
                return render(request,template,context)
          
        else:
            context={'form':UsuarioRegistrar()}
            return render(request,template, context)