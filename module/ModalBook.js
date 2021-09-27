
const bookModal = mongoose.model('Book', bookSchema);

function seedBookInfo(){

    const book1 = new bookModal({
        title: 'life 3.0',
        description:'Being Human in the Age of Artificial Intelligence',
        email: 'qalkhatib0@gmail.com',
        image: `https://miro.medium.com/max/1838/1*KDQ3FEq91c2etgm4fKw9AA.jpeg`
    });

    const book2 = new bookModal({
        title: 'Don\'t Make me Think',
        description:'Don\'t Make Me Think is a book by Steve Krug about human–computer interaction and web usability. The book\'s premise is that a good software program or web site should let users accomplish their intended tasks as easily and directly as possible.',
        email: 'qalkhatib0@gmail.com',
        image: `https://images.wondershare.com/mockitt/graphic-design/graphic-design-book-dont-make-me-think.jpg`
    });

    const book3 = new bookModal({
        title: 'Thinking Fast And Slow',
        description:'Thinking Fast And Slow shows you how two systems in your brain are constantly fighting over control of your behavior and actions, and teaches you the many ways in which this leads to errors in memory, judgment and decisions, and what you can do about it.',
        email: 'qalkhatib0@gmail.com',
        image: `https://www.summary.com/magazine/wp-content/uploads/2021/01/Thinking-Fast-Slow-Hero-1024x700-1.jpg`
    });
}

