/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "giblets",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171083",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 157.0,
      "key": "giblets",
      "kind": "unit",
      "label": "giblets"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Turkey, whole, giblets, raw",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 0.07,
    "energy_kcal": 518.0,
    "fat_g": 5.09,
    "fibre_g": 0.0,
    "folate_ug": 331.0,
    "iron_mg": 5.92,
    "magnesium_mg": 22.0,
    "omega3_g": 0.087,
    "phosphorus_mg": 223.0,
    "potassium_mg": 198.0,
    "protein_g": 18.2,
    "salt_g": 0.34,
    "sat_fat_g": 1.45,
    "sodium_mg": 136.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3940.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171083",
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
