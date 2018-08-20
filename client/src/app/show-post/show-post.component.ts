import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShowPostService } from './show-post.service';
import { CommonService } from '../service/common.service';
import { Post } from '../models/post.model';

@Component({
	selector: 'app-show-post',
	templateUrl: './show-post.component.html',
	styleUrls: ['./show-post.component.css'],
	providers: [ ShowPostService ]
})
export class ShowPostComponent implements OnInit {

	@ViewChild('closeBtn') closeBtn: ElementRef;

	public posts : any [];
	public post_to_delete;

	constructor( private showPostService: ShowPostService, private commonService : CommonService){

	}

	ngOnInit(){
		this.getAllPost();

		this.commonService.postAdded_Observable.subscribe(res => {
			this.getAllPost();
		});
	}

	getAllPost(){
		this.showPostService.getAllPost().subscribe(result => {
			this.posts = result['data'];
		})
	}

	editPost(post: Post){
		this.commonService.setPostToEdit(post);
		console.log('post is ', post);
	}

	deletePost(post: Post){
		console.log('Deleting post: ', post);

		this.showPostService.deletePost(this.post_to_delete).subscribe(result => {
			this.getAllPost();
			this.closeBtn.nativeElement.click();
		});
	}

	setDelete(post: Post){
		this.post_to_delete = post;
	}

	unsetDelete(){
		this.post_to_delete = null;
	}
}