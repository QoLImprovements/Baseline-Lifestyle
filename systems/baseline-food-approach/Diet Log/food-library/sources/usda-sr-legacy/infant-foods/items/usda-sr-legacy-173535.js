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
  "id": "usda-sr-legacy-173535",
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
  "name": "Infant formula, NESTLE, GOOD START SUPREME, with iron, liquid concentrate, not reconstituted",
  "nutritionPerBasis": {
    "calcium_mg": 81.0,
    "carbs_g": 14.2,
    "energy_kcal": 531.0,
    "fat_g": 6.5,
    "fibre_g": 0.0,
    "folate_ug": 19.0,
    "iron_mg": 1.9,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 137.0,
    "protein_g": 2.79,
    "salt_g": 0.085,
    "sat_fat_g": 2.97,
    "sodium_mg": 34.0,
    "sugar_g": 9.7,
    "vitamin_a_ug": 114.0,
    "vitamin_c_mg": 11.0,
    "vitamin_e_mg": 1.91,
    "vitamin_k_ug": 10.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173535",
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
