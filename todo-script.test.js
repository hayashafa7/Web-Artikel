import { Function, document } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'
import $ from "jquery"

const html = fs.readFileSync(path.resolve(__dirname, './todo-form.html'), 'utf8');

let dom
let wrapper

describe('todo-form.html', () => {
    beforeEach(() => {
        dom = new JSDOM(html)
        wrapper = dom.window.document.body
    });


    it('renders a button element', () => {
        expect(wrapper.querySelector('button')).not.toBeNull()

    })
})