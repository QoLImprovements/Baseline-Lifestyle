/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "pie",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172049",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1043.0,
      "key": "pie",
      "kind": "unit",
      "label": "pie"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "LITTLE CAESARS 14\" Original Round Meat and Vegetable Pizza, Regular Crust",
  "nutritionPerBasis": {
    "calcium_mg": 167.0,
    "carbs_g": 23.1,
    "energy_kcal": 1020.0,
    "fat_g": 11.4,
    "fibre_g": 2.1,
    "folate_ug": 0.0,
    "iron_mg": 2.11,
    "magnesium_mg": 24.0,
    "omega3_g": 0.149,
    "phosphorus_mg": 207.0,
    "potassium_mg": 195.0,
    "protein_g": 12.1,
    "salt_g": 1.445,
    "sat_fat_g": 4.56,
    "sodium_mg": 578.0,
    "sugar_g": 3.74,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 5.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172049",
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
