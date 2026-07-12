/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "steak",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-174480",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "steak",
      "kind": "unit",
      "label": "steak"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "serving-3-oz",
      "kind": "unit",
      "label": "serving ( 3 oz )"
    }
  ],
  "name": "Emu, top loin, cooked, broiled",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 0.0,
    "energy_kcal": 638.0,
    "fat_g": 3.13,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 5.07,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 274.0,
    "potassium_mg": 374.0,
    "protein_g": 29.1,
    "salt_g": 0.145,
    "sat_fat_g": 0.794,
    "sodium_mg": 58.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174480",
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
