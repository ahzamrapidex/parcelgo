// Create a new file: src/shared/components/testimonials/Testimonials.jsx
"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import {
  Box,
  Container,
  Typography,
  Paper,
  Avatar,
  Stack,
  Rating,
  IconButton,
  Chip,
} from '@mui/material';
import Image from 'next/image';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedIcon from '@mui/icons-material/Verified';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = ({ testimonials }) => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#F8F9FA' }}>
      <Container maxWidth="xl">
        <Stack spacing={6} alignItems="center">
          {/* Header */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'text.primary',
              mb: 2
            }}
          >
            What our clients say
          </Typography>

          {/* Testimonials Slider */}
          <Box sx={{ width: '100%', position: 'relative' }}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '.testimonial-next',
                prevEl: '.testimonial-prev',
              }}
              pagination={{
                clickable: true,
                el: '.testimonial-pagination',
                bulletClass: 'testimonial-bullet',
                bulletActiveClass: 'testimonial-bullet-active',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              style={{
                paddingBottom: '50px',
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      borderRadius: 3,
                      backgroundColor: 'white',
                      border: '1px solid #E5E7EB',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    {/* Rating */}
                    <Box sx={{ mb: 2 }}>
                      <Rating
                        value={testimonial.rating}
                        readOnly
                        sx={{
                          color: '#FFB400',
                          '& .MuiRating-iconEmpty': {
                            color: '#E5E7EB',
                          },
                        }}
                      />
                    </Box>

                    {/* Review Text */}
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        lineHeight: 1.6,
                        color: 'text.secondary',
                        fontSize: '1rem',
                        fontStyle: 'italic',
                        flex: 1,
                      }}
                    >
                      "{testimonial.review}"
                    </Typography>

                    {/* Read More Link */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#6B7280',
                        cursor: 'pointer',
                        mb: 3,
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      Read more
                    </Typography>

                    {/* User Info */}
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{
                          width: 56,
                          height: 56,
                          border: '3px solid #E5E7EB',
                        }}
                      />
                      <Stack spacing={0.5} flex={1}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              color: 'text.primary',
                              fontSize: '1rem',
                            }}
                          >
                            {testimonial.name}
                          </Typography>
                          {testimonial.verified && (
                            <VerifiedIcon
                              sx={{
                                fontSize: 16,
                                color: '#1976D2',
                              }}
                            />
                          )}
                        </Stack>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            fontSize: '0.875rem',
                          }}
                        >
                          {testimonial.role}
                        </Typography>
                        {testimonial.companyLogo ? (
                          <Box sx={{ mt: 1, maxWidth: '120px' }}>
                            <Image
                              src={testimonial.companyLogo}
                              alt={testimonial.company}
                              width={120}
                              height={30}
                              style={{
                                objectFit: 'contain',
                                opacity: 0.7,
                              }}
                            />
                          </Box>
                        ) : (
                          <Typography
                            variant="body2"
                            sx={{
                              color: 'text.disabled',
                              fontSize: '0.875rem',
                              fontWeight: 500,
                              textTransform: 'uppercase',
                              letterSpacing: '0.5px',
                            }}
                          >
                            {testimonial.company}
                          </Typography>
                        )}
                      </Stack>
                    </Stack>
                  </Paper>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <IconButton
              className="testimonial-prev"
              sx={{
                position: 'absolute',
                left: { xs: -16, sm: -24 },
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                backgroundColor: 'white',
                border: '1px solid #E5E7EB',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                '&:hover': {
                  backgroundColor: '#F9FAFB',
                  borderColor: '#D1D5DB',
                },
              }}
            >
              <ArrowBackIcon />
            </IconButton>

            <IconButton
              className="testimonial-next"
              sx={{
                position: 'absolute',
                right: { xs: -16, sm: -24 },
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                backgroundColor: 'white',
                border: '1px solid #E5E7EB',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                '&:hover': {
                  backgroundColor: '#F9FAFB',
                  borderColor: '#D1D5DB',
                },
              }}
            >
              <ArrowForwardIcon />
            </IconButton>

            {/* Custom Pagination */}
            <Box
              className="testimonial-pagination"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 4,
                '& .testimonial-bullet': {
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: '#D1D5DB',
                  margin: '0 6px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#9CA3AF',
                  },
                },
                '& .testimonial-bullet-active': {
                  backgroundColor: '#1976D2',
                  transform: 'scale(1.2)',
                },
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Testimonials;