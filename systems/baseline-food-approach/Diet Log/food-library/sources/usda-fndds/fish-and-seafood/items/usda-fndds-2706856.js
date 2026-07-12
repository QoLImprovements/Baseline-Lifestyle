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
  "id": "usda-fndds-2706856",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 123.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 246.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Shrimp creole, no rice",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 4.51,
    "energy_kcal": 124.0,
    "fat_g": 5.16,
    "fibre_g": 1.0,
    "folate_ug": 21.0,
    "iron_mg": 0.57,
    "magnesium_mg": 28.0,
    "omega3_g": 0.174,
    "phosphorus_mg": 195.0,
    "potassium_mg": 198.0,
    "protein_g": 14.3,
    "salt_g": 0.3825,
    "sat_fat_g": 1.09,
    "sodium_mg": 153.0,
    "sugar_g": 1.32,
    "vitamin_a_ug": 103.0,
    "vitamin_c_mg": 8.1,
    "vitamin_e_mg": 2.03,
    "vitamin_k_ug": 6.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706856",
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
