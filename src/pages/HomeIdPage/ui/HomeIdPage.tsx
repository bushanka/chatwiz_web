import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import File from '@/shared/assets/icons/File.svg';
import Settings from '@/shared/assets/icons/Settings.svg';
import Send from '@/shared/assets/icons/Send.svg';
import { Typography } from '@/shared/ui/Text';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { Typewriter } from '@/shared/ui/Typewriter';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useChatQuery, useClearChatMutation, useSendQuestionMutation } from '@/entities/Chats';
import { useNotification } from '@/shared/lib/hooks/useNotification/useNotification';
import { Tooltip } from '@/shared/ui/Tooltip/Tooltip';
import { Dropdown } from '@/shared/ui/Dropdown';
import { redirectToWebsite } from '@/shared/lib/redirectToWebsite/redirectToWebsite';

import cls from './HomeIdPage.module.scss';

const HomeIdPage = () => {
    const { t } = useTranslation('');
    const { id } = useParams<{ id: string }>();
    const chatRef:  MutableRefObject<HTMLDivElement | null> = useRef(null);
    const [question, setQuestion] = useState('');

    const { data: chat, isLoading: chatLoading } = useChatQuery(+id!, {
        skip: !id
    });
    const [clearChat, clearChatResult] = useClearChatMutation();
    const [sendQuestion, sendQuestionResult] = useSendQuestionMutation();

    useEffect(() => {
        chatRef.current?.scrollIntoView(false);
    }, [])

    useEffect(() => {
        if (sendQuestionResult.isSuccess) {
            setQuestion('');
        }
    }, [sendQuestionResult])

    useNotification({
        isLoading: {
            active: sendQuestionResult.isLoading,
        },
        isError: {
            active: sendQuestionResult.isError,
            text: t('Ошибка отправки смс'),
        },
    });

    useNotification({
        isSuccess: {
            active: clearChatResult.isSuccess,
        },
        isError: {
            active: clearChatResult.isError,
            text: t('Ошибка очистки чата'),
        },
    });

    const handleEnterDown = (e: any) => {
        if (e.keyCode === 13 && id && question && !sendQuestionResult.isLoading) {
            sendQuestion({
                chat_id: +id,
                question,
            })
        }
    };

    return (
        <VStack max fullHeight gap="8">
            <HStack max justify="between" align='start' className={cls.header}>
                <HStack gap="8">
                    <Icon Svg={File} height={20} width={20} />
                    <Typography text={chat?.chat_name} size="l" bold />
                </HStack>
                <HStack gap="16" className={cls.changeFlex}>
                    <HStack gap="16" max fullHeight>
                        <Tooltip className={cls.tooltip} text={t('Будет доступно в ближайшее время')}>
                            <Button
                                color="grey"
                                onClick={() => {}}
                                nowrap
                                fullWidth
                                fullHeight
                                disabled
                            >
                                <Typography text={t('Краткое содержание')} />
                            </Button>
                        </Tooltip>
                        <Button
                            color="grey"
                            disabled={!id}
                            onClick={() => clearChat(+id!)}
                            fullWidth
                            fullHeight
                        >
                            <Typography text={t('Очистить')} />
                        </Button>
                    </HStack>
                    <HStack gap="16" max fullHeight>
                        {/* <Button
                            color="grey"
                            onClick={() => {}}
                            fullWidth
                            fullHeight
                        >
                            <Icon Svg={ShareIcon} />
                        </Button> */}
                        <Dropdown
                            trigger={(
                                <div className={cls.settings}>
                                    <Icon Svg={Settings} className={cls.settingsIcon} />
                                </div>
                            )}
                            items={[
                                {
                                    content: t('Открыть файл'),
                                    onClick: () => redirectToWebsite('https://google.com'), // TODO
                                },
                            ]}
                            direction="bottom left"
                        />
                    </HStack>
                </HStack>
            </HStack>
            <HStack max fullHeight>
                <div className={cls.pdfViewer}>
                    {chat?.context_type === "pdf" && chat?.url && (
                        <embed
                            className={cls.pdf}
                            type="application/pdf"
                            src={chat?.url}
                        />
                    )}
                    {chat?.context_type === "video" && chat?.url && (
                        <HStack max justify="center">
                            <iframe className={cls.iframe} src={chat?.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </HStack>
                    )}
                </div>
                <VStack justify="between" gap="8" className={cls.chatWrapper}>
                    <div className={cls.chat}>
                        {!!chat?.message_history?.chat && chat.message_history.chat.map(([from, sms], index) => (
                            <HStack key={index} max justify={from === 'human' ? "end" : "start"}>
                                <Card
                                    ref={index === chat?.message_history!.chat!.length - 1 ? chatRef : undefined}
                                    className={cls.smsCard} variant={from === 'human' ? "green" : "greyOne"}
                                >
                                    {(index === chat?.message_history!.chat!.length - 1) && from === "ai" ? (
                                        <Typewriter text={sms} delay={7}  />
                                    ) : <Typography text={sms} variant={from === 'human' ? "white" : "black"} />}
                                </Card>
                            </HStack>
                        ))}
                    </div>
                    <HStack gap="16" max className={cls.inputWrapper}>
                        <Input
                            placeholder={t('Задай мне вопрос о документе...')}
                            value={sendQuestionResult.isLoading ? '' : question}
                            onKeyDown={handleEnterDown}
                            onChange={(value) => setQuestion(value)}
                        />
                        <HStack gap="8">
                            <Button
                                fullHeight
                                color="green"
                                disabled={!question || !id || sendQuestionResult.isLoading}
                                onClick={() => sendQuestion({
                                    chat_id: +id!,
                                    question,
                                })}
                            >
                                <Icon Svg={Send} className={cls.send} />
                            </Button>
                        </HStack>
                    </HStack>
                </VStack>
            </HStack>
        </VStack>
    );
};

export default HomeIdPage;
