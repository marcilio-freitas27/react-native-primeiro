//DEFINICAO DOS PINOS
#define pinLed1  2
#define pinLed2  3
#define pinLed3  4

void setup() {
  // put your setup code here, to run once:
  // só quando liga
  //pinMode(LED_BUILTIN, OUTPUT);
  pinMode(pinLed1, OUTPUT);
  pinMode(pinLed2, OUTPUT);
  pinMode(pinLed3, OUTPUT);

}

void loop() {
  // put your main code here, to run repeatedly:
  // excutar sem parar
  //pinMode(LED_BUILTIN, HIGH);
  //pinMode(LED_BUILTIN, LOW);
  digitalWrite(pinLed1, HIGH);
  delay(1000);
  digitalWrite(pinLed1, LOW);
  delay(1000);
  digitalWrite(pinLed2, HIGH);
  delay(1000);
  digitalWrite(pinLed2, LOW);
  delay(1000);
  digitalWrite(pinLed3, HIGH);
  delay(1000);
  digitalWrite(pinLed3, LOW);
  delay(1000);
  //delay(1000);
}
