from django.db import models

class Banner(models.Model):
    image_url = models.CharField(max_length=255)
    title = models.CharField(max_length=150)
    description = models.TextField(blank=True)
    order = models.IntegerField(default=0)
    status = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title

class VisionMission(models.Model):
    vision_title = models.CharField(max_length=150, default="Our Vision")
    vision_description = models.TextField()
    mission_title = models.CharField(max_length=150, default="Our Mission")
    mission_description = models.TextField()
    last_updated = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return "Vision & Mission"

class Statistic(models.Model):
    label = models.CharField(max_length=100)
    value = models.CharField(max_length=50)
    order = models.IntegerField(default=0)
    status = models.BooleanField(default=True)
    
    def __str__(self):
        return f"{self.label}: {self.value}"

class Initiative(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image_url = models.CharField(max_length=255, blank=True)
    order = models.IntegerField(default=0)
    status = models.BooleanField(default=True)
    
    def __str__(self):
        return self.title