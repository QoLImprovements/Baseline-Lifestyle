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
  "id": "usda-sr-legacy-169447",
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
      "gramsPerUnit": 313.0,
      "key": "unit-cooked-yield-from-1-lb-raw-meat",
      "kind": "unit",
      "label": "unit, cooked (yield from 1 lb raw meat)"
    }
  ],
  "name": "Beef, ground, patties, frozen, cooked, broiled",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 295.0,
    "fat_g": 21.8,
    "fibre_g": 0.0,
    "folate_ug": 21.0,
    "iron_mg": 2.42,
    "magnesium_mg": 19.0,
    "omega3_g": 0.064,
    "phosphorus_mg": 174.0,
    "potassium_mg": 305.0,
    "protein_g": 23.0,
    "salt_g": 0.1925,
    "sat_fat_g": 8.8,
    "sodium_mg": 77.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169447",
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
