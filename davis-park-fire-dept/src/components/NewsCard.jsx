// Individual News Card Component
const NewsCard = ({ title, date, category, children, actionText, onAction }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-1 text-xs font-medium text-red-600 bg-red-50 rounded-full">
            {category}
          </span>
          <time className="text-xs text-gray-400">{date}</time>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{children}</p>
      </div>
      {actionText && (
        <button
          onClick={onAction}
          className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-xl transition-colors mt-2"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};
export default NewsCard;