import React, { useState } from 'react'
import { ScrollView, View, TouchableOpacity } from 'react-native'
import { Box, Text } from '../../components'

const ChapterDetail = (props) => {
    const [fontSize, setFontSize] = useState(14)

    const onBack = () => props.navigation.goBack()
        
    const chapter = { 
        title: "Нэгдүгээр хэсэг – Вушан тосгоны өглөө",
        duration: 8,
        content: `
            Юлан тивийн хамгийн том уул нуруу Шидэт араатнуудын уулсын баруун зүгт байрлах Фэнлай улсын жижигхэн тосгон Вушан. Өглөөний нар мандахтай зэрэгцэн Вушан тосгонд өглөөний сэрүү татсан татлаа. Гэхдээ тосгоны бүх иргэд аль хэдийн босч ажилдаа орсон байв. Зургаагаас долоо настай хүүхдүүд хүртэл орноосоо босон уламжлалт өглөөний дасгалаа хийхээр зэхэцгээнэ. Вушан тосгоны зүүн зүгийн хоосон талбайд өглөөний нар дулаахнаар ээнэ. Нарны туяа хүрээлэн буй модод болон навчсын дундуур нэвчин газарт хэсэг хэсэг газруудад л тусна. Тэнд бүлэг хүүхдүүд харагдах ба ойролцоогоор хоёр зуугуулаа байв. Энэ бүлэг хүүхдүүд гурван хэсэгт хуваагдсан байх ба хэсэг тус бүрийн хүүхдүүд хэд хэдэн эгнээ болон эгнэн зогссон байна. Хамгийн хойд хэсэгт ойролцоогоор зургаан настай хүүхдүүд. Голын хэсэгт есөөс арван хоёр настай хүүхдүүд. Урд талын хэсэгт арван гурваас арван зургаан настнууд байв. Эдгээр бүлэг хүүхдүүдийн өмнө гурван өндөр хөгжсөн бие бялдартай дунд эргэм насны залуус байв. Тэд гурвуулаа богино цамц, болхи гэмээр тайрсан өмдтэй. “Хэрэв хүчирхэг дайчин болохыг хүсэж байвал багаасаа шаргуу хичээллэх хэрэгтэй.” Дунд эргэм насны залуусын ахлагч толгойгоо өндөрт өргөн, гараа нурууныхаа ард барин хүйтнээр хэллээ. Тэрээр хүйтэн хөндий харцаа хамгийн хойно байрлах хэсэг хүүхдүүдрүү чиглүүлнэ. Зургаагаас долоон настнууд бүгд уруулаа жимийсэн байв. Том дугариг нүдээрээ дунд эргэм насны залууг хараад хүүхдүүд авиа гаргахаас ч эмээнэ.
        `
    }

    return (
        <Box flex={1} insetsTop>
            <Box flex={1}>
                <View style={{ position: 'absolute', top: 0, right: 0, zIndex: 2 }}>
                    <Box direction='row' jc='end' pX={20}>
                        <TouchableOpacity onPress={onBack}>
                            <Box bg='black' height={30} width={30} jc='center' align='center' bR={15}>
                                <Text color='white'>x</Text>
                            </Box>
                        </TouchableOpacity>
                    </Box>
                </View>
                <ScrollView contentContainerStyle={{
                    padding: 20
                }}>
                    <Box>
                        <Text h2 font='bold'>{chapter.title}</Text>
                    </Box>
                
                    <Text lineHeight={fontSize * 2} size={fontSize} align='justify'>{chapter.content}</Text>
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
                    <Box bg='black' height={70} pX={20} pY={8} direction='row'>
                        <Box flex={1} direction='row'>
                            <Box pA={10} bg='white' height={40}>
                                <Text font='bold'>19/40</Text>
                            </Box>

                            <Box width={8} />

                            
                            <Box pA={10} bg='white' height={40}>
                                <Text font='bold'>Хадгалах</Text>
                            </Box>
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