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
  "id": "usda-foundation-2259792",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Buttermilk, low fat",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 4.81,
    "energy_kcal": 42.8,
    "fat_g": 1.08,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.013,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 92.2,
    "potassium_mg": 158.0,
    "protein_g": 3.46,
    "salt_g": 0.23125,
    "sat_fat_g": 0.552,
    "sodium_mg": 92.5,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2259792",
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
