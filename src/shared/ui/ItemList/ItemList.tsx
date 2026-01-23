import type {ReactNode} from "react";
import type {UserModel} from "../../../entities/[entity]/model/types";

type ItemListProps<T extends UserModel> = {
    items: T[];
    renderItem: (user: T) => ReactNode;
}

function ItemList<T extends UserModel>(props: ItemListProps<T>) {
    const {items, renderItem} = props;

    return (
        <>
            {items.map((item) => (
                <div key={item.id}>
                    {renderItem(item)}
                </div>
            ))}
        </>
    )
}

export default ItemList