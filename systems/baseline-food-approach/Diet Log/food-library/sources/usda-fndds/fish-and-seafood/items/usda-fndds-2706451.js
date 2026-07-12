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
  "id": "usda-fndds-2706451",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Seafood thermidor",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 4.66,
    "energy_kcal": 251.0,
    "fat_g": 21.2,
    "fibre_g": 0.1,
    "folate_ug": 24.0,
    "iron_mg": 0.48,
    "magnesium_mg": 22.0,
    "omega3_g": 0.099,
    "phosphorus_mg": 186.0,
    "potassium_mg": 191.0,
    "protein_g": 10.6,
    "salt_g": 0.97,
    "sat_fat_g": 11.0,
    "sodium_mg": 388.0,
    "sugar_g": 2.55,
    "vitamin_a_ug": 168.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706451",
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
