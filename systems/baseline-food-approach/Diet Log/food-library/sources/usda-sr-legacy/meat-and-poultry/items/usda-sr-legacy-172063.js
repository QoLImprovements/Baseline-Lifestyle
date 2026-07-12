/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "burrito",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172063",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 109.0,
      "key": "burrito",
      "kind": "unit",
      "label": "burrito"
    }
  ],
  "name": "McDONALD'S, Sausage Burrito",
  "nutritionPerBasis": {
    "calcium_mg": 132.0,
    "carbs_g": 23.0,
    "energy_kcal": 1160.0,
    "fat_g": 15.6,
    "fibre_g": 1.2,
    "folate_ug": 63.0,
    "iron_mg": 2.28,
    "magnesium_mg": 18.0,
    "omega3_g": 0.26,
    "phosphorus_mg": 168.0,
    "potassium_mg": 150.0,
    "protein_g": 11.1,
    "salt_g": 1.86,
    "sat_fat_g": 6.4,
    "sodium_mg": 744.0,
    "sugar_g": 2.57,
    "vitamin_a_ug": 79.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.94,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172063",
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
