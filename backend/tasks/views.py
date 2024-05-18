from django.http import HttpResponse
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer

from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['pk', 'title', 'description', 'complete', 'due_date', 'priority']

# Create your views here.
@api_view(['GET'])
def index(request):
    return Response('Tasks API is up and running.')

# Get all tasks
@api_view(['GET'])
def fetch_all(request):
    allTasks = Task.objects.all()
    serializer = TaskSerializer(allTasks, many=True)
    return Response(serializer.data)

# Create task
@api_view(['POST'])
def create_task(request):
    serializer = TaskSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Delete a task
@api_view(['DELETE'])
def delete_task(request, id):
    try:
        task = Task.objects.get(pk=id)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = TaskSerializer(task)
    task.delete()

    return Response(serializer.data)

# Update Task
@api_view(['PATCH'])
def update_task(request, id):
    try: 
        task = Task.objects.get(pk=id)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = TaskSerializer(task, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    