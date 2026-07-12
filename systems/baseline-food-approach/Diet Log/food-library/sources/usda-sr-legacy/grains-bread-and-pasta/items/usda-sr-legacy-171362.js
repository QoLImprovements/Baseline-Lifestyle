/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171362",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    }
  ],
  "name": "Babyfood, cereal, oatmeal, with applesauce and bananas, strained",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 15.6,
    "energy_kcal": 312.0,
    "fat_g": 0.89,
    "fibre_g": 0.9,
    "folate_ug": 22.0,
    "iron_mg": 7.5,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 97.0,
    "protein_g": 0.89,
    "salt_g": 0.01,
    "sat_fat_g": 0.125,
    "sodium_mg": 4.0,
    "sugar_g": 8.85,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 13.9,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171362",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
