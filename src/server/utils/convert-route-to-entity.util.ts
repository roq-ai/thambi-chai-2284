const mapping: Record<string, string> = {
  'chai-locations': 'chai_location',
  organizations: 'organization',
  reviews: 'review',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
