from django import forms
from . models import *



class agregarMascotaForm(forms.ModelForm):

    class Meta:

        model = Mascota
        fields = ['nombremas','raza','sexo','accesorios','color','tamano','edad','caracteristicas','img1','img2','img3','img4','img5']


class agregarSaludMascotaForm(forms.ModelForm):

    class Meta:

        model = SaludMascota
        fields = ['enfermedades','vacunas','esterilizacion','medicamentos']



'''
class publicacionForm(forms.ModelForm):

    class Meta:

        model = Publicacion
        fields = '''
   