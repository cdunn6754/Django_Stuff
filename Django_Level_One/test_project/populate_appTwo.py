import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','test_project.settings')

import django
django.setup()


import random
from faker import Faker

from appTwo.models import User


fakegen = Faker()


def populate(N=5):
    for entry in range(N):

        #create fake data
        fake_name = fakegen.name()
        fake_f_name = fake_name.split()[0]
        fake_l_name = fake_name.split()[1]
        fake_email = fakegen.email()

        # Create new Users
        user = User.objects.get_or_create(f_name = fake_f_name, l_name = fake_l_name, email = fake_email)[0]
        user.save()


if __name__ == '__main__':
    print('Populating Models')
    populate(20)
    print('Population Complete')
