# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-10-21 22:33
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('groups', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='group',
            old_name='desciption',
            new_name='description',
        ),
    ]
