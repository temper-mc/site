import {ReactElement} from 'react';

export interface FaqItem {
	question: string;
	answer: string | ReactElement;
}

export interface FaqCategory {
	label: string;
	gradient: string;
	icon: string | ReactElement;
	items: FaqItem[];
}