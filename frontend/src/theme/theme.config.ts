export type ThemeConfig = {
  projectName: string;
  displayName: string;
  domain: string;
  designTemplateId?: string;
  designTemplateName?: string;
  style: string;
  styleDescription?: string;
  colors: Record<string, string>;
  radius: string;
  density: string;
  vector: string;
  vectorFamily?: string;
  illustration?: {
    title: string;
    motifs: string[];
  };
  sidebarVariant: string;
  cardStyle: string;
  layout?: Record<string, string>;
};

export const themeConfig: ThemeConfig = {
  "projectName": "cab-booking-management-system",
  "displayName": "Cab Booking",
  "domain": "booking-cab-booking",
  "designTemplateId": "booking-split-console",
  "designTemplateName": "Cab Booking Split Console",
  "style": "booking-major-project",
  "styleDescription": "Cab Booking layout with booking-workflow visuals and domain-specific controls.",
  "colors": {
    "primary": "#be123c",
    "accent": "#0ea5e9",
    "background": "#fff1f2",
    "surface": "#ffffff",
    "muted": "#ffe4e6",
    "text": "#111827"
  },
  "radius": "10px",
  "density": "comfortable",
  "vector": "booking-workflow",
  "vectorFamily": "booking-cab-booking",
  "illustration": {
    "title": "Cab Booking visual",
    "motifs": [
      "Cab Booking Customers",
      "Cab Booking Slots",
      "Cab Bookings",
      "Cab Booking Payments"
    ]
  },
  "sidebarVariant": "split-console",
  "cardStyle": "insight-panel",
  "layout": {
    "variant": "split-console"
  }
};
