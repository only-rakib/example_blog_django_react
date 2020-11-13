from django import forms
from . models import User_Data

class User_Data_Form(forms.ModelForm):
    class Meta:
        model = User_Data
        fields = ('first_name','last_name','email','password')
        widget = {
            'first_name':forms.TextInput(attr={}),
        }