export class Route {
    /* ------------------------------------------------------------------------ *
     * Internal routes
     * ------------------------------------------------------------------------ */
  
    static HOME = '/'
    static FREELANCE = '/freelance'
    static PROJECTS = '/projects'
    static BLOG = '/blog'
  
    /**
     * Path to the page for all books
     */
    static BOOKS = '/books'
  
    /**
     * Path to the page for a book
     */
    static BOOK = (slug: string): string => `/books/${slug}`
    static DESIGN = '/design'
    static RSS = '/rss.xml'
  
    /* ------------------------------------------------------------------------ *
     * File routes
     * ------------------------------------------------------------------------ */
  
    static RESUME = '/resume.pdf'
  
    /* ------------------------------------------------------------------------ *
     * External routes
     * ------------------------------------------------------------------------ */
  
    static CONTACT = 'mailto:ciaranmahon97@gmail.com'
    static GITHUB = 'https://github.com/contro97'
    static LINKEDIN = 'https://www.linkedin.com/in/ciaran-mahon/'
  }