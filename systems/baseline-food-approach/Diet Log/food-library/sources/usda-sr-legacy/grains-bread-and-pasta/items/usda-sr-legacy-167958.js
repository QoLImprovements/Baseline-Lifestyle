/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "2-oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-167958",
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
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Snacks, oriental mix, rice-based",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 51.6,
    "energy_kcal": 506.0,
    "fat_g": 25.6,
    "fibre_g": 13.2,
    "folate_ug": 38.0,
    "iron_mg": 2.44,
    "magnesium_mg": 118.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 262.0,
    "potassium_mg": 328.0,
    "protein_g": 17.3,
    "salt_g": 1.0325,
    "sat_fat_g": 3.78,
    "sodium_mg": 413.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 5.6,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167958",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "grains-bread-and-pasta",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
