import React, { useState } from 'react';
import { Button, Avatar, IconProvider, ThemeProvider, Text, Card } from '@momentum-design/components/react';
import '@momentum-design/fonts/dist/css/fonts.css';
import '@momentum-design/tokens/dist/css/typography/complete.css';
import '@momentum-design/tokens/dist/css/effect/complete.css';
import '@momentum-design/tokens/dist/css/typography/complete.css';
import '@momentum-design/tokens/dist/css/theme/webex/dark-stable.css';

const ExampleComponent = () => {
 const [count, setCount] = useState(0)
  return (
  <div className="p-8 bg-gray-200">
   <ThemeProvider themeclass="mds-theme-stable-lightWebex">
   <IconProvider iconSet="custom-icons" url="svg" className="mds-typography">
    
    <Text 
     className='pl-2 text-3xl font-semibold'
     type="heading-large-regular'">
      Here is an example react component built with Momentum Design UI components.
    </Text>
    
    <span className="flex flex-row items-center gap-4 mt-4">
     <Avatar
      className="scale-120 text-white"
      icon-name="sparkle-bold"
      size={1} 
      style={{ '--mdc-avatar-default-background-color': '#3f3693' }}
     />
     <h2>hello</h2>
    </span>

    <Button
     className='mt-4 outline-gray-400 outline-2 p-2 hover:bg-gray-300'
     variant='secondary'
     prefixIcon='sparkle-bold'
     postfixIcon='arrow-right-bold'
     onClick={() => setCount((count) => count + 1)}
    >
     Click Me
     
    </Button>
    <Text>Count is {count}</Text>
    
    <Card
     className="m-8 p-4 outline-gray-400 outline-2 hover:bg-gray-300 transition duration-300"
     variant="border"
     orientation="vertical"
     cardTitle="Title"
     subtitle="Subtitle"
     imageSrc="https://placehold.co/320x200"
     imageAlt="Image Alt"
     iconName="placeholder-bold"
     titleTagName="span"
     subtitleTagName="span">
      <Text slot="body" type="body-midsize-medium" >
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate aliquet risus, eget auctor ante egestas facilisis. Curabitur malesuada tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at.
       Praesent gravida dui diam, non elementum risus laoreet vitae. Sed sed nunc ullamcorper, porttitor dui id, posuere
       justo. Curabitur laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut in massa luctus
       lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis
      </Text>
     </Card>
   </IconProvider>
   </ThemeProvider>
  </div>
  );
};

export default ExampleComponent;