import type { Metadata } from "next";
import { PinRootLogo } from "@/components/brand/pinroot-logo";
import { PortraitPlaceholder } from "@/components/brand/portrait-placeholder";
import { ColorSwatch } from "@/components/styleguide/color-swatch";
import { TokenSpec } from "@/components/styleguide/token-spec";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/container";
import { Panel } from "@/components/ui/panel";
import { Caption, Eyebrow, Heading, Text } from "@/components/ui/typography";
import {
  breakpointTokens,
  buttonTokens,
  containerTokens,
  coreColors,
  gutterTokens,
  supportColors,
  typographyTokens
} from "@/lib/design/tokens";

export const dynamic = "error";

export const metadata: Metadata = {
  title: "PinRoot Style Guide",
  description: "PinRoot design tokens, typography, buttons, and brand components."
};

export default function StyleGuidePage() {
  return (
    <main className="bg-paper">
      <Section background="paper" padding="lg">
        <Container className="space-y-24 3xl:space-y-32" size="wide">
          <header className="flex items-start justify-between gap-8">
            <Caption>Style Guide V1</Caption>
            <PinRootLogo size="small" />
          </header>

          <ColorsSection />
          <LayoutSection />
          <TypographySection />
          <ButtonsSection />
          <BrandSection />
        </Container>
      </Section>
    </main>
  );
}

function ColorsSection() {
  return (
    <section aria-labelledby="styleguide-colors">
      <Eyebrow as="h2" id="styleguide-colors">
        Colors
      </Eyebrow>
      <div className="mt-7 max-w-[980px] xl:max-w-[1320px] 3xl:max-w-[1480px]">
        <div className="flex h-28 overflow-hidden rounded-[18px] shadow-swatch xl:h-36 3xl:h-40">
          {coreColors.map((color) => (
            <div
              aria-label={`${color.name} ${color.hex}`}
              className="min-w-0 flex-1"
              key={color.slug}
              style={{ backgroundColor: color.hex }}
            />
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-5">
          {coreColors.map((color) => (
            <Caption key={color.slug} tone="muted">
              {color.name}
            </Caption>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5 xl:gap-6">
        {[...supportColors, ...coreColors].map((color) => (
          <ColorSwatch hex={color.hex} key={color.slug} name={color.name} use={color.use} />
        ))}
      </div>
    </section>
  );
}

function LayoutSection() {
  return (
    <section aria-labelledby="styleguide-layout">
      <Heading as="h2" id="styleguide-layout" variant="display2">
        Viewports & Layout
      </Heading>
      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.8fr] xl:gap-14">
        <div>
          <Eyebrow as="h3" tone="ink">
            Breakpoints
          </Eyebrow>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {breakpointTokens.map((breakpoint) => (
              <Panel key={breakpoint.prefix} padding="sm">
                <Caption tone="muted">{breakpoint.name}</Caption>
                <Text
                  as="p"
                  className="mt-3 [font-family:var(--font-mono)] uppercase tracking-[0.14em]"
                  variant="tiny"
                >
                  {breakpoint.prefix} / {breakpoint.minWidth}
                </Text>
                <Text className="mt-2" tone="muted" variant="tiny">
                  {breakpoint.use}
                </Text>
              </Panel>
            ))}
          </div>
        </div>
        <div>
          <Eyebrow as="h3" tone="ink">
            Gutters
          </Eyebrow>
          <div className="mt-5 space-y-4">
            {gutterTokens.map((gutter) => (
              <div className="grid grid-cols-[80px_1fr] items-center gap-4" key={gutter.breakpoint}>
                <Caption tone="muted">{gutter.breakpoint}</Caption>
                <div className="flex items-center gap-3">
                  <div className="h-4 bg-deep-teal" style={{ width: gutter.gutter }} />
                  <Text as="span" className="[font-family:var(--font-mono)] uppercase tracking-[0.14em]" variant="tiny">
                    {gutter.gutter}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Eyebrow as="h3" tone="ink">
          Containers
        </Eyebrow>
        <div className="mt-5 space-y-4">
          {containerTokens.map((container) => (
            <div className="border border-ink/20 bg-paper-deep" key={container.slug}>
              <div className="flex flex-col gap-2 border-b border-ink/20 p-4 sm:flex-row sm:items-center sm:justify-between">
                <Caption>{container.name}</Caption>
                <Text as="span" className="[font-family:var(--font-mono)] uppercase tracking-[0.14em]" variant="tiny">
                  {container.width}
                </Text>
              </div>
              <div className="p-4">
                <div
                  className="h-6 max-w-full bg-deep-teal"
                  style={{ width: container.width }}
                />
                <Text className="mt-3" tone="muted" variant="tiny">
                  {container.use}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TypographySection() {
  return (
    <section aria-labelledby="styleguide-typography">
      <Heading as="h2" id="styleguide-typography" variant="display2">
        Typography
      </Heading>
      <div className="mt-10 grid gap-10 lg:grid-cols-[280px_1fr] xl:gap-16">
        <div className="space-y-5">
          {typographyTokens.map((token) => (
            <div className="border-t border-ink/20 pt-4" key={token.name}>
              <Caption tone="muted">{token.name}</Caption>
              <Text
                as="p"
                className="mt-2 [font-family:var(--font-mono)] uppercase tracking-[0.14em]"
                variant="tiny"
              >
                {token.size}
              </Text>
              <Text className="mt-1" tone="muted" variant="tiny">
                {token.font} / {token.weight} / {token.notes}
              </Text>
            </div>
          ))}
        </div>
        <div className="space-y-12 xl:space-y-14">
          <Heading as="h3" variant="display1">
            Heading 1
          </Heading>
          <Heading as="h3" variant="display2">
            Heading 2
          </Heading>
          <Heading as="h3" variant="display3">
            Heading 3
          </Heading>
          <Text className="max-w-[520px] xl:max-w-[680px]">Body</Text>
          <Text className="max-w-[520px] xl:max-w-[680px]" variant="small">
            Body
          </Text>
          <Eyebrow tone="ink">Body</Eyebrow>
          <Caption>Body</Caption>
        </div>
      </div>
    </section>
  );
}

function ButtonsSection() {
  return (
    <section aria-labelledby="styleguide-buttons">
      <Heading as="h2" id="styleguide-buttons" variant="display2">
        Buttons
      </Heading>
      <div className="mt-20 inline-grid gap-3 rounded-component border border-dashed border-violet px-5 py-4 sm:grid-cols-3 sm:items-end">
        {buttonTokens.map((button) => (
          <div className="space-y-3" key={button.variant}>
            <Caption>{button.name}</Caption>
            <Button type="button" variant={button.variant}>
              {button.variant === "primary"
                ? "Start a project"
                : button.variant === "secondary"
                  ? "See what we do"
                  : "Learn more"}
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {buttonTokens.map((button) => (
          <TokenSpec
            detail={button.description}
            key={button.variant}
            name={button.name}
            value={button.use}
          />
        ))}
      </div>
    </section>
  );
}

function BrandSection() {
  return (
    <section aria-labelledby="styleguide-brand">
      <Heading as="h2" id="styleguide-brand" variant="display2">
        Brand Elements
      </Heading>
      <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:gap-8">
        <Panel className="min-h-[260px]">
          <Caption tone="muted">Logo</Caption>
          <div className="mt-8 flex h-24 w-24 items-center justify-center bg-cloud">
            <PinRootLogo size="compact" />
          </div>
        </Panel>
        <Panel className="min-h-[260px]">
          <Caption tone="muted">Headshot Placeholder</Caption>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <PortraitPlaceholder />
            <PortraitPlaceholder />
          </div>
        </Panel>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-3 xl:gap-8">
        <Panel tone="paper">
          <Caption tone="muted">Paper</Caption>
          <Text className="mt-4" variant="small">
            Primary page background and quiet component surface.
          </Text>
        </Panel>
        <Panel tone="paperDeep">
          <Caption tone="muted">Paper Deep</Caption>
          <Text className="mt-4" variant="small">
            Warmer CTA band and section contrast.
          </Text>
        </Panel>
        <Panel tone="mist">
          <Caption tone="muted">Mist</Caption>
          <Text className="mt-4" variant="small">
            Pale support fill for placeholder art and secondary blocks.
          </Text>
        </Panel>
      </div>
    </section>
  );
}
