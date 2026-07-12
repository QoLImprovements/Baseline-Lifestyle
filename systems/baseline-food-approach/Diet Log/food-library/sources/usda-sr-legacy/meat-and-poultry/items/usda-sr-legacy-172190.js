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
  "id": "usda-sr-legacy-172190",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 144.0,
      "key": "egg",
      "kind": "unit",
      "label": "egg"
    }
  ],
  "name": "Egg, goose, whole, fresh, raw",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 1.35,
    "energy_kcal": 775.0,
    "fat_g": 13.3,
    "fibre_g": 0.0,
    "folate_ug": 76.0,
    "iron_mg": 3.64,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 208.0,
    "potassium_mg": 210.0,
    "protein_g": 13.9,
    "salt_g": 0.345,
    "sat_fat_g": 3.6,
    "sodium_mg": 138.0,
    "sugar_g": 0.94,
    "vitamin_a_ug": 187.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.29,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172190",
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
