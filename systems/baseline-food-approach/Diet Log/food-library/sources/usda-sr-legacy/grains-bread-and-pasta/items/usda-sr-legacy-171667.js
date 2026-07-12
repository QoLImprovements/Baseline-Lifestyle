/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "0-33-cup",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-171667",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "0-33-cup",
      "kind": "unit",
      "label": "0.33 cup"
    },
    {
      "gramsPerUnit": 94.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cereals, whole wheat hot natural cereal, dry",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 75.2,
    "energy_kcal": 342.0,
    "fat_g": 2.0,
    "fibre_g": 9.5,
    "folate_ug": 78.0,
    "iron_mg": 3.39,
    "magnesium_mg": 122.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 379.0,
    "potassium_mg": 389.0,
    "protein_g": 11.2,
    "salt_g": 0.005,
    "sat_fat_g": 0.3,
    "sodium_mg": 2.0,
    "sugar_g": 0.42,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.31,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171667",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
