/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "serving",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170337",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 222.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "TACO BELL, Nachos Supreme",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 21.4,
    "energy_kcal": 932.0,
    "fat_g": 12.5,
    "fibre_g": 3.7,
    "folate_ug": 14.0,
    "iron_mg": 1.01,
    "magnesium_mg": 33.0,
    "omega3_g": 0.319,
    "phosphorus_mg": 153.0,
    "potassium_mg": 298.0,
    "protein_g": 6.21,
    "salt_g": 0.87,
    "sat_fat_g": 2.55,
    "sodium_mg": 348.0,
    "sugar_g": 1.63,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.75,
    "vitamin_k_ug": 6.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170337",
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
