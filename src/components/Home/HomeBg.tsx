const HomeBg = () => {
    return (
        <div className="fixed inset-0 -z-[100] w-screen h-screen overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dev-gen-video-bWJF3RE7rfWhBD99IdJJxs9i2nkw4h.mp4"
                    type="video/mp4"
                />
            </video>
            {/* Dark overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/40" />
        </div>
    )
}

export default HomeBg
