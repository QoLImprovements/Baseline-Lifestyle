/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Stir-fry and soy-based sauce mixtures",
  "id": "usda-fndds-2706462",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 201.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Shrimp teriyaki",
  "nutritionPerBasis": {
    "calcium_mg": 87.0,
    "carbs_g": 3.34,
    "energy_kcal": 120.0,
    "fat_g": 1.56,
    "fibre_g": 0.0,
    "folate_ug": 23.0,
    "iron_mg": 0.51,
    "magnesium_mg": 42.0,
    "omega3_g": 0.264,
    "phosphorus_mg": 300.0,
    "potassium_mg": 184.0,
    "protein_g": 21.6,
    "salt_g": 1.4525,
    "sat_fat_g": 0.478,
    "sodium_mg": 581.0,
    "sugar_g": 1.76,
    "vitamin_a_ug": 82.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.02,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706462",
  "state": "Unspecified",
  "subcategory": "Stir-fry and soy-based sauce mixtures",
  "tags": [
    "fish-and-seafood",
    "stir-fry-and-soy-based-sauce-mixtures",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
