/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-174358",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 67.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Veal, variety meats and by-products, liver, cooked, pan-fried",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 4.47,
    "energy_kcal": 807.0,
    "fat_g": 6.51,
    "fibre_g": 0.0,
    "folate_ug": 350.0,
    "iron_mg": 5.98,
    "magnesium_mg": 23.0,
    "omega3_g": 0.039,
    "phosphorus_mg": 483.0,
    "potassium_mg": 353.0,
    "protein_g": 27.4,
    "salt_g": 0.2125,
    "sat_fat_g": 2.11,
    "sodium_mg": 85.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 20100.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174358",
  "state": "Fried",
  "subcategory": "Lamb, Veal, and Game Products",
  "tags": [
    "fried",
    "lamb-veal-and-game-products",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
