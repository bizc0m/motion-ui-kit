/**
 * Motion UI Kit — component index.
 *
 * Full set of 38 components, grouped by category for discoverability.
 */

export * from './actions';
export * from './forms';
export * from './data';
export * from './overlay';
export * from './feedback';
export * from './navigation';

import {
  createButton,
  createIconButton,
  createSplitButton,
  createButtonGroup,
  createFloatingActionButton,
} from './actions';
import {
  createInput,
  createTextarea,
  createSelect,
  createCheckbox,
  createRadio,
  createToggle,
  createSlider,
  createRange,
  createFileUpload,
  createSearchInput,
  createPinInput,
} from './forms';
import {
  createCard,
  createMediaCard,
  createProductCard,
  createTestimonialCard,
  createAvatar,
  createBadge,
  createTag,
} from './data';
import {
  createTooltip,
  createPopover,
  createModal,
  createDrawer,
  createToast,
  createAlert,
} from './overlay';
import {
  createProgressBar,
  createSpinner,
  createSkeleton,
} from './feedback';
import {
  createAccordion,
  createTabs,
  createBreadcrumb,
  createPagination,
  createStepper,
  createDropdown,
} from './navigation';

/** Ordered list of all 38 component names. */
export const componentNames = [
  // Actions
  'Button',
  'IconButton',
  'SplitButton',
  'ButtonGroup',
  'FloatingActionButton',
  // Forms
  'Input',
  'Textarea',
  'Select',
  'Checkbox',
  'Radio',
  'Toggle',
  'Slider',
  'Range',
  'FileUpload',
  'SearchInput',
  'PinInput',
  // Data display
  'Card',
  'MediaCard',
  'ProductCard',
  'TestimonialCard',
  'Avatar',
  'Badge',
  'Tag',
  // Overlays
  'Tooltip',
  'Popover',
  'Modal',
  'Drawer',
  'Toast',
  'Alert',
  // Feedback
  'ProgressBar',
  'Spinner',
  'Skeleton',
  // Navigation
  'Accordion',
  'Tabs',
  'Breadcrumb',
  'Pagination',
  'Stepper',
  'Dropdown',
] as const;

export type ComponentName = (typeof componentNames)[number];

/** Factory map for instantiating any component by name. */
export const componentBuilders: Record<ComponentName, () => HTMLElement> = {
  Button: createButton,
  IconButton: createIconButton,
  SplitButton: createSplitButton,
  ButtonGroup: createButtonGroup,
  FloatingActionButton: createFloatingActionButton,
  Input: createInput,
  Textarea: createTextarea,
  Select: createSelect,
  Checkbox: createCheckbox,
  Radio: createRadio,
  Toggle: createToggle,
  Slider: createSlider,
  Range: createRange,
  FileUpload: createFileUpload,
  SearchInput: createSearchInput,
  PinInput: createPinInput,
  Card: createCard,
  MediaCard: createMediaCard,
  ProductCard: createProductCard,
  TestimonialCard: createTestimonialCard,
  Avatar: createAvatar,
  Badge: createBadge,
  Tag: createTag,
  Tooltip: createTooltip,
  Popover: createPopover,
  Modal: createModal,
  Drawer: createDrawer,
  Toast: createToast,
  Alert: createAlert,
  ProgressBar: createProgressBar,
  Spinner: createSpinner,
  Skeleton: createSkeleton,
  Accordion: createAccordion,
  Tabs: createTabs,
  Breadcrumb: createBreadcrumb,
  Pagination: createPagination,
  Stepper: createStepper,
  Dropdown: createDropdown,
};
