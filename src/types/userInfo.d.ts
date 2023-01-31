export interface profileType {
  id: string
  account: string
  mobile: string
  token: string
  avatar: string
  nickname: string
  gender: string
  birthday: string
  cityCode: string
  provinceCode: string
  profession?: any
}

export interface registerType {
  account: string
  mobile: string
  code: string
  password: string
  unionId: string
}
