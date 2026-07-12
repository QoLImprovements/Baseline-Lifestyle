/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "piece",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-167719",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "cup-diced",
      "kind": "unit",
      "label": "cup, diced"
    },
    {
      "gramsPerUnit": 168.0,
      "key": "cup-pieces",
      "kind": "unit",
      "label": "cup pieces"
    }
  ],
  "name": "Chicken, meatless, breaded, fried",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 8.51,
    "energy_kcal": 979.0,
    "fat_g": 12.8,
    "fibre_g": 4.3,
    "folate_ug": 56.0,
    "iron_mg": 3.83,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 245.0,
    "potassium_mg": 300.0,
    "protein_g": 21.3,
    "salt_g": 1.0,
    "sat_fat_g": 1.13,
    "sodium_mg": 400.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.95,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167719",
  "state": "Fried",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "fried",
    "legumes-and-legume-products",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
