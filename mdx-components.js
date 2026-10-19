import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs' // nextra-theme-blog or your custom theme
import { Callout, Cards, Steps, Tabs } from 'nextra/components'
import { CodeRunner } from './app/components/code-runner'
import { ContactCards, ContactCard, RoleCard } from './app/components/contact-card'
import { GoogleSlides } from './app/components/google-slides'
import { Tiles, Tile } from './app/components/tiles'


const Card = Cards.Card
const Tab = Tabs.Tab

// Get the default MDX components
const themeComponents = getThemeComponents()
 
// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    ...components,
    Callout, 
    Cards,
    Card,
    CodeRunner,
    ContactCards,
    ContactCard,
    GoogleSlides,
    RoleCard,
    Steps,
    Tabs,
    Tab,
    Tiles,
    Tile
  }
}