import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <ComponentList>
                <Component />
                <Component />
                <Component />
            </ComponentList>
        </CollapseWrapper>
    );
};

const ComponentList = ({ children }) => {
    const ChildrenNum = React.Children.toArray(children);

    return React.Children.map(ChildrenNum, (child) => {
        const children = child.key.slice(1);

        const config = {
            ...child.props,
            number: Number(children)
        };
        return React.cloneElement(child, config);
    });
};

ComponentList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const Component = ({ number }) => {
    return <div> {number}. Компонент списка</div>;
};

Component.propTypes = {
    number: PropTypes.number
};

export default ChildrenExercise;
