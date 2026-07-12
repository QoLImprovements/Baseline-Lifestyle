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
  "id": "usda-sr-legacy-172028",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "Fast Foods, biscuit, with egg and sausage",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 21.0,
    "energy_kcal": 1300.0,
    "fat_g": 20.8,
    "fibre_g": 0.2,
    "folate_ug": 42.0,
    "iron_mg": 1.9,
    "magnesium_mg": 13.0,
    "omega3_g": 0.059,
    "phosphorus_mg": 312.0,
    "potassium_mg": 149.0,
    "protein_g": 11.1,
    "salt_g": 1.68,
    "sat_fat_g": 6.45,
    "sodium_mg": 672.0,
    "sugar_g": 0.95,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.95,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172028",
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
