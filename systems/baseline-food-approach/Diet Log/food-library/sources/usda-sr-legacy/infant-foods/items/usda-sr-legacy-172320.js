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
  "id": "usda-sr-legacy-172320",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.4,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Infant formula, PBM PRODUCTS, store brand, liquid concentrate, not reconstituted",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 13.9,
    "energy_kcal": 545.0,
    "fat_g": 7.0,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 2.36,
    "magnesium_mg": 9.0,
    "omega3_g": 0.022,
    "phosphorus_mg": 55.0,
    "potassium_mg": 109.0,
    "protein_g": 2.9,
    "salt_g": 0.0725,
    "sat_fat_g": 3.2,
    "sodium_mg": 29.0,
    "sugar_g": 13.9,
    "vitamin_a_ug": 118.0,
    "vitamin_c_mg": 11.2,
    "vitamin_e_mg": 0.83,
    "vitamin_k_ug": 10.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172320",
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
