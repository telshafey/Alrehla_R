import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePublicData } from '../../../hooks/queries/public/usePublicDataQuery';
import PageLoader from '@/components/ui/page-loader';
import { ArrowLeft } from 'lucide-react';

const BlogPostPage = () => {
    const { slug } = useParams();
    const { data, isLoading } = usePublicData();

    if (isLoading) return <PageLoader />;

    const post = data?.blogPosts?.find(p => p.slug === slug || p.id.toString() === slug);

    if (!post) {
        return <div className="py-20 text-center">المقال غير موجود</div>;
    }

    return (
        <div className="bg-white py-16 sm:py-20 animate-fadeIn">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-semibold mb-8">
                    <ArrowLeft size={16} />
                    العودة إلى المدونة
                </Link>
                <article>
                    <header className="mb-8">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">{post.title}</h1>
                        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                            <span>{post.published_at ? new Date(post.published_at).toLocaleDateString('ar-EG') : ''}</span>
                        </div>
                    </header>

                    {post.image_url && (
                        <div className="mb-10 w-full rounded-2xl overflow-hidden shadow-lg">
                            <img src={post.image_url} alt={post.title} className="w-full h-64 md:h-96 object-cover" />
                        </div>
                    )}

                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-right">
                        {post.content.split('\n').map((paragraph: string, index: number) => (
                            <p key={index} className="mb-4">{paragraph}</p>
                        ))}
                    </div>
                </article>
            </div>
        </div>
    );
};
export default BlogPostPage;
