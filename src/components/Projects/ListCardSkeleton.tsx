import React from "react";
import { View } from "react-native";
import { styles } from "../../styles/projects";
import { Skeleton } from "moti/skeleton";
import { SkeletonProps } from "../../core/SkeletonProps";

export default function ListCardSkeleton() {

    return (

        <View>

            {
                Array.from({ length: 14 }, (_, index) => (

                    <View key={index} style={styles.cardWrapper}>
                      <View style={styles.card}>
                        <Skeleton height={42} width={42} radius={12} {...SkeletonProps} />
                        <View style={styles.cardBody}>
                            <View style={{marginBottom: 8}}>
                                <Skeleton height={18} width={'80%'} {...SkeletonProps} />
                            </View>
                            <View>
                                <Skeleton height={14} width={'60%'} {...SkeletonProps} />
                            </View>
                        </View>
                      </View>
                    </View>

                ))
            }

        </View>

    );

}