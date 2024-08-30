from django.shortcuts import render
from rest_framework import generics
from .models import Project
from .serializers import ProjectSerializer
# Create your views here.

# View to list all projects
class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

# View to retrieve a specific project
class ProjectDetailView(generics.RetrieveAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer