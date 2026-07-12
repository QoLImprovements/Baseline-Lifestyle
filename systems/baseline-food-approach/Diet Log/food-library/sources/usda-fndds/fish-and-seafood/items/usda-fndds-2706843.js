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
  "id": "usda-fndds-2706843",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 104.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 208.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Crab salad made with imitation crab",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 8.66,
    "energy_kcal": 197.0,
    "fat_g": 16.3,
    "fibre_g": 0.6,
    "folate_ug": 11.0,
    "iron_mg": 0.24,
    "magnesium_mg": 24.0,
    "omega3_g": 0.015,
    "phosphorus_mg": 148.0,
    "potassium_mg": 116.0,
    "protein_g": 4.07,
    "salt_g": 1.325,
    "sat_fat_g": 2.62,
    "sodium_mg": 530.0,
    "sugar_g": 3.65,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 41.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706843",
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
