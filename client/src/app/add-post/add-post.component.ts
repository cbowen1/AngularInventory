import { Component,ViewChild,ElementRef, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { AddPostService } from './add-post.service';
import { CommonService } from '../service/common.service'

 
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  providers: [ AddPostService ]
})
export class AddPostComponent implements OnInit {

	public post : Post;
  @ViewChild('closeBtn') closeBtn: ElementRef;

 	constructor(private addPostService: AddPostService, private commonService : CommonService) {
   		this.post = new Post();
  	}

    ngOnInit(){
      this.commonService.postEdit_Observable.subscribe(res =>{
        this.post = this.commonService.post_to_be_edited;
        console.log('Post is ',this.post.id);
      });
    }

  	addPost() {
  		if(this.post.title && this.post.description){
  			//call the service method to add post
  			this.addPostService.addPost(this.post).subscribe(res =>{
  				console.log('Response: ',res);
          this.closeBtn.nativeElement.click();
          this.commonService.notifyPostAddition();
  			});
  		}else{
  			alert('Title and Description required');
  		}
  	}
 
}