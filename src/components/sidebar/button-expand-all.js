import React, { Fragment } from "react"
import GoFold from "react-icons/lib/go/fold"
import GoUnfold from "react-icons/lib/go/unfold"

import {
  colors,
  space,
  radii,
  transition,
  scale,
  lineHeights,
} from "../../utils/presets"

const ExpandAllButton = ({ onClick, expandAll }) => (
  <button
    onClick={onClick}
    css={{
      fontSize: scale[0],
      lineHeight: lineHeights.solid,
      background: `transparent`,
      border: `none`,
      borderRadius: radii[1],
      color: colors.gray.lightCopy,
      display: `flex`,
      cursor: `pointer`,
      alignItems: `center`,
      flexGrow: 0,
      paddingTop: space[2],
      paddingBottom: space[2],
      textAlign: `left`,
      transition: `all ${transition.speed.fast}`,
      "&:hover": {
        background: colors.ui.bright,
      },
    }}
  >
    {expandAll ? (
      <Fragment>
        <span>Collapse All</span>
        <span css={{ ...styles.icon }}>
          <GoFold />
        </span>
      </Fragment>
    ) : (
      <Fragment>
        <span>Expand All</span>
        <span css={{ ...styles.icon }}>
          <GoUnfold />
        </span>
      </Fragment>
    )}
  </button>
)

export default ExpandAllButton

const styles = {
  icon: {
    display: `inline-block`,
    marginLeft: 8,
  },
}
