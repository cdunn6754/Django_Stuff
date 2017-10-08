from django.shortcuts import render
from django.http import HttpResponse

from appTwo.models import User
from appTwo.forms import UserRegistration

def index(request):
    return HttpResponse("<em>Second Project</em>")


def help(request):
    helpdict = {'help_insert': 'Help Page'}
    return render(request,'appTwo/help.html', context=helpdict)


def user(request):
    users_list = User.objects.order_by('l_name')
    form = UserRegistration()
    template_dict = {'user_registration_form' : form}
    if request.method == 'POST':
        form = UserRegistration(request.POST)

        if form.is_valid():
            form.save()
            return(index(request))

    return render(request, 'appTwo/user.html', context=template_dict)
