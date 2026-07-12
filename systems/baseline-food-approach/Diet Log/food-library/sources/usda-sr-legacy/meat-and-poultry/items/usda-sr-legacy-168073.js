/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "piece",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-168073",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 103.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "CRACKER BARREL, chicken tenderloin platter, fried, from kid's menu",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 20.2,
    "energy_kcal": 1230.0,
    "fat_g": 15.4,
    "fibre_g": 1.0,
    "folate_ug": 7.0,
    "iron_mg": 0.58,
    "magnesium_mg": 29.0,
    "omega3_g": 0.859,
    "phosphorus_mg": 275.0,
    "potassium_mg": 330.0,
    "protein_g": 18.7,
    "salt_g": 2.1775,
    "sat_fat_g": 2.83,
    "sodium_mg": 871.0,
    "sugar_g": 0.19,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.27,
    "vitamin_k_ug": 33.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168073",
  "state": "Fried",
  "subcategory": "Restaurant Foods",
  "tags": [
    "fried",
    "meat-and-poultry",
    "restaurant-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
