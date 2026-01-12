import type React from "react";
import type {CommentModel} from "../../../entities/post/models/CommentModel";
import {useCallback, useState} from "react";

export const CommentList: React.FC<CommentModel> = ({
        children,
        collapseComment,
        expandComment,
        hidden
}) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(hidden);

    const toggleCollapse = useCallback(() => {
        setIsCollapsed(prev => !prev);
    }, [])

    return (
        <>
            <div>
                <div>
                    <button onClick={toggleCollapse}>
                        {isCollapsed ? expandComment : collapseComment}
                    </button>

                    {!isCollapsed && (
                        <div>{children}</div>
                    )}
                </div>
            </div>
        </>
    )
}