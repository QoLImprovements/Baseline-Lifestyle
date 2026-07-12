/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "7 samples, including grilled and char-grilled",
  "id": "cofid-current-18-074",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beef, sirloin steak, from steakhouse, lean",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.0,
    "energy_kcal": 172.0,
    "fat_g": 5.1,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 2.5,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 270.0,
    "potassium_mg": 440.0,
    "protein_g": 31.5,
    "salt_g": 0.19,
    "sat_fat_g": 2.2,
    "sodium_mg": 76.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-074",
  "state": "Unspecified",
  "subcategory": "MAC",
  "tags": [
    "mac",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
