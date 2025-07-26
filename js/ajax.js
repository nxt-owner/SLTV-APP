$(function () {
    "use strict";
    var contactForm = $("#contact_form"),
        response = {},
        validationMessage = {
          "nameValidation"       : "Please Enter Your Name",
          "emailValidation"      : "Please Use Valid Email",
          "messageValidation"    : "The Message Can't Be Empty",
          "SuccessMessage"  : "Your Message Has Been Sent"
        },
        sendingMessage = false;
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    function validateEmpty(str) {
      var re = /\S/;
      return re.test(str)
    }
    function add_error (errprType) {
      response["Error"] = true;
      if (!response["ErrorType"]) {
        response["ErrorType"] = [];
      }
      response["ErrorType"].push(errprType);
    }
    function append_response () {
      if (response["Error"]) {
        for (var i = 0; i < response["ErrorType"].length; i++) {
          $("[data-"+ response["ErrorType"][i] +"]").addClass("kayoErrorInput").parent().append("<p class='kayoAlert kayoError'>" +  validationMessage[response["ErrorType"][i]]  +"</p>");
        }
      } else {
        contactForm.prepend("<p class='kayoAlert kayoSuccess'>" + validationMessage["SuccessMessage"]  + "</p>");
      }
    }
    contactForm.on("submit", function(event) {
      event.preventDefault();
      if (!sendingMessage) {
        sendingMessage = true;
        var thisForm = $(this);
        response = {};
        thisForm.find(".kayoAlert").remove();
        thisForm.addClass("kayo-submiting").find("*").removeClass("kayoErrorInput");
        thisForm.find("[type=submit]").attr('disabled', 'disabled');
        var full_name = thisForm.find("[name=full_name]").val(),
            email     = thisForm.find("[name=email]").val(),
            message   = thisForm.find("[name=message]").val();

        if (!validateEmpty(full_name)) {
          add_error("nameValidation")
        }
        if (!validateEmail(email)) {
          add_error("emailValidation");
        }
        if (!validateEmpty(message)) {
          add_error("messageValidation");
        }
        if (jQuery.isEmptyObject(response)) {
          response["Error"] = false;
          response = {};
          $.post('php/sendMessage.php', thisForm.serialize(),function(result) {
            response = JSON.parse(result);
            append_response();
            thisForm.removeClass("kayo-submiting");
            sendingMessage = false;
            thisForm.find("[type=submit]").removeAttr("disabled")
          });
        } else {
          append_response();
          thisForm.removeClass("kayo-submiting");
          thisForm.find("[type=submit]").removeAttr("disabled")
          sendingMessage = false;
        }
      }
    });



    $.ajaxChimp.translations.ar = {
        'submit': 'تسجيل ...',
        0: 'تم ارسال ايميل تاكيدي اليك برجاء التحقق منه',
        1: 'من فضلك ادخل بريدك الالكتروني',
        2: 'صيغه البريد الالكتروني غير صحيحه',
        3: 'صيغه البريد الالكتروني غير صحيحه',
        4: 'صيغه البريد الالكتروني غير صحيحه',
        5: 'صيغه البريد الالكتروني غير صحيحه'
    };

    $('.ar-form').ajaxChimp({
        language: 'ar',
        callback: callbackFunction,
        url: 'https://mrkayo.us15.list-manage.com/subscribe/post?u=aab7edb1a83a993a85e04687d&amp;id=377d024071'
    });

    $('.en-form').ajaxChimp({
        callback: callbackFunction,
        url: 'https://mrkayo.us15.list-manage.com/subscribe/post?u=aab7edb1a83a993a85e04687d&amp;id=377d024071'
    });

    function callbackFunction (resp) {
        if (resp.result === 'success') {
            $("#mc-email").val("");
        }
    }

});
