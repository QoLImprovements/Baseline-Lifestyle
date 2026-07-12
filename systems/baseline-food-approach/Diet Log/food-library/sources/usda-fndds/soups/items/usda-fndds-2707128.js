/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "quantity-not-specified",
  "description": "Soups, broth-based",
  "id": "usda-fndds-2707128",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Soup, sopa or caldo de res",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 4.04,
    "energy_kcal": 71.0,
    "fat_g": 3.4,
    "fibre_g": 0.8,
    "folate_ug": 12.0,
    "iron_mg": 0.65,
    "magnesium_mg": 13.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 58.0,
    "potassium_mg": 183.0,
    "protein_g": 5.91,
    "salt_g": 0.735,
    "sat_fat_g": 1.29,
    "sodium_mg": 294.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 6.8,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 13.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707128",
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
