/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "scoop",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173557",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.7,
      "key": "scoop",
      "kind": "unit",
      "label": "scoop"
    }
  ],
  "name": "Infant formula, PBM PRODUCTS, store brand, soy, powder",
  "nutritionPerBasis": {
    "calcium_mg": 453.0,
    "carbs_g": 52.2,
    "energy_kcal": 508.0,
    "fat_g": 27.2,
    "fibre_g": 0.0,
    "folate_ug": 38.0,
    "iron_mg": 9.1,
    "magnesium_mg": 51.0,
    "omega3_g": 0.091,
    "phosphorus_mg": 317.0,
    "potassium_mg": 528.0,
    "protein_g": 13.6,
    "salt_g": 0.3775,
    "sat_fat_g": 12.4,
    "sodium_mg": 151.0,
    "sugar_g": 52.2,
    "vitamin_a_ug": 473.0,
    "vitamin_c_mg": 42.0,
    "vitamin_e_mg": 3.24,
    "vitamin_k_ug": 41.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173557",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "infant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
