const videoDemoId = 'MlVVRfIpqSw';

export default function Demo() {
  return (
    <section id="demo" className="section-wrapper bg-white">
      <div className="content-container">
        <h2 className="font-heading text-3xl font-bold text-gray-900">Video Demo</h2>
        <div className="heading-accent" />

        <div className="mt-8 rounded-2xl bg-white p-2 shadow-lg sm:p-4">
          <div className="overflow-hidden rounded-2xl bg-gray-100">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${videoDemoId}`}
                title="Mathematics video demo class"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
