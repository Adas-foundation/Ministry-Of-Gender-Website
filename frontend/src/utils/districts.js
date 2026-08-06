// Official 28 districts of Malawi, used as an offline fallback whenever the
// backend /district endpoint is unreachable or the districts table is empty.
// The report form falls back to this list so users can always pick a district.
export const MALAWI_DISTRICTS = [
  { id: 1, name: 'Balaka' },
  { id: 2, name: 'Blantyre' },
  { id: 3, name: 'Chikwawa' },
  { id: 4, name: 'Chiradzulu' },
  { id: 5, name: 'Chitipa' },
  { id: 6, name: 'Dedza' },
  { id: 7, name: 'Dowa' },
  { id: 8, name: 'Karonga' },
  { id: 9, name: 'Kasungu' },
  { id: 10, name: 'Likoma' },
  { id: 11, name: 'Lilongwe' },
  { id: 12, name: 'Machinga' },
  { id: 13, name: 'Mangochi' },
  { id: 14, name: 'Mchinji' },
  { id: 15, name: 'Mulanje' },
  { id: 16, name: 'Mwanza' },
  { id: 17, name: 'Mzimba' },
  { id: 18, name: 'Neno' },
  { id: 19, name: 'Nkhata Bay' },
  { id: 20, name: 'Nkhotakota' },
  { id: 21, name: 'Nsanje' },
  { id: 22, name: 'Ntcheu' },
  { id: 23, name: 'Ntchisi' },
  { id: 24, name: 'Phalombe' },
  { id: 25, name: 'Rumphi' },
  { id: 26, name: 'Salima' },
  { id: 27, name: 'Thyolo' },
  { id: 28, name: 'Zomba' },
]

// Picks the closest matching district from a reverse-geocoded address.
// Returns the district object from the given list, or null if none matches.
export function matchDistrictFromAddress(address, list) {
  if (!address || typeof address !== 'object') return null

  const candidates = [
    address.county,
    address.state_district,
    address.state,
    address.region,
    address.town,
    address.city,
  ]
    .filter(Boolean)
    .map((value) => value.toLowerCase())

  const normalize = (name) => String(name).toLowerCase().replace(/district|city|municipality/gi, '').trim()

  for (const district of list) {
    const normalized = normalize(district.name)
    if (candidates.some((candidate) => normalize(candidate) === normalized)) {
      return district
    }
  }

  // Fallback: substring match on the full display name.
  const fullName = (address.name || '').toLowerCase() + (address.display_name || '').toLowerCase()
  for (const district of list) {
    if (fullName.includes(district.name.toLowerCase())) {
      return district
    }
  }

  return null
}
