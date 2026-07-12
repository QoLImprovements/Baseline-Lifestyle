/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup",
  "description": "Pork Products",
  "id": "usda-sr-legacy-169082",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Pork, oriental style, dehydrated",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 1.4,
    "energy_kcal": 2570.0,
    "fat_g": 62.4,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.5,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 128.0,
    "potassium_mg": 139.0,
    "protein_g": 11.8,
    "salt_g": 1.7125,
    "sat_fat_g": 23.1,
    "sodium_mg": 685.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169082",
  "state": "Dried",
  "subcategory": "Pork Products",
  "tags": [
    "dried",
    "meat-and-poultry",
    "pork-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
