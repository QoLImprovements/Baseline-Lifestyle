/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "fl-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172319",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.4,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Infant formula, PBM PRODUCTS, store brand, ready-to-feed",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 6.39,
    "energy_kcal": 63.0,
    "fat_g": 3.5,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.18,
    "magnesium_mg": 5.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 28.0,
    "potassium_mg": 55.0,
    "protein_g": 1.4,
    "salt_g": 0.035,
    "sat_fat_g": 1.6,
    "sodium_mg": 14.0,
    "sugar_g": 6.4,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 5.6,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172319",
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
