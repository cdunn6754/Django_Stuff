from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return HttpResponse("<em>My Second Project </em>")


def help(request):
    helpdict = {'help_insert': 'Help Page'}
    return render(request,'appTwo/help.html', context=helpdict)
