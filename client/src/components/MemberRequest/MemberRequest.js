import React from "react";
import { Button, Row, Col, Divider, Form, Typography, Input, Card } from "antd";
import { Avatar, Image, Tag } from "antd";
import styles from "./styles.js";
import COLOR from "../../constants/colors";

const { Title, Text, Paragraph, Link } = Typography;

function MemberRequest() {
  return (
    <>
      <div style={styles.card}>
        <div className="row">
          <div
            className="col-6"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Avatar
              size={72}
              src="https://vtv1.mediacdn.vn/thumb_w/650/2020/10/20/blackpink-lisa-mac-160316252527410005928.jpg"
            />

            <div className="col-9" style={{ alignSelf: "center" }}>
              <Text style={styles.textUser}>Lalisa Manobal</Text>
              <div style={{ marginTop: 0 }}></div>
              <Text>React Native Developer</Text>
            </div>
            <div
              style={{
                marginLeft: 0,
                justifyContent: "center",
                flex: 1,
                display: "flex",
              }}
            ></div>
          </div>

          <div
            className="col-2"
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Button
              type="primary"
              style={{
                background: "#27AE60",
                borderColor: "#27AE60",
                color: "white",
                fontWeight: 500,
                width: 120,
              }}
            >
              Accept
            </Button>
          </div>

          <div
            className="col-2"
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Button
              type="ghost"
              style={{
                background: "#BDBDBD",
                borderColor: "#BDBDBD",
                color: "black",
                fontWeight: 500,
                width: 120,
              }}
            >
              Decline
            </Button>
          </div>
        </div>

        <div className="row" style={{ marginTop: 8 }}>
          <div className="col-10">
            <Tag style={styles.tag}>C#</Tag>
            <Tag style={styles.tag}>Javascript</Tag>
            <Tag style={styles.tag}>Unity 3D</Tag>
          </div>
        </div>

        <div className="row" style={{ padding: 16 }}>
          <Paragraph>
            Some word Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Paragraph>
          <Link href="#" target="_blank" strong style={{ color: COLOR.green }}>
            Xem toàn bộ bài viết
          </Link>
        </div>
      </div>
    </>
  );
}

export default MemberRequest;