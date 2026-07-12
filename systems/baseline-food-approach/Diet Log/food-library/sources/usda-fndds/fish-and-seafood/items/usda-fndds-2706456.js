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
  "id": "usda-fndds-2706456",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 176.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "1-shrimp",
      "kind": "unit",
      "label": "1 shrimp"
    }
  ],
  "name": "Sweet and sour shrimp",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 16.2,
    "energy_kcal": 172.0,
    "fat_g": 9.22,
    "fibre_g": 0.6,
    "folate_ug": 18.0,
    "iron_mg": 0.73,
    "magnesium_mg": 16.0,
    "omega3_g": 0.048,
    "phosphorus_mg": 104.0,
    "potassium_mg": 136.0,
    "protein_g": 5.92,
    "salt_g": 0.8675,
    "sat_fat_g": 1.29,
    "sodium_mg": 347.0,
    "sugar_g": 8.44,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 2.17,
    "vitamin_k_ug": 9.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706456",
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
