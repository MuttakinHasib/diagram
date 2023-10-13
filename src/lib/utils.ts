import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import _ from "lodash";
import { nanoid } from "nanoid";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const NodeTypes = {
  StepNode: "StepNode",
  TimerNode: "TimerNode",
  Condition: "Condition",
  startNode: "startNode",
  FloatNode: "FloatNode",
}
export const EdgeTypes = {
  bridge: "bridge",
  custom: "custom", 
  default:"default"
}

const addNewNode = (data:any) => {
    let newFlowId = nanoid();
    let newNode = {
      id: newFlowId,
      type: data.type,
      position: { x: 100, y: 200 },
      data: {
        label: data.label,
        subLabel:"",
        stepType: data.stepType,
        days: 1,
        actionTitle: data.actionTitle,
        condition:null,
        branch:null
      },
    };
    return newNode;
  };

  const addNewEdge = (sourceId:string, targetId:string, type:string) => {
    let newEdgeId = nanoid();
    let newEdge = {
      id: newEdgeId,
      source: sourceId,
      target: targetId,
      type: type,
      data:{
        icon:false,
        condition:""
      }
    }
    return newEdge;
  }
   function toJSON(elements:any) {
    const downloadLink = document.createElement("a");
    const fileBlob = new Blob([JSON.stringify(elements, null, 2)], {
      type: "application/json",
    });
    downloadLink.href = URL.createObjectURL(fileBlob);
    downloadLink.download = `prospect_.json`;
    downloadLink.click();
  }
  const checkduplicity = (arrayData:any) => {
    const itemsData = arrayData.filter((value:any, index:number) => {
      const _value = JSON.stringify(value);
      return (
        index ===
        arrayData.findIndex((obj:any) => {
          return JSON.stringify(obj) === _value;
        })
      );
    });
    return itemsData;
  };
  const removeDuplicates =(array1:any, array2:any)  => array1.filter((item:any) => array2.includes(item));

  function removeDuplicatesById(array1:any, array2:any) {
    // Concatenate the two arrays into a single array
    const combinedArray = [...array1, ...array2];
  
    // Remove duplicates based on the 'id' property
    const uniqueArray = _.uniqBy(combinedArray, 'id');
  
    return uniqueArray;
  }
  function removeSimilarById(array1:any, array2:any) {
    // Remove items from array1 that have the same 'id' as items in array2
    const uniqueArray1 = _.differenceBy(array1, array2, 'id');
    return uniqueArray1;
  }
  export {
    addNewNode,  
    addNewEdge, 
    toJSON, 
    checkduplicity, 
    removeDuplicates,
    removeDuplicatesById, 
    removeSimilarById
  }