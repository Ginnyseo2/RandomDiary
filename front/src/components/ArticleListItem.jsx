import React from 'react'
import { Row, Col, Space } from 'antd'
import { EyeFilled, HeartFilled, MessageFilled } from '@ant-design/icons'
import styled from 'styled-components'

function ArticleListItem({ picture, title, createdat, view, liked, content }) {
  return (
    <>
      <div style={{ width: '100%', height: '150px', display: 'flex' }}>
        <ImageLayout>
          <StyledImageArea>
            <img
              src={picture}
              alt="content-image"
              width="100%"
              height="100%"
              style={{ objectFit: 'cover' }}
            />
          </StyledImageArea>
        </ImageLayout>

        <Space
          direction="vertical"
          size={1}
          style={{ display: 'flex', justifyContent: 'center', width: '18rem' }}>
          <h2 style={{ fontWeight: 'bold' }}>#{title}</h2>
          <p>{content.length >= 40 ? content.substr(0, 40) + '...' : content}</p>
          <div>{createdat}</div>
        </Space>

        <Space direction="vertical" size={1} style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <StyledFlexEnd>
              <HeartFilled style={{ fontSize: '1rem' }} />
            </StyledFlexEnd>
            <StyledFlexStart>
              <span style={{ fontSize: '1rem' }}>{liked}</span>
            </StyledFlexStart>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <StyledFlexEnd>
              <EyeFilled style={{ fontSize: '1rem' }} />
            </StyledFlexEnd>
            <StyledFlexStart>
              <span style={{ fontSize: '1rem' }}>{view}</span>
            </StyledFlexStart>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <StyledFlexEnd>
              <MessageFilled style={{ fontSize: '1rem' }} />
            </StyledFlexEnd>
            <StyledFlexStart>
              <span style={{ fontSize: '1rem' }}>0</span>
            </StyledFlexStart>
          </div>
        </Space>
      </div>
    </>
  )
}

const ImageLayout = styled.div`
  width: 13rem;
  height: 10rem;
  display: inline-block;
  border-radius: 20px;
  padding: 0.5rem 0;
  margin-right: 1rem;
`

const StyledImageArea = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 5px;
`

const StyledFlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 3rem;
  padding-right: 0.2rem;
`

const StyledFlexStart = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 3rem;
  padding-left: 0.2rem;
`

export default ArticleListItem
