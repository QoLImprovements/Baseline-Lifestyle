/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "sandwich",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170331",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 199.0,
      "key": "sandwich",
      "kind": "unit",
      "label": "sandwich"
    }
  ],
  "name": "BURGER KING, Original Chicken Sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 26.2,
    "energy_kcal": 286.0,
    "fat_g": 14.7,
    "fibre_g": 2.4,
    "folate_ug": 33.0,
    "iron_mg": 1.79,
    "magnesium_mg": 23.0,
    "omega3_g": 0.654,
    "phosphorus_mg": 128.0,
    "potassium_mg": 196.0,
    "protein_g": 12.1,
    "salt_g": 1.595,
    "sat_fat_g": 2.72,
    "sodium_mg": 638.0,
    "sugar_g": 3.02,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 23.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170331",
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
