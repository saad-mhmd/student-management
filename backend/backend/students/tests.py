from django.test import TestCase
from .models import Student


class StudentModelTest(TestCase):
    def test_str_representation(self):
        student = Student.objects.create(
            first_name="John",
            last_name="Doe",
            email="john@example.com",
            enrollment_date="2024-01-01",
        )
        self.assertEqual(str(student), "John Doe")