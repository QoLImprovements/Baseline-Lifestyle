/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "strip",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170338",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 53.0,
      "key": "strip",
      "kind": "unit",
      "label": "strip"
    }
  ],
  "name": "POPEYES, Spicy Chicken Strips, analyzed 2006",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 18.5,
    "energy_kcal": 1060.0,
    "fat_g": 11.2,
    "fibre_g": 1.2,
    "folate_ug": 0.0,
    "iron_mg": 1.01,
    "magnesium_mg": 28.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 276.0,
    "potassium_mg": 289.0,
    "protein_g": 19.6,
    "salt_g": 2.4925,
    "sat_fat_g": 4.74,
    "sodium_mg": 997.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170338",
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
