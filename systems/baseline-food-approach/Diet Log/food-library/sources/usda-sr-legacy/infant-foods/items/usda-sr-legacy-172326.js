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
  "id": "usda-sr-legacy-172326",
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
  "name": "Infant formula, ABBOTT NUTRITION, SIMILAC, ADVANCE, with iron, liquid concentrate, not reconstituted",
  "nutritionPerBasis": {
    "calcium_mg": 99.0,
    "carbs_g": 13.5,
    "energy_kcal": 530.0,
    "fat_g": 6.89,
    "fibre_g": 0.0,
    "folate_ug": 19.0,
    "iron_mg": 2.3,
    "magnesium_mg": 8.0,
    "omega3_g": 0.023,
    "phosphorus_mg": 54.0,
    "potassium_mg": 134.0,
    "protein_g": 2.64,
    "salt_g": 0.0775,
    "sat_fat_g": 2.4,
    "sodium_mg": 31.0,
    "sugar_g": 13.5,
    "vitamin_a_ug": 114.0,
    "vitamin_c_mg": 11.5,
    "vitamin_e_mg": 1.28,
    "vitamin_k_ug": 10.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172326",
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
