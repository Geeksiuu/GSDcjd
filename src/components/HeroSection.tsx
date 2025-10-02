import { Button } from "@/components/ui/button";
import { Download, PlayCircle, Star } from "lucide-react";
import minecraftBg from "@/assets/minecraft-bg.png";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${minecraftBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-card/20 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border border-border/30 animate-fade-in shadow-gaming">
          <div className="mb-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-secondary animate-glow-pulse block mb-2">
                Bienvenido amante del
              </span>
              <span className="bg-gradient-gaming bg-clip-text text-transparent animate-float">
                Minecraft
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Aquí encontrarás los mejores <span className="text-primary font-semibold">addons</span>, 
              <span className="text-secondary font-semibold"> APKs</span> y 
              <span className="text-accent font-semibold"> modificaciones</span> para tu PC y móvil.
              <span className="block mt-2 text-primary animate-glow-pulse">¡Página en desarrollo HKR 🚀!</span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              onClick={() => window.open("https://play.google.com/store", "_blank")}
              className="bg-gaming-green hover:bg-gaming-green/80 text-white shadow-gaming group transition-all duration-300 transform hover:scale-105"
           >
             <PlayCircle className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Google Play
             </Button>
             <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("https://www.apple.com/app-store/", "_blank")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-gaming group transition-all duration-300 transform hover:scale-105"
           >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              App Store
           </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-primary group-hover:animate-glow-pulse transition-all">
                500+
              </div>
              <div className="text-sm text-muted-foreground">Addons Gratis</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-secondary group-hover:animate-glow-pulse transition-all">
                100+
              </div>
              <div className="text-sm text-muted-foreground">APKs Disponibles</div>
            </div>
            <div className="group">
              <div className="flex items-center justify-center text-3xl font-bold text-accent group-hover:animate-glow-pulse transition-all">
                4.9
                <Star className="ml-1 h-6 w-6 fill-current" />
              </div>
              <div className="text-sm text-muted-foreground">Calificación</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-8 w-12 h-12 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
}