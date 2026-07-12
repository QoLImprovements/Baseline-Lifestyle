/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "oz",
  "description": "Beef Products",
  "id": "usda-sr-legacy-168606",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Beef, retail cuts, separable fat, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 0.0,
    "energy_kcal": 680.0,
    "fat_g": 70.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.08,
    "magnesium_mg": 6.0,
    "omega3_g": 0.015,
    "phosphorus_mg": 64.0,
    "potassium_mg": 99.0,
    "protein_g": 10.6,
    "salt_g": 0.0575,
    "sat_fat_g": 28.5,
    "sodium_mg": 23.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168606",
  "state": "Cooked",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "cooked",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
