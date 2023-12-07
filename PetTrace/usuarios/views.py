from django.http import JsonResponse, HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from usuarios.forms import *
from usuarios.models import *
from django.urls import reverse, reverse_lazy
from django.contrib.auth import authenticate, login, get_user_model
from django.contrib.auth.decorators import login_required
from usuarios.models import *
from django.db.models import Q
from django.views.decorators.csrf import csrf_exempt
import json
from django.views.generic import UpdateView
from django.urls import reverse_lazy

# Create your views here.
def index(request):
    return render(request, 'index/index.html')

 
def perdidas(request):

     publicaciones = None
     
     if request.method == 'POST':

          filtros = json.loads(request.body)

          request.session['filtros']= filtros
          request.session.modified = True
          request.session.save()


     else:
          filtros = request.session.get('filtros',{})


          args = {}
         



          args = {}
         


          for clave in filtros:
              if filtros[clave]:
              if filtros[clave]:
                    if clave == "color":
                          args['id_mascota__'+clave+'mas'] = str(list(filtros[clave].keys())[0])
                          args['id_mascota__'+clave+'mas'] = str(list(filtros[clave].keys())[0])
                    elif clave == "raza":
                           args['id_mascota__'+clave+'mas'] = str(list(filtros[clave].keys())[0])
                           args['id_mascota__'+clave+'mas'] = str(list(filtros[clave].keys())[0])
                    elif clave == "especie":
                         args['id_mascota__'+clave+'mas'] = str(list(filtros[clave].keys())[0])
                         args['id_mascota__'+clave+'mas'] = str(list(filtros[clave].keys())[0])
                    elif clave == "sexo":
                         args['id_mascota__'+clave+'mas'] = str(list(filtros[clave].keys())[0])
                         args['id_mascota__'+clave+'mas'] = str(list(filtros[clave].keys())[0])
                    elif clave == "tamaño":
                         args['id_mascota__'+clave+'mas'] = str(list(filtros[clave].keys())[0])
                         args['id_mascota__'+clave+'mas'] = str(list(filtros[clave].keys())[0])
                    elif clave == "localidad":
                         args[clave+'Extravio'] = str(list(filtros[clave].keys())[1])
                         args[clave+'Extravio'] = str(list(filtros[clave].keys())[1])
                    elif clave == "barrio":
                         args[clave+'Extravio'] = str(list(filtros[clave].keys())[0])
                         args[clave+'Extravio'] = str(list(filtros[clave].keys())[0])
                    else:
                         args[clave+'Extravio'] = str(list(filtros[clave].keys())[0])
               



          if args :
          
               publicaciones = MascotasPerdidas.objects.select_related('id_mascota', 'id_usuario','idestado_salud').filter(**args)
                    
     
          


          else:
               # publicacion_ptr__usuario
                publicaciones = MascotasPerdidas.objects.select_related('id_mascota', 'id_usuario','idestado_salud')


     return render(request, 'index/perdidas.html', {'publicaciones':publicaciones})


def encontradas(request):

     publicaciones = None

     if request.method == 'POST':

          filtros = json.loads(request.body)

          request.session['filtros']= filtros
          request.session.modified = True
          request.session.save()


     else:
          filtros = request.session.get('filtros',{})


          args = {}
          


          for clave in filtros:
               if filtros[clave]:
                    if clave == "color":
                              args['id_mascota__'+clave+'mas'] = str(list(filtros[clave].keys())[0])
                    elif clave == "raza":
                              args['id_mascota__'+clave+'mas'] = str(list(filtros[clave].keys())[0])
                    elif clave == "especie":
                         args['id_mascota__'+clave+'mas'] = str(list(filtros[clave].keys())[0])
                    elif clave == "sexo":
                         args['id_mascota__'+clave+'mas'] = str(list(filtros[clave].keys())[0])
                    elif clave == "tamaño":
                         args['id_mascota__'+clave+'mas'] = str(list(filtros[clave].keys())[0])
                    elif clave == "localidad":
                         args[clave+'Encuentro'] = str(list(filtros[clave].keys())[1])
                    elif clave == "barrio":
                         args[clave+'Encuentro'] = str(list(filtros[clave].keys())[0])
                    else:
                         args[clave+'Encuentro'] = str(list(filtros[clave].keys())[0])
               


          if args :
          
               publicaciones = MascotasEncontradas.objects.select_related('id_mascota', 'id_usuario','idestado_salud').filter(**args)
                    

          else:

                    publicaciones = MascotasEncontradas.objects.select_related('id_mascota', 'id_usuario','idestado_salud')


     return render(request, 'index/encontradas.html', {'publicaciones':publicaciones})




def informacionPubli(request, id_publicacion):


     publicacion = None
     if(request.path == '/perdidas/'):

     

          publicacion = MascotasPerdidas.objects.select_related('id_mascota' , 'id_usuario','idestado_salud'  ).get(id_publicacion=id_publicacion)


          data = {
               'publicacion': {
                    'localidadExtravio': publicacion.localidadExtravio,
                    'barrioExtravio': publicacion.barrioExtravio,
                    
                    'fechaExtravio': publicacion.fechaExtravio,
                    
                    'horaExtravio': publicacion.horaExtravio,
                    'recompensa': publicacion.recompensa
                    
               },
               'usuario': {
                    'nombre': publicacion.id_usuario.username,
                    'telefono': publicacion.id_usuario.telefono,
                    'email': publicacion.id_usuario.id_usuario.email
                    
               },
               'mascota': {
                    'nombremas': publicacion.id_mascota.nombremas,
                    'especiemas': publicacion.id_mascota.especiemas,
                    'razamas': publicacion.id_mascota.razamas,
                    'sexomas': publicacion.id_mascota.sexomas,
                    'colormas': publicacion.id_mascota.colormas,
                    'edadmas': publicacion.id_mascota.edadmas,
                    'accesoriosmas': publicacion.id_mascota.accesoriosmas,
                    'tamañomas': publicacion.id_mascota.tamañomas,
                    'marcasmas': publicacion.id_mascota.marcasmas,
                    'img1': publicacion.id_mascota.img1.url,
                    'img2': publicacion.id_mascota.img2.url,
                    'img3': publicacion.id_mascota.img3.url,
                    'img4': publicacion.id_mascota.img4.url,
                    'img5': publicacion.id_mascota.img5.url,
                    
               },
               'estado_salud': {
                    'enfermedadesmas': publicacion.idestado_salud.enfermedadesmas,
                    'vacunasmas': publicacion.idestado_salud.mostrar_vacunas(),
                    'esterilizacionmas': publicacion.idestado_salud.esterilizacionmas,
                    'medicamentosmas': publicacion.idestado_salud.medicamentosmas,
               }
          }


     else:

          publicacion = MascotasEncontradas.objects.select_related('id_mascota' , 'id_usuario','idestado_salud'  ).get(id_publicacion=id_publicacion)


          data = {
               'publicacion': {
                    'localidadEncuentro': publicacion.localidadEncuentro,
                    'barrioEncuentro': publicacion.barrioEncuentro,
                    
                    'fechaEncuentro': publicacion.fechaEncuentro,
                    
                    'horaEncuentro': publicacion.horaEncuentro
                    
                    
               },
               'usuario': {
                    'nombre': publicacion.id_usuario.username,
                    'telefono': publicacion.id_usuario.telefono,
                    'email': publicacion.id_usuario.email
                    
               },
               'mascota': {
                    
                    'especiemas': publicacion.id_mascota.especiemas,
                    'razamas': publicacion.id_mascota.razamas,
                    'sexomas': publicacion.id_mascota.sexomas,
                    'colormas': publicacion.id_mascota.colormas,
                    
                    'accesoriosmas': publicacion.id_mascota.accesoriosmas,
                    'tamañomas': publicacion.id_mascota.tamañomas,
                    'marcasmas': publicacion.id_mascota.marcasmas,
                    'img1': publicacion.id_mascota.img1.url,
                    'img2': publicacion.id_mascota.img2.url,
                    'img3': publicacion.id_mascota.img3.url,
                    'img4': publicacion.id_mascota.img4.url,
                    'img5': publicacion.id_mascota.img5.url
                    
               },
               'estado_salud': {
                    'enfermedadesmas': publicacion.idestado_salud.enfermedadesmas,
                    'esterilizacionmas': publicacion.idestado_salud.esterilizacionmas,
               }
          }
    

     return JsonResponse({'status':'success','data':data})

def prueba(request):
    return render(request, 'index/prueba.html')

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


User = get_user_model() # Obtener el modelo de usuario personalizado"""

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


@login_required
def perfil(request):
     if request.method == 'POST':
        form = PerfilForm(request.POST, request.FILES, instance=request.user.perfil)
        if form.is_valid():
            perfil = form.save(commit=False)
            perfil.usuario = request.user
            perfil.save()
            # Redirigir a alguna URL de éxito, por ejemplo, la página de perfil del usuario
            return redirect('perfil')
     else:
          form = PerfilForm(instance=request.user.perfil)
     
     return render(request, 'index/perfil.html', {'form': form})
 


@csrf_exempt # Esto es para evitar el error de CSRF al usar AJAX
def editar_descripcion(request):
    if request.method == "POST":
        # Obtenemos el usuario y el perfil
        usuario = request.user
        perfil = usuario.perfil
        # Obtenemos la nueva descripción del formulario
        nueva_descripcion = request.POST.get("descripcion")
        # Actualizamos el perfil con la nueva descripción
        perfil.descripcion = nueva_descripcion
        perfil.save()
        # Devolvemos una respuesta JSON con el resultado
        return JsonResponse({"success": True, "descripcion": nueva_descripcion})
    else:
        # Si el método no es POST, devolvemos un error
        return JsonResponse({"success": False, "error": "Método no permitido"})
    
def usuario_view(request):
    form = UserRegisterForm()
    context = {'form': form}
    return render(request, 'usuario.html', context)



@csrf_exempt
@login_required
def editar_usuario(request):
    if request.method == "POST":
        usuario = request.user
        perfil = usuario.perfil
        campo_editar = request.POST.get("campo_editar")
        nuevo_valor = request.POST.get("nuevo_valor")

        # Actualizar el campo correspondiente en función de 'campo_editar'
        if campo_editar == "descripcion":
            perfil.descripcion = nuevo_valor
        elif campo_editar == "telefono":
            usuario.telefono = nuevo_valor
        elif campo_editar == "correo":
            usuario.email = nuevo_valor
        elif campo_editar == "nombre_usuario":
            usuario.username = nuevo_valor

        perfil.save()
        usuario.save()

        return JsonResponse({"success": True, "nuevo_valor": nuevo_valor, "campo_editar": campo_editar})
    else:
        return JsonResponse({"success": False, "error": "Método no permitido"})




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

@login_required
def agregarPubliPerdidas(request):
     
     if request.method == 'POST':

          

          # SE INSTANCIAN LOS DOS MODELSFORMS DE FORMS.PY, SE LE INDICA AL FORMULARIO DE MASCOTA QUE SE ENVIARÁN ARCHIVOS
          formMascota = MascotaPerdidaForm(request.POST, request.FILES )
          formSaludMascota = SaludMascotaForm(request.POST)
          formPublicacion = PubliMascotaPerdidaForm(request.POST)
          if formPublicacion.is_valid():
            
            if formSaludMascota.is_valid(): 
               
               if formMascota.is_valid():

                    

                    #SE OBTIEME EL ID DEL USUARIO LOGUEADO, ES DECIR, DEL QUE HIZO LA PUBLICACION
                    id_usuario = request.user.id
                    vacunasmas = request.POST.getlist('vacunasmas')

                    #SE CREA UN OBJETO DE ESE USUARIO
                    usuario = Usuario.objects.get(id=id_usuario)

                    #SE GUARDA EL FORMULARIO DE SALUD MASCOTA YA VALIDADO, ES DECIR, SE GUARDAN LOS DATOS EN LA BASE DE DATOS
                    salud_mascota = formSaludMascota.save()

                    
                    
                    

                    #SE OBTIENE EL ID DE ESE ULTIMO REGISTRO DE LA TABLA 'SALUD_MASCOTA'
                    idestado_salud = salud_mascota.pk

                    #SE CREA UN OBJETO DE ESE ESTADO DE SALUD
                    estado_salud = SaludMascota.objects.get(idestado_salud=idestado_salud)
                    estado_salud.guardar_vacunas(vacunasmas)

                    # SE GUARDAN TODOS LOS claveS DEL FORMULARIO MASCOTAS YA VALIDADO, PERO AÚN NO SE SUBE A LA BASE DE DATOS
                    # SE GUARDAN TODOS LOS claveS DEL FORMULARIO MASCOTAS YA VALIDADO, PERO AÚN NO SE SUBE A LA BASE DE DATOS

                    mascotaIns = formMascota.save(commit=False)


                    #SE LE ASIGNA EN EL CAMPO ID_USUARIO DE LA TABLA MASCOTAS, EL OBJETO 'USUARIO' YA CREADO
                    mascotaIns.id_usuario = usuario

                    #SE LE ASIGNA EN EL CAMPO IDESTADO_SALUD DE LA TABLA MASCOTAS, EL OBJETO 'ESTADO_SALUD' YA CREADO
                    mascotaIns.idestado_salud = estado_salud

                    #SE GUARDA EL FORMULARIO DE MASCOTAS YA VALIDADO, ES DECIR, SE GUARDAN LOS DATOS EN LA BASE DE DATOS
                    mascotaIns.save()

                    


                    #SE OBTIENE EL ID DE ESE ULTIMO REGISTRO DE LA TABLA 'MASCOTAS'
                    id_mascota = mascotaIns.pk

                    #SE CREA UN OBJETO DE ESE ULTIMPO REGISTRO DE LA TABLA 'MASCOTAS'
                    mascota = Mascota.objects.get(id_mascota=id_mascota)



                    # SE GUARDAN LOS DATOS, SE AGREGAN LOS OBJETOS Y LUGARES MANUALMENTE
                    publicacion = formPublicacion.save(commit=False)
                    publicacion.apartado = 'perdidas'
                    publicacion.idestado_salud = estado_salud
                    publicacion.id_usuario = usuario
                    publicacion.id_mascota = mascota

                    #POR ULTIMO SE GUARDA EL FORMULARIO
                    publicacion.save()

                    

                    return redirect('perdidas')
               
               

     return HttpResponse('NO SE GUARDÓ')





@login_required
def agregarPubliEncontradas(request):
     
     if request.method == 'POST':

          

          # SE INSTANCIAN LOS DOS MODELSFORMS DE FORMS.PY, SE LE INDICA AL FORMULARIO DE MASCOTA QUE SE ENVIARÁN ARCHIVOS
          formMascota = MascotaEncontradaForm(request.POST, request.FILES )
          formSaludMascota = SaludMascotaForm(request.POST)
          formPublicacion = PubliMascotaEncontradaForm(request.POST)
          if formPublicacion.is_valid():
            
            print("Formulario de publicacion valido")
            
            if formSaludMascota.is_valid(): 
               

               print("Formulario de salud mascota valido")


               if formMascota.is_valid():

                    print("Formulario de mascota valido")


                    #SE OBTIEME EL ID DEL USUARIO LOGUEADO, ES DECIR, DEL QUE HIZO LA PUBLICACION
                    id_usuario = request.user.id
                    

                    #SE CREA UN OBJETO DE ESE USUARIO
                    usuario = Usuario.objects.get(id=id_usuario)

                    #SE GUARDA EL FORMULARIO DE SALUD MASCOTA YA VALIDADO, ES DECIR, SE GUARDAN LOS DATOS EN LA BASE DE DATOS
                    salud_mascota = formSaludMascota.save()

                

                    #SE OBTIENE EL ID DE ESE ULTIMO REGISTRO DE LA TABLA 'SALUD_MASCOTA'
                    idestado_salud = salud_mascota.pk

                    #SE CREA UN OBJETO DE ESE ESTADO DE SALUD
                    estado_salud = SaludMascota.objects.get(idestado_salud=idestado_salud)
                    

                    # SE GUARDAN TODOS LOS claveS DEL FORMULARIO MASCOTAS YA VALIDADO, PERO AÚN NO SE SUBE A LA BASE DE DATOS

                    mascotaIns = formMascota.save(commit=False)


                    #SE LE ASIGNA EN EL CAMPO ID_USUARIO DE LA TABLA MASCOTAS, EL OBJETO 'USUARIO' YA CREADO
                    mascotaIns.id_usuario = usuario

                    #SE LE ASIGNA EN EL CAMPO IDESTADO_SALUD DE LA TABLA MASCOTAS, EL OBJETO 'ESTADO_SALUD' YA CREADO
                    mascotaIns.idestado_salud = estado_salud

                    #SE GUARDA EL FORMULARIO DE MASCOTAS YA VALIDADO, ES DECIR, SE GUARDAN LOS DATOS EN LA BASE DE DATOS
                    mascotaIns.save()

                    


                    #SE OBTIENE EL ID DE ESE ULTIMO REGISTRO DE LA TABLA 'MASCOTAS'
                    id_mascota = mascotaIns.pk

                    #SE CREA UN OBJETO DE ESE ULTIMPO REGISTRO DE LA TABLA 'MASCOTAS'
                    mascota = Mascota.objects.get(id_mascota=id_mascota)



                    # SE GUARDAN LOS DATOS, SE AGREGAN LOS OBJETOS Y LUGARES MANUALMENTE
                    publicacion = formPublicacion.save(commit=False)
                    publicacion.apartado = 'encontradas'
                    publicacion.idestado_salud = estado_salud
                    publicacion.id_usuario = usuario
                    publicacion.id_mascota = mascota

                    #POR ULTIMO SE GUARDA EL FORMULARIO
                    publicacion.save()

                    

                    return redirect('encontradas')
               
               

     return HttpResponse('NO SE GUARDÓ')




          


@login_required
def editarPubli(request,id_publicacion):

     if request.method == 'POST':

          if(request.path == '/perdidas/'):

               publicacion = MascotasPerdidas.objects.get(id_publicacion=id_publicacion)
               mascotaa = Mascota.objects.get(id_mascota=publicacion.id_mascota.pk)
               saludMascota = SaludMascota.objects.get(idestado_salud=publicacion.idestado_salud.pk)

               formMascota = MascotaPerdidaForm(request.POST, request.FILES, instance=mascotaa)
               formSaludMascota = SaludMascotaForm(request.POST, instance=saludMascota)
               formPublicacion = PubliMascotaPerdidaForm(request.POST, instance=publicacion)


          else:
               publicacion = MascotasEncontradas.objects.get(id_publicacion=id_publicacion)
               mascotaa = Mascota.objects.get(id_mascota=publicacion.id_mascota.pk)
               saludMascota = SaludMascota.objects.get(idestado_salud=publicacion.idestado_salud.pk)

               formMascota = MascotaEncontradaForm(request.POST, request.FILES, instance=mascotaa)
               formSaludMascota = SaludMascotaForm(request.POST, instance=saludMascota)
               formPublicacion = PubliMascotaEncontradaForm(request.POST, instance=publicacion)



def editarPubli(request,id_publicacion):

     if request.method == 'POST':

          if(request.path == '/perdidas/'):

               publicacion = MascotasPerdidas.objects.get(id_publicacion=id_publicacion)
               mascotaa = Mascota.objects.get(id_mascota=publicacion.id_mascota.pk)
               saludMascota = SaludMascota.objects.get(idestado_salud=publicacion.idestado_salud.pk)

               formMascota = MascotaPerdidaForm(request.POST, request.FILES, instance=mascotaa)
               formSaludMascota = SaludMascotaForm(request.POST, instance=saludMascota)
               formPublicacion = PubliMascotaPerdidaForm(request.POST, instance=publicacion)


          else:
               publicacion = MascotasEncontradas.objects.get(id_publicacion=id_publicacion)
               mascotaa = Mascota.objects.get(id_mascota=publicacion.id_mascota.pk)
               saludMascota = SaludMascota.objects.get(idestado_salud=publicacion.idestado_salud.pk)

               formMascota = MascotaEncontradaForm(request.POST, request.FILES, instance=mascotaa)
               formSaludMascota = SaludMascotaForm(request.POST, instance=saludMascota)
               formPublicacion = PubliMascotaEncontradaForm(request.POST, instance=publicacion)



          if formMascota.is_valid() and formSaludMascota.is_valid() and formPublicacion.is_valid():

               

               if(request.path == '/perdidas/'):

                    vacunasmas = request.POST.getlist('vacunasmas')
                    estado_salud =  formSaludMascota.save(commit=False)    
                    estado_salud.guardar_vacunas(vacunasmas) 
                    formMascota.save()
                    formPublicacion.save()
                    estado_salud.save()       
                    return redirect('perdidas')

               if(request.path == '/perdidas/'):

                    vacunasmas = request.POST.getlist('vacunasmas')
                    estado_salud =  formSaludMascota.save(commit=False)    
                    estado_salud.guardar_vacunas(vacunasmas) 
                    formMascota.save()
                    formPublicacion.save()
                    estado_salud.save()       
                    return redirect('perdidas')


               else:
                    formMascota.save()
                    formPublicacion.save()
                    formSaludMascota.save()  
                    return redirect('encontradas')

               else:
                    formMascota.save()
                    formPublicacion.save()
                    formSaludMascota.save()  
                    return redirect('encontradas')


               
               
     return HttpResponse('error al actualizar')






def eliminarPubli(request,id_publicacion):
     if(request.method == "DELETE"):



          if(request.path == "/perdidas/"):
               publicacion = MascotasPerdidas.objects.get(id_publicacion=id_publicacion)
               mascota = Mascota.objects.get(id_mascota=publicacion.id_mascota.pk)
               salud_mascota = SaludMascota.objects.get(idestado_salud=mascota.idestado_salud.pk)



          if(request.path == "/perdidas/"):
               publicacion = MascotasPerdidas.objects.get(id_publicacion=id_publicacion)
               mascota = Mascota.objects.get(id_mascota=publicacion.id_mascota.pk)
               salud_mascota = SaludMascota.objects.get(idestado_salud=mascota.idestado_salud.pk)

               salud_mascota.delete()
               mascota.delete()
               publicacion.delete()

               return HttpResponseRedirect('/perdidas/')
               salud_mascota.delete()
               mascota.delete()
               publicacion.delete()

               return HttpResponseRedirect('/perdidas/')

          else:
               publicacion = MascotasEncontradas.objects.get(id_publicacion=id_publicacion)
               mascota = Mascota.objects.get(id_mascota=publicacion.id_mascota.pk)
               salud_mascota = SaludMascota.objects.get(idestado_salud=mascota.idestado_salud.pk)
               salud_mascota.delete()
               mascota.delete()
               publicacion.delete()
          else:
               publicacion = MascotasEncontradas.objects.get(id_publicacion=id_publicacion)
               mascota = Mascota.objects.get(id_mascota=publicacion.id_mascota.pk)
               salud_mascota = SaludMascota.objects.get(idestado_salud=mascota.idestado_salud.pk)
               salud_mascota.delete()
               mascota.delete()
               publicacion.delete()

               return HttpResponseRedirect('/encontradas/')
          


          


          
               return HttpResponseRedirect('/encontradas/')
          


          


          
          #return JsonResponse({'estado':'exitoso'})
     return redirect('PUBLICACION NO ELIMINADA')
     
     
     









         




