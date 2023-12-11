import com.codeborne.selenide.Condition;
import com.codeborne.selenide.Selenide;
import org.junit.Test;
import org.openqa.selenium.By;

import static com.codeborne.selenide.Selenide.*;


public class testSelenide {
    @org.junit.Test
    public void testVodoley54(){

        open("https://vodolei54.ru/");

        //1.ВВОДИМ ЗАПРОС
        $(By.cssSelector("body > header > div > div.j-block__search > div > form > input")).val("Ванна").pressEnter();
        //$x("//div[@id='result-stats']").shouldBe(Condition.visible);

        //2.ВЫБОР ТОВАРА
        $(By.xpath("/html/body/main/div/div[2]/div[1]/div[1]/div[1]/a/div")).click();
        Selenide.sleep(2000);

        //3.СТАВИМ КОЛИЧЕСТВО 5
        $(By.xpath("/html/body/main/div/div[2]/div/div[2]/div/form/div[2]/div/div/div/input")).val("5");
        Selenide.sleep(2000);

        //4.ДОБАВЛЯЕМ В КОРЗИНУ
        $(By.xpath("/html/body/main/div/div[2]/div/div[2]/div/form/div[2]/div/a[1]")).click();
        Selenide.sleep(3000);

        //5.ПРОДОЛЖИТЬ ПОКУПКИ
        $(By.xpath("/html/body/header/div/div[3]/div[1]/div/div[3]/span")).click();

        //6.ПРОСМОТР ОТЗЫВОВ
        $(By.xpath("/html/body/main/div/div[2]/div/div[3]/div[1]/a[3]")).click();
        Selenide.sleep(2000);
        $(By.xpath("/html/body/main/div/div[2]/div/div[3]/div[4]/div/form/button")).scrollTo();
        Selenide.sleep(3000);

        //7.ПЕРЕХОДИМ НА ГЛАВНУЮ ЧЕРЕЗ ЛОГОТИП
        $(By.xpath("/html/body/header/div/a/img")).scrollTo();
        Selenide.sleep(2000);
        $(By.xpath("/html/body/header/div/a/img")).click();

        //8.КАТАЛОГ ТЫК
        $(By.xpath("/html/body/main/div/div[1]/div[2]/nav/ul/li[2]/a")).click();

        //9.ВЫБИРАЕМ ДУШЕВЫЕ ОГРАЖДЕНИЯ
        $(By.xpath("/html/body/main/div/div[2]/div[1]/a[5]/div[1]")).click();
        Selenide.sleep(2000);

        //10.ДОБАВЛЕНИЕ В ИЗБРАННОЕ
        $(By.xpath("/html/body/main/div/div[2]/div[4]/div[1]/div[1]/a/div")).hover();
        $(By.xpath("/html/body/main/div/div[2]/div[4]/div[1]/a[2]")).click();
        Selenide.sleep(2000);

        //11.ПЕРЕХОД В РАЗДЕЛ ДОСТАВКИ
        $(By.xpath("/html/body/main/div/div[1]/div[2]/nav/ul/li[4]/a")).click();
        Selenide.sleep(2000);

        //12.ОБРАТНАЯ СВЯЗЬ
        $(By.xpath("/html/body/main/div/div[1]/div[2]/nav/ul/li[7]/a")).click();

        //13.ВЫБОР ИЗ КАТАЛОГА СЛЕВА
        $(By.xpath("/html/body/main/aside/div[1]/nav/ul/li[2]/a/span")).click();


        //TEST ДОБАВИМ В КОРЗИНУ ВАННУ ЧУГУННУЮ
        $(By.xpath("/html/body/main/div/div[2]/div[4]/div[1]/div[2]/form/div[2]/div/a[1]")).scrollTo();
        Selenide.sleep(2000);
        $(By.xpath("/html/body/main/div/div[2]/div[4]/div[1]/div[2]/form/div[2]/div/a[1]")).click();
        $(By.xpath("/html/body/header/div/div[3]/div[1]/div/div[3]/span")).click();




        //14.ПЕРЕХОД В КОРЗИНУ
        $(By.xpath("/html/body/header/div/div[3]/div[2]/a/ul")).hover();
        $(By.xpath("/html/body/header/div/div[3]/div[2]/a/ul")).click();

        //15.УКАЖЕМ СПОСОБ ДОСТАВКИ
        $(By.xpath("/html/body/main/div/div[2]/div/div[3]/form/div[2]/div/ul[1]/li[1]/label/input")).click();
        Selenide.sleep(2000);

        //16.УКАЖЕМ ДАННЫЕ
        $(By.xpath("/html/body/main/div/div[2]/div/div[3]/form/div[1]/ul/li[1]/input")).scrollTo();
        $(By.xpath("/html/body/main/div/div[2]/div/div[3]/form/div[1]/ul/li[1]/input")).val("111.mail.ru");

        $(By.xpath("/html/body/main/div/div[2]/div/div[3]/form/div[1]/ul/li[2]/input")).scrollTo();
        $(By.xpath("/html/body/main/div/div[2]/div/div[3]/form/div[1]/ul/li[2]/input")).val("+7-777-777-77-77");

        $(By.xpath("/html/body/main/div/div[2]/div/div[3]/form/div[1]/ul/li[3]/input")).scrollTo();
        $(By.xpath("/html/body/main/div/div[2]/div/div[3]/form/div[1]/ul/li[3]/input")).val("Иванов Иван Иваночич");

        $(By.xpath("/html/body/main/div/div[2]/div/div[3]/form/div[1]/ul/li[3]/input")).scrollTo();
        $(By.xpath("/html/body/main/div/div[2]/div/div[3]/form/div[1]/ul/li[3]/input")).val("Иванов Иван Иваночич");

        $(By.xpath("/html/body/main/div/div[2]/div/div[3]/form/div[1]/ul/li[4]/input")).scrollTo();
        $(By.xpath("/html/body/main/div/div[2]/div/div[3]/form/div[1]/ul/li[4]/input")).val("Ленина 1");

        $(By.xpath("/html/body/main/div/div[2]/div/div[3]/form/div[1]/ul/li[5]/textarea")).scrollTo();
        $(By.xpath("/html/body/main/div/div[2]/div/div[3]/form/div[1]/ul/li[5]/textarea")).val("Заказ без комментариев 1");

        $(By.xpath("/html/body/main/div/div[2]/div/div[3]/form/div[1]/ul/li[1]/input")).scrollTo();
        Selenide.sleep(2000);

        //17.УКАЖЕМ СПОСОБ ОПЛАТЫ
        $(By.xpath("/html/body/main/div/div[2]/div/div[3]/form/div[2]/div/ul[2]/li[2]/label/input")).scrollTo();
        $(By.xpath("/html/body/main/div/div[2]/div/div[3]/form/div[2]/div/ul[2]/li[2]/label/input")).click();
        Selenide.sleep(2000);


        //18.НАПИСАТЬ В ПОДДЕРЖКУ
        $(By.xpath("/html/body/jdiv/jdiv/jdiv[1]/jdiv/jdiv[1]")).click();
        $(By.xpath("/html/body/jdiv/jdiv/jdiv[3]/jdiv[3]/jdiv[3]/jdiv/jdiv[1]/jdiv/jdiv[1]/textarea")).val("Здравствуйте, вам нужен тестировщик?");
        Selenide.sleep(2000);
        $(By.xpath("/html/body/jdiv/jdiv/jdiv[3]/jdiv[1]/jdiv/jdiv")).click();

        //19.КНОПКА ВОЙТИ
        $(By.xpath("/html/body/main/div/div[1]/div[3]/a")).scrollTo();
        $(By.xpath("/html/body/main/div/div[1]/div[3]/a")).click();
        Selenide.sleep(2000);

        //20.КНОПКА РЕГИСТРАЦИЯ
        $(By.xpath("/html/body/main/div/div[1]/div[3]/div[2]/div/div[1]/a[2]")).click();

        Selenide.sleep(10000);
    }
}