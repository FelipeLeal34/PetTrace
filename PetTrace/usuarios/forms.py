from django import forms
from . models import *



class MascotaPerdidaForm(forms.ModelForm):

    class Meta:

        model = Mascota
        
        fields = ['nombremas','especiemas','razamas','sexomas','accesoriosmas','colormas','tamañomas','edadmas','marcasmas','img1','img2','img3','img4','img5']
        
        def __init__(self, *args, **kwargs):
            super(MascotaPerdidaForm, self).__init__(*args, **kwargs)
            
            
            if self.instance:
                
                for field_name in self.fields:
                    self.fields[field_name].required = False

class SaludMascotaForm(forms.ModelForm):

    class Meta:

        model = SaludMascota
        fields = ['enfermedadesmas','esterilizacionmas','medicamentosmas']


class MascotaEncontradaForm(forms.ModelForm):

    class Meta:

        model = Mascota
        fields = ['especiemas','razamas','sexomas','accesoriosmas','colormas','tamañomas','marcasmas','img1','img2','img3','img4','img5']



class MascotaAdopcion(forms.ModelForm):

    class Meta:

        model = Mascota
        fields = ['nombremas','especiemas','razamas','sexomas','colormas','tamañomas','personalidadmas','entrenamientomas','socializacionmas','img1','img2','img3','img4','img5']



class PubliMascotaPerdidaForm(forms.ModelForm):

    class Meta:

        model = MascotasPerdidas
        fields = ['fechaExtravio','recompensa','localidadExtravio','barrioExtravio']



class PubliMascotaEncontradaForm(forms.ModelForm):

    class Meta:

        model = MascotasEncontradas
        fields = ['fechaEncuentro','recompensa']


class PubliMascotaAdopcionForm(forms.ModelForm):

    class Meta:

        model = MascotasAdopcion
        fields = ['motivoAdopcion','requisitosAdopcion']

