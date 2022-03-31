import { Box, useTheme, useMediaQuery, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";


export default function LlamaCarousel({ items, sx }) {
  const theme = useTheme();
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{
      '& .swiper-slide-shadow-left, & .swiper-slide-shadow-right': {
        display: 'none !important'
      },
      '& .swiper-slide img': {
        WebkitBoxReflect: 'below 10px -webkit-linear-gradient(bottom, rgba(255,0,0,.3) 0%,transparent 4rem,transparent 100%)'
      },
      '& .swiper': {
        paddingBottom: '4rem'
      },
      ...sx
    }}>
      <Swiper
        grabCursor={true}
        spaceBetween={20}
        slidesPerView={isLessMd ? 1 : 2}
        centeredSlides={false}
        effect={"coverflow"}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
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
            <Typography variant="h4" sx={{
                position: 'absolute',
                top: '3rem',
                width: 'auto',
                padding: '1rem',
                color: 'white',
                backgroundColor: 'primary.main'
              }}>{item.title}</Typography>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}