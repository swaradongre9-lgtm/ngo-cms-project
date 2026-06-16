from django.core.management.base import BaseCommand
from home.models import Banner, VisionMission, Statistic, Initiative

class Command(BaseCommand):
    help = 'Seed initial data for home page'

    def handle(self, *args, **kwargs):
        # Add Vision & Mission
        VisionMission.objects.create(
            vision_title="Our Vision",
            vision_description="A world where every child has access to quality education, healthcare, and the opportunity to achieve their full potential.",
            mission_title="Our Mission",
            mission_description="To create a lasting impact in the lives of underprivileged children and communities by providing education, woman empowerment, and livelihood opportunities."
        )

        # Add Statistics
        stats = [
            {"label": "Campaign Hosted", "value": "3067"},
            {"label": "Student Educated", "value": "10000+"},
            {"label": "Patient Treated", "value": "50000+"},
            {"label": "Volunteers Across India", "value": "2000+"},
        ]
        for i, stat in enumerate(stats):
            Statistic.objects.create(label=stat['label'], value=stat['value'], order=i)

        # Add Initiatives
        initiatives = [
            {"title": "Empowering Girls Education", "description": "Providing quality education to underprivileged girls"},
            {"title": "Committed to Child Nutrition", "description": "Ensuring proper nutrition for children in need"},
            {"title": "Manav Karyya", "description": "Community development and welfare programs"},
        ]
        for i, init in enumerate(initiatives):
            Initiative.objects.create(title=init['title'], description=init['description'], order=i)

        self.stdout.write(self.style.SUCCESS('Sample data added successfully!'))