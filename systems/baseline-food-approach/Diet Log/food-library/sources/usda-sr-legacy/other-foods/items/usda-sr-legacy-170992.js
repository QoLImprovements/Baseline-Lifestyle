/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "scoop",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-170992",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "scoop",
      "kind": "unit",
      "label": "scoop"
    }
  ],
  "name": "Toddler formula, MEAD JOHNSON, ENFAGROW, Toddler Transitions, with ARA and DHA, powder",
  "nutritionPerBasis": {
    "calcium_mg": 970.0,
    "carbs_g": 52.8,
    "energy_kcal": 505.0,
    "fat_g": 26.9,
    "fibre_g": 0.0,
    "folate_ug": 79.0,
    "iron_mg": 7.4,
    "magnesium_mg": 40.0,
    "omega3_g": 0.084,
    "phosphorus_mg": 650.0,
    "potassium_mg": 650.0,
    "protein_g": 12.9,
    "salt_g": 0.4475,
    "sat_fat_g": 10.9,
    "sodium_mg": 179.0,
    "sugar_g": 33.0,
    "vitamin_a_ug": 450.0,
    "vitamin_c_mg": 60.0,
    "vitamin_e_mg": 4.5,
    "vitamin_k_ug": 45.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170992",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
