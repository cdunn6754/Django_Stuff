from django.db import models

class User(models.Model):
    f_name = models.CharField(max_length = 265)
    l_name = models.CharField(max_length = 265)
    email = models.EmailField(unique = True)

    def __str__(self):
        return(self.f_name + ' ' + self.l_name)
