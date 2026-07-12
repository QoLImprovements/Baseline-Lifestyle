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
  "id": "usda-sr-legacy-171797",
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
    }
  ],
  "name": "Beef, ground, 80% lean meat / 20% fat, patty, cooked, broiled",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 0.0,
    "energy_kcal": 270.0,
    "fat_g": 17.8,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 2.48,
    "magnesium_mg": 20.0,
    "omega3_g": 0.045,
    "phosphorus_mg": 194.0,
    "potassium_mg": 304.0,
    "protein_g": 25.8,
    "salt_g": 0.1875,
    "sat_fat_g": 6.76,
    "sodium_mg": 75.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171797",
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
