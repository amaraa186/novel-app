import React, { useState, useEffect } from 'react'
import { ScrollView, Image, TouchableOpacity, Button } from 'react-native'
import { Box, Text } from '../../components'

const NovelDetail = (props) => {

    const novel = {
        cover_url: 'https://img.webnovel.com/bookcover/8094085105004705/300/300.jpg?updateTime=1552557356092',
        total_chapter: 3500,
        author: "I eat tomatoes",
        title: "Хуйларч буй луу",
        started: 2016,
        rating: 5.0,
        description: "Empires rise and fall on the Yulan Continent. Saints, immortal beings of unimaginable power, battle using spells and swords, leaving swathes of destruction in their wake. Magical beasts rule the mountains, where the brave – or the foolish – go to test their strength. Even the mighty can fall, feasted on by those stronger. The strong live like royalty; the weak strive to survive another day. This is the world which Linley is born into. Raised in the small town of Wushan, Linley is a scion of the Baruch clan, the clan of the once-legendary Dragonblood Warriors. Their fame once shook the world, but the clan is now so decrepit that even the heirlooms of the clan have been sold off. Tasked with reclaiming the lost glory of his clan, Linley will go through countless trials and tribulations, making powerful friends but also deadly enemies.",
        tags: [{
            title: 'Адал явдал',
        }, {
            title: 'Тулаант'
        }, {
            title: 'Уран зөгнөлт'
        }, {
            title: 'Домгийн'
        }, {
            title: 'Домгийн'
        }]
    }

    const onBack = () => props.navigation.goBack()

    return (
        <Box>
            <ScrollView contentContainerStyle={{
                    padding: 10
                }}>
                <Box direction='row' jc='between' pY={8}>
                    <TouchableOpacity onPress={onBack}>
                        <Text h2>{'<'}</Text>
                    </TouchableOpacity>
                    <Text h2>Дэлгэрэнгүй</Text>
                    <TouchableOpacity>
                        <Text>X</Text>
                    </TouchableOpacity>
                </Box>
                <Box>
                    <Box pY={8} align='center'>
                        <Box height={250} width={170}>
                            <Image 
                                source={{
                                    uri: novel.cover_url
                                }}
                                style={{
                                    flex: 1,
                                    width: null,
                                    height: null,
                                    borderRadius: 10
                                }}
                            />
                        </Box>
                        <Box pY={12} align='center'>
                            <Text h2 font='bold'>{novel.title}</Text>
                            <Text color='gray' font='bold'>ЗОХИОЛЧ: {novel.author.toUpperCase()}</Text>
                        </Box>
                    </Box>
                    <Box direction='row' jc='between' pX={16} pY={12} shadow>
                        <Box>
                            <Text align='center' font='bold'>Гарч эхэлсэн</Text>
                            <Text align='center' color='gray'>{novel.started}</Text>
                        </Box>
                        <Box>
                            <Text align='center' font='bold'>Нийт бүлэг</Text>
                            <Text align='center' color='gray'>{novel.total_chapter}</Text>
                        </Box>
                        <Box>
                            <Text align='center' font='bold'>Үнэлгээ</Text>
                            <Text align='center' color='gray'>{novel.rating}</Text>
                        </Box>
                    </Box>
                    <Box direction='row' pY={12} pX={12} flex={1} style={{ flexWrap: 'wrap' }}>
                        {
                            novel.tags.map(tag => (
                                <Box pY={3} pX={3}>
                                    <TouchableOpacity>
                                        <Box pY={5} pX={5} bg='waterBlue' bR={5}>
                                            <Text size={12} align='center'>
                                                {tag.title}
                                            </Text>
                                        </Box>
                                    </TouchableOpacity>
                                </Box>
                            ))
                        }
                    </Box>
                    <Box pX={12}>
                        <Text h2>Тайлбар</Text>
                        <Text align='justify'>{novel.description}</Text>
                    </Box>
                    {/* <Box align='center' pY={12}>
                        <Button title='Унших'  />
                    </Box> */}
                    <Box pY={12} pX={12}>
                        <TouchableOpacity>
                            <Box bg='blue' pY={12} pX={12}>
                                <Text align='center' color='white'>Унших</Text>
                            </Box>
                        </TouchableOpacity>
                    </Box>
                </Box>
            </ScrollView>
        </Box>
    )
}

export default NovelDetail