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
  "id": "usda-fndds-2706717",
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
  "name": "Soup, bouillabaisse",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 1.59,
    "energy_kcal": 67.0,
    "fat_g": 3.05,
    "fibre_g": 0.3,
    "folate_ug": 8.0,
    "iron_mg": 0.5,
    "magnesium_mg": 14.0,
    "omega3_g": 0.105,
    "phosphorus_mg": 145.0,
    "potassium_mg": 157.0,
    "protein_g": 8.25,
    "salt_g": 0.5625,
    "sat_fat_g": 0.448,
    "sodium_mg": 225.0,
    "sugar_g": 0.71,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.91,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706717",
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
