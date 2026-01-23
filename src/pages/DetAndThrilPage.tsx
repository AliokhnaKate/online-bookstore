import {useOutletContext} from "react-router-dom";
import type {MainOutletContext} from "../shared/layouts/MainLayout";
import {withLoading} from "../shared/lib/hoc/WithLoader";
import DetectivesAndThrillers from "../widgets/PostList/DetectivesAndThrillers";

const LoadingDetectivesAndThrillers = withLoading(DetectivesAndThrillers, {loadingText: '...Загрузка раздела Детективы и триллеры', showSpinner: true});

function DetAndThrilPage () {
    const {loadingStates, updateLoading, filterOptions} = useOutletContext<MainOutletContext>();

    return (
        <>
            <LoadingDetectivesAndThrillers
                    loading={loadingStates.LoadingDetectivesAndThrillers}
                    updateLoading={(value) => updateLoading('LoadingDetectivesAndThrillers', value)}
                    filterOptions={filterOptions}
            />
        </>
    )
}

export default DetAndThrilPage;