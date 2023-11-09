# Generated by Django 4.2.4 on 2023-09-15 17:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id_usuario', models.AutoField(primary_key=True, serialize=False)),
                ('nombreusu', models.CharField(max_length=60)),
                ('apellidousu', models.CharField(max_length=60)),
                ('documento', models.PositiveIntegerField(unique=True)),
                ('correousu', models.EmailField(max_length=60, unique=True)),
                ('telefono', models.IntegerField()),
                ('localidad', models.CharField(max_length=60)),
                ('barrio', models.CharField(max_length=60)),
                ('contrasena', models.CharField(max_length=60)),
            ],
            options={
                'db_table': 'usuarios',
            },
        ),
    ]
