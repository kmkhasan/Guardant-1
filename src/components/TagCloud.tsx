import { Link } from 'react-router-dom';

export default function TagCloud() {
  const tags = [
    { label: '#トートバッグ', path: '/category/tote' },
    { label: '#ショルダーバッグ', path: '/category/shoulder' },
    { label: '#長財布', path: '/category/wallet' },
    { label: '#バッグ レディース', path: '/category/ladies' },
    { label: '#ビジネスバッグ メンズ', path: '/category/business' },
    { label: '#リュック レディース', path: '/category/backpack' },
    { label: '#サコッシュ メンズ', path: '/category/shoulder' },
    { label: '#二つ折り財布', path: '/category/wallet' },
    { label: '#本革 リュック メンズ', path: '/category/backpack' },
  ];

  return (
    <div className="flex flex-wrap gap-2 mt-8 mb-4 border-t border-gray-200 pt-6">
      {tags.map((tag, index) => (
        <Link 
          key={index} 
          to={tag.path}
          className="border border-gray-300 rounded-full px-4 py-1.5 text-[10px] text-gray-600 hover:text-red-700 hover:border-red-700 transition-colors"
        >
          {tag.label}
        </Link>
      ))}
    </div>
  );
}
