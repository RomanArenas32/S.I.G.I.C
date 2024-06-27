import { BotonVolver } from '../../../utils';

export const VistaEventos = () => {
  return (
<div>
<BotonVolver/>
 <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">Responsable</th>
                  <th scope="col" className="px-6 py-4">fecha y hora</th>
                  <th scope="col" className="px-6 py-4">conflictividad</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    Default
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Cell</td>
                  <td className="whitespace-nowrap px-6 py-4">Cell</td>
                </tr>
                <tr
                  className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    Primary
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Cel</td>
                  <td className="whitespace-nowrap px-6 py-4">Cell</td>
                </tr>
                <tr
                  className="border-b border-secondary-200 bg-secondary-100 text-neutral-800">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    Secondary
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Cell</td>
                  <td className="whitespace-nowrap px-6 py-4">Cell</td>
                </tr>
                <tr
                  className="border-b border-success-200 bg-success-100 text-neutral-800">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    Success
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Cell</td>
                  <td className="whitespace-nowrap px-6 py-4">Cell</td>
                </tr>
                <tr
                  className="border-b border-danger-200 bg-danger-100 text-neutral-800">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    Danger
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Cell</td>
                  <td className="whitespace-nowrap px-6 py-4">Cell</td>
                </tr>
                <tr
                  className="border-b border-warning-200 bg-warning-100 text-neutral-800">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    Warning
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">C</td>
                  <td className="whitespace-nowrap px-6 py-4">Cell</td>
                </tr>
                <tr
                  className="border-b border-info-200 bg-info-100 text-neutral-800">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    Info
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Cell</td>
                  <td className="whitespace-nowrap px-6 py-4">Cell</td>
                </tr>
                
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
</div>
   
      );
}
