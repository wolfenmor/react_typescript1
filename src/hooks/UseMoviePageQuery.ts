import {useSearchParams} from "react-router-dom";
import {isDisabled} from "@testing-library/user-event/dist/utils";

const UseMoviePageQuery = () => {
    const [query, setQuery] = useSearchParams({page: "1"});
    const page = query.get("page");

    return {
        page,
        prevPage:() => setQuery(prev => {
            const prevPage = +prev.get("page") - 1;
            prev.set("page", prevPage.toString())
            return prev
        }),
        nextPage:() => setQuery(next => {
            const nextPage = +next.get("page") + 1;
            next.set("page", nextPage.toString())
            return next
        })

    }
}
export {UseMoviePageQuery}