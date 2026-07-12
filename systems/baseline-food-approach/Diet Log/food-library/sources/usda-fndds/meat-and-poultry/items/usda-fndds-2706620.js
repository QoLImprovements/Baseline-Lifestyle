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
  "id": "usda-fndds-2706620",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 202.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 103.0,
      "key": "1-cabbage-roll",
      "kind": "unit",
      "label": "1 cabbage roll"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Stuffed cabbage rolls with beef and rice",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 8.83,
    "energy_kcal": 114.0,
    "fat_g": 5.06,
    "fibre_g": 1.3,
    "folate_ug": 24.0,
    "iron_mg": 1.1,
    "magnesium_mg": 16.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 81.0,
    "potassium_mg": 253.0,
    "protein_g": 8.3,
    "salt_g": 0.845,
    "sat_fat_g": 1.88,
    "sodium_mg": 338.0,
    "sugar_g": 3.45,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 13.4,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 21.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706620",
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
