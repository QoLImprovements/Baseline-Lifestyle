/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-cup",
  "description": "Stir-fry and soy-based sauce mixtures",
  "id": "usda-fndds-2706795",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 216.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Moo Goo Gai Pan",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 4.87,
    "energy_kcal": 69.0,
    "fat_g": 2.44,
    "fibre_g": 1.4,
    "folate_ug": 17.0,
    "iron_mg": 0.42,
    "magnesium_mg": 12.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 79.0,
    "potassium_mg": 209.0,
    "protein_g": 7.11,
    "salt_g": 0.265,
    "sat_fat_g": 0.389,
    "sodium_mg": 106.0,
    "sugar_g": 2.01,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 6.4,
    "vitamin_e_mg": 0.76,
    "vitamin_k_ug": 16.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706795",
  "state": "Unspecified",
  "subcategory": "Stir-fry and soy-based sauce mixtures",
  "tags": [
    "condiments-and-sauces",
    "stir-fry-and-soy-based-sauce-mixtures",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
