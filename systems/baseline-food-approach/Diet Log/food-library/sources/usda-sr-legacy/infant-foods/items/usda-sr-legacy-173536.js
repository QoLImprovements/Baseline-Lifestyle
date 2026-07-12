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
  "id": "usda-sr-legacy-173536",
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
  "name": "Infant formula, NESTLE, GOOD START SUPREME, with iron, powder",
  "nutritionPerBasis": {
    "calcium_mg": 343.0,
    "carbs_g": 57.3,
    "energy_kcal": 509.0,
    "fat_g": 26.1,
    "fibre_g": 0.0,
    "folate_ug": 77.0,
    "iron_mg": 7.7,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 184.0,
    "potassium_mg": 553.0,
    "protein_g": 11.3,
    "salt_g": 0.345,
    "sat_fat_g": 11.7,
    "sodium_mg": 138.0,
    "sugar_g": 39.3,
    "vitamin_a_ug": 461.0,
    "vitamin_c_mg": 46.1,
    "vitamin_e_mg": 7.7,
    "vitamin_k_ug": 41.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173536",
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
