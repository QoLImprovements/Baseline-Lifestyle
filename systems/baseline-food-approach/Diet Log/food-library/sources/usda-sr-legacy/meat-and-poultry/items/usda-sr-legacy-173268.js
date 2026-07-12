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
  "id": "usda-sr-legacy-173268",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "Fast foods, biscuit, with crispy chicken fillet",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 30.6,
    "energy_kcal": 1260.0,
    "fat_g": 14.9,
    "fibre_g": 1.4,
    "folate_ug": 64.0,
    "iron_mg": 1.76,
    "magnesium_mg": 18.0,
    "omega3_g": 0.21,
    "phosphorus_mg": 355.0,
    "potassium_mg": 206.0,
    "protein_g": 11.9,
    "salt_g": 2.17,
    "sat_fat_g": 5.71,
    "sodium_mg": 868.0,
    "sugar_g": 2.62,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 1.88,
    "vitamin_k_ug": 6.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173268",
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
