/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cup",
  "description": "Fish",
  "id": "usda-fndds-2706262",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fish, pickled",
  "nutritionPerBasis": {
    "calcium_mg": 77.0,
    "carbs_g": 9.64,
    "energy_kcal": 262.0,
    "fat_g": 18.0,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.22,
    "magnesium_mg": 8.0,
    "omega3_g": 1.468,
    "phosphorus_mg": 89.0,
    "potassium_mg": 69.0,
    "protein_g": 14.2,
    "salt_g": 2.175,
    "sat_fat_g": 2.38,
    "sodium_mg": 870.0,
    "sugar_g": 7.71,
    "vitamin_a_ug": 258.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.71,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706262",
  "state": "Unspecified",
  "subcategory": "Fish",
  "tags": [
    "fish",
    "fish-and-seafood",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
