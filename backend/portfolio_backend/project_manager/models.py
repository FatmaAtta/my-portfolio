from django.db import models

class Technology(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    technologies = models.ManyToManyField(Technology, related_name='projects')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='projects')
    github_link = models.URLField(blank=True, null=True)
    live_demo_link = models.URLField(blank=True, null=True)
    image = models.ImageField(upload_to='projects/images/', blank=True, null=True)
    status = models.CharField(max_length=50)

    def __str__(self):
        return self.title
