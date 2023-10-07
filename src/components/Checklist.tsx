'use client'

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import { ConnectKitButton } from 'connectkit'
import RegisterFIDButton from './RegisterFIDButton'
import RentStorageUnitButton from './RentStorageUnitButton'
import AddSignerButton from './AddSignerButton'
import RegisterFNameButton from './RegisterFNameButton'
import SendCastButton from './SendCastButton'


export default function Checklist() {

  return (
    <fieldset className=" border-gray-200 min-w-[600px]">
      <div className='flex flex-row justify-between mb-6'>
        <h1 className="text-2xl font-semibold text-gray-900">
          Sign up for Farcaster
        </h1>
        <ConnectKitButton />
      </div>
      <div className="divide-y divide-gray-200">
        <div className="relative flex items-start pb-4 pt-3.5">
          <div className="min-w-0 flex-1 text-sm leading-6">
            <label htmlFor="comments" className="font-medium text-gray-900">
              Register an FID
            </label>
            <p id="comments-description" className="text-gray-500">
              To perform any action on farcaster, your need an FID.
            </p>
          </div>
          <RegisterFIDButton />
        </div>
        <div className="relative flex items-start pb-4 pt-3.5">
          <div className="min-w-0 flex-1 text-sm leading-6">
            <label htmlFor="candidates" className="font-medium text-gray-900">
              Purchase a storage unit
            </label>
            <p id="candidates-description" className="text-gray-500">
              To use Farcaster you need to pay for storing data in the hubs. <br />
              One storage unit let's you store up to 5000 casts a year and costs $7
            </p>
          </div>
          <RentStorageUnitButton />
        </div>
        <div className="relative flex items-start pb-4 pt-3.5">
          <div className="min-w-0 flex-1 text-sm leading-6">
            <label htmlFor="offers" className="font-medium text-gray-900">
              Add a signer
            </label>
            <p id="offers-description" className="text-gray-500">
              Signers are keypairs that have a permission to write <br />
              to the protocol on your behalf.
            </p>
          </div>
          <AddSignerButton />
        </div>
        <div className="relative flex items-start pb-4 pt-3.5">
          <div className="min-w-0 flex-1 text-sm leading-6">
            <label htmlFor="offers" className="font-medium text-gray-900">
              Register an fname <span className="text-gray-400">(optional)</span>
            </label>
            <p id="offers-description" className="text-gray-500 mb-2">
              Fnames are ENS domains managed by Warpcast team. <br />
              They are not required to use Farcaster. But you can register one anyway
            </p>
            <input
              type="text"
              name="fname"
              id="fname"
              className="block w-64 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
              placeholder="Enter your fname"
              data-1p-ignore
            />
          </div>
          <RegisterFNameButton />
        </div>
        <div className="relative flex items-start pb-4 pt-3.5">
          <div className="min-w-0 flex-1 text-sm leading-6">
            <label htmlFor="offers" className="font-medium text-gray-900">
              Publish a cast
            </label>
            <p id="offers-description" className="text-gray-500 mb-2">
              With an FID, a storage unit and a signer you can publish a cast. <br />
            </p>
            <input
              type="text"
              name="cast"
              id="cast"
              className="block w-64 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
              placeholder="Type your cast"
            />
          </div>
          <SendCastButton />
        </div>
      </div>
    </fieldset>
  )
}
