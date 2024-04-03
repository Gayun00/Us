import type { Meta, StoryObj } from "@storybook/react";
import Component from ".";

const meta: Meta<typeof Component> = {
  component: Component,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Component>;

const author = {
  profileImage:
    "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/user-profile-icon.png",
  name: "bob",
  job: "서국대학교 경제학 교수",
  updated: "2024-03-18 02:16:49.162Z",
};
const news = {
  link: "https://n.news.naver.com/article/666/0000036251?ntype=RANKING",
  title: "지하철3호 원당-원흥 선로단전…출근길 시민들 큰 불",
  description:
    "지하철 3호선 정발산역-구파발역 구간에서 선로 단전이 발생해 열차 운행이 지연되고 있다.\r\n고양시와 한국철도공사(코레일)에 따르면 15일 오전 5시30분께 이 구간에 전기공급이 끊겨 복구 작업 중이다.\r\n8시20분 현재 원흥역은 대",
  imageUrl:
    "https://imgnews.pstatic.net/image/666/2024/03/15/0000036251_001_20240315092901780.jpg?type=w647",
};

export const Primary: Story = {
  args: {
    children: (
      <Component>
        <Component.Author {...author} />
        <Component.TextContent title="title" text="text" type="video" id="id" />
        <Component.RefContent {...news} />
      </Component>
    ),
  },
};
