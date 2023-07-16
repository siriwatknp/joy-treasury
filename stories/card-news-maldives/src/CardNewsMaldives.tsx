import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import CardContent from '@mui/joy/CardContent';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import SvgIcon from '@mui/joy/SvgIcon';

export default function CardNewsMaldives() {
  return (
    <Card sx={{ borderRadius: 0, '--Card-radius': 0 }}>
      <CardOverflow>
        <AspectRatio>
          <img src="https://images.unsplash.com/photo-1624995256645-3e497ca1b29c" />
          <Typography
            sx={{
              position: 'absolute',
              zIndex: 1,
              fontWeight: 'xl',
              left: '1rem',
              top: '1rem',
              color: 'white',
              textShadow: '0 0.05em 0.2em rgba(0,0,0,0.5)',
            }}
          >
            NEWS
          </Typography>
        </AspectRatio>
      </CardOverflow>
      <CardContent sx={{ gap: 1 }}>
        <Typography level="body3" fontWeight="lg">
          July 16 2023
        </Typography>
        <Typography level="h2" fontSize="xl">
          Discover the Enchanting Beauty of the Maldives
        </Typography>
        <Typography level="body2">
          The Maldives is a tropical paradise consisting of pristine islands,
          turquoise waters, and vibrant coral reefs. It offers a perfect getaway
          for those seeking relaxation and natural beauty.
        </Typography>
      </CardContent>
      <Link
        overlay
        component="button"
        startDecorator={
          <SvgIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </SvgIcon>
        }
        sx={{ fontWeight: 'lg', fontSize: 'sm' }}
      >
        Find out more
      </Link>
    </Card>
  );
}
