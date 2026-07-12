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
  "id": "usda-sr-legacy-173561",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.5,
      "key": "scoop",
      "kind": "unit",
      "label": "scoop"
    }
  ],
  "name": "Infant formula, ABBOTT NUTRITION, SIMILAC, ADVANCE, with iron, powder, not reconstituted",
  "nutritionPerBasis": {
    "calcium_mg": 410.0,
    "carbs_g": 54.7,
    "energy_kcal": 522.0,
    "fat_g": 28.9,
    "fibre_g": 0.0,
    "folate_ug": 79.0,
    "iron_mg": 9.47,
    "magnesium_mg": 32.0,
    "omega3_g": 0.096,
    "phosphorus_mg": 221.0,
    "potassium_mg": 552.0,
    "protein_g": 10.9,
    "salt_g": 0.315,
    "sat_fat_g": 9.87,
    "sodium_mg": 126.0,
    "sugar_g": 54.7,
    "vitamin_a_ug": 473.0,
    "vitamin_c_mg": 47.3,
    "vitamin_e_mg": 5.29,
    "vitamin_k_ug": 42.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173561",
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
