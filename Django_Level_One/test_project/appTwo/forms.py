from django.forms import ModelForm
from appTwo.models import User

class UserRegistration(ModelForm):
    class Meta:
        model = User
        fields = '__all__'
