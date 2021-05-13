const about = document.querySelector('#about')
const content = document.querySelector('#contact')
const projects = document.getElementById('projects')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const projectContent = document.querySelector('#project-content')

about.addEventListener('click', () => {
    const aboutBox = new WinBox({
      title: 'About Me',
    //   modal: true,
      width: '400px',
      height: '400px',
      top: 10,
      bottom: 10,
      mount: aboutContent,
      onfocus: function () {
        this.setBackground('#00aa00')
      },
      onblur: function () {
        this.setBackground('#777')
      },
    })
  })
  
//   contact.addEventListener('click', () => {
//     const contactBox = new WinBox({
//       title: 'Contact Me',
//       background: '#00aa00',
//       width: '400px',
//       height: '400px',
//       top: 10,
//       bottom: 10,
//       mount: contactContent,
//       onfocus: function () {
//         this.setBackground('#00aa00')
//       },
//       onblur: function () {
//         this.setBackground('#777')
//       },
//     })
//   })

projects.addEventListener('click',()=>{
    const projectBox = new WinBox({
        title: 'Projects',
        width: '400px',
        height: '400px',
        top: 10,
        bottom: 10,
        mount: projectContent,
        onfocus: function () {
            this.setBackground('#00aa00')
          },
        onblur: function () {
            this.setBackground('#777')
          },
    })
})
