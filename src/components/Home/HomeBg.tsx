const HomeBg = () => {
    return (
        <div className="-z-[100] absolute top-0 left-0 w-full h-[100vh] overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dev-gen-video-bWJF3RE7rfWhBD99IdJJxs9i2nkw4h.mp4"
                    type="video/mp4"
                />
            </video>
            {/* Dark overlay to ensure text readability */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
        </div>
    )
}

export default HomeBg
