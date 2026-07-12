/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706591",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 440.0,
      "key": "1-can",
      "kind": "unit",
      "label": "1 can"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Stew, beef, canned",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 6.54,
    "energy_kcal": 100.0,
    "fat_g": 5.96,
    "fibre_g": 1.1,
    "folate_ug": 10.0,
    "iron_mg": 0.57,
    "magnesium_mg": 13.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 56.0,
    "potassium_mg": 226.0,
    "protein_g": 5.0,
    "salt_g": 0.9875,
    "sat_fat_g": 2.08,
    "sodium_mg": 395.0,
    "sugar_g": 1.06,
    "vitamin_a_ug": 89.0,
    "vitamin_c_mg": 5.5,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 7.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706591",
  "state": "Canned",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "canned",
    "meat-and-poultry",
    "meat-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
