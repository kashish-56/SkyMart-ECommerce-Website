export default function ProductReviews({ reviews }) {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section className="mx-auto mt-14 max-w-7xl px-5">
      <div className="rounded-3xl bg-white p-8 shadow-lg">

        {/* Heading */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Customer Reviews
            </h2>

            <p className="mt-2 text-gray-500">
              {reviews.length} Verified Reviews
            </p>
          </div>

          <div className="hidden rounded-2xl bg-yellow-50 px-6 py-4 md:block">
            <p className="text-4xl font-bold text-yellow-500">
              ★★★★★
            </p>

            <p className="text-sm text-gray-500">
              Loved by our customers
            </p>
          </div>
        </div>

        {/* Empty Reviews */}
        {reviews.length === 0 ? (
          <div className="py-20 text-center">
            <h3 className="text-2xl font-semibold text-gray-700">
              No Reviews Yet
            </h3>

            <p className="mt-2 text-gray-500">
              Be the first person to review this product.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 p-6 transition duration-300 hover:shadow-md"
              >
                <div className="flex items-start gap-5">

                  {/* Avatar */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-xl font-bold text-white">
                    {review.reviewerName.charAt(0)}
                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    {/* Name & Date */}
                    <div className="flex flex-wrap items-center justify-between gap-2">

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {review.reviewerName}
                        </h3>

                        <p className="text-sm text-gray-500">
                          {review.reviewerEmail}
                        </p>
                      </div>

                      <p className="text-sm text-gray-400">
                        {formatDate(review.date)}
                      </p>

                    </div>

                    {/* Stars */}
                    <div className="mt-4 flex items-center gap-1 text-xl text-yellow-500">
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </div>

                    {/* Comment */}
                    <p className="mt-4 leading-7 text-gray-600">
                      {review.comment}
                    </p>

                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}