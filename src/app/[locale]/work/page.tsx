import { Flex, Heading, SmartImage, Text } from '@/once-ui/components';
import { renderContent } from '@/app/resources';
import { useTranslations } from 'next-intl';

export default function WorkPage({ params: { locale } }: { params: { locale: string } }) {
    const t = useTranslations();
    const { person, about } = renderContent(t);

    const experiences = about.work.experiences as {
        company: string;
        timeframe: string;
        role: string;
        achievements: string[];
        images: { src: string; alt: string; width: number; height: number }[];
        link: string; // Se mantiene el enlace dinámico
    }[];

    return (
        <Flex
            fillWidth
            maxWidth="m"
            direction="column"
            gap="32"
        >
            <Flex direction="column" align="center" style={{ paddingBottom: '32px' }}>
                <Heading
                    variant="display-strong-l"
                    style={{ fontSize: '38px' }}
                >
                    Jose's Work Experience
                </Heading>
                <Text
                    variant="body-default-m"
                    onBackground="neutral-medium"
                    style={{
                        fontSize: '20px',
                        marginTop: '16px',
                    }}
                >
                    University project's
                </Text>
            </Flex>

            {experiences.map((experience, index) => (
                <Flex
                    key={index}
                    fillWidth
                    direction="column"
                    gap="24"
                    style={{
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        padding: '16px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Heading as="h2" variant="heading-strong-l">
                        {experience.company}
                    </Heading>
                    <Text variant="body-default-m" onBackground="brand-weak">
                        {experience.role} {experience.timeframe && `(${experience.timeframe})`}
                    </Text>
                    <Flex as="ul" direction="column" gap="8">
                        {experience.achievements.map((achievement, index) => (
                            <Text as="li" key={index} variant="body-default-m">
                                {achievement}
                            </Text>
                        ))}
                    </Flex>
                    {experience.images.length > 0 && (
                        <Flex
                            fillWidth
                            paddingTop="m"
                            wrap
                            gap="16"
                        >
                            {experience.images.map((image, index) => (
                                <Flex
                                    key={index}
                                    border="neutral-medium"
                                    borderStyle="solid-1"
                                    radius="m"
                                    minWidth={image.width}
                                    height={image.height}
                                >
                                    <SmartImage
                                        enlarge
                                        radius="m"
                                        sizes={image.width.toString()}
                                        alt={image.alt}
                                        src={image.src}  // Imagen original
                                    />
                                </Flex>
                            ))}
                        </Flex>
                    )}
                    {/* Aquí está el botón "Learn More" con enlace dinámico */}
                    <Flex
                        style={{
                            justifyContent: 'center',
                            marginTop: '16px',
                        }}
                    >
                        <a
                            href={experience.link}  // Usamos el enlace dinámico
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                backgroundColor: '#007BFF',
                                color: 'white',
                                borderRadius: '4px',
                                padding: '8px 16px',
                                textDecoration: 'none',
                                display: 'inline-block',
                            }}
                        >
                            Learn More
                        </a>
                    </Flex>
                </Flex>
            ))}
        </Flex>
    );
}

