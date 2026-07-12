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
  "id": "usda-sr-legacy-170753",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 271.0,
      "key": "sandwich",
      "kind": "unit",
      "label": "sandwich"
    }
  ],
  "name": "Fast foods, crispy chicken, bacon, and tomato club sandwich, with cheese, lettuce, and mayonnaise",
  "nutritionPerBasis": {
    "calcium_mg": 92.0,
    "carbs_g": 22.6,
    "energy_kcal": 257.0,
    "fat_g": 11.8,
    "fibre_g": 1.2,
    "folate_ug": 30.0,
    "iron_mg": 1.32,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 224.0,
    "potassium_mg": 256.0,
    "protein_g": 15.4,
    "salt_g": 1.5125,
    "sat_fat_g": 3.37,
    "sodium_mg": 605.0,
    "sugar_g": 4.99,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 8.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170753",
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
