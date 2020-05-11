
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

// Componentes y objetos Bcx
import { CmWsHostService } from '@bcxang';


@Pipe({ 
	name: 'safeHtmlDoc',
	pure: true 
})
export class SafeHtmlDocPipe implements PipeTransform {  
  constructor(private sanitizer: DomSanitizer) {}
  transform(data: any) {
    return this.sanitizer.bypassSecurityTrustHtml(data)
  }
}

@Component({
	selector: 'documentos',
	template: `<div [innerHTML]="frame | safeHtmlDoc"></div>`,
	styles: ['.iframeStyle { width:100%; height: 100%; min-height: 95vh;}'],
	encapsulation: ViewEncapsulation.None,
	providers: [ SafeHtmlDocPipe ]
})
export class DocumentosComponent implements OnInit {

	frame: string = "";

	constructor( 
		private hostService: CmWsHostService,
		private route: ActivatedRoute
	){}

	/**
	 * Inicializamos todo.
	 */
	ngOnInit() {
		let random: number = Math.random() * 10000;
		let token: string = this.hostService.getToken();
		let host: string = this.hostService.getHost();
		let modo: string = this.route.snapshot.params.modo;
		let numOpe: string = this.route.snapshot.params.numOpe;
		let numSol: string = this.route.snapshot.params.numSol;
		
		let ini: string = `?setModo=${modo}&nOperacion=${numOpe}&nSolicitud=${numSol}&token=${token}&ramdom=${random}`

		let src: string = `${host}/FBPEngineRST/FPBEngineAUXDOCANG/${ini}`
		this.frame = `<iframe class="iframeStyle" frameborder='0' src='${src}'/>`;
	}

}
