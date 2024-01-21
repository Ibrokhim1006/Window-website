import { memo } from "react";

const data = [
    {
        id: Math.random().toString(),
        title: "Прочность и долговечность",
        text: "алюминий имеет высокую прочность, что делает окна из него стойкими к внешним воздействиям и позволяет им прослужить долгое время без потери своих качеств."
    },
    {
        id: Math.random().toString(),
        title: "Энергоэффективност",
        text: "алюминий имеет высокую прочность, что делает окна из него стойкими к внешним воздействиям и позволяет им прослужить долгое время без потери своих качеств. алюминий имеет высокую прочность, что делает окна из него стойкими к внешним воздействиям и позволяет им прослужить долгое время без потери своих качеств."
    },
    {
        id: Math.random().toString(),
        title: "Легкость",
        text: "алюминий имеет высокую прочность, что делает окна из него стойкими к внешним воздействиям и позволяет им прослужить долгое время без потери своих качеств. алюминий имеет высокую прочность, что делает окна из него стойкими к внешним воздействиям и позволяет им прослужить долгое время без потери своих качеств. алюминий имеет высокую прочность, что делает окна из него стойкими к внешним воздействиям и позволяет им прослужить долгое время без потери своих качеств."
    },
];

// million-ignore
function Info(props) {
    return (
        <section
            className="px-4 md:px-20 mt-[153px] mb-[164px] pt-[50px] lg:pt-[76px] pb-[100px] lg:pb-[164px] lg:px-32 bg-[#212121] text-white"
            style={{ fontStyle: "normal" }}
        >
            <h1 className="title uppercase text-center mb-10 font-Montserrat font-bold flex items-center gap-3 flex-wrap justify-center text-[23px] lg:text-[35px] xl:text-[45px]">
                {props.title?.split(" ").map((item, index) => (
                    <span
                        key={Math.random().toString()}
                        data-aos="fade-right"
                        data-aos-delay={500 + (index + 1) * 150}
                    >{item}</span>
                ))}
            </h1>
            <div className="flex flex-col gap-[10px]">
                <span
                    data-aos="fade-right"
                    data-aos-delay={1000}
                >
                    Алюминиевые окна, двери, стоечно-ригельные фасадные системы и прочие конструкции отличаются повышенной энергоэффективностью и функциональностью. Материал можно использовать для формирования конструкций различных форм и размеров, способных обеспечивать отличную шумоизоляцию, теплоизоляцию и защиту от посягательств третьих лиц со взломом.
                </span>
                <span
                    data-aos="fade-right"
                    data-aos-delay={1300}
                >
                    Алюминий представляет собой весьма малый по весу и, в то же время, крайне прочный материал. Его можно применять как для изготовления небольших окон, так и для остекления обширных зимних садов и террас.
                </span>
                <span
                    data-aos="fade-right"
                    data-aos-delay={1600}
                >
                    Профильные системы, спроектированные на базе алюминиевых конструкций, делятся на холодные и теплые. Холодные системы изготавливаются исключительно из алюминия, а теплые формируются из двух алюминиевых составляющих, которые соединены посредством особой термической прокладки.
                </span>
            </div>

            <div className="mt-[40px] lg:mt-[55px] w-full md:w-[70%] lg:w-[60%]">
                {data?.length > 0 && data.map((item, index) => (
                    <div
                        key={item.id} className="collapse collapse-arrow"
                        data-aos="fade-right"
                        data-aos-delay={1900 + (index + 1) * 150}
                    >
                        <input type="radio" name="my-accordion-2" />
                        <div
                            className="collapse-title text-[18px] lg:text-[20px] xl:text-[25px] font-medium px-0"
                        >
                            {item.title}
                        </div>
                        <div className="collapse-content px-0 pr-[30px] md:pr-[100px] lg:pr-[150px]">
                            <p
                                className="text-[15px] lg:text-[16px] xl:text-[18px] font-normal"
                            >
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default memo(Info);