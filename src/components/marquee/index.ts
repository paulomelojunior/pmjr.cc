import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import classNames from 'classnames'
import './styles.scss'

@customElement('marquee-element')
export class MarqueeElement extends LitElement {
  @property({ type: String }) star: string = ''
  @property({ type: String }) items: string = ''
  @property({ type: Boolean }) reverse: boolean = false

  render() {
    const marqueeList = this.items.split(',').map((item) => item.trim())
    const marqueeItems = marqueeList.map(
      (item) =>
        html`<li>${item}</li>
          <li>
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              class="${this.star} size-2 xl:size-3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.9385 8.60896C13.9091 8.20693 14.9494 8 16 8C14.9494 8 13.9091 7.79307 12.9385 7.39104C11.9679 6.989 11.086 6.39972 10.3431 5.65685C9.60028 4.91399 9.011 4.03207 8.60896 3.06147C8.20693 2.09086 8 1.05057 8 0C8 2.12173 7.15714 4.15657 5.65685 5.65686C4.15656 7.15715 2.12173 8 0 8C1.05057 8 2.09086 8.20693 3.06147 8.60896C4.03207 9.011 4.91399 9.60028 5.65686 10.3431C6.39972 11.086 6.989 11.9679 7.39104 12.9385C7.79307 13.9091 8 14.9494 8 16C8 14.9494 8.20693 13.9091 8.60896 12.9385C9.011 11.9679 9.60028 11.086 10.3431 10.3431C11.086 9.60028 11.9679 9.011 12.9385 8.60896Z"
              />
            </svg>
          </li>`
    )

    const reverse = this.reverse
    const classList = classNames('marquee', { reverse })

    return html`
      <div class=${classList}>
        <ul class="marquee__content" aria-hidden="true">
          ${marqueeItems}
        </ul>
        <ul class="marquee__content">
          ${marqueeItems}
        </ul>
      </div>
    `
  }

  createRenderRoot() {
    return this
  }
}
