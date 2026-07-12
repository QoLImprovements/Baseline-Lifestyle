/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172394",
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
      "gramsPerUnit": 1509.0,
      "key": "chicken",
      "kind": "unit",
      "label": "chicken"
    }
  ],
  "name": "Chicken, roasting, meat and skin and giblets and neck, raw",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.09,
    "energy_kcal": 891.0,
    "fat_g": 15.5,
    "fibre_g": 0.0,
    "folate_ug": 26.0,
    "iron_mg": 1.37,
    "magnesium_mg": 19.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 165.0,
    "potassium_mg": 196.0,
    "protein_g": 17.1,
    "salt_g": 0.1725,
    "sat_fat_g": 4.41,
    "sodium_mg": 69.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 253.0,
    "vitamin_c_mg": 2.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172394",
  "state": "Raw",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
