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
  "id": "usda-fndds-2706824",
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
  "name": "Crab salad",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 1.27,
    "energy_kcal": 188.0,
    "fat_g": 15.9,
    "fibre_g": 0.4,
    "folate_ug": 36.0,
    "iron_mg": 0.3,
    "magnesium_mg": 21.0,
    "omega3_g": 0.091,
    "phosphorus_mg": 128.0,
    "potassium_mg": 201.0,
    "protein_g": 9.4,
    "salt_g": 1.155,
    "sat_fat_g": 2.53,
    "sodium_mg": 462.0,
    "sugar_g": 0.57,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 4.6,
    "vitamin_e_mg": 1.68,
    "vitamin_k_ug": 40.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706824",
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
