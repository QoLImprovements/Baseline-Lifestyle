/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "egg",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-172192",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 79.0,
      "key": "egg",
      "kind": "unit",
      "label": "egg"
    }
  ],
  "name": "Egg, turkey, whole, fresh, raw",
  "nutritionPerBasis": {
    "calcium_mg": 99.0,
    "carbs_g": 1.15,
    "energy_kcal": 716.0,
    "fat_g": 11.9,
    "fibre_g": 0.0,
    "folate_ug": 71.0,
    "iron_mg": 4.1,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 170.0,
    "potassium_mg": 142.0,
    "protein_g": 13.7,
    "salt_g": 0.3775,
    "sat_fat_g": 3.63,
    "sodium_mg": 151.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 166.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172192",
  "state": "Raw",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
