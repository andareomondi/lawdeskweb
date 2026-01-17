import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useState, useRef, useEffect } from "react"
import { X } from "lucide-react"

export function CTAButtons() {
  const [demoModalOpen, setDemoModalOpen] = useState(false)
  const videoRef = useRef(null)

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

  const handleOpenDemo = () => {
    setDemoModalOpen(true)
  }

  const handleCloseDemo = () => {
    setDemoModalOpen(false)
    // Pause video when modal closes
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  // Auto-play video when modal opens
  useEffect(() => {
    if (demoModalOpen && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Auto-play prevented:", error)
      })
    }
  }, [demoModalOpen])

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
        <a href="https://github.com/andareomondi/lawdesk/releases/download/v8.3beta/LawDesk.apk">
        <Button
          size="lg"
          variant="outline"
          onClick={handleOpenDemo}
          className="w-full sm:w-auto text-base font-semibold px-8 py-6 rounded-lg border-2 bg-transparent hover:bg-accent/50 transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] hover:-translate-y-0.5 hover:border-primary/50"
        >
          See Demo
        </Button>
        </a>
      </div>

      {/* Video Demo Modal */}
      <Dialog open={demoModalOpen} onOpenChange={handleCloseDemo}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 overflow-hidden border-2 border-primary/20 bg-black">
          {/* Close button */}
          <button
            onClick={handleCloseDemo}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-200 hover:scale-110"
            aria-label="Close demo"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Video container */}
          <div className="relative w-full aspect-video bg-black">
            <video
              ref={videoRef}
              className="w-full h-full"
              controls
              muted
              playsInline
              preload="metadata"
            >
              {/* Replace this src with your video URL */}
              <source src="/demo-video.mp4" type="video/mp4" />
              <source src="/demo-video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </DialogContent>
      </Dialog>

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

        /* Remove default dialog padding */
        [data-state="open"] > div {
          padding: 0 !important;
        }
      `}</style>
    </>
  )
}
