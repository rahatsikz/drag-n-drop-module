import Link from "next/link";
import { useEffect, useState } from "react";

type IFetchedData = {
  success: boolean;
  message: string;
  data: IData;
};

type IData = {
  name: string;
  creator: string;
  singleLineText?: string[];
  number?: string[];
  datetime?: string[];
  image?: string[];
  toggle?: string[];
  email?: string[];
  phone?: string[];
  user?: string[];
  search?: string[];
  textArea?: string[];
  multiSearch?: string[];
  picker?: string[];
  multiPick?: string[];
  currency?: string[];
  fileLink?: string[];
  link?: string[];
};

const LatestData = () => {
  const [fetchedData, setFetchedData] = useState<IFetchedData>({
    success: false, // or true depending on your initial state
    message: "",
    data: {
      name: "",
      creator: "",
    },
  });

  useEffect(() => {
    fetch("http://localhost:3003/api/v1/module")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFetchedData(data);
      });
  }, []);

  const { data } = fetchedData;
  const { singleLineText, number, picker, ...restData } = data;

  return (
    <div className="grid gap-2 justify-center my-12 bg-[#dedede] xl:w-1/3 lg:w-2/3 mx-auto p-8">
      <div className="text-center mb-8">
        <p className="text-xl font-bold">Newly Created Module</p>
      </div>

      {singleLineText?.map((jsonString, index) => {
        const data = JSON.parse(jsonString);
        if (typeof data === "object" && data !== null) {
          return (
            <div key={index}>
              {Object.entries(data).map(([key, value]) => (
                <p key={key}>
                  {key}: {value as any}
                </p>
              ))}
            </div>
          );
        }
      })}
      {number?.map((jsonString, index) => {
        const data = JSON.parse(jsonString);
        if (typeof data === "object" && data !== null) {
          return (
            <div key={index}>
              {Object.entries(data).map(([key, value]) => (
                <p key={key}>
                  {key}: {value as any}
                </p>
              ))}
            </div>
          );
        }
      })}

      {restData.datetime?.length! > 0 && (
        <div>
          {restData.datetime?.map((input, idx) => (
            <div key={idx}>Date & Time: {input}</div>
          ))}
        </div>
      )}

      {restData.image?.length! > 0 && (
        <div>
          {restData.image?.map((input, idx) => (
            <div key={idx}>
              Image:{" "}
              <Link href={input} className="text-sky-500">
                {input}
              </Link>
            </div>
          ))}
        </div>
      )}
      {restData.toggle?.length! > 0 && (
        <div>
          {restData.toggle?.map((input, idx) => (
            <div key={idx}>Toggle: {input}</div>
          ))}
        </div>
      )}
      {restData.email?.length! > 0 && (
        <div>
          {restData.email?.map((input, idx) => (
            <div key={idx}>Email: {input}</div>
          ))}
        </div>
      )}
      {restData.phone?.length! > 0 && (
        <div>
          {restData.phone?.map((input, idx) => (
            <div key={idx}>Phone: {input}</div>
          ))}
        </div>
      )}
      {restData.user?.length! > 0 && (
        <div>
          {restData.user?.map((input, idx) => (
            <div key={idx}>User: {input}</div>
          ))}
        </div>
      )}
      {restData.search?.length! > 0 && (
        <div>
          {restData.search?.map((input, idx) => (
            <div key={idx}>Search: {input}</div>
          ))}
        </div>
      )}
      {restData.textArea?.length! > 0 && (
        <div>
          {restData.textArea?.map((input, idx) => (
            <div key={idx}>Text Area: {input}</div>
          ))}
        </div>
      )}
      {restData.multiSearch?.length! > 0 && (
        <div>
          {restData.multiSearch?.map((input, idx) => (
            <div key={idx}>Multi Search: {input}</div>
          ))}
        </div>
      )}

      {picker?.map((jsonString, index) => {
        const data = JSON.parse(jsonString);
        if (typeof data === "object" && data !== null) {
          return (
            <div key={index}>
              {Object.entries(data).map(([key, value]) => (
                <p key={key}>
                  {key}: {value as any}
                </p>
              ))}
            </div>
          );
        }
      })}

      {restData.multiPick?.length! > 0 && (
        <div>
          {restData.multiPick?.map((input, idx) => (
            <div key={idx}>Multi Pick: {input}</div>
          ))}
        </div>
      )}
      {restData.currency?.length! > 0 && (
        <div>
          {restData.currency?.map((input, idx) => (
            <div key={idx}>currency: {input}</div>
          ))}
        </div>
      )}
      {restData.fileLink?.length! > 0 && (
        <div>
          {restData.fileLink?.map((input, idx) => (
            <div key={idx}>fileLink: {input}</div>
          ))}
        </div>
      )}
      {restData.link?.length! > 0 && (
        <div>
          {restData.link?.map((input, idx) => (
            <div key={idx}>Link: {input}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestData;
