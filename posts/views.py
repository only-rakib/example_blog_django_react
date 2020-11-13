from django.shortcuts import render
import requests
from django.core.paginator import Paginator
# POSTS VIEW ENDPOINT
def posts(request):
    response = requests.get('https://jsonplaceholder.typicode.com/posts')
    data = response.json()
    paginator = Paginator(data, 5)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    return render(request, 'blog-listing.html',{'page_obj': page_obj})


# POST DETAILS VIEW ENDPOINT
def post_details(request,post_id):
    #post_id =st
    response = requests.get('https://jsonplaceholder.typicode.com/posts/'+str(post_id))
    data = response.json()
    cmnt=requests.get('https://jsonplaceholder.typicode.com/posts/'+str(post_id)+'/comments')
    comments=cmnt.json()
    
    if request.method == 'POST':
        txt = request.POST['txt']
        #print(txt)
        send_j={
            'email':request.user.email,
            'name':request.user.first_name,
            'body':txt,
        }
        post_data=requests.post('https://jsonplaceholder.typicode.com/posts/'+str(post_id)+'/comments',send_j) 
    
    return render(request, 'blog-post.html',{'data':data,'cmnt':comments})
