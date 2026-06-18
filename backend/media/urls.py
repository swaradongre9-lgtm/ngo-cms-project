from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    PressReleaseViewSet, MediaCoverageViewSet,
    ImageGalleryViewSet, VideoViewSet
)

router = DefaultRouter()
router.register('press-releases', PressReleaseViewSet)
router.register('media-coverage', MediaCoverageViewSet)
router.register('image-gallery', ImageGalleryViewSet)
router.register('videos', VideoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]