import { Disclosure } from '@headlessui/react';

import icons from '../../assets/icons/icons.svg';

const Description = ({ text }) => {
  return (
    <Disclosure as="div" className="border-b border-gray-200 py-6 mr-2">
      {({ open }) => (
        <>
          <h3 className="-my-3 flow-root">
            <Disclosure.Button className="flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
              <span className="font-medium text-slate-600 dark:text-slate-300">Description:</span>
              <span className="ml-6 flex items-center">
                {open ? (
                  <svg width="24" height="24" className="fill-slate-500">
                    <use href={icons + '#icon-minus'} />
                  </svg>
                ) : (
                  <svg width="24" height="24" className="fill-slate-500">
                    <use href={icons + '#icon-add'} />
                  </svg>
                )}
              </span>
            </Disclosure.Button>
          </h3>
          <Disclosure.Panel className="pt-6">
            <p className="py-1">{text}</p>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Description;
