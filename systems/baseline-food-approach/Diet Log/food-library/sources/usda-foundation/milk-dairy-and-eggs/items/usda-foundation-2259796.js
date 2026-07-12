/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "racc",
  "description": "Dairy and Egg Products",
  "id": "usda-foundation-2259796",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Cheese, feta, whole milk, crumbled",
  "nutritionPerBasis": {
    "calcium_mg": 371.0,
    "carbs_g": 5.58,
    "energy_kcal": 273.0,
    "fat_g": 19.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.068,
    "magnesium_mg": 17.7,
    "omega3_g": 0.0,
    "phosphorus_mg": 328.0,
    "potassium_mg": 105.0,
    "protein_g": 19.7,
    "salt_g": 2.575,
    "sat_fat_g": 11.2,
    "sodium_mg": 1030.0,
    "sugar_g": 1.63,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2259796",
  "state": "Unspecified",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
