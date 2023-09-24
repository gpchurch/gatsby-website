import React from "react"
import {graphql} from 'gatsby'
import Button from "@mui/material/Button"

import Layout from "../components/layout"

import {useI18next} from '@herob/gatsby-plugin-react-i18next'

export default function PageNotFound(props) {
  const url = props.location.pathname

  const { t } = useI18next()

  return (
    <Layout>
        <h3>{t("Error 404: Page not found")}</h3>
        <p>{t("The_requested_link_url_is_broken", {url})}</p>
        <Button onClick={() => props.navigate(-1)}>{t("Go back")}</Button>
    </Layout>
 )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {ns: {in: ["common"]}, language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`