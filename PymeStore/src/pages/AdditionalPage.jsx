import React from 'react'

const AdditionalPage = ( {title} ) =>{

    const texto = () =>{
        return(
        <>
          <p style={{
            textAlign:'left',
            fontFamily:'sans-serif',
            fontSize:'16px' 
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Aenean sapien nisl, tincidunt mollis est convallis, pretium rutrum odio. 
           Integer in leo nisi. Donec volutpat justo sit amet libero molestie pulvinar. 
           Vivamus molestie, diam eleifend mollis gravida, lacus justo congue nisi, ut fringilla elit quam sed erat. 
           Praesent eget dolor diam. Sed convallis auctor eros. In hac habitasse platea dictumst. Curabitur vel posuere mauris, in viverra augue.
          </p>
        </>
    
        )
        
    }

    return(
        <>
        <div style={{
            display:'flex',
            flexDirection:'column',
            padding:'5% 23%',
        }}>
            <div style={{
                margin:'0 0 30px'
            }}>
                <h1 style={{
            textAlign:'center',
            fontFamily:'sans-serif',
            fontSize:'40px',
            fontWeight:'bold', 
                }}>{title.name}</h1>
            </div>
            <div>
                <ol style={{
                    display:'flex',
                    flexDirection:'column',
                    gap:'40px'
                }}>
                    <li>{texto()}</li>
                    <li>{texto()}</li>
                    <li>{texto()}</li>
                    <li>{texto()}</li>
                    <li>{texto()}</li>
                </ol>
            </div>
        </div>
        </>
    )
}

export default AdditionalPage