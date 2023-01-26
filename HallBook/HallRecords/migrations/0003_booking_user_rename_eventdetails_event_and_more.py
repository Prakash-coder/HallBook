# Generated by Django 4.1.5 on 2023-01-26 03:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('HallRecords', '0002_eventdetails'),
    ]

    operations = [
        migrations.CreateModel(
            name='Booking',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bookedHall', models.CharField(max_length=50)),
                ('eventName', models.CharField(max_length=255)),
                ('hallBooker', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=254)),
                ('contact', models.CharField(max_length=255)),
                ('isDepartment', models.BooleanField()),
                ('isStudent', models.BooleanField()),
            ],
        ),
        migrations.RenameModel(
            old_name='EventDetails',
            new_name='Event',
        ),
        migrations.RenameModel(
            old_name='hallTable',
            new_name='Hall',
        ),
    ]
