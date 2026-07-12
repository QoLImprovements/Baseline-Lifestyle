/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "bar",
  "description": "Snacks",
  "id": "usda-sr-legacy-174794",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Snacks, granola bar, KASHI TLC Bar, chewy, mixed flavors",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 53.3,
    "energy_kcal": 429.0,
    "fat_g": 15.7,
    "fibre_g": 11.4,
    "folate_ug": 45.0,
    "iron_mg": 3.39,
    "magnesium_mg": 107.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 271.0,
    "potassium_mg": 415.0,
    "protein_g": 18.6,
    "salt_g": 0.7325,
    "sat_fat_g": 1.21,
    "sodium_mg": 293.0,
    "sugar_g": 17.1,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 7.14,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174794",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
