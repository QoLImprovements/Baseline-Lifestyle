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
  "id": "usda-fndds-2706559",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Shrimp and noodles with tomato sauce",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 15.4,
    "energy_kcal": 134.0,
    "fat_g": 5.22,
    "fibre_g": 1.1,
    "folate_ug": 52.0,
    "iron_mg": 1.15,
    "magnesium_mg": 22.0,
    "omega3_g": 0.047,
    "phosphorus_mg": 98.0,
    "potassium_mg": 143.0,
    "protein_g": 6.46,
    "salt_g": 0.43,
    "sat_fat_g": 0.82,
    "sodium_mg": 172.0,
    "sugar_g": 1.36,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 1.62,
    "vitamin_k_ug": 4.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706559",
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
