/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "item",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173269",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "Fast foods, croissant, with egg, cheese, and bacon",
  "nutritionPerBasis": {
    "calcium_mg": 146.0,
    "carbs_g": 22.5,
    "energy_kcal": 1210.0,
    "fat_g": 16.4,
    "fibre_g": 1.0,
    "folate_ug": 51.0,
    "iron_mg": 1.55,
    "magnesium_mg": 17.0,
    "omega3_g": 0.028,
    "phosphorus_mg": 217.0,
    "potassium_mg": 160.0,
    "protein_g": 12.9,
    "salt_g": 1.505,
    "sat_fat_g": 7.03,
    "sodium_mg": 602.0,
    "sugar_g": 4.8,
    "vitamin_a_ug": 176.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.97,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173269",
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
