import React, { useState } from 'react';

const Footer = ({ totalPages }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];

        // Add "<" button
        pageNumbers.push(
            <a
                key="prev"
                href="#"
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                className="pagination-link"
            >
                &lt; Previous
            </a>
        );

        // Add "1" inside a box
        pageNumbers.push(
            <span key="first-page" className={currentPage === 1 ? 'active page-box' : 'page-box'} onClick={() => handlePageChange(1)}>
                1
            </span>
        );

        // Add other page numbers and ellipsis
        for (let i = 2; i <= 6; i++) {
            pageNumbers.push(
                <span key={i} className={currentPage === i ? 'active page-box' : 'page-box'} onClick={() => handlePageChange(i)}>
                    {i}
                </span>
            );
        }

        // Add ellipsis if there are more pages after currentPage
        if (totalPages > 6) {
            pageNumbers.push(
                <span key="ellipsis" className="ellipsis">
                    ...
                </span>
            );
        }

        // Add ">" button
        pageNumbers.push(
            <a
                key="next"
                href="#"
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                className="pagination-link"
            >
                Next &gt;
            </a>
        );

        return pageNumbers;
    };

    return (
        <div className="pagination">
            {renderPageNumbers()}
        </div>
    );
};

export default Footer;
