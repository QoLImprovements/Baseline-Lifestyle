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
  "id": "usda-sr-legacy-173555",
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
  "name": "Infant formula, PBM PRODUCTS, store brand, soy, ready-to-feed",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 6.09,
    "energy_kcal": 63.0,
    "fat_g": 3.5,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.18,
    "magnesium_mg": 7.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 41.0,
    "potassium_mg": 69.0,
    "protein_g": 1.8,
    "salt_g": 0.045,
    "sat_fat_g": 1.6,
    "sodium_mg": 18.0,
    "sugar_g": 6.1,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 5.4,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173555",
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
