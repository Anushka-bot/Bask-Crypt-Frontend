export default function Basket({ img_src }) {
  return (
    <div class="block w-72 rounded-lg bg-white shadow-lg hover:-translate-y-1 duration-300 transition hover:shadow-xl">
      <a href="#!">
        <img class="rounded-t-lg" src={img_src} alt="" />
      </a>
      <div class="p-6 text-ellipsis">
        <div className="mb-2">
          <h5 class="text-xl font-medium leading-tight text-neutral-800">
            Card title
          </h5>
          <h6 className="text-xs text-gray-400">Author Name</h6>
        </div>
        <p class="mb-4 text-sm text-neutral-600 line-clamp-3">
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Et eveniet voluptas, veritatis non quo officiis
          reprehenderit dicta iure, enim ut alias nostrum repudiandae cum quia,
          consequuntur temporibus velit distinctio fugit?
        </p>
      </div>
    </div>
  );
}
