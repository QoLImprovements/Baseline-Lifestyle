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
  "id": "usda-fndds-2706465",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 106.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 212.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Shrimp in garlic sauce, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 2.45,
    "energy_kcal": 281.0,
    "fat_g": 25.0,
    "fibre_g": 0.2,
    "folate_ug": 21.0,
    "iron_mg": 0.41,
    "magnesium_mg": 21.0,
    "omega3_g": 0.12,
    "phosphorus_mg": 209.0,
    "potassium_mg": 133.0,
    "protein_g": 11.6,
    "salt_g": 1.19,
    "sat_fat_g": 4.32,
    "sodium_mg": 476.0,
    "sugar_g": 0.47,
    "vitamin_a_ug": 162.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 5.19,
    "vitamin_k_ug": 39.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706465",
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
