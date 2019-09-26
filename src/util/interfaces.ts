import {SemanticCOLORS} from "semantic-ui-react";

export interface NavigationItemProps {
  url: string,
  label: string,
  color? : SemanticCOLORS,
  inverted? : boolean
}

export interface NavigationItems extends Array<NavigationItemProps>{
}

export interface ServerError {
  title: string,
  message: string
}
