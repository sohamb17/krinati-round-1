import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent {
	schools = [
		{
			institution: 'Sardar Patel Institute of Technology',
			startDate: '2019',
			endDate: 'Present',
			degree: 'B.Tech. Computer Engineering',
		},
		{
			institution: 'Sathaye College',
			endDate: '2019',
			degree: 'XIIth',
		},
		{
			institution: 'Parle Tilak Vidyalaya English Medium School',
			endDate: '2017',
			degree: 'Xth',
		},
	];
}
