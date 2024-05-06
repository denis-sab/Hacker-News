import React, { useState } from 'react';

const FooterPagination = ({ totalPages }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // You can add logic here to fetch data for the new page
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];

        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <a
                    key={i}
                    href="#"
                    className={currentPage === i ? 'active' : ''}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </a>
            );
        }

        return pageNumbers;
    };

    return (
        <div className="pagination">
            <a
                href="#"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                &laquo; Previous
            </a>
            {renderPageNumbers()}
            <a
                href="#"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next &raquo;
            </a>
        </div>
    );
};

export default FooterPagination;