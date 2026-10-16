/*
 * Edit your homepage here. Use plain text, not HTML.
 * Personal information was supplied by Yiyang Tang on 2026-10-14.
 * Add only confirmed publications and academic activities.
 */
window.SITE_CONTENT = {
  draft: false,
  hideEmptySections: true,
  name: "Yiyang Tang",
  initials: "YT",
  role: "PhD Student",
  affiliation: "Harbin Engineering University",
  location: "Harbin, Heilongjiang, China",
  tagline: "Robotic perception, SLAM & navigation in dynamic environments.",
  photo: "assets/github-avatar.jpg", // GitHub avatar retrieved from YiyangTang521.
  email: "tangyiyang@hrbeu.edu.cn",
  description: "Yiyang Tang is a PhD student at Harbin Engineering University, researching robotic perception, SLAM, and safe navigation in dynamic environments.",
  // Biography entries may be plain text, or arrays of text and { text, url } link segments.
  biography: [
    ["I am a PhD student at Harbin Engineering University, advised by ", { text: "Prof. Yulong Huang", url: "https://ieeecss.org/contact/yulong-huang" }, ". His research focuses on state estimation and filtering theory, and he serves as an Associate Editor of IEEE Transactions on Automatic Control and IEEE Transactions on Automation Science and Engineering."],
    "My research focuses on robotic perception, navigation, and decision-making. I am particularly interested in enabling robots to accomplish navigation tasks safely and efficiently in dynamic environments.",
    "Specifically, I study robust perception and SLAM under complex dynamic disturbances, as well as navigation and decision-making for challenging tasks such as target following."
  ],
  interests: ["Robotic Perception", "SLAM", "Dynamic Navigation", "Target Following"],
  // Add only your actual academic and professional profile links.
  // For a CV: { label: "Curriculum Vitae", url: "assets/cv.pdf" }
  links: [{ label: "GitHub", url: "https://github.com/YiyangTang521", kind: "github" }],
  research: [
    {
      category: "PERCEPTION & MAPPING", title: "Robust perception & SLAM",
      description: "Developing reliable perception and localization under complex dynamic disturbances, with an emphasis on robust state estimation and spatial understanding.",
      topics: "Robustness · State estimation · Mapping", image: "assets/slam.svg",
      imageAlt: "Concept illustration of a camera trajectory and mapped landmarks"
    },
    {
      category: "SAFE & EFFICIENT AUTONOMY", title: "Navigation in dynamic environments",
      description: "Studying how robots can complete navigation tasks safely and efficiently while adapting to moving obstacles and changing surroundings.",
      topics: "Motion planning · Safety · Adaptation", image: "assets/navigation.svg",
      imageAlt: "Concept illustration of alternative robot paths around moving obstacles"
    },
    {
      category: "TASK-DRIVEN DECISION-MAKING", title: "Target following & decision-making",
      description: "Exploring navigation and decision-making for demanding tasks such as target following in complex, dynamic environments.",
      topics: "Target following · Planning · Decisions", image: "assets/following.svg",
      imageAlt: "Concept illustration of a robot following a target around an obstacle"
    }
  ],
  // Example: { date: "2026.10", text: "Your confirmed research update.", url: "https://..." }
  news: [],
  /* Publication fields (add real entries to the array below):
   * {
   *   title: "Full paper title",
   *   authors: ["Yiyang Tang", "Coauthor Name"],
   *   highlightAuthor: "Yiyang Tang",
   *   venue: "Full conference or journal name", year: "2026",
   *   topic: "SLAM",
   *   links: [{ label: "Paper", url: "https://..." }, { label: "Code", url: "https://..." }],
   *   bibtex: "@article{key,\n  title={Full paper title}\n}"
   * }
   */
  publications: [
    {
      "title": "A LiDAR Odometry with Visual Semantic Segmentation-Assisted Dynamic Object Removal",
      "authors": [
        "Yiyang Tang",
        "Runbo Guo",
        "Yichen Yu",
        "Hanxuan Zhang"
      ],
      "highlightAuthor": "Yiyang Tang",
      "venue": "3rd International Conference on Electronic Engineering and Information Systems (EEiSS)",
      "year": "2026",
      "topic": "LiDAR Odometry",
      "description": "Visual semantic segmentation and two-stage verification remove dynamic points missed by LiDAR detection while preserving valid static measurements.",
      "project": "visual-semantic-lo/",
      "preview": "visual-semantic-lo/assets/long-range.png",
      "previewAlt": "Figure 1(b): visual segmentation identifies a distant vehicle and its dynamic LiDAR points missed by 3D detection.",
      "figures": [
        {
          "image": "visual-semantic-lo/assets/large-occlusion.png",
          "caption": "Figure 1(a)",
          "imageAlt": "Figure 1(a): visual segmentation identifies a large nearby vehicle and removes missed dynamic points, shown in red.",
          "width": 603,
          "height": 408
        }
      ],
      "links": [
        {
          "label": "Project page",
          "url": "visual-semantic-lo/"
        },
        {
          "label": "PDF",
          "url": "visual-semantic-lo/assets/paper.pdf"
        },
        {
          "label": "IEEE",
          "url": "https://ieeexplore.ieee.org/document/11584613"
        }
      ],
      "bibtex": "@inproceedings{tang2026lidar,\n  author    = {Tang, Yiyang and Guo, Runbo and Yu, Yichen and\n               Zhang, Hanxuan},\n  title     = {A {LiDAR} Odometry with Visual Semantic\n               Segmentation-Assisted Dynamic Object Removal},\n  booktitle = {2026 3rd International Conference on Electronic\n               Engineering and Information Systems (EEISS)},\n  year      = {2026},\n  pages     = {1--6},\n  doi       = {10.1109/EEISS69782.2026.11584613}\n}"
    },
    {
      title: "CAMSCKF: A Multi-State Constraint Kalman Filter with Adaptive Multivariate Noise Parameters Clustering and Estimation for Visual-Inertial Odometry",
      authors: ["Yiyang Tang", "Hanxuan Zhang", "Yichen Yu", "Xiaofeng Li", "Yulong Huang"],
      highlightAuthor: "Yiyang Tang",
      venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
      year: "2025",
      topic: "Visual-Inertial Odometry",
      description: "Adaptive measurement clustering and per-cluster noise estimation for visual-inertial odometry in challenging outdoor environments.",
      project: "camsckf/",
      preview: "camsckf/assets/preview.gif",
      previewPoster: "camsckf/assets/preview-poster.jpg",
      previewAlt: "CAMSCKF experimental demonstration with trajectory comparisons, estimated measurement noise, and onboard camera footage.",
      figures: [
        { image: "camsckf/assets/figure-1.png", caption: "Figure 1", imageAlt: "Figure 1 of the paper: feature-point noise distributions under different observation distances, viewpoints, and lighting conditions.", width: 1170, height: 1100 }
      ],
      links: [
        { label: "Project page", url: "camsckf/" },
        { label: "PDF", url: "camsckf/assets/paper.pdf" },
        { label: "IEEE", url: "https://ieeexplore.ieee.org/document/11246963" },
        { label: "Video", url: "camsckf/#video" }
      ],
      bibtex: "@inproceedings{tang2025camsckf,\n  author    = {Tang, Yiyang and Zhang, Hanxuan and Yu, Yichen and\n               Li, Xiaofeng and Huang, Yulong},\n  title     = {{CAMSCKF}: A Multi-State Constraint Kalman Filter\n               with Adaptive Multivariate Noise Parameters\n               Clustering and Estimation for Visual-Inertial Odometry},\n  booktitle = {2025 IEEE/RSJ International Conference on\n               Intelligent Robots and Systems (IROS)},\n  year      = {2025},\n  pages     = {15173--15180},\n  doi       = {10.1109/IROS60139.2025.11246963}\n}"
    }
  ],
  // Reviewing service supplied by the author; 2025 recognition verified against the certificate.
  services: [
    { role: "Journal Reviewer", detail: "IEEE Transactions on Instrumentation and Measurement (TIM); IEEE Sensors Journal (SJ); IEEE Transactions on Aerospace and Electronic Systems (TAES)." },
    { role: "Conference Reviewer", detail: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)." },
    { role: "Honor", detail: "Outstanding Reviewer of 2025, IEEE Transactions on Instrumentation and Measurement (TIM)." }
  ],
  contactText: "For research inquiries and collaboration, please get in touch by email."
};
