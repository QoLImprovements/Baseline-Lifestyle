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
  "id": "usda-fndds-2706830",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 238.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 119.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Tuna salad, made with mayonnaise-type salad dressing",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 5.92,
    "energy_kcal": 108.0,
    "fat_g": 5.19,
    "fibre_g": 0.4,
    "folate_ug": 11.0,
    "iron_mg": 0.92,
    "magnesium_mg": 15.0,
    "omega3_g": 0.115,
    "phosphorus_mg": 78.0,
    "potassium_mg": 156.0,
    "protein_g": 9.88,
    "salt_g": 1.0625,
    "sat_fat_g": 0.857,
    "sodium_mg": 425.0,
    "sugar_g": 4.09,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 20.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706830",
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
