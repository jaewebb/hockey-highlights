import Image from "next/image";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { type Country } from '../types/Country'

export default function CountryCard({ country }: { country: Country }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        {country.name}
        </Typography>
          <Image
            src={country.logo}
            alt={`Country logo of ${country.name}`}
            height={100}
            width={100}
            loading="lazy"
          />
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  )
}
