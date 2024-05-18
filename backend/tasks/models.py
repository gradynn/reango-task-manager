from django.db import models
from django.utils import timezone

# Create your models here
class Task(models.Model):
    class PriorityChoices(models.TextChoices):
        LOW = 'L', 'Low'
        MID = 'M', 'Mid'
        HIGH = 'H', 'High'

    title = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    complete = models.BooleanField(default=False)
    due_date = models.DateTimeField(auto_now=False, auto_now_add=False, null=True)
    priority = models.CharField(max_length=1, choices=PriorityChoices.choices, default=PriorityChoices.LOW)