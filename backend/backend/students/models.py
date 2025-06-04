from django.db import models


class Student(models.Model):
    """Simple student record."""

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    enrollment_date = models.DateField()

    def __str__(self) -> str:
        return f"{self.first_name} {self.last_name}"