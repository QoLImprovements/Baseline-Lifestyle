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
  "id": "usda-sr-legacy-173277",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 241.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "Fast foods, burrito, with beans and beef",
  "nutritionPerBasis": {
    "calcium_mg": 90.0,
    "carbs_g": 19.5,
    "energy_kcal": 801.0,
    "fat_g": 7.47,
    "fibre_g": 3.0,
    "folate_ug": 73.0,
    "iron_mg": 1.91,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 163.0,
    "potassium_mg": 269.0,
    "protein_g": 11.5,
    "salt_g": 1.425,
    "sat_fat_g": 2.9,
    "sodium_mg": 570.0,
    "sugar_g": 2.19,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173277",
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
