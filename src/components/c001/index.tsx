/** @format */

import { Col, Row, Typography, Progress } from 'antd'
import React from 'react'
import { StyledWrapper } from './styles'
import { IData, IList } from './interface'

const { Title } = Typography

export default ({ data }: { data: IData }) => {
  const { list, title } = data
  return (
    <StyledWrapper>
      <Title id="title">{title}</Title>
      <Row>
        {list.map((item: IList) => {
          return (
            <Col span={24} key={item.message}>
              <p>{item.message}</p>
            </Col>
          )
        })}
      </Row>
      <div className="progress-group">
        <Progress percent={30} />
        <Progress percent={50} status="active" />
        <Progress percent={70} status="exception" />
        <Progress percent={100} />
        <Progress percent={50} showInfo={false} />
      </div>
    </StyledWrapper>
  )
}
