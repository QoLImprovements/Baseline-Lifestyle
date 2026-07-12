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
  "id": "usda-fndds-2706860",
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
  "name": "Shellfish mixture and vegetables excluding carrots, broccoli, and dark-green leafy; no potatoes, soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 5.63,
    "energy_kcal": 122.0,
    "fat_g": 6.62,
    "fibre_g": 1.0,
    "folate_ug": 18.0,
    "iron_mg": 0.86,
    "magnesium_mg": 23.0,
    "omega3_g": 0.097,
    "phosphorus_mg": 146.0,
    "potassium_mg": 292.0,
    "protein_g": 9.73,
    "salt_g": 0.605,
    "sat_fat_g": 0.969,
    "sodium_mg": 242.0,
    "sugar_g": 1.56,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 13.2,
    "vitamin_e_mg": 1.85,
    "vitamin_k_ug": 21.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706860",
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
