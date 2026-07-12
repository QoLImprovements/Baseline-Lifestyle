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
  "id": "usda-sr-legacy-172031",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 111.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "Fast foods, biscuit, with sausage",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 30.0,
    "energy_kcal": 371.0,
    "fat_g": 24.4,
    "fibre_g": 0.4,
    "folate_ug": 49.0,
    "iron_mg": 1.86,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 341.0,
    "potassium_mg": 153.0,
    "protein_g": 9.67,
    "salt_g": 2.035,
    "sat_fat_g": 7.43,
    "sodium_mg": 814.0,
    "sugar_g": 1.59,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.84,
    "vitamin_k_ug": 5.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172031",
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
