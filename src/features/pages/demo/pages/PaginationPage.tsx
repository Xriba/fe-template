import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Pagination } from "src/library";

const PaginationPage = () => {
    const totalItems = 100;
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(15);
    const [hasPrev, setHasPrev] = useState(false);
    const [hasNext, setHasNext] = useState(true);
    const [totalPages, setTotalPages] = useState(7);
    const handlePage = useCallback(
        (page: number) => {
            if (page >= totalPages) {
                setPage(totalPages);
                setHasPrev(totalPages > 1);
                setHasNext(false);
            } else if (page <= 1) {
                setPage(1);
                setHasPrev(false);
                setHasNext(totalPages > 1);
            } else {
                setPage(page);
                setHasPrev(true);
                setHasNext(true);
            }
        },
        [totalPages]
    );
    const handleSize = useCallback((size: number) => {
        setSize(size);
        setTotalPages(Math.ceil(totalItems / size));
    }, []);
    const paginationProps = useMemo(
        () => ({
            total_items: totalItems,
            items_per_page: size,
            current_page: page,
            number_of_pages: totalPages,
            has_prev: hasPrev,
            has_next: hasNext,
            changePage: handlePage,
            changeSize: handleSize,
        }),
        [handlePage, handleSize, hasNext, hasPrev, page, size, totalPages]
    );

    useEffect(() => {
        handlePage(1);
    }, [handlePage, totalPages]);

    return (
        <div className="page">
            <div className="page-name">Pagination</div>
            <div className="page-content">
                <div className="page-content-wrapper">
                    <Pagination {...paginationProps} />
                </div>
            </div>
        </div>
    );
};

export default PaginationPage;
