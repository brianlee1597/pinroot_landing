import { PinRootLogo } from "@/components/brand/pinroot-logo";
import { PortraitPlaceholder } from "@/components/brand/portrait-placeholder";
import { FloatingNav } from "@/components/site/floating-nav";
import { ManifestoSketchIllustration } from "@/components/site/manifesto-sketch-illustration";
import { NavLink } from "@/components/site/nav-link";
import { PinrootSproutIllustration } from "@/components/site/pinroot-sprout-illustration";
import { TypewriterWord } from "@/components/site/typewriter-word";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/container";
import { Panel } from "@/components/ui/panel";
import { Caption, Eyebrow, Heading, Text } from "@/components/ui/typography";

const services = [
  {
    title: "Brand & design",
    body: "Identity, logos, and UX/UI that gives your business a face people remember.",
    tags: "branding | ux/ui design"
  },
  {
    title: "Web & Product",
    body: "Websites and product interfaces built to actually convert, not just look nice.",
    tags: "webdesign | front & backend"
  },
  {
    title: "Content Marketing",
    body: "Copy and campaigns that sound like a person wrote them, because one did.",
    tags: "content writing | marketing"
  }
];

const teamMembers = [
  {
    name: "Brian",
    label: "drawing headshot",
    cursor: "/cursors/team-brian.svg"
  },
  {
    name: "Claudia",
    label: "drawing headshot",
    cursor: "/cursors/team-claudia-cursor.svg"
  },
  {
    name: "Kezia",
    label: "drawing headshot",
    cursor: "/cursors/team-kezia.svg"
  },
  {
    name: "Moona",
    label: "drawing headshot",
    cursor: "/cursors/team-moona.svg"
  },
  {
    name: "Tim",
    label: "drawing headshot",
    cursor: "/cursors/team-tim.svg"
  }
] as const;

export const dynamic = "error";

export default function Home() {
  return (
    <main>
      <FloatingNav />
      <Hero />
      <Manifesto />
      <Services />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header data-site-header>
      <Container
        className="flex min-h-24 items-center justify-between py-6 xl:min-h-28 3xl:min-h-32"
        rail="nav"
        size="cinema"
      >
        <PinRootLogo className="-ml-2 sm:-ml-3 md:-ml-4 xl:-ml-5 3xl:-ml-5" />
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-9 [font-family:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.14em] text-ink/78 md:flex xl:gap-12 3xl:gap-16"
        >
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <Button className="-mr-2 sm:-mr-3 md:-mr-4 xl:-mr-5 3xl:-mr-5" size="small" type="button">
            Get in touch
          </Button>
        </nav>
        <Button className="-mr-2 sm:-mr-3 md:hidden" size="small" type="button">
          Contact
        </Button>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <Section
      background="paper"
      className="relative min-h-[620px] overflow-hidden xl:min-h-[760px] 3xl:min-h-[860px]"
      padding="none"
    >
      <Header />
      <Container
        className="relative grid min-h-[480px] items-center py-16 md:grid-cols-[1fr_0.65fr] md:py-20 xl:min-h-[620px] xl:grid-cols-[1fr_0.85fr] xl:py-28 3xl:min-h-[700px] 3xl:grid-cols-[1fr_0.95fr] 3xl:py-32"
        rail="nav"
        size="cinema"
      >
        <div className="relative z-10 max-w-[610px] xl:max-w-[760px] 3xl:max-w-[860px]">
          <Heading as="h1" variant="display1">
            Grow the{" "}
            <TypewriterWord className="text-deep-teal italic">parts</TypewriterWord>{" "}
            <br />
            that hold it up.
          </Heading>
          <Text className="mt-7 max-w-[500px] xl:mt-9 xl:max-w-[620px] 3xl:max-w-[680px]">
            Branding, web, UX/UI, content, and marketing for small businesses - every deliverable
            designed by hand. We use AI as a tool, never as the artist.
          </Text>
          <div className="mt-9 flex flex-wrap gap-3 xl:mt-11 xl:gap-4">
            <Button type="button">Start a project</Button>
            <Button type="button" variant="secondary">
              See what we do
            </Button>
          </div>
        </div>
        <div className="relative mt-16 flex min-h-[260px] items-center justify-center md:mt-0 xl:min-h-[420px] 3xl:min-h-[500px]">
          <PinrootSproutIllustration className="w-full max-w-[460px] xl:max-w-[600px] 3xl:max-w-[680px]" />
        </div>
      </Container>
    </Section>
  );
}

function Manifesto() {
  return (
    <Section background="ink" className="relative" data-manifesto-section padding="sm">
      <Container
        className="relative grid items-center gap-8 md:grid-cols-[minmax(220px,0.54fr)_minmax(0,1fr)] md:gap-10 xl:grid-cols-[minmax(320px,0.48fr)_minmax(0,1fr)] xl:gap-16 3xl:gap-20"
        size="wide"
      >
        <ManifestoSketchIllustration className="-ml-6 max-w-[330px] sm:-ml-2 sm:max-w-[390px] md:ml-0 md:max-w-none" />
        <div className="min-w-0">
          <Eyebrow tone="ocean">How we work</Eyebrow>
          <Heading className="mt-3 max-w-[720px] xl:max-w-[940px] 3xl:max-w-[1060px]" tone="paper" variant="display2">
            Every logo, layout, and line of copy is{" "}
            <span className="text-ocean-teal italic">drawn, written, and reviewed</span> by a person
            on our team.
          </Heading>
          <Text className="mt-4 max-w-[620px] xl:max-w-[760px]" tone="paperMuted" variant="small">
            AI helps us move faster, research, draft, and test passes. It never makes the final
            call. That is still us.
          </Text>
        </div>
      </Container>
    </Section>
  );
}

function Services() {
  return (
    <Section id="services" background="paper" padding="md">
      <Container rail="nav" size="cinema">
        <Eyebrow>What we do</Eyebrow>
        <Heading className="mt-3 max-w-[560px] xl:max-w-[760px]" variant="display2">
          Three ways in, one team behind them
        </Heading>
        <div className="mt-10 grid md:grid-cols-3 xl:mt-14">
          {services.map((service) => (
            <Panel
              as="article"
              className="-mt-px min-h-[220px] md:-ml-px md:mt-0 xl:min-h-[280px] xl:p-8 3xl:min-h-[320px]"
              key={service.title}
            >
              <div className="mb-8 h-8 w-8 border-2 border-ocean-teal/60 bg-paper-deep xl:mb-12 xl:h-10 xl:w-10" aria-hidden="true" />
              <Heading as="h3" variant="display3">
                {service.title}
              </Heading>
              <Text className="mt-3" variant="small">
                {service.body}
              </Text>
              <Caption className="mt-7">{service.tags}</Caption>
            </Panel>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function About() {
  return (
    <Section id="about" background="paper" className="pb-28" padding="none">
      <Container rail="nav" size="cinema">
        <div className="max-w-[620px] xl:max-w-[820px]">
          <Eyebrow>Whose hands is it</Eyebrow>
          <Heading className="mt-3" variant="display2">
            A small team, hands on every project
          </Heading>
          <Text className="mt-5 xl:max-w-[760px]">
            PinRoot was started by a handful of designers, writers, and strategists who got tired of
            watching small businesses get either a template or a five-figure agency bill. We are the
            middle path: senior-level craft, sized for where you actually are.
          </Text>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:mt-16 xl:grid-cols-5 xl:gap-x-6 xl:gap-y-16 3xl:gap-10">
          {teamMembers.map((member) => (
            <TeamPortrait key={member.name} member={member} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

type TeamMember = (typeof teamMembers)[number];

function TeamPortrait({ member }: { member: TeamMember }) {
  return (
    <article className="relative">
      <a
        aria-label={`More info about ${member.name}`}
        className="group block focus-visible:outline-none"
        href="#contact"
        style={{ cursor: `url("${member.cursor}") 14 12, pointer` }}
      >
        <PortraitPlaceholder
          className="relative z-0 transition-[border-color,box-shadow,transform] duration-200 ease-out group-hover:-translate-y-0.5 group-hover:border-ink/45 group-hover:shadow-[0_18px_36px_rgb(29_30_27_/_0.14)] group-focus-visible:-translate-y-0.5 group-focus-visible:border-ink/45 group-focus-visible:shadow-[0_18px_36px_rgb(29_30_27_/_0.14)]"
          label={member.label}
        />
      </a>
    </article>
  );
}

function CTA() {
  return (
    <Section id="contact" background="paperDeep" padding="lg">
      <Container className="text-center" rail="nav" size="cinema">
        <div className="mx-auto mb-10 flex h-16 w-16 items-center justify-center bg-cloud xl:mb-12 xl:h-20 xl:w-20">
          <PinRootLogo href="/" size="tiny" />
        </div>
        <Heading className="mx-auto max-w-[650px] xl:max-w-[860px]" variant="display2">
          Tell us what you are building. We will tell you where to start.
        </Heading>
        <Button className="mt-8" type="button">
          Start here
        </Button>
      </Container>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="bg-paper py-8">
      <Container className="flex flex-col gap-5 [font-family:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.14em] sm:flex-row sm:items-center sm:justify-between xl:py-2" rail="nav" size="cinema">
        <PinRootLogo size="small" />
        <nav className="flex flex-wrap gap-8" aria-label="Footer navigation">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="/styleguide/">Style Guide</a>
        </nav>
      </Container>
    </footer>
  );
}
