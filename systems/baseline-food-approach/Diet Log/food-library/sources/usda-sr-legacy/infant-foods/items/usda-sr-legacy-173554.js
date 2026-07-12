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
  "id": "usda-sr-legacy-173554",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.4,
      "key": "scoop",
      "kind": "unit",
      "label": "scoop"
    }
  ],
  "name": "Infant formula, PBM PRODUCTS, store brand, powder",
  "nutritionPerBasis": {
    "calcium_mg": 331.0,
    "carbs_g": 56.0,
    "energy_kcal": 524.0,
    "fat_g": 28.0,
    "fibre_g": 0.0,
    "folate_ug": 39.0,
    "iron_mg": 9.5,
    "magnesium_mg": 36.0,
    "omega3_g": 0.103,
    "phosphorus_mg": 221.0,
    "potassium_mg": 441.0,
    "protein_g": 12.0,
    "salt_g": 0.295,
    "sat_fat_g": 12.8,
    "sodium_mg": 118.0,
    "sugar_g": 56.0,
    "vitamin_a_ug": 473.0,
    "vitamin_c_mg": 43.3,
    "vitamin_e_mg": 3.38,
    "vitamin_k_ug": 43.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173554",
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
