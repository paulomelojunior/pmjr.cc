import { gsap } from 'gsap'
import i18next from '../../i18n'
import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ThemeMixin } from '../../store/theme'
import home from './home.png'
@customElement('menu-container')

export class MenuContainer extends ThemeMixin(LitElement) {
  @property({ type: Boolean }) more = false
  @property({ type: String }) lang = i18next.language

  constructor() {
    super()
    const savedLang = localStorage.getItem('lang')
    if (savedLang) {
      this.lang = savedLang
      i18next.changeLanguage(savedLang)
    }
  }

  toggleMore() {
    this.more = !this.more
  }

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

  changeLang() {
    const currentLang = i18next.language
    const newLang = currentLang === 'en' ? 'pt' : 'en'

    i18next.changeLanguage(newLang)
    localStorage.setItem('lang', newLang)

    // Atualiza a propriedade lang
    this.lang = newLang
  }

  copyEmail() {
    const email = 'hello@pmjr.cc'
    navigator.clipboard
      .writeText(email)
      .then(() => {
        this.updateText(
          this.lang === 'en' ? 'Email copied!' : 'Email copiado!',
          0
        )
      })
      .catch((error) => {
        alert(`Failed to copy email: ${error}`)
      })
  }

  copyEmailReset() {
    this.updateText(this.lang === 'en' ? 'Click to copy' : 'Copiar e-mail', 300)
  }

  updateText(text: string, delay: number) {
    const element = document.querySelector('mail-button span')
    if (element) {
      setTimeout(() => {
        element.textContent = text
      }, delay)
    }
  }

  firstUpdated() {
    // close menu on scroll
    window.addEventListener('scroll', () => {
      this.more = false
    })

    // remove outline on top using gsap and scrollTrigge
    gsap.to('header', {
      scrollTrigger: {
        trigger: 'header',
        start: 'bottom top',
        toggleActions: 'play none none reverse',
        scrub: 2,
      },
      outline: '1px solid hsla(0 0 100% / 0.075)',
      padding: '0 0 0 0',
    })
  }

  render() {
    return html`
      <header
        class="fixed inset-x-0 z-40 w-full bg-linear-to-b from-zinc-950 backdrop-blur to-zinc-950/20 xl:fixed py-2"
      >
        <div class="container xl:grid flex items-center xl:grid-cols-3">
          <nav class="xl:hidden">
            <ul id="anchors" class="flex bg-zinc-950 overflow-hidden fixed inset-0 flex-col justify-center w-dvw *:transition-all duration-500 ${this.more ? 'h-dvh' : 'h-0 *:opacity-0'}">
              <li>
                <span class="text-[2rem] tracking-[-0.04em] h-20 px-5 flex items-center text-zinc-500">
                  Menu
                </span>
              </li>
              <li>
                <mobile-item
                  href="/last-project"
                  label="Last project"
                  index="001"
                ></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="/"
                  label="GitHub"
                  index="002"
                ></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="/"
                  label="LinkedIn"
                  index="003"
                ></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="/"
                  label="Email"
                  index="hello@pmjr.cc"
                ></mobile-item>
              </li>
            </ul>
          </nav>  
          <div
            class="size-12 p-3 cursor-pointer transition-background duration-500 items-center justify-center *:opacity-75 *:hover:opacity-100 hover:bg-zinc-950 xl:hidden"
          >
            <img
              src="${home}"
              class="transition-opacity duration-500"
              title="Back to homepage"
            />
          </div>
          <mail-button
            @click=${() => this.copyEmail()}
            @mouseleave=${() => this.copyEmailReset()}
            label="hello@pmjr.cc"
            class="hidden xl:flex"
            hover="${this.lang === 'en' ? 'Click to copy' : 'Copiar e-mail'}"
          ></mail-button>
          <button
            class="menu-toggle xl:hidden ms-auto me-4 ${this.more ? 'menu-toggle--close' : ''}"
            @click=${() => this.toggleMore()}
          >
            <span class="uppercase text-[.75rem] font-semibold">
              Menu
            </span>
          </button>
          <nav>
            <ul id="anchors" class="hidden xl:flex justify-end px-0 xl:px-20">
              <li class="flex-1">
                <menu-item
                  href="#section-praxis"
                  label="${i18next.t('menu.praxis')}"
                ></menu-item>
              </li>
              <li class="flex-1">
                <menu-item
                  href="#section-journey"
                  label="${i18next.t('menu.journey')}"
                ></menu-item>
              </li>
              <li class="flex-1">
                <menu-item
                  href="#section-connect"
                  label="${i18next.t('menu.connect')}"
                ></menu-item>
              </li>
            </ul>
          </nav>
          <div class="hidden xl:flex items-center justify-end gap-2">
            <a class="cta-button py-1.5 px-4 uppercase font-semibold text-[.75rem] tracking-[0.05em]" href="/projects">
              ${i18next.t('featured.button')}
            </a>
            <div class="flex h-12 items-center justify-center px-1 xl:h-12">
              <lang-button
                @click=${() => this.changeLang()}
                label=${this.lang === 'pt' ? `PT · BR` : `EN · US`}
                title="${this.lang === 'en'
                  ? 'Mudar para português'
                  : 'Change to english'}"
              ></lang-button>
            </div>
          </div>
        </div>
      </header>
    `
  }

  createRenderRoot() {
    return this
  }
}
