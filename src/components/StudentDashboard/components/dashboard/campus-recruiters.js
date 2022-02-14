import { Box, Button, Card, CardContent, CardHeader, Divider, useTheme } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export const CampusRecruiters = (props) => {
  const theme = useTheme();

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=contain&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${size * rows
        }&fit=contain&auto=format&dpr=2`,
    };
  }

  const itemData = [
    {
      img: 'https://techstory.in/wp-content/uploads/2018/06/Adobe.png',
      title: 'Adobe',
      rows: 2,
      cols: 1,
    },
    {
      img: 'https://b2bm.s3.amazonaws.com/styles/default_image/s3/capgemini-reveals-new-brand-identity-new-messages-to-mark-anniversary.jpg?itok=q-awdRDI',
      title: 'Capgemini',
    },
    {
      img: 'https://www.nextbigbrand.in/wp-content/uploads/2021/02/photo_2021-02-25_06-37-43-2.jpg',
      title: 'Innovacer',
    },
    {
      img: 'https://www.hul.co.in/_nuxt/img/logo-static-hul.f7ef4a2.svg',
      title: 'HUL',
      cols: 2,
    },
    {
      img: 'https://i.pinimg.com/originals/15/aa/16/15aa1678d4ee5615c5c53ed5c9968126.png',
      title: 'Flipkart',
      rows: 2,
      cols: 1,
    },
    {
      img: 'https://www.smartstateindia.com/wp-content/uploads/2018/12/wipro-logo.jpg',
      title: 'Wipro',
    },
    {
      img: 'https://mms.businesswire.com/media/20210909005157/en/761229/23/Optum%28R%29_RGB.jpg',
      title: 'Optum',
      author: '@arwinneil',
      rows: 1,
      cols: 1,
    },
    {
      img: 'https://sm.pcmag.com/pcmag_in/review/k/kronos-wor/kronos-workforce-ready-review_jt1b.jpg',
      title: 'Kronos',
    },
    {
      img: 'https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg',
      title: 'Amazon',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Dark_Logo-01.png',
      title: 'HashedIn',
      cols: 2,
    },
    {
      img: 'https://9b74456f2e4bcbc20970-51751c7e8fb38e7c8b474cab6c7dc602.ssl.cf5.rackcdn.com/2021-05/acc_logo_black_purple_rgb_logo.png',
      title: 'Accenture',
    },
  ];

  return (
    <Card {...props}>
      <CardHeader
        title="Our Campus Recruiters"
      />
      <Divider />
      <CardContent sx={{pt: 0.5, pb: 0.5}}>
        <Box>
          <ImageList
            sx={{ width: 1066, height: 375 }}
            variant="quilted"
            cols={5}
            rowHeight={121}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </CardContent>
      <Divider />
    </Card>
  );
};
