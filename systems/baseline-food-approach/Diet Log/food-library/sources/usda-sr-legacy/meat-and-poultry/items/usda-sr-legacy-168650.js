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
  "id": "usda-sr-legacy-168650",
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
      "gramsPerUnit": 77.0,
      "key": "patty",
      "kind": "unit",
      "label": "patty"
    }
  ],
  "name": "Beef, ground, 70% lean meat / 30% fat, patty cooked, pan-broiled",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 0.0,
    "energy_kcal": 238.0,
    "fat_g": 15.5,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 2.41,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 194.0,
    "potassium_mg": 308.0,
    "protein_g": 22.9,
    "salt_g": 0.23,
    "sat_fat_g": 6.08,
    "sodium_mg": 92.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168650",
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
