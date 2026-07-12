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
  "id": "usda-sr-legacy-170341",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 47.0,
      "key": "strip",
      "kind": "unit",
      "label": "strip"
    }
  ],
  "name": "KFC, Crispy Chicken Strips",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 13.7,
    "energy_kcal": 274.0,
    "fat_g": 15.4,
    "fibre_g": 1.4,
    "folate_ug": 0.0,
    "iron_mg": 0.69,
    "magnesium_mg": 33.0,
    "omega3_g": 0.33,
    "phosphorus_mg": 298.0,
    "potassium_mg": 333.0,
    "protein_g": 20.2,
    "salt_g": 2.37,
    "sat_fat_g": 2.89,
    "sodium_mg": 948.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 9.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170341",
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
