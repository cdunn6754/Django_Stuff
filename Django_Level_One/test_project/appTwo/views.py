from django.shortcuts import render
from django.http import HttpResponse

from appTwo.models import User

def index(request):
    return HttpResponse("<em>Second Project</em>")


def help(request):
    helpdict = {'help_insert': 'Help Page'}
    return render(request,'appTwo/help.html', context=helpdict)


def user(request):
    users_list = User.objects.order_by('l_name')
    user_dict = {'user_list': users_list}
    return render(request, 'appTwo/user.html', context=user_dict)
