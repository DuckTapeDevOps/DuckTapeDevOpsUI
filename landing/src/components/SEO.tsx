import { Helmet } from 'react-helmet-async'
import { siteConfig } from '../config/site'

interface SEOProps {
  title?: string
  description?: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  noindex?: boolean
}

const SEO = ({ 
  title, 
  description, 
  path = '/', 
  image,
  type = 'website',
  noindex = false
}: SEOProps) => {
  const fullTitle = title 
    ? `${siteConfig.brand.name} | ${title}`
    : siteConfig.metadata.title
  
  const metaDescription = description || siteConfig.seo.defaultDescription
  const canonicalUrl = `${siteConfig.seo.baseUrl}${path === '/' ? '' : path}`
  const ogImage = image || `${siteConfig.seo.baseUrl}${siteConfig.brand.logo?.src || '/brand/logo.png'}`

  // SameAs URLs: Organization only includes company LinkedIn and GitHub
  const organizationSameAs = [
    siteConfig.seo.social.linkedinCompany,
    siteConfig.seo.social.github,
  ]

  const personSameAs = [
    siteConfig.seo.social.linkedinPersonal,
    siteConfig.seo.social.linkedinCompany,
    siteConfig.seo.social.twitch,
    siteConfig.seo.social.github,
  ]

  // Organization JSON-LD
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.seo.organization.name,
    legalName: siteConfig.seo.organization.legalName,
    url: siteConfig.seo.organization.url,
    logo: siteConfig.seo.organization.logo,
    description: siteConfig.seo.organization.description,
    sameAs: organizationSameAs,
    founder: {
      '@type': 'Person',
      name: siteConfig.seo.person.name,
      jobTitle: siteConfig.seo.person.jobTitle,
      email: siteConfig.seo.person.email,
      sameAs: personSameAs,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.contact.email,
      contactType: 'Customer Service',
    },
  }

  // Person JSON-LD (Nick Benton)
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.seo.person.name,
    jobTitle: siteConfig.seo.person.jobTitle,
    email: siteConfig.seo.person.email,
    url: siteConfig.seo.organization.url,
    sameAs: personSameAs,
    worksFor: {
      '@type': 'Organization',
      name: siteConfig.seo.organization.name,
      url: siteConfig.seo.organization.url,
    },
  }

  // Website JSON-LD
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.brand.name,
    url: siteConfig.seo.baseUrl,
    description: siteConfig.seo.organization.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.seo.organization.name,
      logo: {
        '@type': 'ImageObject',
        url: siteConfig.seo.organization.logo,
      },
    },
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />
      
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteConfig.brand.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  )
}

export default SEO
