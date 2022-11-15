import React, {useState} from 'react';
import {View} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['pt_BR'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan.',
    'Fev.',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul.',
    'Ago',
    'Set.',
    'Out.',
    'Nov.',
    'Dez.',
  ],
  dayNames: [
    'Domingo',
    'Segunda',
    'Terca',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = 'pt_BR';

export default () => {
  const [date, setDate] = useState(new Date());

  console.log(date);

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
      }}>
      <Calendar
        onDayPress={e => console.log(e)}
        theme={{
          textSectionTitleDisabledColor: '#d9e1e8',
        }}
        disabledDaysIndexes={[0, 6]}
      />
    </View>
  );
};
