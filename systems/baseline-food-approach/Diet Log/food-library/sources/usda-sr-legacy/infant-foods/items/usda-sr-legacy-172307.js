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
  "id": "usda-sr-legacy-172307",
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
  "name": "Infant formula, ABBOTT NUTRITION, SIMILAC, PM 60/40, powder not reconstituted",
  "nutritionPerBasis": {
    "calcium_mg": 288.0,
    "carbs_g": 54.9,
    "energy_kcal": 524.0,
    "fat_g": 28.7,
    "fibre_g": 0.0,
    "folate_ug": 77.0,
    "iron_mg": 1.13,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 144.0,
    "potassium_mg": 411.0,
    "protein_g": 11.4,
    "salt_g": 0.3075,
    "sat_fat_g": 12.2,
    "sodium_mg": 123.0,
    "sugar_g": 52.4,
    "vitamin_a_ug": 462.0,
    "vitamin_c_mg": 46.2,
    "vitamin_e_mg": 8.61,
    "vitamin_k_ug": 41.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172307",
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
