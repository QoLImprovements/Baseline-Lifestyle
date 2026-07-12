/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "full-rump-cooked-yield-from-695-g-raw-meat",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172834",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 496.0,
      "key": "full-rump-cooked-yield-from-695-g-raw-meat",
      "kind": "unit",
      "label": "full rump cooked ( yield from 695 g raw meat )"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "serving-3-oz",
      "kind": "unit",
      "label": "serving ( 3 oz )"
    }
  ],
  "name": "Emu, full rump, cooked, broiled",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.0,
    "energy_kcal": 168.0,
    "fat_g": 2.68,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 6.89,
    "magnesium_mg": 34.0,
    "omega3_g": 0.025,
    "phosphorus_mg": 323.0,
    "potassium_mg": 324.0,
    "protein_g": 33.7,
    "salt_g": 0.275,
    "sat_fat_g": 0.87,
    "sodium_mg": 110.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172834",
  "state": "Grilled",
  "subcategory": "Poultry Products",
  "tags": [
    "grilled",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
