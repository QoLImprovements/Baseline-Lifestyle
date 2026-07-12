/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "sandwich",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170692",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "sandwich",
      "kind": "unit",
      "label": "sandwich"
    }
  ],
  "name": "Fast foods, cheeseburger; single, regular patty, with condiments and vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 92.0,
    "carbs_g": 25.0,
    "energy_kcal": 1060.0,
    "fat_g": 11.5,
    "fibre_g": 1.4,
    "folate_ug": 42.0,
    "iron_mg": 2.78,
    "magnesium_mg": 22.0,
    "omega3_g": 0.122,
    "phosphorus_mg": 134.0,
    "potassium_mg": 178.0,
    "protein_g": 13.1,
    "salt_g": 1.365,
    "sat_fat_g": 5.18,
    "sodium_mg": 546.0,
    "sugar_g": 5.11,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170692",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
