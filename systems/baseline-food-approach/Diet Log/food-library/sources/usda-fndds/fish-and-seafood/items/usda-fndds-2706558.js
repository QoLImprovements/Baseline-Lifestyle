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
  "id": "usda-fndds-2706558",
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
  "name": "Shrimp and noodles with cheese sauce",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 13.4,
    "energy_kcal": 136.0,
    "fat_g": 5.37,
    "fibre_g": 0.6,
    "folate_ug": 45.0,
    "iron_mg": 0.83,
    "magnesium_mg": 20.0,
    "omega3_g": 0.041,
    "phosphorus_mg": 142.0,
    "potassium_mg": 81.0,
    "protein_g": 8.18,
    "salt_g": 0.48,
    "sat_fat_g": 2.51,
    "sodium_mg": 192.0,
    "sugar_g": 0.24,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706558",
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
