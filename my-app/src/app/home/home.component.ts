import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent {
	jobs = [
		{
			company: 'ChatGen',
			startDate: 'Mar 2020',
			endDate: 'Apr 2021',
			title: 'Frontend Developer',
		},
		{
			company: 'Mattermost',
			startDate: 'Aug 2020',
			endDate: 'Dec 2020',
			title: 'Contributor',
		},
	];
	//   above can be input to timeline component from parent component
}
