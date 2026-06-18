from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('accounts.urls')),
    path('api/home/', include('home.urls')),
    path('api/aboutus/', include('aboutus.urls')),  
    path('api/projects/', include('projects.urls')),
    path('api/media/', include('media.urls')),# ← ADD THIS
]