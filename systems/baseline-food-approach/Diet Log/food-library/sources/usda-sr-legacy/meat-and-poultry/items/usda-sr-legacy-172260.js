/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172260",
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
      "gramsPerUnit": 170.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    }
  ],
  "name": "Babyfood, dinner, beef and rice, toddler",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 8.8,
    "energy_kcal": 343.0,
    "fat_g": 2.9,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.69,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 35.0,
    "potassium_mg": 120.0,
    "protein_g": 5.0,
    "salt_g": 0.08,
    "sat_fat_g": 0.0,
    "sodium_mg": 32.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 3.9,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172260",
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
