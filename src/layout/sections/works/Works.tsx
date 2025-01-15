import React, { useState } from "react";
import { Work } from "./work/Work";
import socialImg from "../../../assets/image/social.png";
import timerImg from "../../../assets/image/timer.png";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu, TabsStatusType } from "./tabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Works_Styles";
import { AnimatePresence, motion } from "framer-motion";

const tabsItems: Array<{
    status: TabsStatusType;
    title: string;
}> = [
    {
        title: "All",
        status: "all",
    },
    {
        title: "landing page",
        status: "landing",
    },
    {
        title: "React",
        status: "React",
    },
    {
        title: "spa",
        status: "spa",
    },
];

const worksData = [
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa",
        id: 1,
    },
    {
        title: " Timer",
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua",
        type: "React",
        id: 2,
    },
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "landing",
        id: 3,
    },
    {
        title: " Timer",
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua",
        type: "landing",
        id: 4,
    },
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa",
        id: 5,
    },
    {
        title: " Timer",
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua",
        type: "React",
        id: 6,
    },
];

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
    let filteredWorks = worksData;

    if (currentFilterStatus === "landing") {
        filteredWorks = worksData.filter((work) => work.type === "landing");
    }
    if (currentFilterStatus === "React") {
        filteredWorks = worksData.filter((work) => work.type === "React");
    }
    if (currentFilterStatus === "spa") {
        filteredWorks = worksData.filter((work) => work.type === "spa");
    }

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value);
    }

    return (
        <S.Works id={"works"}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu
                    tabsItems={tabsItems}
                    changeFilterStatus={changeFilterStatus}
                    currentFilterStatus={currentFilterStatus}
                />
                <FlexWrapper justify={"center"} align={"start"} wrap={"wrap"}>
                    <AnimatePresence>
                        {filteredWorks.map((w, index) => {
                            return (
                                <motion.div
                                    style={{
                                        width: "400px",
                                        flexGrow: 1,
                                        maxWidth: "540px",
                                    }}
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    key={w.id}
                                >
                                    <Work
                                        src={w.src}
                                        title={w.title}
                                        text={w.text}
                                        key={w.id}
                                    ></Work>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};
