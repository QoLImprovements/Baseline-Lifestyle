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
  "id": "usda-fndds-2706857",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 121.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Kung Pao shrimp",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 5.32,
    "energy_kcal": 173.0,
    "fat_g": 10.7,
    "fibre_g": 1.0,
    "folate_ug": 24.0,
    "iron_mg": 0.45,
    "magnesium_mg": 37.0,
    "omega3_g": 0.145,
    "phosphorus_mg": 193.0,
    "potassium_mg": 184.0,
    "protein_g": 13.9,
    "salt_g": 0.525,
    "sat_fat_g": 1.69,
    "sodium_mg": 210.0,
    "sugar_g": 1.43,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 11.7,
    "vitamin_e_mg": 2.6,
    "vitamin_k_ug": 13.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706857",
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
