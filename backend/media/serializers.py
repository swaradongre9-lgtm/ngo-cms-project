from rest_framework import serializers
from .models import PressRelease, MediaCoverage, ImageGallery, Video

class PressReleaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = PressRelease
        fields = '__all__'

class MediaCoverageSerializer(serializers.ModelSerializer):
    class Meta:
        model = MediaCoverage
        fields = '__all__'

class ImageGallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageGallery
        fields = '__all__'

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'