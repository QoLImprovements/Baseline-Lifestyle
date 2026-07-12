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
  "id": "usda-fndds-2706573",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 310.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Fish and rice with tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 16.5,
    "energy_kcal": 135.0,
    "fat_g": 5.12,
    "fibre_g": 0.7,
    "folate_ug": 35.0,
    "iron_mg": 1.02,
    "magnesium_mg": 18.0,
    "omega3_g": 0.027,
    "phosphorus_mg": 53.0,
    "potassium_mg": 151.0,
    "protein_g": 5.41,
    "salt_g": 0.775,
    "sat_fat_g": 0.714,
    "sodium_mg": 310.0,
    "sugar_g": 1.15,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 2.4,
    "vitamin_e_mg": 1.5,
    "vitamin_k_ug": 5.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706573",
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
