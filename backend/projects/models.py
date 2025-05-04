from django.db import models

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    tech_stack = models.CharField(max_length=200)
    github_url = models.URLField()
    live_demo_url = models.URLField(blank=True)

    def __str__(self):
        return self.title