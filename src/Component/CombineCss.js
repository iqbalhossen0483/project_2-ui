const CustomCss = () => {
    const link = "hover:underline ml-3";
    const headerSection = "p-3 bg-white flex justify-between text-xl font-semibold";

    //banner
    const bgImg = { backgroundImage: "url('https://i.ibb.co/3YVDrsd/tour-1-title-7.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "100% 20rem" };
    const banner = "text-center py-20 leading-12 h-auto";

    //button all
    const button = "border py-1 px-4 bg-white rounded my-10 text-xl";
    //header text all
    const header = "text-4xl font-bold text-center mt-4 mb-9";

    const container = "mx-3 my-10 px-5 py-3";

    const form = "flex flex-col p-3 bg-white my-16 rounded";
    const input = "border rounded py-1 px-3 text-xl my-1 focus:outline-none	";
    const submit = "border w-2/4 py-1 px-4 bg-white rounded my-3 text-xl mx-auto";

    const serviceContainer = 'grid grid-cols-3 gap-5'


    return {
        link,
        headerSection,
        bgImg,
        banner,
        button,
        header,
        container,
        form,
        input,
        submit,
        serviceContainer
    }
}
export default CustomCss;