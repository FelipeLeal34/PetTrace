# Generated by Django 4.2.6 on 2023-10-10 01:53

import datetime
from django.conf import settings
import django.contrib.auth.models
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email address')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('documento', models.PositiveIntegerField(unique=True)),
                ('telefono', models.IntegerField()),
                ('localidad', models.CharField(blank=True, max_length=60, null=True)),
                ('barrio', models.CharField(blank=True, max_length=60, null=True)),
                ('username', models.CharField(max_length=20, unique=True)),
                ('longitud', models.FloatField(null=True)),
                ('latitud', models.FloatField(null=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
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
                ('nombremas', models.CharField(max_length=45)),
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
                ('img1', models.ImageField(upload_to='imgmascotas')),
                ('img2', models.ImageField(upload_to='imgmascotas')),
                ('img3', models.ImageField(upload_to='imgmascotas')),
                ('img4', models.ImageField(upload_to='imgmascotas')),
                ('img5', models.ImageField(upload_to='imgmascotas')),
                ('id_usuario', models.ForeignKey(db_column='id_usuario', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='id_dueño')),
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
                ('id_usuario', models.ForeignKey(db_column='id_usuario', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
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
                ('fechaEncuentro', models.DateTimeField(default=datetime.date.today)),
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
                ('fechaExtravio', models.DateTimeField(default=datetime.date.today)),
                ('recompensa', models.FloatField(blank=True, null=True)),
            ],
            options={
                'db_table': 'mascotas_perdidas',
            },
            bases=('usuarios.publicacion',),
        ),
        migrations.AddField(
            model_name='publicacion',
            name='idestado_salud',
            field=models.OneToOneField(db_column='idestado_salud', null=True, on_delete=django.db.models.deletion.CASCADE, to='usuarios.saludmascota'),
        ),
        migrations.AddField(
            model_name='mascota',
            name='idestado_salud',
            field=models.OneToOneField(db_column='idestado_salud', on_delete=django.db.models.deletion.CASCADE, to='usuarios.saludmascota'),
        ),
    ]
