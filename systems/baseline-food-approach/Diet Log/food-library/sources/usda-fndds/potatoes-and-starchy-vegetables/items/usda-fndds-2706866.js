/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Stir-fry and soy-based sauce mixtures",
  "id": "usda-fndds-2706866",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 163.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 217.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Fish and vegetables excluding carrots, broccoli, and dark-green leafy; no potatoes, soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 4.33,
    "energy_kcal": 106.0,
    "fat_g": 6.22,
    "fibre_g": 1.0,
    "folate_ug": 15.0,
    "iron_mg": 0.4,
    "magnesium_mg": 19.0,
    "omega3_g": 0.071,
    "phosphorus_mg": 156.0,
    "potassium_mg": 253.0,
    "protein_g": 8.04,
    "salt_g": 0.625,
    "sat_fat_g": 0.86,
    "sodium_mg": 250.0,
    "sugar_g": 1.56,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 13.2,
    "vitamin_e_mg": 1.5,
    "vitamin_k_ug": 21.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706866",
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
