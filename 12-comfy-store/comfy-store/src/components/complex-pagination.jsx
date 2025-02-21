import { useLoaderData, useLocation, useNavigate } from 'react-router'

const ComplexPagination = () => {
  const { meta } = useLoaderData()
  const { pageCount, page } = meta.pagination

  const { search, pathname } = useLocation()
  const navigate = useNavigate()

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search)
    searchParams.set('page', pageNumber)
    navigate(`${pathname}?${searchParams.toString()}`)
  }
  
  const addPageBtn = ({ pageNumber, activeClass }) => (
    <button
      key={pageNumber}
      onClick={() => handlePageChange(pageNumber)}
      className={`btn btn-xs sm:btn-md border-none join-item ${
        activeClass ? 'bg-base-300 border-base-300' : ''
      }`}
    >
      {pageNumber}
    </button>
  )

  const renderPageBtns = () => {
    const pageButons = []

    pageButons.push(addPageBtn({ pageNumber: 1, activeClass: page === 1 }))

    if (page > 2)
      pageButons.push(
        <button className="join-item btn btn-xs sm:btn-md" key="dots-1">
          ...
        </button>
      )

    if (page !== 1 && page !== pageCount) {
      if (page > 2) {
        pageButons.push(
          addPageBtn({ pageNumber: page - 1, activeClass: false })
        )
      }

      pageButons.push(addPageBtn({ pageNumber: page, activeClass: true }))

      if (page < pageCount - 1) {
        pageButons.push(
          addPageBtn({ pageNumber: page + 1, activeClass: false })
        )
      }
    }

    if (page < pageCount - 1)
      pageButons.push(
        <button className="join-item btn btn-xs sm:btn-md" key="dots-2">
          ...
        </button>
      )

    pageButons.push(
      addPageBtn({ pageNumber: pageCount, activeClass: page === pageCount })
    )

    return pageButons
  }

  if (pageCount < 2) return null

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let prev = page - 1
            if (prev < 1) prev = pageCount
            handlePageChange(prev)
          }}
        >
          Prev
        </button>
        {renderPageBtns()}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let next = page + 1
            if (next > pageCount) next = 1
            handlePageChange(next)
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}
export default ComplexPagination
