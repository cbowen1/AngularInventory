import { Component } from '@angular/core';
import { Post } from '../models/post.model';
import { AddPostService } from './add-post.service';
 
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  providers: [ AddPostService ]
})
export class AddPostComponent {

	public post : Post;
 	
 	constructor(private addPostService: AddPostService) {
   		this.post = new Post();
  	}

  	addPost() {
  		if(this.post.title && this.post.description){
  			//call the service method to add post
  			this.addPostService.addPost(this.post).subscribe(res =>{
  				//response from rest API call
  				console.log('Response: ',res);
  			});
  		}else{
  			alert('Title and Description required');
  		}
  	}
 
}