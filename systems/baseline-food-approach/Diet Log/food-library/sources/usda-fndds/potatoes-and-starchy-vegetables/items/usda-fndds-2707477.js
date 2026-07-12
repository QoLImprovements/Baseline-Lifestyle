/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Stir-fry and soy-based sauce mixtures",
  "id": "usda-fndds-2707477",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 217.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 163.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Tofu and vegetables excluding carrots, broccoli, and dark-green leafy; no potatoes, with soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 4.4,
    "energy_kcal": 93.0,
    "fat_g": 6.94,
    "fibre_g": 0.9,
    "folate_ug": 30.0,
    "iron_mg": 0.79,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 65.0,
    "potassium_mg": 177.0,
    "protein_g": 4.21,
    "salt_g": 0.525,
    "sat_fat_g": 0.957,
    "sodium_mg": 210.0,
    "sugar_g": 1.7,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 1.12,
    "vitamin_k_ug": 20.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707477",
  "state": "Unspecified",
  "subcategory": "Stir-fry and soy-based sauce mixtures",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "stir-fry-and-soy-based-sauce-mixtures",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
