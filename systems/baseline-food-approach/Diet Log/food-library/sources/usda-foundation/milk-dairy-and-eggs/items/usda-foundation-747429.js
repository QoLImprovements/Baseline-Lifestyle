/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Dairy and Egg Products",
  "id": "usda-foundation-747429",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, American, restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 508.0,
    "carbs_g": 6.35,
    "energy_kcal": 375.0,
    "fat_g": 31.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.24,
    "magnesium_mg": 25.0,
    "omega3_g": 0.17,
    "phosphorus_mg": 380.0,
    "potassium_mg": 173.0,
    "protein_g": 17.5,
    "salt_g": 4.0,
    "sat_fat_g": 17.7,
    "sodium_mg": 1600.0,
    "sugar_g": 3.76,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "747429",
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
