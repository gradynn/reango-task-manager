from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('all', views.fetch_all, name='fetch_all'),
    path('create', views.create_task, name='create_task'),
    path('<int:id>', views.delete_task, name='delete_task'),
    path('update/<int:id>', views.update_task, name='update_task')
]
