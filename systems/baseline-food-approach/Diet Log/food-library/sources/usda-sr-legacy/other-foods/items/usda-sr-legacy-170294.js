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
  "id": "usda-sr-legacy-170294",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "sandwich",
      "kind": "unit",
      "label": "sandwich"
    }
  ],
  "name": "Fast foods, cheeseburger; single, large patty; plain",
  "nutritionPerBasis": {
    "calcium_mg": 114.0,
    "carbs_g": 24.1,
    "energy_kcal": 1300.0,
    "fat_g": 16.0,
    "fibre_g": 1.7,
    "folate_ug": 62.0,
    "iron_mg": 2.57,
    "magnesium_mg": 24.0,
    "omega3_g": 0.137,
    "phosphorus_mg": 163.0,
    "potassium_mg": 210.0,
    "protein_g": 17.3,
    "salt_g": 1.2025,
    "sat_fat_g": 6.87,
    "sodium_mg": 481.0,
    "sugar_g": 4.67,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 4.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170294",
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
