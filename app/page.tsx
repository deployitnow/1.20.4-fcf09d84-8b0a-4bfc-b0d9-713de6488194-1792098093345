// @ts-nocheck
import { Button } from '@/components/shared/ui/button';
import { LandingPrimaryImageCtaSection } from '@/components/landing';
import { LandingProductFeature } from '@/components/landing';
import { LandingProductSteps } from '@/components/landing';
import { LandingPriceComparisonSection } from '@/components/landing';
import { LandingPriceComparisonColumn } from '@/components/landing';
import { LandingPriceComparisonItem } from '@/components/landing';
import { LandingTestimonialListSection } from '@/components/landing';
import { LandingFaqCollapsibleSection } from '@/components/landing';
import { LandingSaleCtaSection } from '@/components/landing';
import { LandingFooter } from '@/components/landing';
import { LandingFooterColumn } from '@/components/landing';
import { LandingFooterLink } from '@/components/landing';
import { LandingHeader } from '@/components/landing';
import { LandingHeaderMenuItem } from '@/components/landing';
import { LandingSocialProof } from '@/components/landing';
import { LandingProductFeatureKeyPoints } from '@/components/landing';
import Image from 'next/image';
import Link from 'next/link';
import {
  SiHubspot,
  SiProducthunt,
  SiTechcrunch,
  SiReddit,
  SiHackernews,
} from '@icons-pack/react-simple-icons';
import { Share } from 'lucide-react';
import { SiReact } from '@icons-pack/react-simple-icons';
export default function Page() {
  return (
    <>
      <LandingHeader
        withBackground={false}
        variant="primary"
        fixed={true}
        logoComponent={
          <div className="flex items-center text-primary-900 dark:text-primary-100 gap-3">
            <Image
              src="https://hniurelftekdyiheqlqu.supabase.co/storage/v1/object/public/images/1767979765250-logo.png"
              alt="DemoSpark logo"
              width={200}
              height={200}
              className="h-8 w-8 rounded-full"
            />
            DemoSpark
          </div>
        }
      >
        <LandingHeaderMenuItem href="#features">Features</LandingHeaderMenuItem>
        <LandingHeaderMenuItem href="#analytics">
          Analytics
        </LandingHeaderMenuItem>
        <LandingHeaderMenuItem href="#pricing">Solutions</LandingHeaderMenuItem>
        <LandingHeaderMenuItem type="button">Get Started</LandingHeaderMenuItem>
      </LandingHeader>

      <LandingPrimaryImageCtaSection
        title="Turn Clicks Into Conversions"
        titleComponent={
          <h1 className="text-5xl font-bold leading-tight">
            Turn Clicks Into Conversions—Make Demos in Minutes.
          </h1>
        }
        description="Show your product in action. Just point, click, record—and share. It's that easy."
        imageSrc="/static/images/photo-1551288049-bebda4e38f71.jpg"
        imageAlt="Demo Video Preview"
        imagePosition="center"
        imageShadow="hard"
        textPosition="center"
        withBackground={false}
        withBackgroundGlow={true}
        variant="primary"
        backgroundGlowVariant="primary"
      >
        <Button size="xl" variant="primary" asChild>
          <Link href="#get-started">Record Your First Demo</Link>
        </Button>

        <LandingSocialProof
          className="w-full mt-6 flex justify-center"
          avatarItems={[
            { imageSrc: '/static/images/people/1.webp', name: 'User 1' },
            { imageSrc: '/static/images/people/2.webp', name: 'User 2' },
            { imageSrc: '/static/images/people/3.webp', name: 'User 3' },
            { imageSrc: '/static/images/people/4.webp', name: 'User 4' },
            { imageSrc: '/static/images/people/5.webp', name: 'User 5' },
          ]}
          numberOfUsers={1120}
          suffixText="marketing teams onboarded"
          showRating={false}
        />
      </LandingPrimaryImageCtaSection>

      <div className="container-wide p-12 w-full flex flex-wrap items-center justify-center gap-6 dark:invert">
        <p className="w-full text-center text-sm opacity-70 dark:invert">
          As seen on
        </p>
        <SiHubspot className="w-auto h-8" />
        <SiProducthunt className="w-auto h-9" />
        <SiTechcrunch className="w-auto h-6" />
        <SiReddit className="w-auto h-8" />
        <SiReact className="w-auto h-8" />
      </div>

      <LandingProductFeature
        title="Instant Recording to Published Demo"
        description="Make and share demos in minutes. No downloads, no hassle."
        descriptionComponent={
          <>
            <p>Make and share demos in minutes. No downloads, no hassle.</p>
            <LandingProductFeatureKeyPoints
              keyPoints={[
                {
                  title: 'Record',
                  description: 'Capture your product in action',
                },
                {
                  title: 'Customize',
                  description: 'Add your branding and style',
                },
                {
                  title: 'Share',
                  description: 'Publish and distribute instantly',
                },
              ]}
              variant="primary"
            />
          </>
        }
        imageSrc="/static/images/photo-1460925895917-afdab827c52f.jpg"
        imageAlt="Point & Click Recording"
        imagePosition="left"
        imagePerspective="right"
        imageShadow="hard"
        textPosition="left"
        withBackground={true}
        withBackgroundGlow={false}
        variant="primary"
        backgroundGlowVariant="primary"
      />

      <LandingProductFeature
        title="Embed Anywhere"
        description="Paste a link—your interactive demo is live inside any doc, blog, or tweet."
        imageSrc="/static/images/photo-1551434678-e076c223a692.jpg"
        imageAlt="Embed Examples"
        imagePosition="right"
        imagePerspective="left"
        imageShadow="hard"
        textPosition="left"
        withBackground={false}
        withBackgroundGlow={false}
        variant="primary"
        backgroundGlowVariant="primary"
      />

      <LandingProductFeature
        title="Conversion Analytics"
        description="See clicks, completions, and who follows your CTAs. Learn what works."
        imageSrc="/static/images/photo-1551288049-bebda4e38f71.jpg"
        imageAlt="Analytics Dashboard"
        imagePosition="left"
        imagePerspective="right"
        imageShadow="hard"
        textPosition="left"
        withBackground={true}
        withBackgroundGlow={false}
        variant="primary"
        backgroundGlowVariant="primary"
      />

      <LandingProductFeature
        title="Custom Branding & Hotspots"
        description="Match your brand. Highlight what matters. Guide users with clickable spots."
        imageSrc="/static/images/photo-1558655146-9f40138edfeb.jpg"
        imageAlt="Branded Demo"
        imagePosition="right"
        imagePerspective="left"
        imageShadow="hard"
        textPosition="left"
        withBackground={false}
        withBackgroundGlow={false}
        variant="primary"
        backgroundGlowVariant="primary"
      />

      <LandingProductFeature
        title="Team Workspace & Permissions"
        description="Work together. Manage access. Everyone stays in sync."
        imageSrc="/static/images/photo-1522071820081-009f0129c71c.jpg"
        imageAlt="Team Workspace"
        imagePosition="left"
        imagePerspective="right"
        imageShadow="hard"
        textPosition="left"
        withBackground={true}
        withBackgroundGlow={false}
        variant="primary"
        backgroundGlowVariant="primary"
      />

      <LandingProductSteps
        title="How It Works"
        description="Create professional product demos in three simple steps"
        display="grid"
        withBackground={false}
        withBackgroundGlow={false}
        variant="primary"
        backgroundGlowVariant="primary"
      >
        <LandingProductFeature
          title="1. Record"
          description="Capture your product workflow with our intuitive recording tool"
          imageSrc="/static/images/photo-1590650153855-d9e808231d41.jpg"
          imageAlt="Record"
          imagePosition="center"
          imagePerspective="none"
          imageShadow="soft"
          textPosition="center"
          withBackground={false}
          withBackgroundGlow={false}
          variant="primary"
          backgroundGlowVariant="primary"
        />
        <LandingProductFeature
          title="2. Embed"
          description="Share your demo anywhere with a simple embed code"
          imageSrc="/static/images/photo-1498050108023-c5249f4df085.jpg"
          imageAlt="Embed"
          imagePosition="center"
          imagePerspective="none"
          imageShadow="soft"
          textPosition="center"
          withBackground={false}
          withBackgroundGlow={false}
          variant="primary"
          backgroundGlowVariant="primary"
        />
        <LandingProductFeature
          title="3. Track Results"
          description="Monitor engagement and conversion metrics in real-time"
          imageSrc="/static/images/photo-1551288049-bebda4e38f71.jpg"
          imageAlt="Track Results"
          imagePosition="center"
          imagePerspective="none"
          imageShadow="soft"
          textPosition="center"
          withBackground={false}
          withBackgroundGlow={false}
          variant="primary"
          backgroundGlowVariant="primary"
        />
      </LandingProductSteps>

      <LandingPriceComparisonSection
        title="Why DemoSpark beats static screenshots"
        description="See how interactive demos outperform traditional methods"
        textPosition="center"
        withBackground={true}
        withBackgroundGlow={false}
        variant="primary"
        backgroundGlowVariant="primary"
      >
        <LandingPriceComparisonColumn header="Feature" variant="primary">
          <LandingPriceComparisonItem
            text="Interactive"
            state="neutral"
            showText={true}
          />
          <LandingPriceComparisonItem
            text="Embeddable"
            state="neutral"
            showText={true}
          />
          <LandingPriceComparisonItem
            text="Analytics"
            state="neutral"
            showText={true}
          />
        </LandingPriceComparisonColumn>

        <LandingPriceComparisonColumn
          header="DemoSpark"
          featured={true}
          ctaText="Get Started"
          href="#get-started"
          variant="primary"
        >
          <LandingPriceComparisonItem
            text="Interactive"
            state="check"
            showText={true}
          />
          <LandingPriceComparisonItem
            text="Embeddable"
            state="check"
            showText={true}
          />
          <LandingPriceComparisonItem
            text="Analytics"
            state="check"
            showText={true}
          />
        </LandingPriceComparisonColumn>

        <LandingPriceComparisonColumn
          header="Static Screenshots"
          variant="primary"
        >
          <LandingPriceComparisonItem
            text="Interactive"
            state="cross"
            showText={false}
          />
          <LandingPriceComparisonItem
            text="Embeddable"
            state="cross"
            showText={false}
          />
          <LandingPriceComparisonItem
            text="Analytics"
            state="cross"
            showText={false}
          />
        </LandingPriceComparisonColumn>
      </LandingPriceComparisonSection>

      <LandingTestimonialListSection
        title="What Our Customers Say"
        description="Hear from marketing teams who transformed their product demos"
        testimonialItems={[
          {
            name: 'John Doe',
            text: "DemoSpark has transformed how we present our product. It's incredibly easy to use and the engagement metrics are invaluable for our team.",
            handle: '@johndoe',
            imageSrc: '/static/images/people/6.webp',
            url: '#',
          },
          {
            name: 'Jane Smith',
            text: 'Our sales team loves DemoSpark! The interactive demos are a game-changer for converting leads into customers quickly.',
            handle: '@janesmith',
            imageSrc: '/static/images/people/7.webp',
            url: '#',
          },
          {
            name: 'Michael Chen',
            text: 'The analytics dashboard gives us insights we never had before. We can see exactly where prospects engage most.',
            handle: '@michaelchen',
            imageSrc: '/static/images/people/8.webp',
            url: '#',
          },
          {
            name: 'Sarah Johnson',
            text: 'Recording and sharing demos has never been easier. Our marketing campaigns have seen a significant boost in engagement.',
            handle: '@sarahjohnson',
            imageSrc: '/static/images/people/9.webp',
            url: '#',
          },
          {
            name: 'David Martinez',
            text: 'The embedding feature is fantastic. We can showcase our product anywhere without technical hassles or complications.',
            handle: '@davidmartinez',
            imageSrc: '/static/images/people/10.webp',
            url: '#',
          },
          {
            name: 'Emily Brown',
            text: 'DemoSpark helped us reduce our sales cycle by showing prospects exactly what they need to see at the right time.',
            handle: '@emilybrown',
            imageSrc: '/static/images/people/11.webp',
            url: '#',
          },
          {
            name: 'Robert Taylor',
            text: 'The custom branding options let us maintain our brand identity while delivering powerful interactive experiences.',
            handle: '@roberttaylor',
            imageSrc: '/static/images/people/12.webp',
            url: '#',
          },
          {
            name: 'Lisa Anderson',
            text: 'Our conversion rates improved dramatically after implementing DemoSpark demos on our landing pages and emails.',
            handle: '@lisaanderson',
            imageSrc: '/static/images/people/13.webp',
            url: '#',
          },
          {
            name: 'James Wilson',
            text: 'The team collaboration features make it easy for our entire marketing department to create and share demos efficiently.',
            handle: '@jamesw',
            imageSrc: '/static/images/people/14.webp',
            url: '#',
          },
        ]}
        withBackground={false}
        withBackgroundGlow={false}
        variant="primary"
        backgroundGlowVariant="primary"
      />

      <LandingFaqCollapsibleSection
        title="Frequently Asked Questions"
        description="Everything you need to know about DemoSpark"
        faqItems={[
          {
            question: 'How do I get started with DemoSpark?',
            answer:
              'Simply sign up for a free account and follow the on-screen instructions to record your first demo. Our intuitive interface makes it easy to get started in minutes.',
          },
          {
            question: 'What integrations does DemoSpark support?',
            answer:
              "DemoSpark integrates with popular platforms such as HubSpot, Salesforce, Slack, and more. We're constantly adding new integrations based on customer feedback.",
          },
          {
            question: 'Is my data secure with DemoSpark?',
            answer:
              'Yes, we take data security seriously and employ industry-standard security measures to protect your information. All data is encrypted in transit and at rest.',
          },
          {
            question: 'How much does DemoSpark cost?',
            answer:
              'We offer various pricing plans to suit your needs, including a free plan with limited features. Our paid plans start at competitive rates with additional features and support.',
          },
          {
            question: 'Do you offer a free trial?',
            answer:
              'Yes, you can try DemoSpark for free with our trial period. No credit card required to get started with basic features.',
          },
          {
            question: 'Can I customize the branding of my demos?',
            answer:
              'Absolutely! DemoSpark allows you to fully customize your demos with your brand colors, logos, and styling to maintain brand consistency.',
          },
        ]}
        withBackground={true}
        withBackgroundGlow={false}
        variant="primary"
        backgroundGlowVariant="primary"
      />

      <LandingSaleCtaSection
        title="Ready to make product demos that actually convert?"
        description="Join thousands of marketing teams using DemoSpark to showcase their products"
        withBackground={false}
        withBackgroundGlow={true}
        variant="primary"
        backgroundGlowVariant="primary"
      >
        <Button size="xl" variant="primary" asChild>
          <Link href="#get-started">Try DemoSpark Free</Link>
        </Button>
        <Button size="xl" variant="outlinePrimary" asChild>
          <Link href="#demo">See a Live Demo</Link>
        </Button>
      </LandingSaleCtaSection>

      <LandingFooter
        title="DemoSpark"
        description="Turn clicks into conversions with interactive product demos"
        withBackground={true}
        withBackgroundGlow={false}
        variant="primary"
        backgroundGlowVariant="primary"
        withBackgroundGradient={true}
        logoComponent={
          <div className="flex items-center text-primary-900 dark:text-primary-100 gap-3">
            <Image
              src="https://hniurelftekdyiheqlqu.supabase.co/storage/v1/object/public/images/1767979765250-logo.png"
              alt="DemoSpark logo"
              width={200}
              height={200}
              className="h-8 w-8 rounded-full"
            />
            DemoSpark
          </div>
        }
      >
        <LandingFooterColumn title="Product">
          <LandingFooterLink href="#features">Features</LandingFooterLink>
          <LandingFooterLink href="#pricing">Pricing</LandingFooterLink>
          <LandingFooterLink href="#integrations">
            Integrations
          </LandingFooterLink>
          <LandingFooterLink href="#demo">Live Demo</LandingFooterLink>
        </LandingFooterColumn>

        <LandingFooterColumn title="Company">
          <LandingFooterLink href="#about">About Us</LandingFooterLink>
          <LandingFooterLink href="#blog">Blog</LandingFooterLink>
          <LandingFooterLink href="#careers">Careers</LandingFooterLink>
          <LandingFooterLink href="#contact">Contact</LandingFooterLink>
        </LandingFooterColumn>

        <LandingFooterColumn title="Resources">
          <LandingFooterLink href="#docs">Documentation</LandingFooterLink>
          <LandingFooterLink href="#support">Support</LandingFooterLink>
          <LandingFooterLink href="#community">Community</LandingFooterLink>
          <LandingFooterLink href="#status">Status</LandingFooterLink>
        </LandingFooterColumn>

        <LandingFooterColumn title="Legal">
          <LandingFooterLink href="#privacy">Privacy Policy</LandingFooterLink>
          <LandingFooterLink href="#terms">Terms of Service</LandingFooterLink>
          <LandingFooterLink href="#security">Security</LandingFooterLink>
        </LandingFooterColumn>
      </LandingFooter>
    </>
  );
}
