# Generated by Django 3.2.12 on 2023-11-25 04:33

import datetime
from django.conf import settings
import django.contrib.auth.models
import django.contrib.auth.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import usuarios.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email address')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('documento', models.PositiveIntegerField(unique=True)),
                ('telefono', models.IntegerField()),
                ('localidad', models.CharField(blank=True, max_length=60, null=True)),
                ('barrio', models.CharField(blank=True, max_length=60, null=True)),
                ('longitud', models.FloatField(null=True)),
                ('latitud', models.FloatField(null=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'db_table': 'usuarios',
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Mascota',
            fields=[
                ('id_mascota', models.AutoField(primary_key=True, serialize=False)),
                ('nombremas', models.CharField(max_length=45, null='True')),
                ('especiemas', models.CharField(default='', max_length=45)),
                ('razamas', models.CharField(default='', max_length=45)),
                ('sexomas', models.CharField(default='', max_length=45)),
                ('colormas', models.CharField(default='', max_length=45)),
                ('accesoriosmas', models.CharField(blank=True, max_length=45, null=True)),
                ('tamañomas', models.CharField(default='', max_length=45)),
                ('edadmas', models.PositiveIntegerField(blank=True, null=True)),
                ('marcasmas', models.CharField(max_length=45, null=True)),
                ('personalidadmas', models.CharField(default='', max_length=150)),
                ('entrenamientomas', models.CharField(blank=True, max_length=150, null=True)),
                ('socializacionmas', models.CharField(default='', max_length=150)),
                ('img1', models.ImageField(default='', upload_to='imgmascotas')),
                ('img2', models.ImageField(default='', upload_to='imgmascotas')),
                ('img3', models.ImageField(default='', upload_to='imgmascotas')),
                ('img4', models.ImageField(default='', upload_to='imgmascotas')),
                ('img5', models.ImageField(default='', upload_to='imgmascotas')),
                ('id_usuario', models.ForeignKey(db_column='id', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='id_dueño')),
            ],
            options={
                'db_table': 'mascotas',
            },
        ),
        migrations.CreateModel(
            name='Publicacion',
            fields=[
                ('id_publicacion', models.AutoField(primary_key=True, serialize=False)),
                ('estadoPubli', models.BooleanField(default=True)),
                ('fechaPubli', models.DateTimeField(auto_now=True)),
                ('apartado', models.CharField(default='', max_length=50)),
                ('id_mascota', models.OneToOneField(db_column='id_mascota', on_delete=django.db.models.deletion.CASCADE, to='usuarios.mascota')),
                ('id_usuario', models.ForeignKey(db_column='id', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'publicaciones',
            },
        ),
        migrations.CreateModel(
            name='SaludMascota',
            fields=[
                ('idestado_salud', models.AutoField(primary_key=True, serialize=False)),
                ('enfermedadesmas', models.CharField(blank=True, max_length=60, null=True)),
                ('vacunasmas', models.CharField(blank=True, max_length=1000, null=True)),
                ('esterilizacionmas', models.CharField(max_length=2)),
                ('medicamentosmas', models.CharField(blank=True, max_length=60, null=True)),
            ],
            options={
                'db_table': 'salud_mascota',
            },
        ),
        migrations.CreateModel(
            name='MascotasAdopcion',
            fields=[
                ('publicacion_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='usuarios.publicacion')),
                ('motivoAdopcion', models.CharField(max_length=200)),
                ('requisitosAdopcion', models.CharField(max_length=500)),
            ],
            options={
                'db_table': 'mascotas_adopcion',
            },
            bases=('usuarios.publicacion',),
        ),
        migrations.CreateModel(
            name='MascotasEncontradas',
            fields=[
                ('publicacion_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='usuarios.publicacion')),
                ('localidadEncuentro', models.CharField(max_length=60)),
                ('barrioEncuentro', models.CharField(max_length=60)),
                ('fechaEncuentro', models.DateField(default=datetime.date.today)),
                ('horaEncuentro', models.TimeField(blank=True, null=True)),
                ('recompensa', models.FloatField(blank=True, null=True)),
            ],
            options={
                'db_table': 'mascotas_encontradas',
            },
            bases=('usuarios.publicacion',),
        ),
        migrations.CreateModel(
            name='MascotasPerdidas',
            fields=[
                ('publicacion_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='usuarios.publicacion')),
                ('localidadExtravio', models.CharField(max_length=60)),
                ('barrioExtravio', models.CharField(max_length=60)),
                ('fechaExtravio', models.DateField(default=datetime.date.today)),
                ('horaExtravio', models.TimeField(blank=True, null=True)),
                ('recompensa', models.FloatField(blank=True, null=True)),
            ],
            options={
                'db_table': 'mascotas_perdidas',
            },
            bases=('usuarios.publicacion',),
        ),
        migrations.CreateModel(
            name='publicacionesFavoritas',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('id_publicacion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='usuarios.publicacion')),
                ('id_usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='publicacion',
            name='idestado_salud',
            field=models.OneToOneField(db_column='idestado_salud', null=True, on_delete=django.db.models.deletion.CASCADE, to='usuarios.saludmascota'),
        ),
        migrations.CreateModel(
            name='Perfil',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('imagen', models.ImageField(upload_to=usuarios.models.Perfil.get_upload_path)),
                ('descripcion', models.CharField(default='Nuevo usuario de PetTrace', max_length=200)),
                ('fecha_creacion', models.DateField(default=datetime.date.today)),
                ('usuario', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='perfil', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='mascota',
            name='idestado_salud',
            field=models.ForeignKey(db_column='idestado_salud', on_delete=django.db.models.deletion.CASCADE, to='usuarios.saludmascota'),
        ),
    ]
