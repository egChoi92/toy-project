import Image from 'next/image';

export default function CardItem() {
    return (
        <li className="overflow-hidden border border-gray-1 rounded-xl shadow-gray">
            <div className="thumbnail relative">
                <Image
                    src="https://jpassets.jobplanet.co.kr/production/uploads/job/posting_cover_image/file/74551/cropped_medium_cropped_medium_%EC%9D%B4%EC%82%BC%EC%98%A4%EA%B5%AC.png"
                    width={294}
                    height={180}
                    alt=""
                />
                <button
                    type="button"
                    className="bookmark absolute top-4 right-4 "
                >
                    <Image
                        src="/images/bookmark_false.png"
                        width={28}
                        height={28}
                        alt=""
                    />
                </button>
            </div>
            <div className="p-5 py-2.5">
                <strong className="text-xl leading-150% font-bold text-gray-3">
                    해외사업팀 팀원
                </strong>
                <p className="overflow-hidden whitespace-nowrap text-xs leading-150% text-gray-2 text-ellipsis">
                    22년 연매출 600억 달성, 창립후 4년간 1,000% 성장
                </p>
                <div className="my-2.5 py-3 border-y border-gray-1">
                    <div className="flex items-center flex-wrap">
                        <div className="flex items-center w-6 h-6 mr-2 border border-gray-1 rounded-2sm">
                            <Image
                                src="https://jpassets.jobplanet.co.kr/production/uploads/company/logo/373169/thumb_230209_%EC%9D%B4%EC%82%BC%EC%98%A4%EA%B5%AC%20%EB%A1%9C%EA%B3%A0.png"
                                width={24}
                                height={24}
                                alt=""
                            />
                        </div>
                        <strong className="mr-2 leading-150% font-bold text-gray-3">
                            (주)이삼오구
                        </strong>
                        <div className="flex items-center">
                            <div className="mr-1">
                                <Image
                                    src="/images/icon_star.png"
                                    width={14}
                                    height={14}
                                    alt=""
                                />
                            </div>
                            <div className="mr-1 leading-150% font-bold">
                                3.6
                            </div>
                            <div className="leading-150% text-gray-2">(50)</div>
                        </div>
                    </div>
                    <p className="mt-2 text-sm leading-150% text-gray-2">
                        아침/점심 제공, 반반차 사용
                    </p>
                </div>
                <p className="flex items-center text-sm leading-150% font-bold text-gray-3">
                    <Image
                        className="mr-2"
                        src="/images/icon_won.png"
                        width={14.656}
                        height={14.672}
                        alt=""
                    />
                    취업 축하금: 200만원
                </p>
            </div>
        </li>
    );
}
