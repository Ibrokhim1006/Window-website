import React, { memo } from 'react';

function Title() {
    return (
        "Ответы на частые вопросы!".split(" ").map((item, index) => (
            <span
                key={Math.random().toString()}
                className="title font-bold uppercase font-Montserrat"
                data-aos="fade-right"
                data-aos-delay={500 + (index + 1) * 100}
                data-aos-once={true}
            >
                {item}
            </span>
        ))
    )
}

export default memo(Title);