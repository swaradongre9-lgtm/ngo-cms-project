from rest_framework import viewsets, permissions
from .models import PressRelease, MediaCoverage, ImageGallery, Video
from .serializers import (
    PressReleaseSerializer, MediaCoverageSerializer,
    ImageGallerySerializer, VideoSerializer
)

class PressReleaseViewSet(viewsets.ModelViewSet):
    queryset = PressRelease.objects.all().order_by('-release_date')
    serializer_class = PressReleaseSerializer
    permission_classes = [permissions.AllowAny]

class MediaCoverageViewSet(viewsets.ModelViewSet):
    queryset = MediaCoverage.objects.all()
    serializer_class = MediaCoverageSerializer
    permission_classes = [permissions.AllowAny]

class ImageGalleryViewSet(viewsets.ModelViewSet):
    queryset = ImageGallery.objects.all()
    serializer_class = ImageGallerySerializer
    permission_classes = [permissions.AllowAny]

class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    permission_classes = [permissions.AllowAny]