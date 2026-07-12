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
  "id": "usda-sr-legacy-168651",
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
      "gramsPerUnit": 70.0,
      "key": "patty",
      "kind": "unit",
      "label": "patty"
    }
  ],
  "name": "Beef, ground, 70% lean meat / 30% fat, patty, cooked, broiled",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 0.0,
    "energy_kcal": 1160.0,
    "fat_g": 18.7,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 2.25,
    "magnesium_mg": 19.0,
    "omega3_g": 0.044,
    "phosphorus_mg": 185.0,
    "potassium_mg": 275.0,
    "protein_g": 25.4,
    "salt_g": 0.2025,
    "sat_fat_g": 7.34,
    "sodium_mg": 81.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168651",
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
