export default function SkeletonCardMovie() {
    return (
        <div className="flex">
  <div className="flex-shrink-0">
    <span className="size-12 block bg-gray-200 rounded-full"></span>
  </div>

  <div className="ms-4 mt-2 w-full">
    <p className="h-4 bg-gray-200 rounded-full" style={{ width: '40%' }}></p>

    <ul className="mt-5 space-y-3">
      <li className="w-full h-4 bg-gray-200 rounded-full"></li>
      <li className="w-full h-4 bg-gray-200 rounded-full"></li>
      <li className="w-full h-4 bg-gray-200 rounded-full"></li>
      <li className="w-full h-4 bg-gray-200 rounded-full"></li>
    </ul>
  </div>
</div>
    )
}