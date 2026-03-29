/** Query flag when arriving from the home page “experiences” blocks. */
export const HOME_EXPERIENCES_FROM_PARAM = "from";
export const HOME_EXPERIENCES_FROM_VALUE = "home-experiences";

export function withHomeExperiencesSource(path: string): string {
  const q = new URLSearchParams({
    [HOME_EXPERIENCES_FROM_PARAM]: HOME_EXPERIENCES_FROM_VALUE,
  });
  return `${path}?${q.toString()}`;
}

export function isFromHomeExperiences(
  searchParams: Record<string, string | string[] | undefined>
): boolean {
  const raw = searchParams[HOME_EXPERIENCES_FROM_PARAM];
  const value = Array.isArray(raw) ? raw[0] : raw;
  return value === HOME_EXPERIENCES_FROM_VALUE;
}
