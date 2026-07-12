/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cup",
  "description": "Stir-fry and soy-based sauce mixtures",
  "id": "usda-fndds-2706557",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Shrimp and noodles with soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 8.17,
    "energy_kcal": 141.0,
    "fat_g": 7.25,
    "fibre_g": 0.6,
    "folate_ug": 16.0,
    "iron_mg": 0.4,
    "magnesium_mg": 21.0,
    "omega3_g": 0.142,
    "phosphorus_mg": 143.0,
    "potassium_mg": 144.0,
    "protein_g": 10.2,
    "salt_g": 0.69,
    "sat_fat_g": 1.09,
    "sodium_mg": 276.0,
    "sugar_g": 0.87,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 2.13,
    "vitamin_k_ug": 18.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706557",
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
