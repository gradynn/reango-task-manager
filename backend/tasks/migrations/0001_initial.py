# Generated by Django 5.0.6 on 2024-05-17 22:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=100)),
                ('complete', models.BooleanField(default=False)),
                ('due_date', models.DateTimeField()),
                ('priority', models.CharField(choices=[('L', 'Low'), ('M', 'Mid'), ('H', 'High')], default='L', max_length=1)),
            ],
        ),
    ]
