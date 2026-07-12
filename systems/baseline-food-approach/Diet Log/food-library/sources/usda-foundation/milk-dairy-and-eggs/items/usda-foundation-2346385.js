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
  "id": "usda-foundation-2346385",
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
  "name": "Cream cheese, full fat, block",
  "nutritionPerBasis": {
    "calcium_mg": 97.1,
    "carbs_g": 4.56,
    "energy_kcal": 343.0,
    "fat_g": 33.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 8.91,
    "omega3_g": 0.0,
    "phosphorus_mg": 108.0,
    "potassium_mg": 125.0,
    "protein_g": 5.79,
    "salt_g": 0.92,
    "sat_fat_g": 19.7,
    "sodium_mg": 368.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2346385",
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
