/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cup",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706838",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 208.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 104.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Seafood salad",
  "nutritionPerBasis": {
    "calcium_mg": 69.0,
    "carbs_g": 1.25,
    "energy_kcal": 190.0,
    "fat_g": 15.8,
    "fibre_g": 0.4,
    "folate_ug": 22.0,
    "iron_mg": 0.54,
    "magnesium_mg": 22.0,
    "omega3_g": 0.166,
    "phosphorus_mg": 114.0,
    "potassium_mg": 167.0,
    "protein_g": 10.1,
    "salt_g": 1.4625,
    "sat_fat_g": 2.5,
    "sodium_mg": 585.0,
    "sugar_g": 0.56,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 4.2,
    "vitamin_e_mg": 1.41,
    "vitamin_k_ug": 39.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706838",
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
