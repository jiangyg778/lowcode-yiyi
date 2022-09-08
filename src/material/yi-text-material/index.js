import React from 'react'
import styles from '../index.less'
export default function YiText({ value }) {
    return (
        <div className={styles.main}
            dangerouslySetInnerHTML={{ __html: value }}
        />
    )
}
