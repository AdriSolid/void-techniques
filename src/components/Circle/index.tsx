import * as React from "react";
import "./style.scss";

type State = 10 | 20 | 30 | 40;

const Circle: React.FC = () => {

    const [radius, setRadius] = React.useState<State | number>(3);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setRadius((prevRadius: number): State => {
                if (prevRadius === 10) {
                    return 20;
                } else if (prevRadius === 20) {
                    return 30;
                } else if (prevRadius === 30) {
                    return 40;
                } else if (prevRadius === 40) {
                    return 10;
                }

                return 10;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="circle">
            <svg height="100" width="100">
                <circle cx="50%" cy="50%" r={radius} />
            </svg>
        </div>
    );
}

export default Circle;
