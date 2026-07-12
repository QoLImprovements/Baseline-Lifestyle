/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "jar",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172267",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Babyfood, dinner, vegetables and noodles and turkey, strained",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 6.8,
    "energy_kcal": 184.0,
    "fat_g": 1.2,
    "fibre_g": 1.1,
    "folate_ug": 2.0,
    "iron_mg": 0.19,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 63.0,
    "protein_g": 1.2,
    "salt_g": 0.0525,
    "sat_fat_g": 0.0,
    "sodium_mg": 21.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172267",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
