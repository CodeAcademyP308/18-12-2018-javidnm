$("document").ready(function () {
    $("#accordion").click(function(){
        $(".option1").slideToggle('slow'),
            $(".option2").hide(),
                $(".option3").hide(),
                $(".option4").hide();

                });
                $("#accordion2").click(function(){
                    $(".option2").slideToggle('slow'),
                        $(".option1").hide(),
                            $(".option3").hide(),
                            $(".option4").hide()
                            ;
                            });
                            $("#accordion3").click(function(){
                                $(".option3").slideToggle('slow'),
                                    $(".option2").hide(),
                                        $(".option1").hide(),
                                        $(".option4").hide();

                                        });
                                        $("#accordion4").click(function(){
                                            $(".option4").slideToggle('slow'),
                                                $(".option2").hide(),
                                                    $(".option3").hide(),
                                                         $(".option1").hide();

                                                      });
})