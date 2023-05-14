<script lang="ts">
  import AboutCard from '../../components/AboutCard.svelte';
</script>

<div
  class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4"
>
  <div class="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
    <div class="w-full lg:w-6/12">
      <h2
        class="w-full font-bold lg:text-4xl text-3xl lg:leading-10 dark:text-white leading-9"
      >
        Poekmon History
      </h2>
      <p
        class="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6"
      >
        Pokémon is the brainchild of Satoshi Tajiri. Born in Tokyo in 1965, he
        began collecting insects as a child, and wanted to become an
        entomologist. However, this ambition gave way to his other passion:
        video gaming. For Tajiri, it all began with Space Invaders, and he spent
        his teenage years fascinated with the medium. At the age of 16, he won a
        contest for an idea sponsored by Sega, and at 17, he began a fanzine
        called Game Freak, costing ¥300. The best-selling issue of the
        handwritten magazine turned over some 10,000 copies through doujinshi
        stores (which sell self-published tomes). At the age of 16, he won a
        contest for an idea sponsored by Sega, and at 17, he began a fanzine
        called Game Freak, costing ¥300. The best-selling issue of the
        handwritten magazine turned over some 10,000 copies through doujinshi
        stores (which sell self-published tomes).
      </p>
    </div>
    <div class="w-full lg:w-6/12">
      <img
        class="lg:block hidden w-full"
        src="https://th.bing.com/th/id/R.dcac4466f7461a87c9f63d8df6a299e0?rik=zo38%2brQ6E54T6w&pid=ImgRaw&r=0"
        alt="people discussing on board"
      />
      <img
        class="lg:hidden sm:block hidden w-full"
        src="https://th.bing.com/th/id/R.dcac4466f7461a87c9f63d8df6a299e0?rik=zo38%2brQ6E54T6w&pid=ImgRaw&r=0"
        alt="people discussing on board"
      />
      <img
        class="sm:hidden block w-full"
        src="https://th.bing.com/th/id/R.dcac4466f7461a87c9f63d8df6a299e0?rik=zo38%2brQ6E54T6w&pid=ImgRaw&r=0"
        alt="people discussing on board"
      />
    </div>
  </div>

  <div class="relative mt-24">
    <div class="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
      <div
        class="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center"
      >
        <img
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg1.svg"
          alt="flag"
        />
      </div>

      <img
        class="z-20"
        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg2.svg"
        alt="note"
      />

      <img
        class="z-20 sm:block hidden"
        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg"
        alt="users"
      />
    </div>
    <hr class="z-10 absolute top-2/4 w-full bg-gray-200" />
  </div>
  <div class="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
    <div>
      <p
        class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6"
      >
        Nintendo 64
      </p>
      <p
        class="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6"
      >
        You've no doubt fond memories of the Nintendo 64 (N64), and might try
        out Nintendo 64 emulators to get that nostalgic fix.
      </p>
    </div>
    <div>
      <p
        class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6"
      >
        Fighting Games
      </p>
      <p
        class="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6"
      >
        Considering battle is one of the touchstones of Pokémon, it comes as no
        surprise that a few spin-offs center on this aspect.
      </p>
    </div>
    <div class="sm:block hidden">
      <p
        class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6"
      >
        Pokémon Go
      </p>
      <p
        class="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6"
      >
        As part of the 20th anniversary celebrations, everyone embraced Pokémon
        once more, as Pokémon Go was unleashed onto the world (our best tips for
        playing Pokemon Go).
      </p>
    </div>
  </div>
  <div class="sm:hidden block relative mt-8">
    <div class="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
      <img
        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg"
        alt="user"
      />
    </div>
    <hr class="z-10 absolute top-2/4 w-full bg-gray-200" />
  </div>
  <div class="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
    <div>
      <p
        class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6"
      >
        400k User
      </p>
      <p
        class="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6"
      >
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
    </div>
  </div>

  <div
    class="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16"
  >
    <div class="w-full lg:w-6/12">
      <h2
        class="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white"
      >
        The Main Game Series
      </h2>
      <p
        class="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6 w-full lg:w-10/12 xl:w-9/12"
      >
        You know the story. A youngster is determined to become a fully-fledged
        Pokémon Trainer, catch 'em all, and collect gym badges. He or she heads
        off to collect a starter monster, and while doing so, finds a rival
        Trainer. The pair go forth to achieve their destinies, and further
        encounter a team of ne'er-do-wells intent on world domination. Such a
        description, of course, ignores the natural charm and intrigue of
        playing Pokémon: a tried-and-tested formula that never really gets old.
        The Pokédex has expanded to include over 800 Pokémon across seven
        generations of games.
      </p>
      <h2
        class="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white mt-16"
      >
        Spin-Off Appearances
      </h2>
      <p
        class="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6 w-full lg:w-10/12 xl:w-9/12"
      >
        Pokémon's popularity means that the series isn't confined to one video
        game series. The first, however, now seems ridiculous: Pokémon Trading
        Card Game was a Game Boy Color simulation of the real-life trading
        cards. It was released between 1998 and 2000, and proved a huge hit --
        perhaps owing to the fact it included the majority of cards from the
        first three sets. It was a one-off cost, eliminated the need to scout
        out spares, and yet remained addictive, so sold over 1.5 million copies
        in North America in a year. A follow-up was soon unveiled, Pokémon Card
        GB2: Here Comes Team GR!, although only in Japan. The number of spin-off
        media for Pokémon far outweighs those of the main series. So we won't
        waste time recounting the thrills of Learn with Pokémon: Typing
        Adventure, Pokémon Picross, or Pokémon Trozei!/Link!. Instead, we'll
        focus on the ones you care about.
      </p>
    </div>
    <div class="w-full lg:w-6/12">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10"
      >
        <AboutCard
          title={'Generation I'}
          details={'The player had to voyage across the Kanto region to collect Pokémon. Their ultimate goal was to compete against Gym Leaders to earn badges, and subsequently challenge the Elite Four. You also took on Team Rocket, and generally had fun.'}
        />
        <AboutCard
          title={'Generation II'}
          details={'From the inclusion of unknown creatures in the anime, it was clear that Pokémon wasn not going to stop at the first generation of titles. More specifically, at the end of the first episode, screened in 1997, Ho-Oh was seen flying in the sky.'}
        />
        <AboutCard
          title={'Generation III'}
          details={'Pokémon had reached a peak, and interest was beginning to wane. Nonetheless, Pokémon Ruby and Sapphire proved commercially and critically successful. They were released on the Game Boy Advance (GBA) in Japan in 2002, and in other territories the following year.'}
        />
        <AboutCard
          title={'Generation IV'}
          details={'Pokémon Ruby and Sapphire, plus FireRed and LeafGreen, had sold respectfully. But their DS successors, Pokémon Diamond and Pearl, exceeded expectations.'}
        />
        <AboutCard
          title={'Generation V'}
          details={'Pokémon Black and White took players to Unova. For the first time, the game world inspiration was taken away from Japan. Whereas previous regions had been modeled on Hokkaido, Kansai, and Kyushu, Unova was based on New York City.'}
        />
        <AboutCard
          title={'Generation VI'}
          details={'Just a year after Pokémon Black 2 and White 2, the franchise was back and fresher than ever. It would be fair to say that Pokémon X and Y were something of a revolution in the brand history. Not only did they add 72 more Pokémon to the Pokédex.'}
        />
      </div>
    </div>
  </div>
</div>
