import { BookOpen, ArrowRight } from 'lucide-react';

const Blog = () => {
    const blogPosts = [
    {
      title: "新卒QAエンジニアが実践する、テスト活動で「良いレビュー」を受けるために心がけていること",
      url: "https://blog.cybozu.io/entry/2024/08/13/173444"
    },
    {
      title: "WACATE 2024 冬に参加しました",
      url: "https://note.com/reo_imomushi/n/n8cbe973a66df"
    },
    {
      title: "PHP「あいまい比較」におけるテスト対象選定のプロセスをまとめてみた",
      url: "https://blog.cybozu.io/entry/2025/08/04/100000"
    }
  ];

 return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="text-cyan-400 mr-3" size={32} />
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Blog
              </h2>
            </div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              自分の書いたブログをまとめています。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                <div className="p-6">
                  
                  <h3 className="text-xl font-semibold mb-3 text-white hover:text-cyan-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                    >
                      <span className="mr-2">記事を読む</span>
                      <ArrowRight size={16} />
                    </a>
                    <div className="text-xs text-gray-500 font-mono">
                      {post.url.replace('https://', '')}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
            >
              <BookOpen size={20} className="mr-2" />
              すべての記事を見る
            </a>

          <p className="text-gray-400 mt-10">
            © 2025 reomin. All rights reserved.
          </p>
          </div>
        </div>
      </section>          
    </div>
  );
};

export default Blog;