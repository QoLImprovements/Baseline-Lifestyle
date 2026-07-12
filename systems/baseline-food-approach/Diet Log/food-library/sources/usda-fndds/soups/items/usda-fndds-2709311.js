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
  "id": "usda-fndds-2709311",
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
  "name": "Soup, fruit",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 7.04,
    "energy_kcal": 30.0,
    "fat_g": 0.12,
    "fibre_g": 0.8,
    "folate_ug": 6.0,
    "iron_mg": 0.24,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 108.0,
    "protein_g": 0.54,
    "salt_g": 0.02,
    "sat_fat_g": 0.016,
    "sodium_mg": 8.0,
    "sugar_g": 5.83,
    "vitamin_a_ug": 61.0,
    "vitamin_c_mg": 19.5,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709311",
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
