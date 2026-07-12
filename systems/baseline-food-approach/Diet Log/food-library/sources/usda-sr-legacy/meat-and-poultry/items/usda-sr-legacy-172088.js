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
  "id": "usda-sr-legacy-172088",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 54.0,
      "key": "strip",
      "kind": "unit",
      "label": "strip"
    }
  ],
  "name": "POPEYES, Mild Chicken Strips, analyzed 2006",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 19.3,
    "energy_kcal": 271.0,
    "fat_g": 13.0,
    "fibre_g": 0.8,
    "folate_ug": 0.0,
    "iron_mg": 0.91,
    "magnesium_mg": 26.0,
    "omega3_g": 0.054,
    "phosphorus_mg": 265.0,
    "potassium_mg": 269.0,
    "protein_g": 19.2,
    "salt_g": 2.305,
    "sat_fat_g": 5.44,
    "sodium_mg": 922.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172088",
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
