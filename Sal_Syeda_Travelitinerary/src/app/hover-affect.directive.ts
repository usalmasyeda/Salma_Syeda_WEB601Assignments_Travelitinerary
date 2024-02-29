import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input() affectStyle: string;

  private originalBorder: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.originalBorder = this.elementRef.nativeElement.style.border;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.applyStyle(this.affectStyle);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeStyle(this.affectStyle);
  }

  private applyStyle(style: string) {
    switch (style) {
      case 'underline':
        this.renderer.setStyle(this.elementRef.nativeElement, 'textDecoration', 'underline');
        break;
      case 'border':
        if (!this.isFirstOrLastCard()) {
          this.renderer.setStyle(this.elementRef.nativeElement, 'border', '1px solid black');
        }
        break;
      case 'bold':
        this.renderer.setStyle(this.elementRef.nativeElement, 'fontWeight', 'bold');
        break;
      default:
        break;
    }
  }

  private removeStyle(style: string) {
    switch (style) {
      case 'underline':
        this.renderer.removeStyle(this.elementRef.nativeElement, 'textDecoration');
        break;
      case 'border':
        this.renderer.setStyle(this.elementRef.nativeElement, 'border', this.originalBorder);
        break;
      case 'bold':
        this.renderer.removeStyle(this.elementRef.nativeElement, 'fontWeight');
        break;
      default:
        break;
    }
  }

  private isFirstOrLastCard(): boolean {
    const parentElement = this.elementRef.nativeElement.parentElement;
    const children = parentElement.children;
    return this.elementRef.nativeElement === children[0] || this.elementRef.nativeElement === children[children.length - 1];
  }
}

