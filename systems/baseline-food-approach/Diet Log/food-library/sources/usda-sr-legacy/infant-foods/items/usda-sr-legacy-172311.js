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
  "id": "usda-sr-legacy-172311",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.9,
      "key": "scoop",
      "kind": "unit",
      "label": "scoop"
    }
  ],
  "name": "Infant formula, MEAD JOHNSON, ENFAMIL, ENFACARE, with iron, powder, with ARA and DHA",
  "nutritionPerBasis": {
    "calcium_mg": 600.0,
    "carbs_g": 53.8,
    "energy_kcal": 505.0,
    "fat_g": 26.0,
    "fibre_g": 0.0,
    "folate_ug": 128.0,
    "iron_mg": 8.9,
    "magnesium_mg": 40.0,
    "omega3_g": 0.084,
    "phosphorus_mg": 330.0,
    "potassium_mg": 520.0,
    "protein_g": 13.9,
    "salt_g": 0.46,
    "sat_fat_g": 10.2,
    "sodium_mg": 184.0,
    "sugar_g": 34.0,
    "vitamin_a_ug": 670.0,
    "vitamin_c_mg": 79.0,
    "vitamin_e_mg": 8.9,
    "vitamin_k_ug": 41.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172311",
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
