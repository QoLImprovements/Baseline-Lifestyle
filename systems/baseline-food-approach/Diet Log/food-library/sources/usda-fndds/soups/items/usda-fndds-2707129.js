/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "1-cup",
  "description": "Soups, broth-based",
  "id": "usda-fndds-2707129",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Soup, pozole",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 4.59,
    "energy_kcal": 43.0,
    "fat_g": 1.23,
    "fibre_g": 0.9,
    "folate_ug": 7.0,
    "iron_mg": 0.26,
    "magnesium_mg": 10.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 39.0,
    "potassium_mg": 103.0,
    "protein_g": 3.38,
    "salt_g": 0.62,
    "sat_fat_g": 0.279,
    "sodium_mg": 248.0,
    "sugar_g": 0.98,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 3.7,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 7.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707129",
  "state": "Unspecified",
  "subcategory": "Soups, broth-based",
  "tags": [
    "soups",
    "soups-broth-based",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
