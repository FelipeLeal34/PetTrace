from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index/index.html')

def perfil(request):
     return render(request, 'index/perfil.html')
 
 
def perdidas(request):
     return render(request, 'index/perdidas.html')

def login(request):
     return render(request, 'login/inicioSesion.html')

def registrar(request):
     return render(request, 'login/registro.html')