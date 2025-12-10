export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Atlas Growth
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Professional websites for local businesses
        </p>
        <p className="text-gray-500">
          Visit a business page: <span className="font-mono bg-gray-200 px-2 py-1 rounded">atlasgrowth.ai/[business-slug]</span>
        </p>
      </div>
    </div>
  );
}
