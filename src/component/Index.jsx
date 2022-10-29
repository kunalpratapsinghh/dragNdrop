import { Box } from "@chakra-ui/react";
import React from "react";
import style from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  const { data, loading, error } = useSelector((state) => state.app);

  return (
    <Box className={style.box}>
      {data.map((el) => {
        return (
          <Box className={`${style.group} ${style.section}`}  key={el.group}>
            <Box pos={"fixed"} fontWeight="extrabold" background={"red"}>Group {el.group}</Box>
            {el.item.map((item) => (
              <Box key={item} className={style.item} draggable>
                {item}
              </Box>
            ))}
          </Box>
        );
      })}
    </Box>
  );
};
export default Index;
