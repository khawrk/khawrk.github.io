const HomeBg = () => {
    return (
        <div className="fixed inset-0 -z-[100] w-screen h-screen overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-105"
            >
                <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dev-gen-video-bWJF3RE7rfWhBD99IdJJxs9i2nkw4h.mp4"
                    type="video/mp4"
                />
            </video>
            {/* Gradient overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
    )
}

export default HomeBg
