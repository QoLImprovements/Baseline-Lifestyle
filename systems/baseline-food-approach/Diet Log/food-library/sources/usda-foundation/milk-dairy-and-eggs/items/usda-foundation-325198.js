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
  "id": "usda-foundation-325198",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, pasteurized process, American, vitamin D fortified",
  "nutritionPerBasis": {
    "calcium_mg": 866.0,
    "carbs_g": 5.27,
    "energy_kcal": 1530.0,
    "fat_g": 30.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.48,
    "magnesium_mg": 25.1,
    "omega3_g": 0.177,
    "phosphorus_mg": 540.0,
    "potassium_mg": 149.0,
    "protein_g": 18.0,
    "salt_g": 4.15,
    "sat_fat_g": 18.1,
    "sodium_mg": 1660.0,
    "sugar_g": 2.63,
    "vitamin_a_ug": 300.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.79,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "325198",
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
