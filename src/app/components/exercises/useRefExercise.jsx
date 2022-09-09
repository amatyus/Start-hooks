import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const smallRef = useRef();
    const divRef = useRef();

    const handleClickWidth = () => {
        divRef.current.style.height = "150px";
        divRef.current.style.width = "80px";
        smallRef.current.innerHTML = "text";
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={divRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small ref={smallRef}>Блок</small>
            </div>
            <button
                className="btn btn-secondary mt-3"
                onClick={handleClickWidth}
            >
                Изменить высоту и ширину блока
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
