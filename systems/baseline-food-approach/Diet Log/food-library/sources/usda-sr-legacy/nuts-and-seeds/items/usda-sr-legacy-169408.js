/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "cup",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-169408",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Nuts, chestnuts, japanese, dried",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 81.4,
    "energy_kcal": 1510.0,
    "fat_g": 1.24,
    "fibre_g": 0.0,
    "folate_ug": 109.0,
    "iron_mg": 3.38,
    "magnesium_mg": 115.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 169.0,
    "potassium_mg": 768.0,
    "protein_g": 5.25,
    "salt_g": 0.085,
    "sat_fat_g": 0.183,
    "sodium_mg": 34.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 61.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169408",
  "state": "Dried",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "dried",
    "nut-and-seed-products",
    "nuts-and-seeds"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
