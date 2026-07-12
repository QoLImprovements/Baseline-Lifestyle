/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "10-pieces",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170725",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "10-pieces",
      "kind": "unit",
      "label": "10 pieces"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "5-pieces",
      "kind": "unit",
      "label": "5 pieces"
    }
  ],
  "name": "WENDY'S, Chicken Nuggets",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 14.3,
    "energy_kcal": 326.0,
    "fat_g": 22.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.62,
    "magnesium_mg": 22.0,
    "omega3_g": 0.776,
    "phosphorus_mg": 271.0,
    "potassium_mg": 250.0,
    "protein_g": 16.5,
    "salt_g": 1.77,
    "sat_fat_g": 4.79,
    "sodium_mg": 708.0,
    "sugar_g": 0.08,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 8.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170725",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
