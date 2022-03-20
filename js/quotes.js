const quotes = [
    {
        quote:"작은 일에 성실한 사람은 큰 일에도 성실하고 작은 일에 정직하지 못한 사람은 큰 일에도 정직하지 못하다.",
        author:" 누가복음 16:10",
    },
    {
        quote:"변함없이 서로 사랑하는 이가 친구이며 위급할 때 서로 돕는 이가 형제이다.",
        author:" 잠언 17:17",
    }
    ,{
        quote:"조금만 더 자고, 조금만 더 졸고, 조금만 더 손을 모으고 쉬려는 이에게는 가난이 강도처럼 갑자기 밀어닥치고 빈곤이 군사처럼 몰려올 것이다.",
        author:" 잠언 24:33-34",
    },
    {
        quote:"너희 중에 누구든지 크게 되고 싶은 이는 남을 섬기는 이가 되어야 학고, 으뜸이 되고픈 자는 남의 종이 되어야 한다.",
        author:" 마태복음 20:26 - 27",
    },
    {
        quote:"친절한 말은 꿀송이와 같아서 마음을 흐뭇하게 해 주고 건강하게 해 준다",
        author:" 잠언 16:24",
    },
    {
        quote:"누구든지 자기를 높이는 사람은 낮아지고 낮추는 사람은 높아질 것이다.",
        author:" 마테복음 23:12",
    },
    {
        quote:"그러므로 내일 일을 걱정하지 말아라. 내일 일은 내일 걱정할 것이다. 한 날의 괴로움은 그 날의 것으로 충분하다.",
        author:" 마테복음 6:34",
    },
    {
        quote:"두려워 말라 내가 너와 함께 함이니라놀라지 말라 나는 네 하나님이 됌이니라. 내가 너를 굳세게 하리라.참으로 너를 도와 주리라. 참으로 나의 의로운 오른손으로 너를 붙들리라",
        author:" 이사야 41:10",
    },
    {
        quote:"네 시작은 미미하였으나 네 나중은 심히 창대 하리라",
        author:" 욥8;7",
    },
    {
        quote:"믿는 사람은 무엇이든지 할 수 있다",
        author:" 마가복음 9:23",
    }
    ];

    const quote = document.querySelector("#quote span:first-child");
    const author = document.querySelector("#quote div");
    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    quote.innerText = todaysQuote.quote;
    author.innerText = todaysQuote.author;