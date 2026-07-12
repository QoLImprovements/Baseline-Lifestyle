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
  "id": "usda-sr-legacy-170895",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 107.0,
      "key": "cup-sifted",
      "kind": "unit",
      "label": "cup, sifted"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Egg, white, dried, stabilized, glucose reduced",
  "nutritionPerBasis": {
    "calcium_mg": 101.0,
    "carbs_g": 4.51,
    "energy_kcal": 1500.0,
    "fat_g": 0.32,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.18,
    "magnesium_mg": 82.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 104.0,
    "potassium_mg": 884.0,
    "protein_g": 84.1,
    "salt_g": 3.25,
    "sat_fat_g": 0.118,
    "sodium_mg": 1300.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170895",
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
