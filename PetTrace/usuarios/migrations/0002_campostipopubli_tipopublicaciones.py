# Generated by Django 4.2.4 on 2023-09-15 17:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('usuarios', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CamposTipopubli',
            fields=[
                ('idcampo', models.AutoField(primary_key=True, serialize=False)),
                ('nombrecampo', models.CharField(db_column='nombreCampo', max_length=45)),
            ],
            options={
                'db_table': 'campos_tipopubli',
            },
        ),
        migrations.CreateModel(
            name='TipoPublicaciones',
            fields=[
                ('idtipo_publi', models.AutoField(primary_key=True, serialize=False)),
                ('nombretipopubli', models.CharField(db_column='nombreTipoPubli', max_length=45)),
            ],
            options={
                'db_table': 'tipo_publicaciones',
            },
        ),
    ]
