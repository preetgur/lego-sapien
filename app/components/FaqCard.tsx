import { Icon } from "@iconify/react";
import classNames from "classnames";

type Point = {
  text: string;
};

type FaqCardProps = {
  title: string;
  points: string[];
  icon?: string;
  btnText?: string;
  sectinWrapperClassName?: string;
};

const FaqCard: React.FC<FaqCardProps> = ({
  title,
  points,
  icon,
  btnText,
  sectinWrapperClassName,
}) => {
  return (
    <section
      className={classNames(
        "w-full   border-b-4 border-dashed border-primary",
        sectinWrapperClassName
      )}
    >
      <div
        className={classNames(
          "flex items-center justify-between bg-secondaryBlack py-2 px-2"
        )}
      >
        <div className="flex flex-col">
          <div className="flex">
            <div className="flex bg-primary p-2 text-white">{title}</div>
          </div>
          <div className="my-2 flex flex-col space-y-1 pl-2">
            {points?.map((point, index) => (
              <p key={index}>{`${point}`}</p>
            ))}
          </div>
        </div>

        <div className="flex min-w-47.5 items-center justify-center  py-2">
          {icon && <Icon icon={icon} className="h-20 w-20" />}
          {btnText && (
            <div className=" rounded-sm bg-primary px-2 py-1">{btnText}</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FaqCard;
