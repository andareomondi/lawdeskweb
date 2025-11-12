import { Button } from "@/components/ui/button"

export function CTAButtons() {
  const handleScrollToNewsletter = (e) => {
    e.preventDefault()
    const newsletterSection = document.querySelector('#newsletter')
    
    if (newsletterSection) {
      newsletterSection.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
      
      // Optional: Add a subtle highlight animation to the newsletter section
      newsletterSection.classList.add('highlight-pulse')
      setTimeout(() => {
        newsletterSection.classList.remove('highlight-pulse')
      }, 2000)
    }
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <a href="#newsletter" onClick={handleScrollToNewsletter}>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] hover:-translate-y-0.5"
          >
            Join the Beta
          </Button>
        </a>
        <Button
          size="lg"
          variant="outline"
          className="w-full sm:w-auto text-base font-semibold px-8 py-6 rounded-lg border-2 bg-transparent hover:bg-accent/50 transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] hover:-translate-y-0.5 hover:border-primary/50"
        >
          See Demo
        </Button>
      </div>

      <style jsx global>{`
        @keyframes highlight-pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(var(--primary-rgb), 0);
          }
          50% {
            box-shadow: 0 0 0 20px rgba(var(--primary-rgb), 0.1);
          }
        }

        .highlight-pulse {
          animation: highlight-pulse 1s ease-out 2;
        }

        /* Smooth scroll for the entire page */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  )
}
