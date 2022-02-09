export const SubscribeList = {
  title: 'Subscribe for $10 / month and get all these:',
  data: [
    '1 on 1 mentorship with a Senior Full Stack developer',
    'Up to 1 hour discussion or pair programming once a week',
    'Access to Discord server to meet other mentees, and a community where to ask questions and share learning journey',
    'Learn how to use Git and the usual workflow you get in a workplace',
    'I want you to become more independent in tackling problems and eventually be better than me'
  ]
};

export const ProgramList = {
  title: 'Who is this program for?',
  data: [
    'For newbies and those who are starting to learn web development',
    'They could be be stuck or blocked by certain errors in their project and need help solving them',
    "They are currently confused with what's the next step on their web development journey"
  ]
};

export const NotList = {
  title: 'This is not for the people who:',
  data: ['Is a senior or expert in their field', 'Have more than 3-5 years of experience']
};

export const Philosophy = {
  title: 'Philosophy',
  content: `There is no one way on how to get better in programming. <br/>
  You may be more interested in frontend or backend or both. <br/>
  You may have working environment preferences. <br/>
  We will work together to address what's hindering you from progressing and find the best way to achieve your goals.`
};

const expYears = new Date().getFullYear() - 2015;
export const AboutMe = {
  title: 'Who am I?',
  content: `I’m Faith and I have been in the web development industry for over ${expYears} years. I can teach you and help you overcome anything that’s hindering your progress. 
  Learn more about me at <a target="_blank" href="https://faithmorante.netlify.app">Faith's Website</a>.
  I've been mentoring newbies since 2019 and most of the time, mentees become inactive or less committed over time, thus I have prepared this program to make mentees more accountable and be serious about their journey.`
};

export const Testimonials = {
  title: 'Testimonials',
  data: [
    {
      imgName: 'davidn.jpeg',
      name: 'Davide Naccarati',
      content: `I had the chance to work on a project and Faith help me to set me on the right track, 
      showing me how to work in a team using different tools because before that, I only used to read from blog posts.
      I really enjoyed our mentorship, she has been always supportive and ready to help me via hangouts when I was stuck.
      Thanks to her I learned many things but especially how to deal and be confident with them.`
    },
    {
      imgName: 'joelm.jpeg',
      name: 'Joel P. Mugalu',
      content: `Faith is an exceptional mentor. I was part of her mentorship program and it was such a great experience. I was very pleased by her project based approach and her availability to help and offer vital feedback.
      I have high regard for her and her ability to help others grow as developers. `
    }
  ]
};
