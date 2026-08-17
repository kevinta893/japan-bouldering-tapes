import type { VScaleLevel } from './vScale';

export interface TapeLevel {
	gymGrade: string;
	vScale: VScaleLevel[];
	color: string;
	textColor?: 'light' | 'dark';
}
