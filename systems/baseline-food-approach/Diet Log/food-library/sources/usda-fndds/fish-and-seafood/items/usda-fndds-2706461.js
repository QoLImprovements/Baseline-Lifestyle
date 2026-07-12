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
  "id": "usda-fndds-2706461",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Fish curry with rice",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 15.2,
    "energy_kcal": 107.0,
    "fat_g": 3.36,
    "fibre_g": 1.0,
    "folate_ug": 33.0,
    "iron_mg": 0.85,
    "magnesium_mg": 16.0,
    "omega3_g": 0.021,
    "phosphorus_mg": 71.0,
    "potassium_mg": 179.0,
    "protein_g": 4.03,
    "salt_g": 0.7725,
    "sat_fat_g": 0.806,
    "sodium_mg": 309.0,
    "sugar_g": 1.56,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 5.4,
    "vitamin_e_mg": 0.97,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706461",
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
