# Yiyang Tang · Academic Homepage

哈尔滨工程大学博士生 Yiyang Tang 的个人学术主页，研究方向为动态环境中的机器人感知、SLAM、导航与决策。

- 姓名：Yiyang Tang
- 身份：PhD Student（依据本人“正在攻读博士学位”的描述）
- 单位：Harbin Engineering University
- 导师：Prof. Yulong Huang
- 邮箱：tangyiyang@hrbeu.edu.cn
- 所在地：Harbin, Heilongjiang, China
- GitHub：https://github.com/YiyangTang521
- 目标 GitHub Pages 地址：https://yiyangtang521.github.io/

## 当前版本

个人资料和英文简介已更新。研究方向按“鲁棒感知与 SLAM”“动态环境导航”“目标跟随与决策”呈现；研究方向插图为概念示意。已加入 IROS 2025 论文 CAMSCKF 的正式条目和独立项目页。

页面根据本人提供的参考截图统一重排：白底、Arial/Helvetica 无衬线字体、深灰正文、蓝色链接；左侧个人信息，右侧连续排列简介、研究方向、论文和联系方式。正文与侧栏保持一致字号，栏目使用粗体标题和浅色分隔线，研究条目使用统一的左图右文布局。已移除装饰性标签、编号和重复口号。

头像使用本人 GitHub 账号 YiyangTang521 的头像，并保存在 `assets/github-avatar.jpg`。顶部姓名标识保持移除；侧栏保留位置、邮箱与 GitHub 图标，栏目标题使用简洁图标。论文区左侧仅展示论文 Fig. 1 和实验 GIF，两幅图并排放入等宽、等高的容器，使用统一间距且没有额外图下注释、标题栏或装饰边框。右侧保留论文标题和资源链接。Fig. 1 可点击放大；GIF 使用图标按钮暂停，并在系统偏好减少动态效果时默认显示静帧。动态和学术服务在没有内容时自动隐藏，添加记录后自动出现。导师的期刊编委任职仅写在简介中，不属于本人的学术服务。

仓库已经创建并启用了 GitHub Pages。当前 GitHub 插件的写入请求曾返回 403，本版本未通过插件上传到该仓库；可以手动上传下列文件。独立的私有设计预览与 GitHub Pages 分开维护。

## 文件与维护

- `index.html`：网页结构、搜索摘要和无 JavaScript 时的基础信息。
- `assets/content.js`：个人资料、研究方向、论文、动态和学术服务，主要编辑这个文件。
- `assets/style.css`：外观及手机布局。
- `assets/site.js`：内容显示、手机菜单、论文筛选、BibTeX 弹窗与复制。
- `assets/*.svg`：概念插图和图标。
- `camsckf/index.html`：CAMSCKF 论文项目页，包含作者、视频、方法、实验和引用。
- `camsckf/project.css`、`camsckf/project.js`：项目页样式、视频定位与引用复制。
- `camsckf/assets/`：论文 PDF、完整 MP4、实验 GIF、视频封面、论文原图和 BibTeX。
- `.nojekyll`：让 GitHub Pages 直接发布静态文件。

以上路径对应下载 ZIP 解压后的结构。在开发目录里，网页文件位于 `dist/`。无需安装依赖或编译。

1. 修改 `assets/content.js` 中的个人资料；如需头像，将照片放入 `assets/portrait.jpg`，把 `photo` 改为 `"assets/portrait.jpg"`。
2. `biography` 每个元素是一段简介，可以是字符串，也可以是由字符串和 `{text, url}` 链接对象组成的数组。
3. 在 `links` 加入本人 Google Scholar、ORCID 或简历等真实链接。
4. 在 `publications` 填论文。文件内提供字段示例；`highlightAuthor` 对应作者名单中自己的完整姓名。支持标题、作者、期刊/会议、年份、主题、项目页、预览 GIF、静帧、介绍、资源链接和 BibTeX。`project` 指向独立项目页；`preview`、`previewPoster` 和 `previewAlt` 分别配置动画、静帧和替代文本。
5. `news` 按日期倒序填写；`services` 填本人的学术服务。`hideEmptySections: true` 会隐藏空的动态和服务栏目。
6. 替换研究插图时同步修改 `imageAlt`。所有文字按纯文本或结构化链接显示，无需在数据中写 HTML。
7. 修改个人资料后，同步更新 `index.html` 的静态介绍与元数据，便于无 JavaScript 浏览和搜索引擎读取。

手机菜单在窄屏显示，论文有多个主题时自动显示分类按钮。剪贴板权限受浏览器影响，不能自动复制时会选中文本供手动复制。

## 上传到已有的 GitHub Pages 仓库

1. 解压 ZIP，进入：https://github.com/YiyangTang521/YiyangTang521.github.io/upload/main
2. 上传解压后的文件内容到仓库根目录，确保根目录直接包含 `index.html`、`assets/`、`camsckf/` 和 `.nojekyll`，不要上传外层文件夹或 ZIP 本身。
3. 提交到 `main`，等待仓库 Actions 中的 Pages 部署成功。
4. 访问 https://yiyangtang521.github.io/ 。如仍显示旧页面，可刷新浏览器缓存。

仓库的 Pages 已在先前检查中启用；若需要重新设置，进入 Settings → Pages，选择 Deploy from a branch、main、/(root)。

## CAMSCKF 项目页

部署后路径为 `/camsckf/`，与主页共用一次部署。页面顺序为标题与作者、完整视频、摘要、方法框架、仿真介绍、实验结果、BibTeX。仿真部分依据论文 Section III，介绍 300 秒、50 次蒙特卡洛试验、100 Hz IMU、10 Hz 相机和两类时变测量噪声，并展示 Fig. 4(b) 噪声估计和 Fig. 4(c) 位置/姿态 RMSE 原始曲线。所有页面和媒体资源使用相对路径，可以直接部署到 GitHub Pages。

- 正式论文链接：https://ieeexplore.ieee.org/document/11246963
- DOI：10.1109/IROS60139.2025.11246963
- 会议：2025 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)
- 页码：15173–15180，依据 Crossref 的 IEEE 登记记录。
- 作者：Yiyang Tang、Hanxuan Zhang、Yichen Yu、Xiaofeng Li、Yulong Huang。前三位作者共同一作，Yulong Huang 为通讯作者，依据提供的 PDF。
- `paper.pdf` 是本人提供的 PDF，内容保持不变；正式出版记录通过 IEEE 链接访问。
- `demo.mp4` 由提供的视频重新封装以支持渐进播放，没有重新编码或改变画面与音频。
- 主页 GIF 截取原视频 64–74 秒的实验部分，保持视频原有演示速度；尺寸 560 × 315、10 fps、10 秒循环，约 1.88 MiB。
- 图像直接从 PDF 中提取，没有重新绘制或改动实验数据。Fig. 1 和仿真曲线的提取排除了页边检查标记，并将页面检查工具添加的灰色底色设为白色；原始 PDF 保持不变。
- 项目页的英文简介是对论文内容的简要改写。

论文摘要对两项相对提升百分比的顺序与表 II 及正文不一致，因此页面只展示表 II 原始均值：ATE 0.978 m、AOE 1.658°、报告的运行时间 7.2 ms，不使用百分比宣传。表格明确使用论文设置下的四条 UZH-FPV 序列和 Sim(3) 对齐结果。

## 检查与参考

检查 JavaScript 语法、静态资源、页内和跨页链接、论文元数据、引用、GIF 帧和视频封装信息。当前运行环境未提供浏览器视觉验收能力，实际桌面和手机浏览器显示尚待确认。

布局参考 https://medlartea.github.io/ 的学术主页结构；论文项目页参考 https://medlartea.github.io/referTrack/ 的内容组织方式。页面样式和代码独立制作，未使用参考论文的图片或实验内容。个人信息由本人于 2026-10-14 提供。

导师信息核实来源：

- https://ieeecss.org/contact/yulong-huang
- https://www.ieee-ras.org/publications/t-ase/editorial-board/

GitHub Pages 官方说明：

- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
