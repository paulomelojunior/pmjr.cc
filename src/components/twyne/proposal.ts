import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import i18next from '../../i18n'
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import a1 from './imgs/a1.png'
import a2 from './imgs/a2.png'
import a3 from './imgs/a3.png'
import a4 from './imgs/a4.png'
import b1 from './imgs/b1.png'
import b2 from './imgs/b2.png'
import b3 from './imgs/b3.png'
import b4 from './imgs/b4.png'
import b5 from './imgs/b5.png'
import b6 from './imgs/b6.png'
import b7 from './imgs/b7.png'

gsap.registerPlugin(ScrollTrigger)

@customElement('twyne-proposal')
export class TwyneProposal extends LitElement {
  @property({ type: String }) lang = i18next.language

  // Referência para as animações
  private componentAnimations: gsap.core.Tween[] = []

  connectedCallback() {
    super.connectedCallback()
    i18next.on('languageChanged', this.handleLanguageChange)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    i18next.off('languageChanged', this.handleLanguageChange)
    this.cleanupAnimations()
  }

  private handleLanguageChange = () => {
    this.lang = i18next.language
  }

  private setupComponentAnimations(): void {
    const componentsImgs = this.renderRoot.querySelectorAll('#components img')

    componentsImgs.forEach((img) => {
      // Configuração inicial
      gsap.set(img, { clipPath: 'rect(0% 100% 100% 0% round .25rem)' })

      // Animação de entrada
      const animation = gsap.from(img, {
        scrollTrigger: {
          trigger: img,
          start: '0% 100%',
          toggleActions: 'play none none reverse',
        },
        clipPath: 'rect(0% 100% 0% 0% round .25rem)',
        opacity: 0,
        y: '10%',
      })

      this.componentAnimations.push(animation)
    })
  }

  private cleanupAnimations(): void {
    this.componentAnimations.forEach((animation) => {
      if (animation) {
        animation.kill()
      }
    })
    this.componentAnimations = []
  }

  firstUpdated() {
    this.setupComponentAnimations()
  }

  private renderProposalList(): unknown {
    const proposalList = i18next.t('twyne.proposal.l1', {
      returnObjects: true,
    }) as string[]

    return html`
      <ul
        class="text-[1rem] leading-loose 2xl:text-[1.25rem] dark:text-zinc-200"
      >
        ${proposalList.map(
          (item) => html`
            <li
              class="flex items-center gap-4 text-center before:text-[1rem] before:text-zinc-600 before:content-['✦']"
            >
              ${item}
            </li>
          `
        )}
      </ul>
    `
  }

  private renderComponentGrid(): unknown {
    return html`
      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <div class="flex flex-col gap-4">
            <img src="${b1}" loading="lazy" alt="Component B1" />
            <img src="${b3}" loading="lazy" alt="Component B3" />
          </div>
          <img src="${b2}" loading="lazy" alt="Component B2" />
        </div>
        <div class="flex gap-4">
          <img src="${b7}" loading="lazy" alt="Component B7" />
          <img src="${b5}" loading="lazy" alt="Component B5" />
          <img src="${b6}" loading="lazy" alt="Component B6" />
        </div>
        <img src="${b4}" loading="lazy" alt="Component B4" />
      </div>
    `
  }

  private renderComponentColumn(): unknown {
    return html`
      <div class="grid gap-4">
        <img src="${a1}" loading="lazy" alt="Component A1" />
        <img src="${a2}" loading="lazy" alt="Component A2" />
        <img src="${a3}" loading="lazy" alt="Component A3" />
        <img src="${a4}" loading="lazy" alt="Component A4" />
      </div>
    `
  }

  private renderComponentsSection(): unknown {
    return html`
      <div
        id="components"
        class="relative flex min-h-[1348px] items-start justify-center gap-4 overflow-hidden"
      >
        <style>
          #components img {
            border-radius: 0.25rem;
          }
        </style>
        <div class="container absolute inset-y-0 -z-10 bg-gradient-to-t"></div>
        ${this.renderComponentGrid()} ${this.renderComponentColumn()}
      </div>
    `
  }

  render() {
    return html`
      <section id="proposal">
        <div
          class="container hidden h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent xl:block"
        ></div>
        <div class="container rounded-t-[2rem] p-24 2xl:p-32">
          <h2
            class="mb-10 text-[2.5rem] leading-none tracking-[-.02em] 2xl:text-[3rem] dark:text-zinc-200"
          >
            ${i18next.t('twyne.proposal.t1')}
          </h2>
          <div class="grid grid-cols-2 gap-24">
            ${this.renderProposalList()}
            <p class="text-pretty text-[1rem] leading-loose 2xl:text-[1.25rem]">
              ${i18next.t('twyne.proposal.p1')}
            </p>
          </div>
        </div>
        ${this.renderComponentsSection()}
        <twyne-impact></twyne-impact>
      </section>
    `
  }

  createRenderRoot() {
    return this
  }
}
