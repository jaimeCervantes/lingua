import { Box, useTheme, useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";


export default function LlamaCarousel({ items }) {
  const theme = useTheme();
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{
      '& .swiper-slide-shadow-left, & .swiper-slide-shadow-right': {
        display: 'none !important'
      }
    }}>
      <Swiper
        grabCursor={true}
        spaceBetween={20}
        autoHeight={true}
        slidesPerView={isLessMd ? 1 : 2}
        centeredSlides={false}
        effect={"coverflow"}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
      >
        {items.map(item => (
          <SwiperSlide key={item.img}
            style={{
              background: 'transparent',
              textAlign: 'center',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <img src={item.img}  style={{ maxWidth: '100%', maxHeight: '100%', display: 'block' }}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}