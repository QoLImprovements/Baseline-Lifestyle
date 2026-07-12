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
  "id": "usda-sr-legacy-173542",
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
  "name": "Infant formula, ABBOTT NUTRITION, SIMILAC, ISOMIL, with iron, liquid concentrate",
  "nutritionPerBasis": {
    "calcium_mg": 134.0,
    "carbs_g": 13.2,
    "energy_kcal": 128.0,
    "fat_g": 6.98,
    "fibre_g": 0.0,
    "folate_ug": 19.0,
    "iron_mg": 2.3,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 96.0,
    "potassium_mg": 138.0,
    "protein_g": 3.13,
    "salt_g": 0.14,
    "sat_fat_g": 2.26,
    "sodium_mg": 56.0,
    "sugar_g": 13.1,
    "vitamin_a_ug": 114.0,
    "vitamin_c_mg": 11.5,
    "vitamin_e_mg": 1.2,
    "vitamin_k_ug": 14.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173542",
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
