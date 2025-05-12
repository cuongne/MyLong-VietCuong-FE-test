
export const Pagination = ({ totalItems, itemsPerPage, onPageChange,currentPage }: {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}) => {

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (page: number) => {
        onPageChange(page);
    };

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex gap-3 items-center">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-2 py-1 text-sm  disabled:text-[#888888]"
            >
                Prev
            </button>
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm ${page === currentPage ? "bg-green-800 text-white" : "bg-gray-200 hover:bg-gray-300"
                        }`}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-2 py-1 text-sm  disabled:text-[#888888]"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
