# Generated by Django 4.1.5 on 2023-01-21 11:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('HallRecords', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='EventDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('eventManager', models.CharField(max_length=255)),
                ('eventName', models.CharField(max_length=255)),
                ('eventDate', models.DateField()),
                ('startTime', models.TimeField()),
                ('endTime', models.TimeField()),
            ],
        ),
    ]
