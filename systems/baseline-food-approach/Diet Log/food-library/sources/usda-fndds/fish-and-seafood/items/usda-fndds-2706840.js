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
  "id": "usda-fndds-2706840",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 119.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 238.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Tuna salad with egg",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 2.74,
    "energy_kcal": 190.0,
    "fat_g": 15.4,
    "fibre_g": 0.4,
    "folate_ug": 14.0,
    "iron_mg": 0.97,
    "magnesium_mg": 14.0,
    "omega3_g": 0.111,
    "phosphorus_mg": 88.0,
    "potassium_mg": 152.0,
    "protein_g": 10.3,
    "salt_g": 0.9825,
    "sat_fat_g": 2.58,
    "sodium_mg": 393.0,
    "sugar_g": 1.99,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.94,
    "vitamin_k_ug": 40.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706840",
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
