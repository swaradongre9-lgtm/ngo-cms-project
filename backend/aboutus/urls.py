from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    OurStoryViewSet, CoreValueViewSet,
    ProgramViewSet, TeamMemberViewSet
)

router = DefaultRouter()
router.register('our-story', OurStoryViewSet)
router.register('core-values', CoreValueViewSet)
router.register('programs', ProgramViewSet)
router.register('team-members', TeamMemberViewSet)

urlpatterns = [
    path('', include(router.urls)),
]