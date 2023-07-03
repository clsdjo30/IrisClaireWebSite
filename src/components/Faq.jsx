import React, { useState } from "react";

const features = [
  {
    title:
      "Est-ce que les réponses apportées par IRIS Claire sont aussi fiables qu'une consultation chez un voyant ?",
    description:
      "OUI. La fiabilité et la précision des réponses sont très important chez Iris Claire. L’équipe de IRIS Claire est composée d’un voyant, et de deux tarologues expérimentés et spécialisés dans le Tarot divinatoire, Ensemble ils ont créé IRIS Claire pour offrir des réponses authentiques et précises à vos questions. Vous pouvez avoir pleinement confiance en Iris Claire pour vous guider vers des éclaircissements précieux",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "Comment se déroule une consultation avec IRIS Claire ?",
    description:
      "Pour obtenir des réponses à vos questions sans délai d’attente depuis votre mobile rien de plus simple.Téléchargez l’application Iris Claire sur Google play et App Store. Posez votre question. Effectuez un tirage de Tarot Iris Claire.Obtenez une reponse personnalisée immédiatement !",
    icon: "bx:bxs-data",
  },
  {
    title: "Combien va me couter ma question ?",
    description:
      "Posez votre première question GRATUITEMENT ! Chez IRIS Claire, nous croyons en l'accessibilité de l'avenir pour tous. Notre service a été conçu pour offrir des réponses abordables à partir de seulement 0,99€ question ! Accédez à votre avenir dès maintenant et découvrez les réponses que vous cherchez.",
    icon: "bx:bxs-bot",
  },
  {
    title: "Combien de temps faut-il attendre avant de recevoir une réponse ",
    description:
      "Votre réponse est IMMEDIATEMENT disponible. Quelque soit la complexité de votre question, IRIS Claire vous apporte une réponse immédiate pour vous accompagner dans vos doutes.",
    icon: "bx:bxs-window-alt",
  },
];

const Faq = () => {
  const [showDescriptions, setShowDescriptions] = useState({});

  const toggleDescription = (index) => {
    setShowDescriptions((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
      <h2 className="font-semibold lg:text-4xl md:text-center text-3xl lg:leading-9 md:leading-7 leading-9 text-yellow-600">
      Questions fréquemment posées
      </h2>
      <div className="mt-4 flex md:justify-center md:items-start md:flex-row flex-col justify-start items-start mb-8">
        <div className="">
          <p className="font-normal text-base leading-6 text-violet-800 lg:w-full md:w-9/12 ">
          Voici quelques-unes des questions les plus fréquemment posées par nos utilisateurs
          </p>
        </div>
      </div>
      <div className=" flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
        <div className=" md:w-5/12 lg:w-3/12 w-full ">
          <img
            src="/faq/desktop_faq.png"
            alt="Img of Glass bottle"
            className="w-full md:block hidden"
          />
          <img
            src="/faq/mobile_faq.png"
            alt="Img of Glass bottle"
            className="w-full md:hidden block "
          />
        </div>
        <div className=" md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10 py-5">
          {/* Tracking Section */}
          {features.map((feature, index) => (
            <div key={index}>
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="font-semibold text-lg md:text-xl leading-6 md:leading-5 text-violet-800">
                  {feature.title}
                </h3>
                <button
                  aria-label="toggle"
                  className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-800"
                  onClick={() => toggleDescription(index)}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      className={showDescriptions[index] ? "hidden" : "block"}
                      d="M10 4.1665V15.8332"
                      stroke="#5B21B6"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.16602 10H15.8327"
                      stroke="#5B21B6"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <p
                className={
                  "font-normal text-base leading-6 text-violet-800 mt-4 w-11/12 " +
                  (showDescriptions[index] ? "block" : "hidden")
                }>
                {feature.description}
              </p>
              <hr className="my-7 bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
