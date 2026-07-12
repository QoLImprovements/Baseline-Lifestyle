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
  "id": "usda-fndds-2706459",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 222.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 111.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fish with tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 1.59,
    "energy_kcal": 80.0,
    "fat_g": 0.69,
    "fibre_g": 0.4,
    "folate_ug": 7.0,
    "iron_mg": 0.63,
    "magnesium_mg": 34.0,
    "omega3_g": 0.119,
    "phosphorus_mg": 104.0,
    "potassium_mg": 259.0,
    "protein_g": 16.3,
    "salt_g": 0.875,
    "sat_fat_g": 0.129,
    "sodium_mg": 350.0,
    "sugar_g": 1.06,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 2.7,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706459",
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
