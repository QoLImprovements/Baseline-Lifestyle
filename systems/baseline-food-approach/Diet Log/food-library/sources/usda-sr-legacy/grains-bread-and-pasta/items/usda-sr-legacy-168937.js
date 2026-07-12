/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "2-oz",
  "description": "Cereal Grains and Pasta",
  "id": "usda-sr-legacy-168937",
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
    }
  ],
  "name": "Spaghetti, protein-fortified, dry, enriched (n x 6.25)",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 65.6,
    "energy_kcal": 1560.0,
    "fat_g": 2.23,
    "fibre_g": 2.4,
    "folate_ug": 278.0,
    "iron_mg": 4.15,
    "magnesium_mg": 65.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 163.0,
    "potassium_mg": 201.0,
    "protein_g": 21.8,
    "salt_g": 0.02,
    "sat_fat_g": 0.328,
    "sodium_mg": 8.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168937",
  "state": "Unspecified",
  "subcategory": "Cereal Grains and Pasta",
  "tags": [
    "cereal-grains-and-pasta",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
