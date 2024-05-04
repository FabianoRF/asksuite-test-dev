import 'reflect-metadata'
import InputGetRoomListUseCase from '../../dtos/GetRoomListUseCase/InputGetRoomListUseCase'
import GetRoomListUseCase from '../../useCases/GetRoomListUseCase'
import FakeBrowserService, { pageDataMock } from '../fakes/FakeBrowserService'
import AppError from '../../helpers/AppError'
import { minimumNightsErrorMessage } from '../../const/errors'

let browserServiceMock: FakeBrowserService
let getRoomListUseCase: GetRoomListUseCase

describe('GetRoomListUseCase', () => {
  beforeEach(() => {
    browserServiceMock = new FakeBrowserService()
    getRoomListUseCase = new GetRoomListUseCase(browserServiceMock)
  })

  test('Should be able to return rooms list successfully', async () => {
    const inputMock: InputGetRoomListUseCase = {
      checkin: new Date('2024-05-01'),
      checkout: new Date('2024-05-04'),
    }

    const result = await getRoomListUseCase.run(inputMock)

    expect(result).toBe(pageDataMock)
  })

  test('Should be able to return error when of nights to stay is not reached', async () => {
    const inputMock: InputGetRoomListUseCase = {
      checkin: new Date('2024-05-01'),
      checkout: new Date('2024-05-03'),
    }

    const expectedError = new AppError(minimumNightsErrorMessage)

    await expect(getRoomListUseCase.run(inputMock)).rejects.toStrictEqual(
      expectedError,
    )
  })
})
