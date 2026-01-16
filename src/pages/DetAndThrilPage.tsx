import {useOutletContext} from "react-router-dom";
import type {MainOutletContext} from "../shared/layouts/MainLayout";
import {LoadingDetectivesAndThrillers} from "../shared/lib/hoc/WithLoader";

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