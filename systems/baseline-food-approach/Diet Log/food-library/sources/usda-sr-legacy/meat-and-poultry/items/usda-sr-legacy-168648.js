/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Beef Products",
  "id": "usda-sr-legacy-168648",
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
      "gramsPerUnit": 231.0,
      "key": "steak",
      "kind": "unit",
      "label": "steak"
    }
  ],
  "name": "Beef, rib, eye, small end (ribs 10- 12) separable lean only, trimmed to 0\" fat, select, cooked, broiled",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 0.0,
    "energy_kcal": 763.0,
    "fat_g": 6.05,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.84,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 242.0,
    "potassium_mg": 392.0,
    "protein_g": 29.9,
    "salt_g": 0.1575,
    "sat_fat_g": 2.3,
    "sodium_mg": 63.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168648",
  "state": "Grilled",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "grilled",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
