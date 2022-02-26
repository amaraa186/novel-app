import React, { useState } from 'react'
import { ScrollView, View, TouchableOpacity } from 'react-native'
import { Box, Text } from '../../components'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';

const ChapterDetail = (props) => {
    const [fontSize, setFontSize] = useState(14)
    const [colorTheme, setColorTheme] = useState(true)
    const [colorText, setColorText] = useState(true)

    const onBack = () => props.navigation.goBack()

    const Drawer = createDrawerNavigator()

    const onThemeChange = () => {
        setColorText(!colorText)
        setColorTheme(!colorTheme)
    }
        
    const chapter = { 
        chapter: 1,
        title: "Вушан тосгоны өглөө",
        duration: 8,
        content: `
            Юлан тивийн хамгийн том уул нуруу Шидэт араатнуудын уулсын баруун зүгт байрлах Фэнлай улсын жижигхэн тосгон Вушан. Өглөөний нар мандахтай зэрэгцэн Вушан тосгонд өглөөний сэрүү татсан татлаа. Гэхдээ тосгоны бүх иргэд аль хэдийн босч ажилдаа орсон байв. Зургаагаас долоо настай хүүхдүүд хүртэл орноосоо босон уламжлалт өглөөний дасгалаа хийхээр зэхэцгээнэ. Вушан тосгоны зүүн зүгийн хоосон талбайд өглөөний нар дулаахнаар ээнэ. Нарны туяа хүрээлэн буй модод болон навчсын дундуур нэвчин газарт хэсэг хэсэг газруудад л тусна. Тэнд бүлэг хүүхдүүд харагдах ба ойролцоогоор хоёр зуугуулаа байв. Энэ бүлэг хүүхдүүд гурван хэсэгт хуваагдсан байх ба хэсэг тус бүрийн хүүхдүүд хэд хэдэн эгнээ болон эгнэн зогссон байна. Хамгийн хойд хэсэгт ойролцоогоор зургаан настай хүүхдүүд. Голын хэсэгт есөөс арван хоёр настай хүүхдүүд. Урд талын хэсэгт арван гурваас арван зургаан настнууд байв. Эдгээр бүлэг хүүхдүүдийн өмнө гурван өндөр хөгжсөн бие бялдартай дунд эргэм насны залуус байв. Тэд гурвуулаа богино цамц, болхи гэмээр тайрсан өмдтэй. “Хэрэв хүчирхэг дайчин болохыг хүсэж байвал багаасаа шаргуу хичээллэх хэрэгтэй.” Дунд эргэм насны залуусын ахлагч толгойгоо өндөрт өргөн, гараа нурууныхаа ард барин хүйтнээр хэллээ. Тэрээр хүйтэн хөндий харцаа хамгийн хойно байрлах хэсэг хүүхдүүдрүү чиглүүлнэ. Зургаагаас долоон настнууд бүгд уруулаа жимийсэн байв. Том дугариг нүдээрээ дунд эргэм насны залууг хараад хүүхдүүд авиа гаргахаас ч эмээнэ.
        `
    }

    return (
        <Box flex={1} insetsTop>
            <Box flex={1}>
                <View style={{ position: 'absolute', top: 15, right: 0, zIndex: 2 }}>
                    <Box direction='row' jc='end' pX={20}>
                        <TouchableOpacity onPress={onBack}>
                            <Box bg="transBlack" height={30} width={30} jc='center' align='center' bR={15}>
                                <MaterialCommunityIcons name="close" size={20} color="white" />
                            </Box>
                        </TouchableOpacity>
                    </Box>
                </View>
                <ScrollView contentContainerStyle={{
                    padding: 20
                }} style={{backgroundColor: colorTheme == true ? "white" : "black"}}>
                    <Box>
                        <Text align='center' color={colorText == true ? "black" : "white"}>Бүлэг - {chapter.chapter}</Text>
                    </Box>
                    <Box>
                        <Text h2 align='center' font='bold' color={colorText == true ? "black" : "white"}>{chapter.title}</Text>
                    </Box>
                
                    <Text lineHeight={fontSize * 2} size={fontSize} align='justify' color={colorText == true ? "black" : "white"}>{chapter.content}</Text>
                </ScrollView>

                <Box bg='black'>
                    <Box direction='row' align='center'>
                        <Box height={4} bg='white' bR={15} mL={20} mR={20} mT={10} direction='row' flex={1}>
                            <Box flex={1} bg='red' bR={15}>

                            </Box>
                            <Box flex={2}>

                            </Box>
                        </Box>
                    </Box>
                    <Box bg='black' height={60} pX={20} pY={8} direction='row'>
                        <Box flex={1} direction='row'>
                            <TouchableOpacity>
                                <Box pA={10} bg='white' height={40}>
                                    <Text font='bold'>19/40</Text>
                                </Box>
                            </TouchableOpacity>

                            <Box width={8} />
                            
                            <TouchableOpacity onPress={onThemeChange}>
                                <Box pA={10} bg='white' height={40}>
                                    {
                                        colorTheme == true ? 
                                        (<MaterialCommunityIcons name="brightness-2" size={20} color="black" />) 
                                        : 
                                        (<MaterialCommunityIcons name="brightness-5" size={20} color="black" />) 
                                    }
                                </Box>
                            </TouchableOpacity>
                        </Box>
                        <Box direction='row' jc='end'>
                            <TouchableOpacity onPress={() => setFontSize(fontSize / 1.2)}>
                                <Box height={40} width={40} bg='white' jc='center' align='center'>
                                    <Text font='bold'>A-</Text>
                                </Box>
                            </TouchableOpacity>
                            <Box width={8}/>
                            
                            <TouchableOpacity onPress={() => setFontSize(fontSize * 1.2)}>
                                <Box height={40} width={40} bg='white' jc='center' align='center'>
                                    <Text font='bold'>A+</Text>
                                </Box>
                            </TouchableOpacity>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ChapterDetail