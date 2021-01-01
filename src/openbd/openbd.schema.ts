/* eslint-disable */
// To parse this data:
//
//   import { Convert, OpenbdSchema } from "./file";
//
//   const openbdSchema = Convert.toOpenbdSchema(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface OpenbdSchema {
  /**
   * 版元独自書誌
   */
  hanmoto?: Hanmoto;
  onix?: Onix;
  /**
   * 書誌の概要
   */
  summary?: Summary;
}

/**
 * 版元独自書誌
 */
export interface Hanmoto {
  /**
   * 著者補足情報
   */
  author?: Author[];
  /**
   * 別称資料?
   */
  bessoushiryou?: string;
  /**
   * 不明
   */
  bikoujpo?: string;
  /**
   * TRC用備考
   */
  bikoutrc?: string;
  /**
   * 最終作成日
   */
  datecreated?: Date;
  /**
   * 重版予定日
   */
  datejuuhanyotei?: string;
  /**
   * 公開日
   */
  datekoukai?: Date;
  /**
   * 最終更新日
   */
  datemodified: Date;
  /**
   * 出版日
   */
  dateshuppan?: string;
  /**
   * 絶版日
   */
  datezeppan?: string;
  /**
   * 読者書き込み
   */
  dokushakakikomi?: string;
  /**
   * 読者書き込みページ数
   */
  dokushakakikomipagesuu?: number;
  /**
   * 付録コード
   */
  furoku?: number;
  /**
   * 付録その他
   */
  furokusonota?: string;
  /**
   * 月号・号数
   */
  gatsugougousuu?: string;
  /**
   * TRC用ジャンルコード
   */
  genrecodetrc?: number;
  /**
   * TRC用児童ジャンルコード
   */
  genrecodetrcjidou?: number;
  /**
   * 原書名
   */
  genshomei?: string;
  /**
   * 版
   */
  han?: string;
  /**
   * 版元情報
   */
  hanmotoinfo?: Hanmotoinfo;
  /**
   * 版元からひとこと
   */
  hanmotokarahitokoto?: string;
  /**
   * 試し読みフラグ
   */
  hastameshiyomi?: boolean;
  /**
   * 発売元
   */
  hatsubai?: string;
  /**
   * 発売元よみ
   */
  hatsubaiyomi?: string;
  /**
   * 受賞情報
   */
  jushoujouhou?: string;
  /**
   * 重版情報
   */
  jyuhan?: Jyuhan[];
  /**
   * 105文字程度の解説
   */
  kaisetsu105w?: string;
  /**
   * 刊行形態
   */
  kankoukeitai?: string;
  /**
   * 関連書
   */
  kanrensho?: string;
  /**
   * 関連書ISBN
   */
  kanrenshoisbn?: string;
  /**
   * 販売区分
   */
  kubunhanbai?: boolean;
  /**
   * ラノベフラグ
   */
  lanove?: boolean;
  /**
   * まえがきなど
   */
  maegakinado?: string;
  /**
   * NDC(日本十進分類法)
   */
  ndccode?: string;
  /**
   * 帯の内容
   */
  obinaiyou?: string;
  /**
   * 書評情報
   */
  reviews?: Review[];
  /**
   * ルビの有無
   */
  rubynoumu?: boolean;
  /**
   * 類書・競合書
   */
  ruishokyougousho?: string;
  /**
   * その他の特記事項
   */
  sonotatokkijikou?: string;
  /**
   * 不明
   */
  storelink?: string;
  /**
   * 本の綴じ方
   */
  toji?: string;
  /**
   * 追記
   */
  tsuiki?: string;
  /**
   * 在庫ステータス
   */
  zaiko?: number;
  /**
   * 雑誌コード
   */
  zasshicode?: string;
}

export interface Author {
  /**
   * 独自区分
   */
  dokujikubun: string;
  /**
   * リストの番号
   */
  listseq: number;
}

/**
 * 版元情報
 */
export interface Hanmotoinfo {
  /**
   * Facebookアドレス
   */
  facebook?: string;
  /**
   * 名前
   */
  name?: string;
  /**
   * Twitterアドレス
   */
  twitter?: string;
  /**
   * URL
   */
  url?: string;
  /**
   * よみ
   */
  yomi?: string;
}

export interface Jyuhan {
  /**
   * コメント
   */
  comment?: string;
  /**
   * 更新日時
   */
  ctime?: Date;
  /**
   * 重版日
   */
  date: Date;
  /**
   * 刷数
   */
  suri?: number;
}

export interface Review {
  /**
   * 書評掲載日
   */
  appearance?: string;
  /**
   * 朝刊・夕刊
   */
  choyukan?: string;
  /**
   * 号
   */
  gou?: string;
  /**
   * 版
   */
  han?: string;
  /**
   * 区分ID
   */
  kubun_id?: number;
  /**
   * リンク
   */
  link?: string;
  /**
   * 投稿ユーザー
   */
  post_user?: string;
  /**
   * 評者
   */
  reviewer?: string;
  /**
   * 情報源
   */
  source?: string;
  /**
   * 情報源ID
   */
  source_id?: number;
}

export interface Onix {
  /**
   * 商品の付帯項目
   */
  CollateralDetail?: CollateralDetail;
  /**
   * 商品に関する情報
   */
  DescriptiveDetail?: DescriptiveDetail;
  /**
   * 削除フラグ
   */
  NotificationType?: string;
  /**
   * 識別情報(ISBN)
   */
  ProductIdentifier?: OnixProductIdentifier;
  /**
   * 市場における商品の出版状況、供給等
   */
  ProductSupply?: ProductSupply;
  /**
   * 出版社に関する情報
   */
  PublishingDetail?: PublishingDetail;
  /**
   * ISBN（13桁）
   */
  RecordReference?: string;
  /**
   * 旧版商品ISBN
   */
  RelatedMaterial?: RelatedMaterial[];
}

/**
 * 商品の付帯項目
 */
export interface CollateralDetail {
  /**
   * ONIXデータを補助する販促情報や追加情報などのデジタルデータ
   */
  SupportingResource?: SupportingResource[];
  /**
   * 内容紹介
   */
  TextContent?: TextContent[];
}

export interface SupportingResource {
  /**
   * [01に固定]
   */
  ContentAudience?: string;
  /**
   * 種類[01書影07商品イメージ]
   */
  ResourceContentType?: string;
  /**
   * [03静止画に固定]
   */
  ResourceMode?: string;
  /**
   * 補助リソースのバージョン
   */
  ResourceVersion?: ResourceVersion[];
}

export interface ResourceVersion {
  /**
   * [02に固定]
   */
  ResourceForm?: string;
  /**
   * フルURI
   */
  ResourceLink?: string;
  /**
   * ファイル名とファイル形式
   */
  ResourceVersionFeature?: any[];
}

export interface TextContent {
  /**
   * 意図されている読者
   */
  ContentAudience?: string;
  /**
   * テキスト
   */
  Text?: string;
  /**
   * 種類コード
   */
  TextType?: string;
}

/**
 * 商品に関する情報
 */
export interface DescriptiveDetail {
  /**
   * 商品の対象読者を示す方法
   */
  Audience?: Audience[];
  /**
   * シリーズに関する情報
   */
  Collection?: Collection;
  /**
   * 商品の著者情報
   */
  Contributor?: Contributor[];
  /**
   * 商品に関連する（数値的）範囲、程度など
   */
  Extent?: Extent[];
  /**
   * 表記に利用する言語
   */
  Language?: Language[];
  /**
   * タテ・ヨコの実寸
   */
  Measure?: Measure[];
  /**
   * セット商品分売可否
   */
  ProductComposition?: string;
  /**
   * 判型
   */
  ProductForm?: string;
  /**
   * 判型の詳細コード
   */
  ProductFormDetail?: string;
  /**
   * 付録の有無
   */
  ProductPart?: ProductPart[];
  /**
   * 商品の主題、テーマ、カテゴリなど
   */
  Subject?: Subject[];
  /**
   * 商品の「書名」を設定
   */
  TitleDetail?: DescriptiveDetailTitleDetail;
}

export interface Audience {
  /**
   * 読者コード種類
   */
  AudienceCodeType?: string;
  /**
   * 読者コード
   */
  AudienceCodeValue?: string;
}

/**
 * シリーズに関する情報
 */
export interface Collection {
  /**
   * 「配本回数」について
   */
  CollectionSequence?: CollectionSequence;
  /**
   * 種類コード[10に固定]
   */
  CollectionType?: string;
  /**
   * シリーズタイトル
   */
  TitleDetail?: CollectionTitleDetail;
}

/**
 * 「配本回数」について
 */
export interface CollectionSequence {
  /**
   * 配本回数
   */
  CollectionSequenceNumber?: string;
  /**
   * 配本回数コード[01:完結フラグ,03:配本回数]
   */
  CollectionSequenceType?: string;
  /**
   * コードが完結フラグの場合、完結フラグと記入する
   */
  CollectionSequenceTypeName?: string;
}

/**
 * シリーズタイトル
 */
export interface CollectionTitleDetail {
  /**
   * シリーズ・レーベルの名前
   */
  TitleElement?: TitleElementElement[];
  /**
   * タイトルの種類[01に固定]
   */
  TitleType?: string;
}

export interface TitleElementElement {
  /**
   * シリーズの巻次
   */
  PartNumber?: string;
  /**
   * シリーズの種類
   */
  TitleElementLevel?: string;
  /**
   * シリーズ名
   */
  TitleText?: PurpleTitleText;
}

/**
 * シリーズ名
 */
export interface PurpleTitleText {
  /**
   * 読み仮名
   */
  collationkey?: string;
  /**
   * タイトル
   */
  content?: string;
}

export interface Contributor {
  /**
   * 著者略歴
   */
  BiographicalNote?: string;
  /**
   * 著者区分
   */
  ContributorRole?: string[];
  /**
   * 著者名
   */
  PersonName?: PersonName;
  /**
   * 表示順序
   */
  SequenceNumber?: string;
}

/**
 * 著者名
 */
export interface PersonName {
  /**
   * 読み仮名
   */
  collationkey?: string;
  /**
   * タイトル
   */
  content?: string;
}

export interface Extent {
  /**
   * 数値の種類[11はページ数]
   */
  ExtentType?: string;
  /**
   * 単位[03ページに固定]
   */
  ExtentUnit?: string;
  /**
   * 値
   */
  ExtentValue?: string;
}

export interface Language {
  /**
   * 国コード
   */
  CountryCode?: string;
  /**
   * 価格の種類
   */
  LanguageCode?: string;
  /**
   * 言語コード
   */
  LanguageRole?: string;
}

export interface Measure {
  /**
   * 値
   */
  Measurement?: string;
  /**
   * 数値の種類[01縦/02横]
   */
  MeasureType?: string;
  /**
   * 単位[mmに固定]
   */
  MeasureUnitCode?: string;
}

export interface ProductPart {
  /**
   * 付録の数量[1に固定]
   */
  NumberOfItemsOfThisForm?: string;
  /**
   * 付録コード[00に固定]
   */
  ProductForm?: string;
  /**
   * 付録の内容
   */
  ProductFormDescription?: string;
}

export interface Subject {
  /**
   * メーンとなるSubjectのカテゴリ
   */
  MainSubject?: string;
  /**
   * 78 or 79 の場合に、「Cコード」または「ジャンルコード」
   */
  SubjectCode?: string;
  /**
   * キーワード
   */
  SubjectHeadingText?: string;
  /**
   * カテゴリ
   */
  SubjectSchemeIdentifier?: string;
}

/**
 * 商品の「書名」を設定
 */
export interface DescriptiveDetailTitleDetail {
  /**
   * タイトルの要素
   */
  TitleElement?: PurpleTitleElement;
  /**
   * タイトルの種類[01に固定]
   */
  TitleType?: string;
}

/**
 * タイトルの要素
 */
export interface PurpleTitleElement {
  /**
   * シリーズ巻次:<TitleElementLevel>毎に該当する巻次があれば、文字列として記入する
   */
  PartNumber?: string;
  /**
   * サブタイトル
   */
  Subtitle?: Subtitle;
  /**
   * タイトルのレベル[01に固定]
   */
  TitleElementLevel?: string;
  /**
   * 書名
   */
  TitleText?: FluffyTitleText;
}

/**
 * サブタイトル
 */
export interface Subtitle {
  /**
   * 読み仮名
   */
  collationkey?: string;
  /**
   * 書名
   */
  content?: string;
}

/**
 * 書名
 */
export interface FluffyTitleText {
  /**
   * 読み仮名
   */
  collationkey?: string;
  /**
   * 書名
   */
  content?: string;
}

/**
 * 識別情報(ISBN)
 */
export interface OnixProductIdentifier {
  /**
   * ISBN（13桁）
   */
  IDValue?: string;
  /**
   * IDの種類[ISBN固定]
   */
  ProductIDType?: string;
}

/**
 * 市場における商品の出版状況、供給等
 */
export interface ProductSupply {
  /**
   * 扱い社に関する情報
   */
  MarketPublishingDetail?: MarketPublishingDetail;
  /**
   * 商品のアベイラビリテイ（入手可能性）や価格、その他の供給状況
   */
  SupplyDetail?: SupplyDetail;
}

/**
 * 扱い社に関する情報
 */
export interface MarketPublishingDetail {
  /**
   * 00:Unspecifiedを記入する
   */
  MarketPublishingStatus?: string;
  /**
   * 取次会社取り扱いと配本の有無について
   */
  MarketPublishingStatusNote?: string;
  /**
   * 扱い社
   */
  PublisherRepresentative?: PublisherRepresentative[];
}

export interface PublisherRepresentative {
  /**
   * 扱い社コード
   */
  AgentIdentifier?: AgentIdentifier[];
  /**
   * 扱い社名
   */
  AgentName?: string;
  /**
   * 08扱い社に固定
   */
  AgentRole?: string;
}

export interface AgentIdentifier {
  /**
   * 01:独自コードに固定
   */
  AgentIDType?: string;
  /**
   * コードの名前
   */
  IDTypeName?: string;
  /**
   * コード
   */
  IDValue?: string;
}

/**
 * 商品のアベイラビリテイ（入手可能性）や価格、その他の供給状況
 */
export interface SupplyDetail {
  /**
   * 価格（単価）について
   */
  Price?: Price[];
  /**
   * 「近刊情報センター」では、99に固定
   */
  ProductAvailability?: string;
  /**
   * 返品条件について
   */
  ReturnsConditions?: ReturnsConditions;
}

export interface Price {
  /**
   * 通貨
   */
  CurrencyCode?: string;
  /**
   * 価格
   */
  PriceAmount?: string;
  /**
   * 特価期限
   */
  PriceDate?: PriceDate[];
  /**
   * 価格タイプ
   */
  PriceType?: string;
}

export interface PriceDate {
  /**
   * 日付
   */
  Date?: string;
  /**
   * 価格
   */
  Price?: string;
  /**
   * 価格の種類
   */
  PriceDateRole?: string;
}

/**
 * 返品条件について
 */
export interface ReturnsConditions {
  /**
   * 条件コード
   */
  ReturnsCode?: string;
  /**
   * 「ONIX返品条件コード」 に固定
   */
  ReturnsCodeType?: string;
}

/**
 * 出版社に関する情報
 */
export interface PublishingDetail {
  /**
   * 「発行元出版社」に関する情報
   */
  Imprint?: Imprint;
  /**
   * 「発行元出版社」と異なる場合、「発売元出版社」についての情報
   */
  Publisher?: Publisher;
  /**
   * 商品の出版に関する日付情報
   */
  PublishingDate?: PublishingDate[];
  /**
   * 長期品切情報:長期品切れの場合、08:Inactiveを記入
   */
  PublishingStatus?: string;
}

/**
 * 「発行元出版社」に関する情報
 */
export interface Imprint {
  /**
   * 「発行元出版社」コード
   */
  ImprintIdentifier?: ImprintIdentifier[];
  /**
   * 「発行元出版社」名
   */
  ImprintName?: string;
}

export interface ImprintIdentifier {
  /**
   * ID
   */
  IDValue?: string;
  /**
   * IDタイプ
   */
  ImprintIDType?: string;
}

/**
 * 「発行元出版社」と異なる場合、「発売元出版社」についての情報
 */
export interface Publisher {
  /**
   * 「発売元出版社」コード
   */
  PublisherIdentifier?: PublisherIdentifier[];
  /**
   * 「発売元出版社」名
   */
  PublisherName?: string;
  /**
   * Publisher 【出版社】 に固定
   */
  PublishingRole?: string;
}

export interface PublisherIdentifier {
  /**
   * ID
   */
  IDValue?: string;
  /**
   * IDタイプ
   */
  PublisherIDType?: string;
}

export interface PublishingDate {
  /**
   * 発売日
   */
  Date?: string;
  /**
   * 発売日の種類
   */
  PublishingDateRole?: string;
}

export interface RelatedMaterial {
  /**
   * 旧版の商品が存在する場合にその商品のISBNを設定する。
   */
  RelatedProduct?: RelatedProduct;
}

/**
 * 旧版の商品が存在する場合にその商品のISBNを設定する。
 */
export interface RelatedProduct {
  ProductIdentifier?: RelatedProductProductIdentifier;
  /**
   * コード 03：Replacesに固定する
   */
  ProductRelationCode?: string;
}

export interface RelatedProductProductIdentifier {
  /**
   * ISBN（13桁）
   */
  IDValue?: string;
  /**
   * IDの種類[ISBN固定]
   */
  ProductIDType?: string;
}

/**
 * 書誌の概要
 */
export interface Summary {
  /**
   * 著者名
   */
  author: string;
  /**
   * 書影URL
   */
  cover: string;
  /**
   * ISBN
   */
  isbn: string;
  /**
   * 出版年月
   */
  pubdate: string;
  /**
   * 出版者
   */
  publisher: string;
  /**
   * シリーズ名
   */
  series: string;
  /**
   * 書名
   */
  title: string;
  /**
   * 巻号
   */
  volume: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toOpenbdSchema(json: string): OpenbdSchema {
    return cast(JSON.parse(json), r("OpenbdSchema"));
  }

  public static openbdSchemaToJson(value: OpenbdSchema): string {
    return JSON.stringify(uncast(value, r("OpenbdSchema")), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any = ""): never {
  if (key) {
    throw Error(
      `Invalid value for key "${key}". Expected type ${JSON.stringify(
        typ
      )} but got ${JSON.stringify(val)}`
    );
  }
  throw Error(
    `Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`
  );
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ""): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val, key);
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length;
    for (let i = 0; i < l; i++) {
      const typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) {}
    }
    return invalidValue(typs, val);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(cases, val);
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue("array", val);
    return val.map((el) => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue("Date", val);
    }
    return d;
  }

  function transformObject(
    props: { [k: string]: any },
    additional: any,
    val: any
  ): any {
    if (val === null || typeof val !== "object" || Array.isArray(val)) {
      return invalidValue("object", val);
    }
    const result: any = {};
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key)
        ? val[key]
        : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, prop.key);
    });
    Object.getOwnPropertyNames(val).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key);
      }
    });
    return result;
  }

  if (typ === "any") return val;
  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val);
  }
  if (typ === false) return invalidValue(typ, val);
  while (typeof typ === "object" && typ.ref !== undefined) {
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === "object") {
    return typ.hasOwnProperty("unionMembers")
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty("arrayItems")
      ? transformArray(typ.arrayItems, val)
      : typ.hasOwnProperty("props")
      ? transformObject(getProps(typ), typ.additional, val)
      : invalidValue(typ, val);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== "number") return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  OpenbdSchema: o(
    [
      { json: "hanmoto", js: "hanmoto", typ: u(undefined, r("Hanmoto")) },
      { json: "onix", js: "onix", typ: u(undefined, r("Onix")) },
      { json: "summary", js: "summary", typ: u(undefined, r("Summary")) },
    ],
    false
  ),
  Hanmoto: o(
    [
      { json: "author", js: "author", typ: u(undefined, a(r("Author"))) },
      { json: "bessoushiryou", js: "bessoushiryou", typ: u(undefined, "") },
      { json: "bikoujpo", js: "bikoujpo", typ: u(undefined, "") },
      { json: "bikoutrc", js: "bikoutrc", typ: u(undefined, "") },
      { json: "datecreated", js: "datecreated", typ: u(undefined, Date) },
      { json: "datejuuhanyotei", js: "datejuuhanyotei", typ: u(undefined, "") },
      { json: "datekoukai", js: "datekoukai", typ: u(undefined, Date) },
      { json: "datemodified", js: "datemodified", typ: Date },
      { json: "dateshuppan", js: "dateshuppan", typ: u(undefined, "") },
      { json: "datezeppan", js: "datezeppan", typ: u(undefined, "") },
      { json: "dokushakakikomi", js: "dokushakakikomi", typ: u(undefined, "") },
      {
        json: "dokushakakikomipagesuu",
        js: "dokushakakikomipagesuu",
        typ: u(undefined, 3.14),
      },
      { json: "furoku", js: "furoku", typ: u(undefined, 3.14) },
      { json: "furokusonota", js: "furokusonota", typ: u(undefined, "") },
      { json: "gatsugougousuu", js: "gatsugougousuu", typ: u(undefined, "") },
      { json: "genrecodetrc", js: "genrecodetrc", typ: u(undefined, 3.14) },
      {
        json: "genrecodetrcjidou",
        js: "genrecodetrcjidou",
        typ: u(undefined, 3.14),
      },
      { json: "genshomei", js: "genshomei", typ: u(undefined, "") },
      { json: "han", js: "han", typ: u(undefined, "") },
      {
        json: "hanmotoinfo",
        js: "hanmotoinfo",
        typ: u(undefined, r("Hanmotoinfo")),
      },
      {
        json: "hanmotokarahitokoto",
        js: "hanmotokarahitokoto",
        typ: u(undefined, ""),
      },
      { json: "hastameshiyomi", js: "hastameshiyomi", typ: u(undefined, true) },
      { json: "hatsubai", js: "hatsubai", typ: u(undefined, "") },
      { json: "hatsubaiyomi", js: "hatsubaiyomi", typ: u(undefined, "") },
      { json: "jushoujouhou", js: "jushoujouhou", typ: u(undefined, "") },
      { json: "jyuhan", js: "jyuhan", typ: u(undefined, a(r("Jyuhan"))) },
      { json: "kaisetsu105w", js: "kaisetsu105w", typ: u(undefined, "") },
      { json: "kankoukeitai", js: "kankoukeitai", typ: u(undefined, "") },
      { json: "kanrensho", js: "kanrensho", typ: u(undefined, "") },
      { json: "kanrenshoisbn", js: "kanrenshoisbn", typ: u(undefined, "") },
      { json: "kubunhanbai", js: "kubunhanbai", typ: u(undefined, true) },
      { json: "lanove", js: "lanove", typ: u(undefined, true) },
      { json: "maegakinado", js: "maegakinado", typ: u(undefined, "") },
      { json: "ndccode", js: "ndccode", typ: u(undefined, "") },
      { json: "obinaiyou", js: "obinaiyou", typ: u(undefined, "") },
      { json: "reviews", js: "reviews", typ: u(undefined, a(r("Review"))) },
      { json: "rubynoumu", js: "rubynoumu", typ: u(undefined, true) },
      {
        json: "ruishokyougousho",
        js: "ruishokyougousho",
        typ: u(undefined, ""),
      },
      {
        json: "sonotatokkijikou",
        js: "sonotatokkijikou",
        typ: u(undefined, ""),
      },
      { json: "storelink", js: "storelink", typ: u(undefined, "") },
      { json: "toji", js: "toji", typ: u(undefined, "") },
      { json: "tsuiki", js: "tsuiki", typ: u(undefined, "") },
      { json: "zaiko", js: "zaiko", typ: u(undefined, 3.14) },
      { json: "zasshicode", js: "zasshicode", typ: u(undefined, "") },
    ],
    false
  ),
  Author: o(
    [
      { json: "dokujikubun", js: "dokujikubun", typ: "" },
      { json: "listseq", js: "listseq", typ: 3.14 },
    ],
    false
  ),
  Hanmotoinfo: o(
    [
      { json: "facebook", js: "facebook", typ: u(undefined, "") },
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "twitter", js: "twitter", typ: u(undefined, "") },
      { json: "url", js: "url", typ: u(undefined, "") },
      { json: "yomi", js: "yomi", typ: u(undefined, "") },
    ],
    false
  ),
  Jyuhan: o(
    [
      { json: "comment", js: "comment", typ: u(undefined, "") },
      { json: "ctime", js: "ctime", typ: u(undefined, Date) },
      { json: "date", js: "date", typ: Date },
      { json: "suri", js: "suri", typ: u(undefined, 3.14) },
    ],
    false
  ),
  Review: o(
    [
      { json: "appearance", js: "appearance", typ: u(undefined, "") },
      { json: "choyukan", js: "choyukan", typ: u(undefined, "") },
      { json: "gou", js: "gou", typ: u(undefined, "") },
      { json: "han", js: "han", typ: u(undefined, "") },
      { json: "kubun_id", js: "kubun_id", typ: u(undefined, 3.14) },
      { json: "link", js: "link", typ: u(undefined, "") },
      { json: "post_user", js: "post_user", typ: u(undefined, "") },
      { json: "reviewer", js: "reviewer", typ: u(undefined, "") },
      { json: "source", js: "source", typ: u(undefined, "") },
      { json: "source_id", js: "source_id", typ: u(undefined, 3.14) },
    ],
    false
  ),
  Onix: o(
    [
      {
        json: "CollateralDetail",
        js: "CollateralDetail",
        typ: u(undefined, r("CollateralDetail")),
      },
      {
        json: "DescriptiveDetail",
        js: "DescriptiveDetail",
        typ: u(undefined, r("DescriptiveDetail")),
      },
      {
        json: "NotificationType",
        js: "NotificationType",
        typ: u(undefined, ""),
      },
      {
        json: "ProductIdentifier",
        js: "ProductIdentifier",
        typ: u(undefined, r("OnixProductIdentifier")),
      },
      {
        json: "ProductSupply",
        js: "ProductSupply",
        typ: u(undefined, r("ProductSupply")),
      },
      {
        json: "PublishingDetail",
        js: "PublishingDetail",
        typ: u(undefined, r("PublishingDetail")),
      },
      { json: "RecordReference", js: "RecordReference", typ: u(undefined, "") },
      {
        json: "RelatedMaterial",
        js: "RelatedMaterial",
        typ: u(undefined, a(r("RelatedMaterial"))),
      },
    ],
    false
  ),
  CollateralDetail: o(
    [
      {
        json: "SupportingResource",
        js: "SupportingResource",
        typ: u(undefined, a(r("SupportingResource"))),
      },
      {
        json: "TextContent",
        js: "TextContent",
        typ: u(undefined, a(r("TextContent"))),
      },
    ],
    false
  ),
  SupportingResource: o(
    [
      { json: "ContentAudience", js: "ContentAudience", typ: u(undefined, "") },
      {
        json: "ResourceContentType",
        js: "ResourceContentType",
        typ: u(undefined, ""),
      },
      { json: "ResourceMode", js: "ResourceMode", typ: u(undefined, "") },
      {
        json: "ResourceVersion",
        js: "ResourceVersion",
        typ: u(undefined, a(r("ResourceVersion"))),
      },
    ],
    false
  ),
  ResourceVersion: o(
    [
      { json: "ResourceForm", js: "ResourceForm", typ: u(undefined, "") },
      { json: "ResourceLink", js: "ResourceLink", typ: u(undefined, "") },
      {
        json: "ResourceVersionFeature",
        js: "ResourceVersionFeature",
        typ: u(undefined, a("any")),
      },
    ],
    false
  ),
  TextContent: o(
    [
      { json: "ContentAudience", js: "ContentAudience", typ: u(undefined, "") },
      { json: "Text", js: "Text", typ: u(undefined, "") },
      { json: "TextType", js: "TextType", typ: u(undefined, "") },
    ],
    false
  ),
  DescriptiveDetail: o(
    [
      { json: "Audience", js: "Audience", typ: u(undefined, a(r("Audience"))) },
      {
        json: "Collection",
        js: "Collection",
        typ: u(undefined, r("Collection")),
      },
      {
        json: "Contributor",
        js: "Contributor",
        typ: u(undefined, a(r("Contributor"))),
      },
      { json: "Extent", js: "Extent", typ: u(undefined, a(r("Extent"))) },
      { json: "Language", js: "Language", typ: u(undefined, a(r("Language"))) },
      { json: "Measure", js: "Measure", typ: u(undefined, a(r("Measure"))) },
      {
        json: "ProductComposition",
        js: "ProductComposition",
        typ: u(undefined, ""),
      },
      { json: "ProductForm", js: "ProductForm", typ: u(undefined, "") },
      {
        json: "ProductFormDetail",
        js: "ProductFormDetail",
        typ: u(undefined, ""),
      },
      {
        json: "ProductPart",
        js: "ProductPart",
        typ: u(undefined, a(r("ProductPart"))),
      },
      { json: "Subject", js: "Subject", typ: u(undefined, a(r("Subject"))) },
      {
        json: "TitleDetail",
        js: "TitleDetail",
        typ: u(undefined, r("DescriptiveDetailTitleDetail")),
      },
    ],
    false
  ),
  Audience: o(
    [
      {
        json: "AudienceCodeType",
        js: "AudienceCodeType",
        typ: u(undefined, ""),
      },
      {
        json: "AudienceCodeValue",
        js: "AudienceCodeValue",
        typ: u(undefined, ""),
      },
    ],
    false
  ),
  Collection: o(
    [
      {
        json: "CollectionSequence",
        js: "CollectionSequence",
        typ: u(undefined, r("CollectionSequence")),
      },
      { json: "CollectionType", js: "CollectionType", typ: u(undefined, "") },
      {
        json: "TitleDetail",
        js: "TitleDetail",
        typ: u(undefined, r("CollectionTitleDetail")),
      },
    ],
    false
  ),
  CollectionSequence: o(
    [
      {
        json: "CollectionSequenceNumber",
        js: "CollectionSequenceNumber",
        typ: u(undefined, ""),
      },
      {
        json: "CollectionSequenceType",
        js: "CollectionSequenceType",
        typ: u(undefined, ""),
      },
      {
        json: "CollectionSequenceTypeName",
        js: "CollectionSequenceTypeName",
        typ: u(undefined, ""),
      },
    ],
    false
  ),
  CollectionTitleDetail: o(
    [
      {
        json: "TitleElement",
        js: "TitleElement",
        typ: u(undefined, a(r("TitleElementElement"))),
      },
      { json: "TitleType", js: "TitleType", typ: u(undefined, "") },
    ],
    false
  ),
  TitleElementElement: o(
    [
      { json: "PartNumber", js: "PartNumber", typ: u(undefined, "") },
      {
        json: "TitleElementLevel",
        js: "TitleElementLevel",
        typ: u(undefined, ""),
      },
      {
        json: "TitleText",
        js: "TitleText",
        typ: u(undefined, r("PurpleTitleText")),
      },
    ],
    false
  ),
  PurpleTitleText: o(
    [
      { json: "collationkey", js: "collationkey", typ: u(undefined, "") },
      { json: "content", js: "content", typ: u(undefined, "") },
    ],
    false
  ),
  Contributor: o(
    [
      {
        json: "BiographicalNote",
        js: "BiographicalNote",
        typ: u(undefined, ""),
      },
      {
        json: "ContributorRole",
        js: "ContributorRole",
        typ: u(undefined, a("")),
      },
      {
        json: "PersonName",
        js: "PersonName",
        typ: u(undefined, r("PersonName")),
      },
      { json: "SequenceNumber", js: "SequenceNumber", typ: u(undefined, "") },
    ],
    false
  ),
  PersonName: o(
    [
      { json: "collationkey", js: "collationkey", typ: u(undefined, "") },
      { json: "content", js: "content", typ: u(undefined, "") },
    ],
    false
  ),
  Extent: o(
    [
      { json: "ExtentType", js: "ExtentType", typ: u(undefined, "") },
      { json: "ExtentUnit", js: "ExtentUnit", typ: u(undefined, "") },
      { json: "ExtentValue", js: "ExtentValue", typ: u(undefined, "") },
    ],
    false
  ),
  Language: o(
    [
      { json: "CountryCode", js: "CountryCode", typ: u(undefined, "") },
      { json: "LanguageCode", js: "LanguageCode", typ: u(undefined, "") },
      { json: "LanguageRole", js: "LanguageRole", typ: u(undefined, "") },
    ],
    false
  ),
  Measure: o(
    [
      { json: "Measurement", js: "Measurement", typ: u(undefined, "") },
      { json: "MeasureType", js: "MeasureType", typ: u(undefined, "") },
      { json: "MeasureUnitCode", js: "MeasureUnitCode", typ: u(undefined, "") },
    ],
    false
  ),
  ProductPart: o(
    [
      {
        json: "NumberOfItemsOfThisForm",
        js: "NumberOfItemsOfThisForm",
        typ: u(undefined, ""),
      },
      { json: "ProductForm", js: "ProductForm", typ: u(undefined, "") },
      {
        json: "ProductFormDescription",
        js: "ProductFormDescription",
        typ: u(undefined, ""),
      },
    ],
    false
  ),
  Subject: o(
    [
      { json: "MainSubject", js: "MainSubject", typ: u(undefined, "") },
      { json: "SubjectCode", js: "SubjectCode", typ: u(undefined, "") },
      {
        json: "SubjectHeadingText",
        js: "SubjectHeadingText",
        typ: u(undefined, ""),
      },
      {
        json: "SubjectSchemeIdentifier",
        js: "SubjectSchemeIdentifier",
        typ: u(undefined, ""),
      },
    ],
    false
  ),
  DescriptiveDetailTitleDetail: o(
    [
      {
        json: "TitleElement",
        js: "TitleElement",
        typ: u(undefined, r("PurpleTitleElement")),
      },
      { json: "TitleType", js: "TitleType", typ: u(undefined, "") },
    ],
    false
  ),
  PurpleTitleElement: o(
    [
      { json: "PartNumber", js: "PartNumber", typ: u(undefined, "") },
      { json: "Subtitle", js: "Subtitle", typ: u(undefined, r("Subtitle")) },
      {
        json: "TitleElementLevel",
        js: "TitleElementLevel",
        typ: u(undefined, ""),
      },
      {
        json: "TitleText",
        js: "TitleText",
        typ: u(undefined, r("FluffyTitleText")),
      },
    ],
    false
  ),
  Subtitle: o(
    [
      { json: "collationkey", js: "collationkey", typ: u(undefined, "") },
      { json: "content", js: "content", typ: u(undefined, "") },
    ],
    false
  ),
  FluffyTitleText: o(
    [
      { json: "collationkey", js: "collationkey", typ: u(undefined, "") },
      { json: "content", js: "content", typ: u(undefined, "") },
    ],
    false
  ),
  OnixProductIdentifier: o(
    [
      { json: "IDValue", js: "IDValue", typ: u(undefined, "") },
      { json: "ProductIDType", js: "ProductIDType", typ: u(undefined, "") },
    ],
    false
  ),
  ProductSupply: o(
    [
      {
        json: "MarketPublishingDetail",
        js: "MarketPublishingDetail",
        typ: u(undefined, r("MarketPublishingDetail")),
      },
      {
        json: "SupplyDetail",
        js: "SupplyDetail",
        typ: u(undefined, r("SupplyDetail")),
      },
    ],
    false
  ),
  MarketPublishingDetail: o(
    [
      {
        json: "MarketPublishingStatus",
        js: "MarketPublishingStatus",
        typ: u(undefined, ""),
      },
      {
        json: "MarketPublishingStatusNote",
        js: "MarketPublishingStatusNote",
        typ: u(undefined, ""),
      },
      {
        json: "PublisherRepresentative",
        js: "PublisherRepresentative",
        typ: u(undefined, a(r("PublisherRepresentative"))),
      },
    ],
    false
  ),
  PublisherRepresentative: o(
    [
      {
        json: "AgentIdentifier",
        js: "AgentIdentifier",
        typ: u(undefined, a(r("AgentIdentifier"))),
      },
      { json: "AgentName", js: "AgentName", typ: u(undefined, "") },
      { json: "AgentRole", js: "AgentRole", typ: u(undefined, "") },
    ],
    false
  ),
  AgentIdentifier: o(
    [
      { json: "AgentIDType", js: "AgentIDType", typ: u(undefined, "") },
      { json: "IDTypeName", js: "IDTypeName", typ: u(undefined, "") },
      { json: "IDValue", js: "IDValue", typ: u(undefined, "") },
    ],
    false
  ),
  SupplyDetail: o(
    [
      { json: "Price", js: "Price", typ: u(undefined, a(r("Price"))) },
      {
        json: "ProductAvailability",
        js: "ProductAvailability",
        typ: u(undefined, ""),
      },
      {
        json: "ReturnsConditions",
        js: "ReturnsConditions",
        typ: u(undefined, r("ReturnsConditions")),
      },
    ],
    false
  ),
  Price: o(
    [
      { json: "CurrencyCode", js: "CurrencyCode", typ: u(undefined, "") },
      { json: "PriceAmount", js: "PriceAmount", typ: u(undefined, "") },
      {
        json: "PriceDate",
        js: "PriceDate",
        typ: u(undefined, a(r("PriceDate"))),
      },
      { json: "PriceType", js: "PriceType", typ: u(undefined, "") },
    ],
    false
  ),
  PriceDate: o(
    [
      { json: "Date", js: "Date", typ: u(undefined, "") },
      { json: "Price", js: "Price", typ: u(undefined, "") },
      { json: "PriceDateRole", js: "PriceDateRole", typ: u(undefined, "") },
    ],
    false
  ),
  ReturnsConditions: o(
    [
      { json: "ReturnsCode", js: "ReturnsCode", typ: u(undefined, "") },
      { json: "ReturnsCodeType", js: "ReturnsCodeType", typ: u(undefined, "") },
    ],
    false
  ),
  PublishingDetail: o(
    [
      { json: "Imprint", js: "Imprint", typ: u(undefined, r("Imprint")) },
      { json: "Publisher", js: "Publisher", typ: u(undefined, r("Publisher")) },
      {
        json: "PublishingDate",
        js: "PublishingDate",
        typ: u(undefined, a(r("PublishingDate"))),
      },
      {
        json: "PublishingStatus",
        js: "PublishingStatus",
        typ: u(undefined, ""),
      },
    ],
    false
  ),
  Imprint: o(
    [
      {
        json: "ImprintIdentifier",
        js: "ImprintIdentifier",
        typ: u(undefined, a(r("ImprintIdentifier"))),
      },
      { json: "ImprintName", js: "ImprintName", typ: u(undefined, "") },
    ],
    false
  ),
  ImprintIdentifier: o(
    [
      { json: "IDValue", js: "IDValue", typ: u(undefined, "") },
      { json: "ImprintIDType", js: "ImprintIDType", typ: u(undefined, "") },
    ],
    false
  ),
  Publisher: o(
    [
      {
        json: "PublisherIdentifier",
        js: "PublisherIdentifier",
        typ: u(undefined, a(r("PublisherIdentifier"))),
      },
      { json: "PublisherName", js: "PublisherName", typ: u(undefined, "") },
      { json: "PublishingRole", js: "PublishingRole", typ: u(undefined, "") },
    ],
    false
  ),
  PublisherIdentifier: o(
    [
      { json: "IDValue", js: "IDValue", typ: u(undefined, "") },
      { json: "PublisherIDType", js: "PublisherIDType", typ: u(undefined, "") },
    ],
    false
  ),
  PublishingDate: o(
    [
      { json: "Date", js: "Date", typ: u(undefined, "") },
      {
        json: "PublishingDateRole",
        js: "PublishingDateRole",
        typ: u(undefined, ""),
      },
    ],
    false
  ),
  RelatedMaterial: o(
    [
      {
        json: "RelatedProduct",
        js: "RelatedProduct",
        typ: u(undefined, r("RelatedProduct")),
      },
    ],
    false
  ),
  RelatedProduct: o(
    [
      {
        json: "ProductIdentifier",
        js: "ProductIdentifier",
        typ: u(undefined, r("RelatedProductProductIdentifier")),
      },
      {
        json: "ProductRelationCode",
        js: "ProductRelationCode",
        typ: u(undefined, ""),
      },
    ],
    false
  ),
  RelatedProductProductIdentifier: o(
    [
      { json: "IDValue", js: "IDValue", typ: u(undefined, "") },
      { json: "ProductIDType", js: "ProductIDType", typ: u(undefined, "") },
    ],
    false
  ),
  Summary: o(
    [
      { json: "author", js: "author", typ: "" },
      { json: "cover", js: "cover", typ: "" },
      { json: "isbn", js: "isbn", typ: "" },
      { json: "pubdate", js: "pubdate", typ: "" },
      { json: "publisher", js: "publisher", typ: "" },
      { json: "series", js: "series", typ: "" },
      { json: "title", js: "title", typ: "" },
      { json: "volume", js: "volume", typ: "" },
    ],
    false
  ),
};
