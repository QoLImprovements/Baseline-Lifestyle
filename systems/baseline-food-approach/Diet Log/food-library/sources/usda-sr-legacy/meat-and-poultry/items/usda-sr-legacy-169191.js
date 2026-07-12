/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "4-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-169191",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Pork, ground, 72% lean / 28% fat, cooked, crumbles",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 1.39,
    "energy_kcal": 393.0,
    "fat_g": 32.9,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.15,
    "magnesium_mg": 19.0,
    "omega3_g": 0.25,
    "phosphorus_mg": 192.0,
    "potassium_mg": 280.0,
    "protein_g": 22.8,
    "salt_g": 0.235,
    "sat_fat_g": 11.3,
    "sodium_mg": 94.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169191",
  "state": "Cooked",
  "subcategory": "Pork Products",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "pork-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
