/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2710143",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-cabbage-roll",
      "kind": "unit",
      "label": "1 cabbage roll"
    }
  ],
  "name": "Stuffed cabbage, with meat and rice, Syrian dish, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 11.1,
    "energy_kcal": 84.0,
    "fat_g": 2.95,
    "fibre_g": 1.8,
    "folate_ug": 32.0,
    "iron_mg": 0.69,
    "magnesium_mg": 14.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 44.0,
    "potassium_mg": 183.0,
    "protein_g": 3.14,
    "salt_g": 0.3675,
    "sat_fat_g": 0.798,
    "sodium_mg": 147.0,
    "sugar_g": 2.31,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 20.6,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 35.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710143",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-and-poultry",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
