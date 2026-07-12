/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706466",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Stew, fish",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 2.75,
    "energy_kcal": 46.0,
    "fat_g": 0.42,
    "fibre_g": 0.5,
    "folate_ug": 11.0,
    "iron_mg": 0.19,
    "magnesium_mg": 15.0,
    "omega3_g": 0.073,
    "phosphorus_mg": 132.0,
    "potassium_mg": 157.0,
    "protein_g": 7.63,
    "salt_g": 0.6825,
    "sat_fat_g": 0.099,
    "sodium_mg": 273.0,
    "sugar_g": 0.63,
    "vitamin_a_ug": 67.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706466",
  "state": "Unspecified",
  "subcategory": "Seafood mixed dishes",
  "tags": [
    "fish-and-seafood",
    "seafood-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
