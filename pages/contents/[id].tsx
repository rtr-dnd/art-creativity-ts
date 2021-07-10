import { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'
import TextWork from '../../components/TextWork'

const Content = () => {
  const router = useRouter()
  const { id } = router.query
  let stringTitle = ''

  if (typeof(id) == 'string') {
    switch(id) {
      case 'kanikousen':
        stringTitle = '蟹工船'
        break
      default:  
        stringTitle = ''
    }
    if (stringTitle != '') {
      return (
          <>
            <TextWork title={id} stringTitle={stringTitle} afterGutenberg={true}/>
            <TextWork title={id} stringTitle={stringTitle} afterGutenberg={false}/>
          </>
        )
    }
  } 
  
  return (
    <>
      Content not found. query is {id}
    </>
  )

}
export default Content 