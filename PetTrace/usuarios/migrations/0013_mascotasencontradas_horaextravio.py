# Generated by Django 3.2.12 on 2023-11-20 03:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('usuarios', '0012_auto_20231115_0010'),
    ]

    operations = [
        migrations.AddField(
            model_name='mascotasencontradas',
            name='horaExtravio',
            field=models.TimeField(blank=True, null=True),
        ),
    ]
