import React, { useState } from 'react';

const Footer = ({ totalPages }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];

        // Display ellipsis if there are more than 5 pages and currentPage is not within the first two pages
        if (totalPages > 5 && currentPage > 2) {
            pageNumbers.push(
                <span key="ellipsisStart" className="ellipsis">
                    ...
                </span>
            );
        }

        // Determine the range of page numbers to display
        let start = Math.max(1, currentPage - 2);
        let end = Math.min(totalPages, start + 4);

        // Adjust the start and end if needed to ensure there are always 5 page numbers displayed
        if (end - start < 4) {
            start = Math.max(1, end - 4);
        }

        for (let i = start; i <= end; i++) {
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

        // Display ellipsis if there are more than 5 pages and currentPage is not within the last two pages
        if (totalPages > 5 && currentPage < totalPages - 1) {
            pageNumbers.push(
                <span key="ellipsisEnd" className="ellipsis">
                    ...
                </span>
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

export default Footer;
