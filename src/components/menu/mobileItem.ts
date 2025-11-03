import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('mobile-item')
export class MobileItem extends LitElement {
  @property({ type: String }) href: string = ''
  @property({ type: String }) label: string = ''
  @property({ type: String }) index: string = ''

  render() {
    return html`<div class="border-b border-zinc-800 xl:border-0">
      <a class="text-[2rem] tracking-[-0.04em] menu-item h-20 xl:h-16 px-5 pt-1 flex items-center text-zinc-100 relative" rel="noopener noreferrer" href="${this.href}">
        ${this.label}
        <div class="absolute flex items-center px-5 pt-1 inset-0 xl:rounded-full text-zinc-950">
          ${this.label}
        </div>
        <span class="xl:hidden absolute opacity-50 right-6 bottom-6 font-mono text-[.75rem] tracking-[0.05em]">
          ${this.index}
        </span>
      </a>
    </div>`
  }

  createRenderRoot() {
    return this
  }
}