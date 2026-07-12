/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup-sifted",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-173425",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "cup-sifted",
      "kind": "unit",
      "label": "cup, sifted"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Egg, whole, dried, stabilized, glucose reduced",
  "nutritionPerBasis": {
    "calcium_mg": 222.0,
    "carbs_g": 2.38,
    "energy_kcal": 2570.0,
    "fat_g": 44.0,
    "fibre_g": 0.0,
    "folate_ug": 193.0,
    "iron_mg": 8.28,
    "magnesium_mg": 49.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 715.0,
    "potassium_mg": 515.0,
    "protein_g": 48.2,
    "salt_g": 1.37,
    "sat_fat_g": 13.2,
    "sodium_mg": 548.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 616.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173425",
  "state": "Dried",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "dried",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
