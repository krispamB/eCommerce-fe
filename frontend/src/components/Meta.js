import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return <Helmet>
    <title>{title}</title>
    <Meta name='description' content={description} />
    <Meta nam='keywords' content={keywords} />
  </Helmet>
}

Meta.defaultProps = { 
  title: 'Welcome To ProShop',
  description: 'We sell the best products for cheap',
  keywords: 'electronics, buy electronics, cheap electronics'
}

export default Meta
