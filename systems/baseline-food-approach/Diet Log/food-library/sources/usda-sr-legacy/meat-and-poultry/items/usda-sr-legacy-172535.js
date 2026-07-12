/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-172535",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Veal, variety meats and by-products, liver, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 3.77,
    "energy_kcal": 192.0,
    "fat_g": 6.26,
    "fibre_g": 0.0,
    "folate_ug": 331.0,
    "iron_mg": 5.11,
    "magnesium_mg": 20.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 460.0,
    "potassium_mg": 329.0,
    "protein_g": 28.4,
    "salt_g": 0.195,
    "sat_fat_g": 1.99,
    "sodium_mg": 78.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 21100.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172535",
  "state": "Cooked",
  "subcategory": "Lamb, Veal, and Game Products",
  "tags": [
    "cooked",
    "lamb-veal-and-game-products",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
