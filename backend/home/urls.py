from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    BannerViewSet, VisionMissionViewSet, 
    StatisticViewSet, InitiativeViewSet
)

router = DefaultRouter()
router.register('banners', BannerViewSet)
router.register('vision-mission', VisionMissionViewSet)
router.register('statistics', StatisticViewSet)
router.register('initiatives', InitiativeViewSet)

urlpatterns = [
    path('', include(router.urls)),
]