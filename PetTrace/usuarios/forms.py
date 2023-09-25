from django import forms
from . models import *



class agregarMascotaForm(forms.ModelForm):

    class Meta:

        model = Mascota
        fields = ['nombremas','razamas','sexomas','accesoriosmas','colormas','tamañomas','edadmas','marcasmas','img1','img2','img3','img4','img5']


class agregarSaludMascotaForm(forms.ModelForm):

    class Meta:

        model = SaludMascota
        fields = ['enfermedadesmas','vacunasmas','esterilizacionmas','medicamentosmas']



'''
class publicacionForm(forms.ModelForm):

    class Meta:

        model = Publicacion
        fields = ['estado','fecha','recompensa']'''
   