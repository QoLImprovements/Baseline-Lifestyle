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
  "id": "usda-sr-legacy-174737",
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
  "name": "Beef, New Zealand, imported, variety meats and by-products, tongue, cooked, boiled",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 3.68,
    "energy_kcal": 1130.0,
    "fat_g": 20.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.52,
    "magnesium_mg": 17.0,
    "omega3_g": 0.232,
    "phosphorus_mg": 157.0,
    "potassium_mg": 189.0,
    "protein_g": 18.3,
    "salt_g": 0.1425,
    "sat_fat_g": 7.02,
    "sodium_mg": 57.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.95,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174737",
  "state": "Boiled",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "boiled",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
