import { assert } from "@esm-bundle/chai"
import { screen } from "shadow-dom-testing-library"
import { fixture, html } from "@open-wc/testing"

test("Should render a shoelace text field with a label", async () => {
  const label = "What is your name?"
  await fixture(html`<sl-input label="${label}"></sl-input>`)

  const el = await screen.findByShadowLabelText(label)

  // Doesnt work very well in the browser.
  // screen.debug()

  assert(el)
})
