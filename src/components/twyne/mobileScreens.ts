import gsap from 'gsap'
import i18next from '../../i18n'
import { LitElement, PropertyValues, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import e1 from './imgs/e1.png'
import e2 from './imgs/e2.png'
import e3 from './imgs/e3.png'
import e4 from './imgs/e4.png'
import e5 from './imgs/e5.png'

@customElement('mobile-screens')
export class Mobilecreens extends LitElement {
  @property({ type: String }) lang = i18next.language
  @property({ type: Number }) currentIndex: number = 0
  @property({ type: Array }) screens: NodeListOf<HTMLImageElement> =
    [] as unknown as NodeListOf<HTMLImageElement>
  @property({ type: Function }) updateMobScreens: () => void = () => {}

  connectedCallback() {
    super.connectedCallback()
    i18next.on('languageChanged', this.handleLanguageChange)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    i18next.off('languageChanged', this.handleLanguageChange)
  }

  private handleLanguageChange = () => {
    this.lang = i18next.language
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    const screens = document.querySelectorAll('.mob-carrossel img')
    // Definindo o índice atual da imagem
    this.currentIndex = 0
    // Faz o cast do NodeList para NodeListOf<HTMLImageElement> de forma segura
    this.screens = screens as NodeListOf<HTMLImageElement>

    // Função para atualizar a exibição das imagens
    this.updateMobScreens = () => {
      this.screens.forEach((img, idx) => {
        if (idx === this.currentIndex) {
          gsap.to(img, {
            opacity: 1,
            duration: 0.4,
            y: 0,
            delay: 0.2,
            onStart: () => img.classList.remove('invisible'),
          })
        } else {
          gsap.to(img, {
            opacity: 0,
            duration: 0.4,
            y: 100,
            onComplete: () => img.classList.add('invisible'),
          })
        }
      })
    }

    // Inicializa a exibição correta
    this.updateMobScreens()

    // Seleciona os botões Prev e Next
    const prevBtn = this.renderRoot.querySelector('button:first-of-type')
    const nextBtn = this.renderRoot.querySelector('button:last-of-type')

    // Adiciona os listeners para navegação infinita
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        this.currentIndex =
          (this.currentIndex - 1 + this.screens.length) % this.screens.length
        this.updateMobScreens()
      })

      nextBtn.addEventListener('click', () => {
        this.currentIndex = (this.currentIndex + 1) % this.screens.length
        this.updateMobScreens()
      })
    }
  }

  render() {
    return html`
      <section class="relative px-2 mt-24 xl:mt-32">
        <div class="container">
          <h2
            class="mb-10 text-[2rem] text-center xl:text-[2.5rem] leading-none tracking-[-.02em] 2xl:text-[3rem] text-zinc-100"
          >
            ${unsafeHTML(i18next.t('twyne.mobile.t1'))}
          </h2>
          <div class="mob-carrossel relative overflow-hidden">
            <img
              src="${e1}"
              class="relative mobile-screen"
            />
            <img
              src="${e2}"
              class="invisible absolute left-0 top-0 mobile-screen"
            />
            <img
              src="${e3}"
              class="invisible absolute left-0 top-0 mobile-screen"
            />
            <img
              src="${e4}"
              class="invisible absolute left-0 top-0 mobile-screen"
            />
            <img
              src="${e5}"
              class="invisible absolute left-0 top-0 mobile-screen"
            />
          </div>
          <div class="absolute inset-0">
            <div
              class="sticky -inset-x-4 top-[calc(100dvh-15rem)] isolate flex h-60 items-end justify-center after:absolute after:inset-0 after:z-10 after:bg-linear-to-t after:from-zinc-950 after:content-['']"
            >
              <progressive-blur></progressive-blur>
              <div class="relative z-20 flex gap-px pb-2">
                <button
                  class="flex items-center gap-4 rounded-s-full bg-zinc-100/10 py-3 pe-4 ps-5 text-[.75rem] uppercase leading-none tracking-[.05em] text-zinc-100 transition-all hover:bg-zinc-100 hover:text-zinc-950"
                >
                  Prev
                </button>

                <span
                  class="flex items-center justify-center bg-zinc-50/5 px-4 font-mono text-[.75rem] font-medium uppercase leading-none tracking-[.05em]"
                >
                  ${this.currentIndex + 1} / ${this.screens.length}
                </span>
                <button
                  class="flex items-center gap-4 rounded-e-full bg-zinc-100/10 py-3 pe-5 ps-4 text-[.75rem] uppercase leading-none tracking-[.05em] text-zinc-100 transition-all hover:bg-zinc-100 hover:text-zinc-950"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
  }

  createRenderRoot() {
    return this
  }
}
