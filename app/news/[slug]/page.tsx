import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, Calendar, User 
} from 'lucide-react';
import { newsItems } from '@/data/news';

export default async function NewsPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = newsItems.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-24 pb-12 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 mb-8 hover:text-white">
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full rounded-3xl aspect-video object-cover" 
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-gray-700 text-base leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </section>
    </div>
  );
}
