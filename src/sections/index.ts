/**
 * Motion UI Kit — section index.
 *
 * Full set of 30 section patterns, grouped by category.
 */

export * from './heroes';
export * from './features';
export * from './pricing';
export * from './social';
export * from './cta';
export * from './content';
export * from './engagement';
export * from './layout';

import {
  createHeroCenter,
  createHeroSplit,
  createHeroFullBleed,
} from './heroes';
import {
  createFeaturesGrid,
  createFeaturesCards,
  createFeaturesSplit,
} from './features';
import {
  createPricingTable,
  createPricingToggle,
} from './pricing';
import {
  createTestimonialsSlider,
  createTestimonialsGrid,
  createLogoCloud,
  createStatsStrip,
  createStatsGrid,
} from './social';
import {
  createCTAStandard,
  createCTABanner,
} from './cta';
import {
  createFAQAccordion,
  createFAQColumns,
  createTeamGrid,
  createTeamCarousel,
  createGalleryGrid,
  createGalleryMasonry,
  createBlogList,
  createBlogFeatured,
} from './content';
import {
  createNewsletterInline,
  createNewsletterCard,
  createContactSplit,
  createSearchSection,
  createComparisonTable,
  createStepsHorizontal,
} from './engagement';
import {
  createFooterStandard,
} from './layout';

/** Ordered list of all 30 section names. */
export const sectionNames = [
  // Heroes
  'HeroCenter',
  'HeroSplit',
  'HeroFullBleed',
  // Features
  'FeaturesGrid',
  'FeaturesCards',
  'FeaturesSplit',
  // Pricing
  'PricingTable',
  'PricingToggle',
  // Social proof
  'TestimonialsSlider',
  'TestimonialsGrid',
  'LogoCloud',
  'StatsStrip',
  'StatsGrid',
  // CTAs
  'CTAStandard',
  'CTABanner',
  // Content
  'FAQAccordion',
  'FAQColumns',
  'TeamGrid',
  'TeamCarousel',
  'GalleryGrid',
  'GalleryMasonry',
  'BlogList',
  'BlogFeatured',
  // Engagement
  'NewsletterInline',
  'NewsletterCard',
  'ContactSplit',
  'SearchSection',
  'ComparisonTable',
  'StepsHorizontal',
  // Layout
  'FooterStandard',
] as const;

export type SectionName = (typeof sectionNames)[number];

/** Factory map for instantiating any section by name. */
export const sectionBuilders: Record<SectionName, () => HTMLElement> = {
  HeroCenter: createHeroCenter,
  HeroSplit: createHeroSplit,
  HeroFullBleed: createHeroFullBleed,
  FeaturesGrid: createFeaturesGrid,
  FeaturesCards: createFeaturesCards,
  FeaturesSplit: createFeaturesSplit,
  PricingTable: createPricingTable,
  PricingToggle: createPricingToggle,
  TestimonialsSlider: createTestimonialsSlider,
  TestimonialsGrid: createTestimonialsGrid,
  LogoCloud: createLogoCloud,
  StatsStrip: createStatsStrip,
  StatsGrid: createStatsGrid,
  CTAStandard: createCTAStandard,
  CTABanner: createCTABanner,
  FAQAccordion: createFAQAccordion,
  FAQColumns: createFAQColumns,
  TeamGrid: createTeamGrid,
  TeamCarousel: createTeamCarousel,
  GalleryGrid: createGalleryGrid,
  GalleryMasonry: createGalleryMasonry,
  BlogList: createBlogList,
  BlogFeatured: createBlogFeatured,
  NewsletterInline: createNewsletterInline,
  NewsletterCard: createNewsletterCard,
  ContactSplit: createContactSplit,
  SearchSection: createSearchSection,
  ComparisonTable: createComparisonTable,
  StepsHorizontal: createStepsHorizontal,
  FooterStandard: createFooterStandard,
};
