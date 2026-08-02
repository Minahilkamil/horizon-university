export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-lg font-bold bg-blue-600">
          H
        </div>
        <div className="w-24 h-1 rounded-full overflow-hidden bg-gray-200">
          <div className="h-full rounded-full bg-blue-600 w-3/5" />
        </div>
      </div>
    </div>
  );
}
