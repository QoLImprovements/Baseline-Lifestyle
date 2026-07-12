/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "2-oz",
  "description": "Cereal Grains and Pasta",
  "id": "usda-sr-legacy-169733",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "2-oz",
      "kind": "unit",
      "label": "2 oz"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Noodles, egg, spinach, enriched, dry",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 70.3,
    "energy_kcal": 1600.0,
    "fat_g": 4.55,
    "fibre_g": 6.8,
    "folate_ug": 245.0,
    "iron_mg": 4.2,
    "magnesium_mg": 82.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 193.0,
    "potassium_mg": 355.0,
    "protein_g": 14.6,
    "salt_g": 0.18,
    "sat_fat_g": 1.05,
    "sodium_mg": 72.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 315.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169733",
  "state": "Unspecified",
  "subcategory": "Cereal Grains and Pasta",
  "tags": [
    "cereal-grains-and-pasta",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
